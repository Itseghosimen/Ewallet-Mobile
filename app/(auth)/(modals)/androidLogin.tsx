import { Modal, Pressable } from "react-native";
import React from "react";
import * as LocalAuthentication from "expo-local-authentication";
import { router } from "expo-router";

import { StyledComponent, useColorScheme } from "nativewind";
import { StyledText, StyledTouch, StyledView } from "@/constants/imports";
import { Image } from "expo-image";
import { Colors } from "@/constants/Colors";
import { Shadow } from "react-native-shadow-2";
import { StatusBar } from "expo-status-bar";

type SecurityProps = {
  isVisible: boolean;
  close: () => void;
};

export default function AndroidLogin(props: SecurityProps) {
  const { colorScheme } = useColorScheme();

  const passKey = () => {
    props.close();
  };
  const passManager = () => {
    props.close();
  };

  async function loginPassKey() {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();

    if (!hasHardware) {
    }

    if (!isEnrolled) {
      alert("Create a a passkey for this device.");
      return;
    }

    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: "Authenticate with Biometrics",
      fallbackLabel: "Use Passcode",
    });

    if (result.success) {
      alert("Authentication successful.");
      router.replace("/home");
    } else {
      alert("Authentication failed");
      router.replace("/");
    }
  }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.isVisible}
      onRequestClose={props.close}
    >
      <StatusBar style="auto" />
      <StyledComponent
        component={Pressable}
        className="flex-1 bg-black/60"
        onPress={props.close}
      >
        <StyledView className="flex-1" />
        <StyledView className="min-h-[50vh] pb-5 bg-releiveLight dark:bg-releive rounded-t-3xl pt-2 px-5">
          <StyledView className="h-1 w-10 rounded bg-black dark:bg-primary mx-auto" />

          <Shadow
            distance={4}
            startColor={Colors[colorScheme].innerShadow}
            offset={[0, 1]}
            paintInside={true}
            containerStyle={{
              marginTop: 20,
            }}
            style={{
              borderRadius: 18,
            }}
          >
            <StyledView className="h-16 w-16 rounded-2xl flex items-center justify-center bg-keyChain dark:bg-keyChainDark">
              <Image
                source={require("@/assets/icons/keychain.png")}
                style={{
                  height: 18,
                  width: 40,
                  tintColor: Colors[colorScheme].primary,
                }}
                contentFit="contain"
              />
            </StyledView>
          </Shadow>

          <StyledText
            style={{
              fontFamily: "Inter_600SemiBold",
              fontSize: 30,
              marginTop: 30,
              marginBottom: 25,
              color: Colors[colorScheme].tint,
            }}
          >
            Login
          </StyledText>

          <StyledText
            style={{
              fontFamily: "Inter_500Medium",
              fontSize: 14,
              color: Colors[colorScheme].tint,
            }}
          >
            This login methods will enable you log in into your account
          </StyledText>
          <StyledView className="flex-1" />
          <StyledTouch
            onPress={() => loginPassKey()}
            className="h-14 w-full mt-12 bg-black dark:bg-primary rounded-full flex items-center justify-center"
          >
            <StyledText
              className="text-white dark:text-black"
              style={{
                fontFamily: "Inter_600SemiBold",
                fontSize: 15,
              }}
            >
              Passkey login
            </StyledText>
          </StyledTouch>
          <StyledTouch
            onPress={passManager}
            className="h-14 mt-3 w-full bg-disabledLight dark:bg-disabled rounded-full flex items-center justify-center"
          >
            <StyledText
              className="text-white"
              style={{
                fontFamily: "Inter_500Medium",
                fontSize: 15,
              }}
            >
              Password Managers
            </StyledText>
          </StyledTouch>
        </StyledView>
      </StyledComponent>
    </Modal>
  );
}
