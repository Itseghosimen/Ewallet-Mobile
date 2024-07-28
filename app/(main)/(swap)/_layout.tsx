import { Colors } from '@/constants/Colors'
import { StyledTouch } from '@/constants/imports'
import { Image } from 'expo-image'
import { Stack, router } from 'expo-router'
import { useColorScheme } from 'nativewind'
import React from 'react'

export default function SwapLayout() {
    const { colorScheme } = useColorScheme()
    return (
        <Stack screenOptions={{
            headerTitleStyle: {
                fontFamily: 'Inter_700Bold'
            }
        }}>
            <Stack.Screen
                name='swap'
                options={{
                    title: 'Swap',
                    headerBackTitle: '',
                    headerTitleStyle: {
                        fontSize: 18,
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
                }}
            />
            <Stack.Screen name='swapToken' options={{
                title: 'Select token',
                headerBackTitle: '',
                headerTitleStyle: {
                    fontSize: 16,

                    color: Colors[colorScheme].tint,

                },
                headerTitleAlign: 'center',
                headerShadowVisible: false,
                headerStyle: {
                    backgroundColor: Colors[colorScheme].background
                },
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
        </Stack>
    )
}