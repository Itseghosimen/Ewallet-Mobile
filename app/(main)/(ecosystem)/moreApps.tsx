import Dapp from "@/components/Ecosystem/Dapp";
import { Colors } from "@/constants/Colors";
import { useHeaderHeight } from "@react-navigation/elements";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useColorScheme } from "nativewind";
import React from "react";

const Tab = createMaterialTopTabNavigator();

export default function moreApps() {
  const { colorScheme } = useColorScheme();
  const headerHeight = useHeaderHeight();

  return (
    <Tab.Navigator
      initialRouteName="Hot"
      sceneContainerStyle={{
        backgroundColor: Colors[colorScheme].background,
      }}
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "700",
          flexWrap: "nowrap",
          textTransform: "none",
          fontFamily: "Inter_500Medium",
        },
        tabBarIndicatorStyle: {
          width: 0.6,
          padding: 0,
          backgroundColor: Colors[colorScheme].primary,
        },
        tabBarItemStyle: {
          marginHorizontal: "auto",
          paddingHorizontal: 2,
          paddingBottom: 9,
          width: "auto",
        },
        tabBarStyle: {
          backgroundColor: Colors[colorScheme].background,
          elevation: 0,
          shadowOpacity: 0,
          paddingTop: headerHeight,
          paddingHorizontal: 12,
          borderBottomColor: Colors[colorScheme].otpbg,
          borderBottomWidth: 1,
        },
        tabBarGap: 3,
        tabBarScrollEnabled: true,
        tabBarIndicatorContainerStyle: {
          marginHorizontal: 12,
        },
        swipeEnabled: false,
      }}
    >
      <Tab.Screen
        name="dapp"
        component={Dapp}
        options={{
          tabBarLabel: "DApp",
        }}
      />
      <Tab.Screen
        name="etherum"
        component={Dapp}
        options={{ tabBarLabel: "Etherum" }}
      />
      <Tab.Screen
        name="BNB chain"
        component={Dapp}
        options={{ tabBarLabel: "BNB Chain" }}
      />
      <Tab.Screen
        name="polygon"
        component={Dapp}
        options={{ tabBarLabel: "Polygon" }}
      />
      <Tab.Screen
        name="sei"
        component={Dapp}
        options={{ tabBarLabel: "Sei" }}
      />
      <Tab.Screen
        name="arbitrum"
        component={Dapp}
        options={{ tabBarLabel: "Arbiturum" }}
      />
      <Tab.Screen
        name="optimism"
        component={Dapp}
        options={{ tabBarLabel: "Optimism" }}
      />
    </Tab.Navigator>
  );
}
