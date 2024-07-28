import Button from '@/components/general/Buttons/Button'
import { Colors } from '@/constants/Colors'
import { StyledTouch } from '@/constants/imports'
import { Image } from 'expo-image'
import { Stack, router } from 'expo-router'
import { useColorScheme } from 'nativewind'
import React from 'react'

export default function SendLayout() {
    const { colorScheme } = useColorScheme()
    return (
        <Stack screenOptions={{
            headerTitleStyle: {
                fontFamily: 'Inter_700Bold'
            }
        }}>
            <Stack.Screen name='send' options={{
                title: 'Send',
                headerBackTitle: '',
                headerTitleStyle: {
                    fontSize: 18,
                    fontFamily: 'Inter_700Bold',
                    color: Colors[colorScheme].tint,

                },
                headerTitleAlign: 'left',
                headerShadowVisible: false,
                headerStyle: {
                    backgroundColor: Colors[colorScheme].background
                },
                headerRight: () => (
                    <Button Icon={
                        <Image source={require('@/assets/icons/logout.png')}
                            style={{
                                height: 18,
                                width: 18
                            }}
                            contentFit='contain' />
                    }
                        title={'Batch transfer'}
                        onPress={undefined}
                        textStyle={'text-white text-xs ml-2'}
                        style={'h-11 bg-black px-3 rounded-xl border dark:border-[#12131B]'}
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
            <Stack.Screen name='tokenSend' options={{
                title: 'Select token to send',
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
            <Stack.Screen name='confirmOrder' options={{
                title: 'Confirm order',
                headerBackTitle: '',
                headerTitleStyle: {
                    fontSize: 20,

                    color: Colors[colorScheme].tint,
                },
                headerTitleAlign: 'left',
                headerShadowVisible: false,
                headerBackVisible: false,
                headerStyle: {
                    backgroundColor: Colors[colorScheme].background
                },
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
            <Stack.Screen name='requirements' options={{
                title: 'Verification Requirement',
                headerBackTitle: '',
                headerTitleStyle: {
                    fontSize: 18,

                    color: Colors[colorScheme].tint,
                },
                headerTitleAlign: 'left',
                headerShadowVisible: false,
                headerBackVisible: false,
                headerStyle: {
                    backgroundColor: Colors[colorScheme].background
                },
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
            <Stack.Screen name='passkeyVerify' options={{
                title: 'Passkey Verification',
                headerBackTitle: '',
                headerTitleStyle: {
                    fontSize: 18,

                    color: Colors[colorScheme].tint,
                },
                headerTitleAlign: 'left',
                headerShadowVisible: false,
                headerBackVisible: false,
                headerStyle: {
                    backgroundColor: Colors[colorScheme].background
                },
            }} />
            <Stack.Screen name='transactionOutcome' options={{ headerShown: false }} />
            <Stack.Screen name='transactionReceipt' options={{
                title: 'Details',
                headerBackTitle: '',
                headerTitleStyle: {
                    fontSize: 16,

                    color: Colors[colorScheme].tint,
                },
                headerTitleAlign: 'center',
                headerShadowVisible: false,
                headerBackVisible: false,
                headerStyle: {
                    backgroundColor: Colors[colorScheme].background
                },
            }} />
        </Stack>
    )
}