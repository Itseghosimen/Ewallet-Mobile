import { useState } from "react";
import { Image, ImageBackground } from "expo-image";
import { useColorScheme } from "nativewind";
import * as LocalAuthentication from "expo-local-authentication";

import Button from "@/components/general/Buttons/Button";
import { StyledText, StyledTouch, StyledView } from "@/constants/imports";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";
import { Dimensions, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import AccountRecovery from "./(auth)/(modals)/accountRecovery";
import AndroidLogin from "./(auth)/(modals)/androidLogin";

export default function Welcome() {
  const { colorScheme } = useColorScheme();
  const layout = Dimensions.get("window");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isRecovery, setIsRecovery] = useState<boolean>(false);

  const deviceLogin = () => {
    // if (Platform.OS === 'android') {
    //Openning Modal
    setIsVisible(true);
    // } else {
    // perform apple login with icloud
    // }
  };

  const requestClose = () => {
    setIsVisible(false);
    setIsRecovery(false);
  };

  async function createPassKey() {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();

    if (!hasHardware) {
      alert("Biometric authentication is not available on this device");
      return;
    }

    if (isEnrolled) {
      alert("You already have a passkey.");
      return;
    }

    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: "Authenticate with Biometrics",
      fallbackLabel: "Use Passcode",
    });

    if (result.success) {
      alert("Authentication successful");
      router.replace("/generateKeys");
    } else {
      alert("Authentication failed");
    }
  }

  return (
    <StyledView className="px-3 pb-5 flex-1 gap-6 bg-white dark:bg-background">
      <StatusBar style="auto" />
      <StyledView>
        {colorScheme == "light" ? (
          <ImageBackground
            source={require("@/assets/images/handfull-light.png")}
            transition={500}
            style={{
              height: layout.height * 0.35,
              width: layout.width,
            }}
            contentFit="contain"
          />
        ) : (
          <ImageBackground
            source={require("@/assets/images/handfull.png")}
            transition={500}
            style={{
              height: layout.height * 0.35,
              width: layout.width,
            }}
            contentFit="contain"
          />
        )}
      </StyledView>
      <StyledView>
        <Image
          source={require("@/assets/images/cryptoText.png")}
          style={[
            {
              height: layout.height * 0.2,
              width: layout.width,
            },
            colorScheme === "light" && {
              tintColor: "black",
            },
          ]}
          contentFit="contain"
        />
      </StyledView>
      <StyledView>
        <StyledText
          className="text-center text-light-text dark:text-dark-text text-[14.5px] leading-6"
          style={{
            fontFamily: "Inter_400Regular",
          }}
        >
          Over 10,000+ Coins in your pocket{"\n"}
          Send, Receive, Pay, Exchange different currencies {"\n"} Anytime,
          Anywhere
        </StyledText>
      </StyledView>
      <StyledView className="flex-1 justify-evenly">
        <StyledView className="flex-row items-center justify-between">
          <Button
            // onPress={() => router.push("/generateKeys")}
            onPress={() => createPassKey()}
            style={
              "bg-black dark:bg-primary h-14 rounded-full max-w-[60vw] w-full justify-center"
            }
            textStyle={"text-white text-sm dark:text-black font-bold"}
            title={"Passkey Account Creation"}
          />
          <Button
            onPress={deviceLogin}
            textStyle={"text-white text-sm dark:text-white font-bold"}
            style={
              "bg-disabledLight dark:bg-disabled h-14 rounded-full max-w-[30vw] w-full justify-center"
            }
            title={"login"}
          />
        </StyledView>

        <StyledView className="gap-1 justify-center pt-5 items-center">
          <StyledView className="flex-row items-center justify-center gap-3">
            <StyledTouch className="border border-black dark:border-primary/40 h-11 w-11 flex items-center justify-center rounded-xl">
              <Image
                source={require("@/assets/icons/google.png")}
                style={{
                  height: 30,
                  width: 30,
                }}
              />
            </StyledTouch>

            <StyledTouch
              // onPress={() => router.push('/profile')}
              className="border border-black dark:border-primary/40 h-11 w-11 flex items-center justify-center rounded-xl"
            >
              <Image
                source={require("@/assets/icons/apple.png")}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: Colors[colorScheme].tint,
                }}
              />
            </StyledTouch>
          </StyledView>
        </StyledView>
      </StyledView>
      <StyledView className="flex-row items-center justify-center mb-5">
        <Button
          title={"Recover Account"}
          textStyle={"text-sm text-black dark:text-white"}
          onPress={() => setIsRecovery(true)}
        />
      </StyledView>
      <AndroidLogin isVisible={isVisible} close={requestClose} />
      <AccountRecovery isVisible={isRecovery} close={requestClose} />
    </StyledView>
  );
}
