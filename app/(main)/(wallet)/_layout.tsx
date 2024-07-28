import React from 'react'
import { Stack, router } from 'expo-router'
import { StyledTouch } from '@/constants/imports'
import { useColorScheme } from 'nativewind'
import { Colors } from '@/constants/Colors'
import { Image } from 'expo-image'
import Button from '@/components/general/Buttons/Button'
import WalletTokenHeader from '@/components/headers/WalletTokenHeader'

export default function WalletLayout() {
    const { colorScheme } = useColorScheme()
    return (
        <Stack
            screenOptions={{
                headerTitleStyle: {
                    fontFamily: 'Inter_700Bold'
                }
            }}>
            <Stack.Screen
                name='customToken'
                options={{
                    title: 'Add Custom Token',
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
                    headerRight: () => (
                        <Button
                            title={'Save'}
                            onPress={router.back}
                            textStyle={'text-black dark:text-primary text-sm'}
                        />

                    ),
                }}
            />
            <Stack.Screen
                name='management'
                options={{
                    title: 'Management',
                    headerBackTitle: '',
                    headerTitleStyle: {
                        fontSize: 17,
                        color: Colors[colorScheme].tint
                    },
                    headerTitleAlign: 'left',
                    headerShadowVisible: false,
                    headerStyle: { backgroundColor: Colors[colorScheme].background },
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
                    ),
                    headerRight: () => (
                        <Button
                            title={'Custom Token'}
                            onPress={router.back}
                            textStyle={'text-secondary text-xs'}
                            style={'h-9 rounded-xl bg-[#F3F4F8] dark:bg-[#12131B] px-2 border border-[#ECECEE] dark:border-[#171925]'}
                            Icon={
                                <Image
                                    source={require('@/assets/icons/add.png')}
                                    style={{
                                        height: 15,
                                        width: 15,
                                        marginRight: 5,
                                        tintColor: Colors[colorScheme].primary
                                    }}
                                />
                            }
                        />
                    ),
                }}
            />
            <Stack.Screen
                name='network'
                options={{
                    title: 'Network',
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
                                    tintColor: Colors[colorScheme].tint,
                                    marginRight: 10
                                }}
                            />
                        </StyledTouch>
                    )
                }}
            />

            <Stack.Screen
                name='walletToken/[slug]'
                options={{
                    headerShown: true,
                    headerTransparent: true,
                    header: () => <WalletTokenHeader />,
                }}
            />
        </Stack>
    )
}