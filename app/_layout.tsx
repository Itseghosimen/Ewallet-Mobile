import { router, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold
} from '@expo-google-fonts/inter';
import { NativeWindStyleSheet, useColorScheme } from 'nativewind';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Appearance } from 'react-native';
import { useEffect, useState } from 'react';


// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();



export default function RootLayout() {
  const { colorScheme } = useColorScheme();
  const [session, setSession] = useState(false)
  const [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded && fontError) {
      Appearance.setColorScheme(colorScheme)
      // SplashScreen.hideAsync();
    }
    if (session) {
      router.navigate('/home')
    }
  }, [fontsLoaded, fontError])




  NativeWindStyleSheet.setOutput({
    default: "native",
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(main)" options={{ headerShown: false }} />
        <Stack.Screen name='(auth)' options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
