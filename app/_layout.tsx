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
import { Appearance } from "react-native";
import { useEffect, useState } from "react";
import * as LocalAuthentication from "expo-local-authentication";

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { colorScheme } = useColorScheme();
  const [session, setSession] = useState(false);
  const [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  console.log(fontError);

  useEffect(() => {
    if (fontsLoaded && fontError) {
      Appearance.setColorScheme(colorScheme);
      // SplashScreen.hideAsync();
    }
    if (session) {
      router.navigate("/home");
    }
  }, [fontsLoaded, fontError]);

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
