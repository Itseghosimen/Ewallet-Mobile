import { useState, useEffect, useCallback } from "react";
import { useAsyncStorage as _useAsyncStorage } from "@react-native-async-storage/async-storage";

export function useAsyncStorage<T>(key: string, initialValue?: T) {
  const [storedValue, setStoredValue] = useState<T | undefined>(undefined);
  const { getItem, setItem } = _useAsyncStorage(key);

  const readItemFromStorage = useCallback(async () => {
    const item = await getItem();
    const value = item ? JSON.parse(item) : initialValue;
    setStoredValue(value);
  }, [key, initialValue, getItem]);

  async function writeItemToStorage(value: T | ((val: T | undefined) => T)) {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    await setItem(JSON.stringify(valueToStore));
    setStoredValue(valueToStore);
  }

  useEffect(() => {
    readItemFromStorage();
  }, [key, readItemFromStorage]);

  return [storedValue, writeItemToStorage] as const;
}
