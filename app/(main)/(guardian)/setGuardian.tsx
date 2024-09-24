import React from 'react'
import { StyledView } from '@/constants/imports'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useColorScheme } from 'nativewind';
import { Colors } from '@/constants/Colors';
import MyGuardians from '@/components/Guadians/MyGuardians';
import Guarding from '@/components/Guadians/Guarding';


const Tab = createMaterialTopTabNavigator();

export default function setGuardian() {
    const { colorScheme } = useColorScheme()
    return (
        <StyledView className='flex-1 bg-white dark:bg-background px-3'>
            <Tab.Navigator
                sceneContainerStyle={{
                    backgroundColor: 'transparent',
                }}
                screenOptions={{
                    tabBarContentContainerStyle: {
                        width: '100%',
                        justifyContent: 'space-between',
                    },
                    tabBarLabelStyle: {
                        fontFamily: 'Inter_700Bold',
                        textTransform: 'none',
                        color: Colors[colorScheme].tint,
                        fontSize: 14,
                        textAlign: 'center',
                    },
                    tabBarStyle: {
                        padding: 4,
                        borderRadius: 50,
                        backgroundColor: Colors[colorScheme].default,
                        borderWidth: 2,
                        borderColor: Colors[colorScheme].otpbg
                    },
                    tabBarItemStyle: {
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    tabBarIndicatorStyle: {
                        backgroundColor: Colors[colorScheme].otpbg,
                        height: '90%',
                        borderRadius: 40,
                        top: '5%',
                        left: '1%',
                        right: '1%',
                        width: '47%',
                        zIndex: 50,
                        position: 'absolute'
                    },
                    swipeEnabled: false,
                }}>
                <Tab.Screen name="My Guardians" component={MyGuardians} />
                <Tab.Screen name="Guarding" component={Guarding} />
            </Tab.Navigator>
        </StyledView>
    )
}