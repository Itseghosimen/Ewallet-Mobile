import Button from '@/components/general/Buttons/Button'
import { Colors } from '@/constants/Colors'
import { StyledTouch } from '@/constants/imports'
import { Image } from 'expo-image'
import { Stack, router } from 'expo-router'
import { useColorScheme } from 'nativewind'
import React from 'react'

export default function ReceiveLayout() {
    const { colorScheme } = useColorScheme()
    return (
        <Stack screenOptions={{
            headerTitleStyle: {
                fontFamily: 'Inter_700Bold'
            }
        }}>
            <Stack.Screen name='receive' options={{
                title: 'Select token to Receive ',
                headerBackTitle: '',
                headerTitleStyle: {
                    fontSize: 16,
                    color: Colors[colorScheme].tint,

                },
                headerTitleAlign: 'left',
                headerShadowVisible: false,
                headerStyle: {
                    backgroundColor: Colors[colorScheme].background
                },
                headerRight: () => (
                    <Button
                        onPress={() => router.push('mainnet')}
                        Icon={
                            <Image source={require('@/assets/icons/appst.png')}
                                style={{
                                    height: 18,
                                    width: 18,
                                    tintColor: Colors[colorScheme].tint
                                }}
                                contentFit='contain' />}
                        title={'All Mainnet'}
                        textStyle={'text-xs ml-1 text-black dark:text-white'}
                        style={'border border-[#12131B] rounded-lg px-2.5 h-10 bg-[#F3F4F8] dark:bg-[#12131B]'}
                    />
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
            <Stack.Screen name='token/[slug]'
                options={{
                    title: 'Receive',
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

                }} />
            <Stack.Screen name='mainnet'
                options={{
                    title: 'Select a Mainnet',
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

                }} />
        </Stack>
    )
}