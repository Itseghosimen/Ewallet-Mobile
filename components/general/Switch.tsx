import { Colors } from "@/constants/Colors";
import { useColorScheme } from "nativewind";
import React, { useState } from "react";
import { Switch } from "react-native-switch";

type Props = {
  value?: boolean;
  onValueChange?: () => void;
};

export default function SwitchBtn(props: Props) {
  const { value = false, onValueChange } = props;

  const { colorScheme } = useColorScheme();
  const [isEnabled, setIsEnabled] = useState(false);
  function toggleSwitch() {
    setIsEnabled((previousState) => !previousState);
  }

  return (
    <Switch
      value={value}
      onValueChange={onValueChange}
      disabled={false}
      activeText={"On"}
      inActiveText={"Off"}
      circleSize={20}
      barHeight={23}
      circleBorderWidth={0}
      backgroundActive={Colors[colorScheme].primary}
      backgroundInactive={colorScheme == "dark" ? "#000" : "#C4C4C4"}
      circleActiveColor={Colors[colorScheme].background}
      circleInActiveColor={Colors[colorScheme].primary}
      renderActiveText={false}
      renderInActiveText={false}
      switchLeftPx={2.5}
      switchRightPx={2.5}
      switchWidthMultiplier={2}
      switchBorderRadius={30}
    />
  );
}
