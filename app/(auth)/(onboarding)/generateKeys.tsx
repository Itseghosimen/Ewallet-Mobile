import React from "react";
import { StyledText, StyledView } from "@/constants/imports";
import { router } from "expo-router";
import { Image } from "expo-image";
import * as Progress from "react-native-progress";
import { Dimensions } from "react-native";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "nativewind";
import { StatusBar } from "expo-status-bar";

export default function generateKeys() {
  const [progress, setProgress] = React.useState<number>(0);
  const layout = Dimensions.get("window").width;
  const { colorScheme } = useColorScheme();

  React.useEffect(() => {
    function updateProgress() {
      setProgress((currentProgress) => {
        if (currentProgress < 1 && currentProgress < 1.01) {
          setTimeout(updateProgress, 500);
        } else if (currentProgress >= 1.0) {
          setTimeout(() => {
            router.replace("/walletGenerated");
          }, 500);
        }
        return currentProgress + 0.009;
      });
    }
    updateProgress();
  }, []);

  return (
    <StyledView className="flex-1 bg-white dark:bg-background pt-20">
      <StatusBar style="auto" />
      <StyledView className="h-[40vh] flex items-center justify-center">
        {Math.round(progress * 100) >= 0 && Math.round(progress * 100) <= 25 ? (
          <Image
            source={require("@/assets/images/imageone.png")}
            contentFit="contain"
            transition={500}
            style={{
              height: "80%",
              width: "100%",
            }}
          />
        ) : Math.round(progress * 100) >= 25 &&
          Math.round(progress * 100) <= 50 ? (
          <Image
            source={require("@/assets/images/imagetwo.png")}
            contentFit="contain"
            transition={500}
            style={{
              height: "80%",
              width: "100%",
              marginLeft: "auto",
            }}
          />
        ) : Math.round(progress * 100) >= 50 &&
          Math.round(progress * 100) <= 75 ? (
          <Image
            source={require("@/assets/images/imagethree.png")}
            contentFit="contain"
            transition={500}
            style={{
              height: "80%",
              width: "100%",
            }}
          />
        ) : (
          <Image
            source={require("@/assets/images/imagefour.png")}
            contentFit="contain"
            transition={500}
            style={{
              height: "80%",
              width: "100%",
            }}
          />
        )}
      </StyledView>

      <StyledView className="mt-16">
        <StyledText
          className="text-xl text-black dark:text-white text-center"
          style={{
            fontFamily: "Inter_700Bold",
          }}
        >
          {Math.round(progress * 100) >= 0 && Math.round(progress * 100) <= 25
            ? "Generating Your Keys"
            : Math.round(progress * 100) >= 25 &&
              Math.round(progress * 100) <= 50
            ? "Verifying Your Wallet"
            : Math.round(progress * 100) >= 50 &&
              Math.round(progress * 100) <= 75
            ? "Encrypting Your Wallet keys"
            : "Wallet Is Almost Ready"}
        </StyledText>
        <StyledText
          className="text-sm text-secondary text-center max-w-[90vw] leading-5 tracking-wide mx-auto mt-5"
          style={{
            fontFamily: "Inter_400Regular",
          }}
        >
          The encryption and security verification of your wallet is successful,
          Your smart wallet is currently being created to offer you the best
          user experience
        </StyledText>
      </StyledView>
      <StyledView className="flex-1" />
      <StyledView className="px-3 pb-5 items-center">
        <StyledView className="flex-row items-center justify-center flex-wrap">
          <StyledText
            className="text-secondary text-[13px]"
            style={{
              fontFamily: "Inter_400Regular",
            }}
          >
            Progress{" "}
          </StyledText>
          <StyledText
            className="text-black dark:text-white text-sm"
            style={{
              fontFamily: "Inter_700Bold",
            }}
          >
            {Math.round(progress * 100) >= 101
              ? 100
              : Math.round(progress * 100)}
            %
          </StyledText>
          <StyledText
            className="text-secondary text-[13px]"
            style={{
              fontFamily: "Inter_400Regular",
            }}
          >
            , Estimated completion time:{" "}
          </StyledText>
          <StyledText
            className="text-black dark:text-white text-[13px]"
            style={{
              fontFamily: "Inter_700Bold",
            }}
          >
            {progress <= 0.15
              ? "2 minutes"
              : progress >= 0.15 && progress <= 0.35
              ? "1 min 30 secs"
              : progress >= 0.35 && progress <= 0.65
              ? "1 minute"
              : progress >= 0.65 && progress <= 0.85
              ? " 30 seconds"
              : "10 seconds"}
          </StyledText>
        </StyledView>
        <Progress.Bar
          style={{
            marginVertical: 10,
          }}
          progress={progress}
          width={layout * 0.9}
          unfilledColor={Colors[colorScheme].otpbg}
          color={Colors[colorScheme].primary}
          borderColor={"#00000000"}
        />
        <StyledText
          className="text-secondary text-xs text-center"
          style={{
            fontFamily: "Inter_400Regular",
          }}
        >
          Do not close the App during the creation process to {"\n"} prevent
          wallet creation failure
        </StyledText>
      </StyledView>
    </StyledView>
  );
}
