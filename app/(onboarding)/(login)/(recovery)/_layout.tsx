import { Colors } from '@/constants/Colors'
import { StyledTouch } from '@/constants/imports'
import { Image } from 'expo-image'
import { Stack, router } from 'expo-router'
import { useColorScheme } from 'nativewind'
import React from 'react'

export default function RecoveryLayout() {
    const { colorScheme } = useColorScheme()
    return (
        <Stack
            screenOptions={{
                headerTitleStyle: {
                    fontFamily: 'Inter_700Bold'
                }
            }}>
            <Stack.Screen name="recoveryName"
                options={{
                    title: '',
                    headerBackTitle: '',
                    headerShadowVisible: false,
                    headerStyle: { backgroundColor: Colors[colorScheme].background },
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
                    ),
                }} />
            <Stack.Screen name="recoveryCode"
                options={{
                    title: 'Verification code',
                    headerTitleStyle: {
                        color: Colors[colorScheme].tint,
                        fontSize: 20
                    },
                    headerBackVisible: false,
                    headerShadowVisible: false,
                    headerStyle: { backgroundColor: Colors[colorScheme].background },
                    headerRight: () => (
                        <StyledTouch onPress={router.back} className="mr-2">
                            <Image source={require('@/assets/icons/times.png')}
                                style={{
                                    height: 15,
                                    width: 15,
                                    tintColor: Colors[colorScheme].tint
                                }}
                            />
                        </StyledTouch>
                    ),
                }} />
            <Stack.Screen name="importKey"
                options={{
                    title: '',
                    headerBackTitle: '',
                    headerShadowVisible: false,
                    headerStyle: { backgroundColor: Colors[colorScheme].background },
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
                    ),
                }} />
            <Stack.Screen name="securityPin"
                options={{
                    title: 'Nice to see you again',
                    headerBackTitle: '',
                    headerTitleStyle: {
                        fontSize: 17,
                        color: Colors[colorScheme].tint
                    },
                    headerTitleAlign: 'center',
                    headerShadowVisible: false,
                    headerStyle: { backgroundColor: Colors[colorScheme].background },
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
                    ),

                }} />
            <Stack.Screen name="walletFinding"
                options={{
                    title: '',
                    headerBackTitle: '',
                    headerShadowVisible: false,
                    headerStyle: { backgroundColor: Colors[colorScheme].background },
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
                    ),
                }} />
        </Stack>)
}