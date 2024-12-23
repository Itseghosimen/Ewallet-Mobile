import { router, Stack } from "expo-router";
// import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { NativeWindStyleSheet, useColorScheme } from "nativewind";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Appearance, AppState } from "react-native";
import { useEffect, useState, useRef } from "react";
import * as LocalAuthentication from "expo-local-authentication";
import { useAsyncStorage } from "@/hooks/useAsyncStorage";
import type { AutolockType } from "@/types/hooks";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

/**
 * Base lock time of one minute.
 */
const LOCK_TIME = 60000;

export default function RootLayout() {
  const { colorScheme } = useColorScheme();
  const [session, setSession] = useState(false);
  const [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });
  const [autolockType] = useAsyncStorage<AutolockType>("autolock");

  const appState = useRef(AppState.currentState);

  //* EFFECTS
  useEffect(() => {
    if (fontsLoaded && fontError) {
      Appearance.setColorScheme(colorScheme);
      // SplashScreen.hideAsync();
    }
    if (session) {
      router.navigate("/home");
    }
  }, [fontsLoaded, fontError]);

  async function startLocktime() {
    return AsyncStorage.setItem("lockTime", Date.now().toString());
  }

  //* Appstate listener for inactivity or background state
  useEffect(() => {
    const subscription = AppState.addEventListener(
      "change",
      async (nextAppState) => {
        const isCompatible = await LocalAuthentication.hasHardwareAsync();
        const isEnrolled = await LocalAuthentication.isEnrolledAsync();

        if (isEnrolled && isCompatible) {
          if (nextAppState === "background") {
            await startLocktime();
          } else if (
            appState.current.match(/inactive|background/) &&
            nextAppState === "active"
          ) {
            const elapsedTime =
              Date.now() -
              parseInt((await AsyncStorage.getItem("lockTime")) || "0");

            if (!autolockType || autolockType === "immediately") {
              router.push("/(auth)/(lock)/lock");
              return;
            }

            if (elapsedTime > LOCK_TIME) {
              if (autolockType === "1 minute" && elapsedTime < LOCK_TIME * 5) {
                router.push("/(auth)/(lock)/lock");
              }
              if (
                autolockType === "5 minutes" &&
                elapsedTime < LOCK_TIME * 30
              ) {
                router.push("/(auth)/(lock)/lock");
              }
              if (
                autolockType === "30 minutes" &&
                elapsedTime > LOCK_TIME * 30
              ) {
                router.push("/(auth)/(lock)/lock");
              }
            }
            return;
          }
        }

        appState.current = nextAppState;
      }
    );

    return () => {
      subscription.remove();
    };
  }, []);

  //* Check for passkey authentication
  useEffect(() => {
    async function checkPasskey() {
      const isCompatible = await LocalAuthentication.hasHardwareAsync();
      const isEnrolled = await LocalAuthentication.isEnrolledAsync();

      if (!isCompatible) return;

      if (isEnrolled) {
        await LocalAuthentication.authenticateAsync({
          promptMessage: "Authenticate with Biometrics",
          fallbackLabel: "Use Passcode",
        });
        return;
      }
    }
    checkPasskey();
  });

  NativeWindStyleSheet.setOutput({
    default: "native",
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(main)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
