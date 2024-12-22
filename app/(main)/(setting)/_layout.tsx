import { Colors } from "@/constants/Colors";
import { StyledTouch } from "@/constants/imports";
import { Image } from "expo-image";
import { Stack, router } from "expo-router";
import { useColorScheme } from "nativewind";
import React from "react";

export default function SettingsLayout() {
  const { colorScheme } = useColorScheme();
  return (
    <Stack
      screenOptions={{
        headerTitleStyle: {
          fontFamily: "Inter_700Bold",
        },
      }}
    >
      <Stack.Screen
        name="settings"
        options={{
          title: "Settings",
          headerBackTitle: "",
          headerTitleStyle: {
            fontSize: 17,
            color: Colors[colorScheme].tint,
          },
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Colors[colorScheme].background },
          headerLeft: () => (
            <StyledTouch onPress={router.back}>
              <Image
                source={require("@/assets/icons/back-arrow.png")}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: Colors[colorScheme].tint,
                }}
              />
            </StyledTouch>
          ),
        }}
      />
      <Stack.Screen
        name="appSettings"
        options={{
          title: "App Settings",
          headerBackTitle: "",
          headerTitleStyle: {
            fontSize: 17,
            color: Colors[colorScheme].tint,
          },
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Colors[colorScheme].background },
          headerLeft: () => (
            <StyledTouch onPress={router.back}>
              <Image
                source={require("@/assets/icons/back-arrow.png")}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: Colors[colorScheme].tint,
                }}
              />
            </StyledTouch>
          ),
        }}
      />
      <Stack.Screen
        name="security"
        options={{
          title: "Security",
          headerBackTitle: "",
          headerTitleStyle: {
            fontSize: 17,
            color: Colors[colorScheme].tint,
          },
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Colors[colorScheme].background },
          headerLeft: () => (
            <StyledTouch onPress={router.back}>
              <Image
                source={require("@/assets/icons/back-arrow.png")}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: Colors[colorScheme].tint,
                }}
              />
            </StyledTouch>
          ),
        }}
      />
      <Stack.Screen
        name="about"
        options={{
          title: "About",
          headerBackTitle: "",
          headerTitleStyle: {
            fontSize: 17,
            color: Colors[colorScheme].tint,
          },
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Colors[colorScheme].background },
          headerLeft: () => (
            <StyledTouch onPress={router.back}>
              <Image
                source={require("@/assets/icons/back-arrow.png")}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: Colors[colorScheme].tint,
                }}
              />
            </StyledTouch>
          ),
        }}
      />
    </Stack>
  );
}
