import { useState, useEffect, useCallback, useMemo } from "react";
import { Image, ImageBackground } from "expo-image";
import { useColorScheme } from "nativewind";
import { StyledText, StyledTouch, StyledView } from "@/constants/imports";
import { router } from "expo-router";
import { Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
import { BackupMethods, Portal } from "@portal-hq/core";
import { PasswordStorage } from "@portal-hq/utils/src/definitions";
import Keychain from "@portal-hq/keychain";
import { PasskeyStorage } from "@portal-hq/passkey-storage";

import AccountRecovery from "./(auth)/(modals)/accountRecovery";
import AndroidLogin from "./(auth)/(modals)/androidLogin";
import Button from "@/components/general/Buttons/Button";

import { Colors } from "@/constants/Colors";
import { MpcStatus } from "@portal-hq/utils";

const PORTAL_APIKEY = "3091dcf9-6480-4f25-96f1-faf2e39877b1";
const ALCHEMY_API_KEY = "bbQj1fCez4ikxdeCCWjE3vEjg3wkDxDA";
const SEPOLIA_CHAIN_ID = "eip155:11155111";

const APK_KEYSTORE =
  "android:apk-key-hash:14:4F:89:FD:AC:AC:04:90:01:CB:0D:B4:53:71:E2:E0:A0:A1:63:37:98:18:B2:97:13:07:C0:A6:EF:0B:90:00";

export default function wwelcome() {
  const { colorScheme } = useColorScheme();
  const layout = Dimensions.get("window");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isRecovery, setIsRecovery] = useState<boolean>(false);
  const [portalInstance, setPortalInstance] = useState<Portal | null>(null);
  const [isWalletCreating, setIsWalletCreating] = useState<"idle" | "loading">(
    "idle"
  );

  const passkeyStorage = new PasskeyStorage({
    relyingParty: APK_KEYSTORE,
  });

  const backupOptions = {
    [BackupMethods.Passkey]: passkeyStorage,
  };
  const keychain = new Keychain();

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

  const handleInitializePortal = useCallback(() => {
    setPortalInstance(
      new Portal({
        autoApprove: true,
        apiKey: PORTAL_APIKEY,
        backup: backupOptions,
        gatewayConfig: {
          [SEPOLIA_CHAIN_ID]: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
        },
        keychain: keychain,
      })
    );
  }, []);

  useEffect(() => {
    handleInitializePortal();
  }, [handleInitializePortal]);

  useEffect(() => {
    const checkExistingWallet = async () => {
      try {
        const addresses = await portalInstance?.addresses;
        const eip155Address = addresses?.eip155;

        if (eip155Address) {
          await AsyncStorage.setItem("@user-address-eip", eip155Address);
          // router.push("/");
          // console.log("✅ Existing wallet found:", eip155Address);
        }
      } catch (error) {
        // console.error("Error checking existing wallet:", error);
      }
    };

    if (portalInstance) {
      checkExistingWallet();
    }
  }, [portalInstance]);

  const backupProgress = useMemo(
    () => (status: MpcStatus) => {
      console.log(status);
    },
    []
  );

  async function createAccount() {
    if (!portalInstance) return;

    const address = await AsyncStorage.getItem("@user-address-eip");

    const res = await portalInstance.backup.passkey?.validateOperations();

    console.log(res);

    if (address) {
      const res = await portalInstance.backupWallet(
        BackupMethods.Passkey,
        backupProgress
      );

      console.log(res);

      Toast.show({
        type: "info",
        text1: "You have created an account.",
        text2: "Please, Login.",
        position: "bottom",
      });

      return;
    }

    setIsWalletCreating("loading");

    try {
      const wallet = await portalInstance.createWallet();
      await AsyncStorage.setItem("@user-address-eip", wallet?.eip155);
      Toast.show({
        type: "success",
        text1: "Account created.",
        position: "bottom",
      });
      router.push("/walletGenerated");
    } catch (e) {
      console.log(e);
    } finally {
      setIsWalletCreating("idle");
    }
  }

  async function login() {
    if (!portalInstance) return;

    const address = await AsyncStorage.getItem("@user-address-eip");

    if (address) {
      Toast.show({
        type: "error",
        text1: "You are yet to create an account",
        position: "bottom",
      });
      return;
    }

    await createAccount();
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
          {/* <Button
            // onPress={() => router.push("/generateKeys")}
            onPress={() => createAccount()}
            style={
              "bg-black dark:bg-primary h-14 rounded-full max-w-[60vw] w-full justify-center"
            }
            textStyle={"text-white text-sm dark:text-black font-bold"}
            title={
              isWalletCreating
                ? "Creating Wallet..."
                : "Passkey Account Creation"
            }
          /> */}

          {/* <Button
            onPress={deviceLogin}
            textStyle={"text-white text-sm dark:text-white font-bold"}
            style={
              "bg-disabledLight dark:bg-disabled h-14 rounded-full max-w-[30vw] w-full justify-center"
            }
            title={"Login"}
          /> */}

          <StyledTouch
            onPress={() => createAccount()}
            disabled={isWalletCreating === "loading"}
            className="bg-black dark:bg-primary h-14 rounded-full max-w-[60vw] w-full justify-center"
          >
            <StyledText className="text-white dark:text-black text-center">
              {isWalletCreating === "loading"
                ? "Creating Wallet..."
                : "Passkey Account Creation"}
            </StyledText>
          </StyledTouch>

          <StyledTouch
            onPress={deviceLogin}
            disabled={isWalletCreating === "loading"}
            className="bg-disabledLight dark:bg-disabled h-14 rounded-full max-w-[30vw] w-full justify-center"
          >
            <StyledText className="text-white text-sm dark:text-white font-bold text-center">
              Login
            </StyledText>
          </StyledTouch>
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
