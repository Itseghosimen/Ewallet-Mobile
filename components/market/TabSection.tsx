import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react'
import Assets from './Assets';
import { useColorScheme } from 'nativewind';
import { Colors } from '@/constants/Colors';
const Tab = createMaterialTopTabNavigator();


export default function TabSection() {
    const { colorScheme } = useColorScheme()
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: Colors[colorScheme].background
            }}
            screenOptions={{
                tabBarLabelStyle: {
                    fontFamily: 'Inter_500Medium',
                    textTransform: 'none',
                    fontSize: 12
                },
                tabBarItemStyle: {
                    width: 'auto',
                    marginHorizontal: 'auto',
                    paddingHorizontal: 0,
                },
                tabBarStyle: {
                    backgroundColor: Colors[colorScheme].background,
                    borderBottomWidth: 1.5,
                    borderBottomColor: Colors[colorScheme].otpbg,
                    shadowOpacity: 0,
                    elevation: 0
                },
                tabBarIndicatorStyle: {
                    width: 0.55,
                    height: 2.5,
                    borderRadius: 6,
                    backgroundColor: Colors[colorScheme].primary
                },
                tabBarGap: 8,
                tabBarScrollEnabled: true,
                swipeEnabled: false,
                tabBarActiveTintColor: Colors[colorScheme].tint
            }}>
            <Tab.Screen name="All Assets" component={Assets} />
            <Tab.Screen name="BNB Chain" component={Assets} />
            <Tab.Screen name="Ethereum" component={Assets} />
            <Tab.Screen name="Gamefi" component={Assets} />
            <Tab.Screen name="Metaverse" component={Assets} />
            <Tab.Screen name="Meme" component={Assets} />
        </Tab.Navigator>
    )
}