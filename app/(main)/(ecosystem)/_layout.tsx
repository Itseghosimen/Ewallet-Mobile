import React from 'react'
import { Stack, router } from 'expo-router'
import { useColorScheme } from 'nativewind'
import { Colors } from '@/constants/Colors'
import { StyledTouch } from '@/constants/imports'
import { Image } from 'expo-image'
import MoreAppsHeader from '@/components/headers/MoreAppsHeader'


export default function EcosystemLayout() {
    const { colorScheme } = useColorScheme()
    return (
        <Stack screenOptions={{
            headerTitleStyle: {
                fontFamily: 'Inter_700Bold'
            }
        }}>
            <Stack.Screen name='customWidget'
                options={{
                    title: 'Custom Widget',
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
                }}
            />
            <Stack.Screen
                name='moreApps'
                options={{
                    headerShown: true,
                    headerTransparent: true,
                    title: '',
                    header: () => <MoreAppsHeader />,
                }} />
        </Stack>
    )
}