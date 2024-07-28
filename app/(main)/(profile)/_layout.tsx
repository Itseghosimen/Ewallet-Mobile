
import React from 'react'
import { Stack, router } from 'expo-router'
import { Colors } from '@/constants/Colors'
import NewWallet from '@/components/general/Buttons/NewWallet'
import { StyledTouch } from '@/constants/imports'
import { Image } from 'expo-image'
import { useColorScheme } from 'nativewind'

export default function ProfileLayout() {
    const { colorScheme } = useColorScheme()
    return (
        <Stack screenOptions={{
            headerTitleStyle: {
                fontFamily: 'Inter_700Bold'
            }
        }}>
            <Stack.Screen name='profile'
                options={{
                    title: 'Profile',
                    headerBackTitle: '',
                    headerTitleStyle: {
                        fontSize: 18,

                        color: Colors[colorScheme].tint,

                    },
                    headerTitleAlign: 'left',
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: Colors[colorScheme].background
                    },
                    headerRight: () => (
                        <NewWallet style={{
                            height: 40
                        }} />
                    ),
                    headerLeft: () => (
                        <StyledTouch onPress={router.back}>
                            <Image source={require('@/assets/icons/back-arrow.png')}
                                style={{
                                    height: 25,
                                    width: 25,
                                    tintColor: Colors[colorScheme].tint,
                                    marginRight: 10
                                }}
                            />
                        </StyledTouch>
                    )
                }} />
            <Stack.Screen name="scanCode"
                options={{
                    title: '',
                    headerBackTitle: '',
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: Colors[colorScheme ?? 'light'].background
                    },
                    headerLeft: () => (
                        <StyledTouch onPress={router.back}>
                            <Image source={require('@/assets/icons/back-arrow.png')}
                                style={{
                                    height: 25,
                                    width: 25,
                                    tintColor: Colors[colorScheme].tint
                                }}
                            />
                        </StyledTouch>

                    )
                }}
            />
            <Stack.Screen name="switchAccount"
                options={{
                    title: 'Switch Wallet',
                    headerBackTitle: '',
                    headerShadowVisible: false,
                    headerTitleStyle: {
                        fontSize: 18,

                        color: Colors[colorScheme].tint
                    },
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: Colors[colorScheme].background
                    },
                    headerLeft: () => (
                        <StyledTouch onPress={router.back}>
                            <Image source={require('@/assets/icons/back-arrow.png')}
                                style={{
                                    height: 25,
                                    width: 25,
                                    tintColor: Colors[colorScheme].tint
                                }}
                            />
                        </StyledTouch>
                    )

                }}
            />
        </Stack >
    )
}