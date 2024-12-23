import { StyledText, StyledTouch, StyledView } from "@/constants/imports";
import { Image } from "expo-image";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function securitySetup() {
  const activateSecurity = () => {};
  return (
    <StyledView className="flex-1 bg-white dark:bg-background px-3 pb-10">
      <StatusBar style="auto" />
      <StyledView
        className="flex items-center my-auto"
        style={{
          gap: 30,
        }}
      >
        <Image
          source={require("@/assets/images/face.png")}
          contentFit="contain"
          style={{
            height: 100,
            width: 100,
          }}
        />
        <StyledText
          className="text-black dark:text-white text-xl"
          style={{
            fontFamily: "Inter_600SemiBold",
          }}
        >
          Enable Face ID
        </StyledText>
        <StyledText className="text-secondary text-sm text-center">
          Enable face ID to easily facilitate more {"\n"} convenient Login
          verifications, {"\n"} complete transactions
        </StyledText>
      </StyledView>
      <StyledView>
        <StyledTouch
          onPress={activateSecurity}
          className="h-14 mb-5 w-full bg-black dark:bg-primary rounded-full flex items-center justify-center"
        >
          <StyledText
            className="text-white dark:text-black text-base "
            style={{
              fontFamily: "Inter_600SemiBold",
            }}
          >
            Activate Now
          </StyledText>
        </StyledTouch>
        <StyledTouch
          onPress={() => router.push("/createPin")}
          className="flex items-center justify-center"
        >
          <StyledText
            className="text-secondary text-base"
            style={{
              fontFamily: "Inter_500Medium",
            }}
          >
            Activate Later
          </StyledText>
        </StyledTouch>
      </StyledView>
    </StyledView>
  );
}
