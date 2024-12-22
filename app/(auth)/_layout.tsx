import React from "react";
import { Stack } from "expo-router";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
      <Stack.Screen name="(pin)" options={{ headerShown: false }} />
      <Stack.Screen name="(modals)" options={{ headerShown: false }} />
      <Stack.Screen name="(loginQRCode)" options={{ headerShown: false }} />
      <Stack.Screen name="(retrival)" options={{ headerShown: false }} />
    </Stack>
  );
}
