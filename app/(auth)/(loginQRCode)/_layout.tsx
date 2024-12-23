import React from "react";
import { router, Stack } from "expo-router";
import { StyledText, StyledTouch } from "@/constants/imports";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "nativewind";
import { Image } from "expo-image";

export default function _layout() {
  const { colorScheme } = useColorScheme();
  return (
    <Stack
      screenOptions={{
        headerTitleStyle: {
          fontFamily: "Inter_700Bold",
          color: Colors[colorScheme].tint,
          fontSize: 15,
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="loginUserName"
        options={{
          title: "",
          headerBackTitle: "",
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
        name="scanQRCode"
        options={{
          title: "",
          headerBackTitle: "",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Colors[colorScheme].background },
          headerLeft: () => (
            <StyledTouch
              onPress={router.back}
              className="flex flex-row items-center"
            >
              <Image
                source={require("@/assets/icons/back-arrow.png")}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: Colors[colorScheme].tint,
                }}
              />
              <StyledText
                style={{
                  fontFamily: "Inter_700Bold",
                  fontSize: 16,
                  color: Colors[colorScheme].tint,
                  marginLeft: 15,
                }}
              >
                Scan
              </StyledText>
            </StyledTouch>
          ),
        }}
      />

      <Stack.Screen
        name="importedAsset"
        options={{
          title: "",
          headerBackTitle: "",
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
        name="decryptingKey"
        options={{
          title: "Decrypt your QR code",
          headerBackTitle: "",
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
        name="otpVerify"
        options={{
          title: "",
          headerBackTitle: "Verification code",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Colors[colorScheme].background },
          headerLeft: () => (
            <StyledText
              style={{
                fontFamily: "Inter_700Bold",
                fontSize: 17,
                color: Colors[colorScheme].tint,
              }}
            >
              Verification code
            </StyledText>
          ),
          headerRight: () => (
            <StyledTouch onPress={router.back} className="mr-2">
              <Image
                source={require("@/assets/icons/times.png")}
                style={{
                  height: 15,
                  width: 15,
                  tintColor: Colors[colorScheme].tint,
                }}
              />
            </StyledTouch>
          ),
        }}
      />

      <Stack.Screen
        name="restoreWallet"
        options={{
          title: "",
          headerBackTitle: "",
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
