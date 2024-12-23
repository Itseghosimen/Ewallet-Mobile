import { BlurView } from "expo-blur";
import { useEffect, useRef } from "react";
import { StyleSheet } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import { AppState } from "react-native";
import { router } from "expo-router";
import { StyledView } from "@/constants/imports";

export default function Lock() {
  useEffect(() => {
    (async () => {
      const isCompatible = await LocalAuthentication.hasHardwareAsync();
      const isEnrolled = await LocalAuthentication.isEnrolledAsync();

      if (!isCompatible) {
        console.log("not compatible");
        return;
      }

      if (!isEnrolled) {
        router.replace("/");
        return;
      }

      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: "Authenticate with Biometrics",
        fallbackLabel: "Use Passcode",
      });

      if (result.success) {
        router.back();
      } else {
        router.push("/(auth)/(lock)/lock");
      }
    })();
  }, []);

  return (
    <StyledView
      style={styles.container}
      className="px-3 py-10 flex-1 gap-6 bg-white dark:bg-background"
    >
      <BlurView intensity={5} style={styles.blurContainer} />
    </StyledView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blurContainer: {
    flex: 1,
    padding: 20,
    textAlign: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});
