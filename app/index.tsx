import { useState } from "react";
import { Image, ImageBackground } from "expo-image";
import { useColorScheme } from "nativewind";
import * as LocalAuthentication from "expo-local-authentication";
import * as Keychain from "react-native-keychain";
import * as Crypto from "expo-crypto";
// import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";
// import { createNexusClient, NexusClient } from "@biconomy/sdk";
// import { baseSepolia } from "viem/chains";
// import { http } from "viem";
// import {
//   toWebAuthnKey,
//   toPasskeyValidator,
//   WebAuthnMode,
// } from "@biconomy/passkey";

import Button from "@/components/general/Buttons/Button";
import { StyledText, StyledTouch, StyledView } from "@/constants/imports";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";
import { Dimensions, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import AccountRecovery from "./(auth)/(modals)/accountRecovery";
import AndroidLogin from "./(auth)/(modals)/androidLogin";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BUNDLER_URL =
  "https://bundler.biconomy.io/api/v3/84532/nJPK7B3ru.dd7f7861-190d-41bd-af80-6877f74b8f44";

export default function Page() {
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

  async function generatePasskey() {
    const digest = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      "GitHub stars are neat 🌟"
    );
    console.log("Digest: ", digest);
    const passkey = "Passkey-" + Math.random().toString(36).substring(2, 15);
    return passkey;
  }

  async function createPassKey() {
    const hasBiometrics = await LocalAuthentication.hasHardwareAsync();

    if (!hasBiometrics) {
      console.log("Biometric authentication is not available");
      return;
    }

    try {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: "Sign in with Biometrics",
        fallbackLabel: "Use Passcode",
      });

      if (result.success) {
        const passkey = await generatePasskey();
        await savePasskeyToSecureStorage(passkey);
        console.log("User authenticated successfully!");
      } else {
        console.log("Authentication failed");
      }
    } catch (error) {
      console.error("Authentication error:", error);
    }
  }

  async function savePasskeyToSecureStorage(passkey: string) {
    try {
      await Keychain.setGenericPassword("passkey", passkey);
      alert("Passkey saved securely to Keychain!");
    } catch (error) {
      console.log(error);
      alert("Error saving passkey to Keychain");
    }
  }

  async function getPasskeyFromSecureStorage() {
    try {
      const credentials = await Keychain.getGenericPassword();
      if (credentials) {
        console.log("Passkey retrieved:", credentials.password);
        return credentials.password;
      }
      return null;
    } catch (error) {
      console.log("Error retrieving passkey", error);
      return null;
    }
  }

  // -------------------------------------------------------------------------

  // Initialize nexus client
  // async function initNexusClient() {
  //   const privateKey = generatePrivateKey();
  //   const account = privateKeyToAccount(`0x${privateKey}`);

  //   const nexusClient = await createNexusClient({
  //     signer: account,
  //     chain: baseSepolia,
  //     transport: http(),
  //     bundlerTransport: http(BUNDLER_URL),
  //   });

  //   await AsyncStorage.setItem("@userNexusClient", JSON.stringify(nexusClient));

  //   return { nexusClient, privateKey };
  // }

  // Register passkey
  // async function registerPasskey(
  //   nexusClient: NexusClient,
  //   passkeyName: string
  // ) {
  //   // Create WebAuthn key
  //   const webAuthnKey = await toWebAuthnKey({
  //     passkeyName: passkeyName,
  //     mode: WebAuthnMode.Register,
  //   });

  //   // Create passkey validator
  //   const passkeyValidator = await toPasskeyValidator({
  //     account: nexusClient.account,
  //     webAuthnKey,
  //   });

  //   // Store webAuthnKey for future use
  //   const formattedWebAuthnKey = {
  //     pubX: webAuthnKey.pubX.toString(),
  //     pubY: webAuthnKey.pubY.toString(),
  //     authenticatorId: webAuthnKey.authenticatorId,
  //     authenticatorIdHash: webAuthnKey.authenticatorIdHash,
  //   };
  //   await AsyncStorage.setItem(
  //     "@webAuthnKey",
  //     JSON.stringify(formattedWebAuthnKey)
  //   );

  //   return passkeyValidator;
  // }

  // async function createAccount() {
  //   try {
  //     const { nexusClient, privateKey } = await initNexusClient();
  //     await registerPasskey(nexusClient, privateKey);
  //     alert("Error creating account");
  //   } catch (e) {
  //     alert("Error creating account");
  //   }
  // }

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
            onPress={async () => await generatePasskey()}
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
