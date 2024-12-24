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
import { useEffect, useState, useRef } from "react";
import { NativeWindStyleSheet, useColorScheme } from "nativewind";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Appearance, AppState } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useAsyncStorage } from "@/hooks/useAsyncStorage";
import type { AutolockType } from "@/types/hooks";

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

  // const [autolockType] = useAsyncStorage<AutolockType>(
  //   "@autolock",
  //   "immediately"
  // );

  // const appState = useRef(AppState.currentState);

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
