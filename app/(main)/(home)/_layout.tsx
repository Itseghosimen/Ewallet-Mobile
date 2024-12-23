// import Button from "@/components/general/Buttons/Button";
import { Colors } from "@/constants/Colors";
import { StyledTouch, StyledView } from "@/constants/imports";
import { Image } from "expo-image";
import { Stack, router } from "expo-router";
import { useColorScheme } from "nativewind";
import React from "react";

export default function HomeLayout() {
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
        name="transaction"
        options={{
          title: "Transactions",
          headerBackTitle: "",
          headerTitleStyle: {
            fontSize: 18,

            color: Colors[colorScheme].tint,
          },
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Colors[colorScheme].background,
          },
          headerRight: () => (
            <StyledView className="flex-row items-center" style={{ gap: 20 }}>
              <StyledTouch>
                <Image
                  source={require("@/assets/icons/calender.png")}
                  contentFit="contain"
                  style={{
                    height: 20,
                    width: 20,
                    tintColor: Colors[colorScheme].tint,
                  }}
                />
              </StyledTouch>
              <StyledTouch>
                <Image
                  source={require("@/assets/icons/funnel.png")}
                  contentFit="contain"
                  style={{
                    height: 20,
                    width: 20,
                    tintColor: Colors[colorScheme].tint,
                  }}
                />
              </StyledTouch>
            </StyledView>
          ),
          headerLeft: () => (
            <StyledTouch onPress={router.back}>
              <Image
                source={require("@/assets/icons/back-arrow.png")}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: Colors[colorScheme].tint,
                  marginRight: 10,
                }}
              />
            </StyledTouch>
          ),
        }}
      />
    </Stack>
  );
}
