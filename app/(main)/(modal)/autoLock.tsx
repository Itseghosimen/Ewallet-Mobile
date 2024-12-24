import React, { useState } from "react";
import { Modal, Pressable } from "react-native";
import { StyledComponent, useColorScheme } from "nativewind";

import Button from "@/components/general/Buttons/Button";
import SwitchBtn from "@/components/general/Switch";
import SettingBtn from "@/components/home/settings/SettingBtn";
import { Colors } from "@/constants/Colors";
import { StyledText, StyledView } from "@/constants/imports";

import { useAsyncStorage } from "@/hooks/useAsyncStorage";
import { AutolockType } from "@/types/hooks";

export default function AppLock() {
  const [autoLock, setAutoLock] = useState(false);

  const { colorScheme } = useColorScheme();
  const [autolockType, setAutolockType] = useAsyncStorage<AutolockType>(
    "@autolock",
    "immediately"
  );

  return (
    <>
      <SettingBtn
        type="link"
        title="Auto-lock"
        frontIcon={undefined}
        onPress={() => setAutoLock(true)}
        textStyle={{
          color: "#49515D",
        }}
      />

      <Modal animationType="slide" visible={autoLock} transparent={true}>
        <StyledComponent
          component={Pressable}
          className="flex-1 bg-black/80 rounded-t-3xl"
        >
          <StyledView className="flex-1" />
          <StyledView className="pb-6 bg-white dark:bg-background rounded-t-3xl">
            <StyledText
              className="text-base  text-center text-black dark:text-primary my-6"
              style={{
                fontFamily: "Inter_500Medium",
              }}
            >
              Auto-Lock
            </StyledText>
            <StyledView
              className="gap-y-3 p-3 mb-3"
              style={{ backgroundColor: Colors[colorScheme].otpbg }}
            >
              <SettingBtn
                type="switch"
                title="Immediately"
                frontIcon={undefined}
                // onPress={undefined}
                onPress={() => setAutolockType("immediately")}
                backIcon={
                  <SwitchBtn
                    value={autolockType === "immediately"}
                    onValueChange={() => setAutolockType("immediately")}
                  />
                }
                textStyle={{
                  color: "#49515D",
                }}
              />
              <SettingBtn
                type="switch"
                title="If left for 1 minutes"
                frontIcon={undefined}
                // onPress={undefined}
                onPress={() => setAutolockType("1 minute")}
                backIcon={
                  <SwitchBtn
                    value={autolockType === "1 minute"}
                    onValueChange={() => setAutolockType("1 minute")}
                  />
                }
                textStyle={{
                  color: "#49515D",
                }}
              />
              <SettingBtn
                type="switch"
                title="If left for 5 minutes"
                frontIcon={undefined}
                // onPress={undefined}
                onPress={() => setAutolockType("5 minutes")}
                backIcon={
                  <SwitchBtn
                    value={autolockType === "5 minutes"}
                    onValueChange={() => setAutolockType("5 minutes")}
                  />
                }
                textStyle={{
                  color: "#49515D",
                }}
              />
              <SettingBtn
                type="switch"
                title="If left for 30 minutes"
                frontIcon={undefined}
                // onPress={undefined}
                onPress={() => setAutolockType("30 minutes")}
                backIcon={
                  <SwitchBtn
                    value={autolockType === "30 minutes"}
                    onValueChange={() => setAutolockType("30 minutes")}
                  />
                }
                textStyle={{
                  color: "#49515D",
                }}
              />
            </StyledView>
            <Button
              onPress={() => setAutoLock(false)}
              title={"Close"}
              textStyle={"text-center text-black dark:text-white"}
              style={"w-full justify-center"}
            />
          </StyledView>
        </StyledComponent>
      </Modal>
    </>
  );
}
