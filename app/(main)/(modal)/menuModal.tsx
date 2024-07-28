import { StyledText, StyledTouch, StyledView } from '@/constants/imports';
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import { StyledComponent, useColorScheme } from 'nativewind';
import { Pressable } from 'react-native';
import { router } from 'expo-router';
import { Image } from 'expo-image';
import { FlatList } from 'react-native-gesture-handler';
import Button from '@/components/general/Buttons/Button';


export default function menuModal() {
    const { top } = useSafeAreaInsets()
    const { colorScheme } = useColorScheme()
    return (
        <StyledView
            style={{
                paddingTop: top
            }}
            className='flex-1 bg-black/80'>
            <StyledComponent className='flex-1' component={Pressable} onPress={router.back}>
                <StyledView className=" pb-2 pt-3 mt-auto bg-white dark:bg-black rounded-t-3xl">
                    <StyledView className='h-1 w-14 rounded bg-black dark:bg-primary mx-auto' />
                    <StyledView className='mt-8 mb-8 px-3'>

                        <FlatList
                            data={MenuLinks}
                            numColumns={4}
                            contentContainerStyle={{
                                gap: 25,
                                marginBottom: 20
                            }}
                            columnWrapperStyle={{
                                justifyContent: 'space-between'
                            }}
                            renderItem={({ item }) => {
                                return (
                                    <Button
                                        onPress={item.onPress}
                                        title={item.title}
                                        style={'flex-col gap-y-2 w-[25%]'}
                                        textStyle={'text-xs text-center text-secondary'}
                                        Icon={
                                            <StyledView
                                                style={{
                                                    backgroundColor: Colors[colorScheme].otpbg,
                                                    shadowColor: 'black',
                                                    elevation: 4,
                                                    shadowOpacity: 0.1
                                                }}
                                                className='h-14 w-14 rounded-full flex items-center justify-center'>
                                                <Image source={item.icon}
                                                    style={{
                                                        tintColor: Colors[colorScheme].primary,
                                                        height: 26,
                                                        width: 26,
                                                    }}
                                                />
                                            </StyledView>
                                        } />
                                )
                            }} />

                        <StyledView className='my-4 pb-4 pl-3'>
                            <StyledText className='text-sm text-black dark:text-white'
                                style={{
                                    fontFamily: 'Inter_500Medium'
                                }}>Shortcuts</StyledText>

                        </StyledView>

                        <FlatList
                            data={Shortcuts}
                            numColumns={4}
                            contentContainerStyle={{
                                gap: 25

                            }}
                            renderItem={({ item }) => {
                                return (
                                    <Button
                                        onPress={item.onPress}
                                        title={item.title}
                                        style={'flex-col gap-y-2 w-[25%]'}
                                        textStyle={'text-xs text-center text-secondary'}
                                        Icon={
                                            <StyledView
                                                style={{
                                                    backgroundColor: Colors[colorScheme].otpbg,
                                                    shadowColor: 'black',
                                                    elevation: 4,
                                                    shadowOpacity: 0.1
                                                }}
                                                className='h-14 w-14 rounded-full flex items-center justify-center'>
                                                <Image source={item.icon}
                                                    style={{
                                                        tintColor: Colors[colorScheme].primary,
                                                        height: 26,
                                                        width: 26,
                                                    }}
                                                />
                                            </StyledView>
                                        } />
                                )
                            }} />



                    </StyledView>

                    <StyledTouch className='bg-black/60 dark:bg-primary/60 py-3 px-3 flex-row items-center justify-between pr-5'>
                        <StyledView className='flex-row items-center' style={{ gap: 10 }}>
                            <StyledView className='h-12 w-12 rounded-full bg-white dark:bg-black flex items-center justify-center'>
                                <Image
                                    source={require('@/assets/icons/connector.png')
                                    }
                                    style={{
                                        height: 35,
                                        width: 25,
                                        tintColor: Colors[colorScheme].primary
                                    }}
                                    contentFit='contain' />
                            </StyledView>
                            <StyledView>
                                <StyledText className='text-base text-white' style={{
                                    fontFamily: 'Inter_600SemiBold'
                                }}>Wallet Connect</StyledText>
                                <StyledText
                                    className='text-xs text-white' style={{
                                        fontFamily: 'Inter_500Medium'
                                    }}> Connect your wallet to DApps</StyledText>
                            </StyledView>
                        </StyledView>
                        <Image
                            source={require('@/assets/icons/forward-arrow.png')}
                            style={{
                                height: 25,
                                width: 25,
                                tintColor: '#000'
                            }}
                        />
                    </StyledTouch>
                </StyledView>
            </StyledComponent >
        </StyledView >
    )
}



const MenuLinks = [
    {
        icon: require('@/assets/icons/menu-send.png'),
        title: 'Send',
        onPress: () => router.push('send'),
    },
    {
        icon: require('@/assets/icons/received-outline.png'),
        title: 'Receive',
        onPress: () => router.push('receive')
    },
    {
        icon: require('@/assets/icons/swap.png'),
        title: 'Swap',
        onPress: () => router.push('swap')
    },
    {
        icon: require('@/assets/icons/trading.png'),
        title: 'Trade',
        onPress: () => router.push('(modal)/tradeModal')
    },
    {
        icon: require('@/assets/icons/format-circle.png'),
        title: 'Batch transfer',
        onPress: undefined
    },
    {
        icon: require('@/assets/icons/convert.png'),
        title: 'Escrow contract',
        onPress: undefined
    },
    {
        icon: require('@/assets/icons/bitcoin-convert.png'),
        title: 'Smart Swap',
        onPress: undefined
    },
    {
        icon: require('@/assets/icons/main-component.png'),
        title: 'Limit Order',
        onPress: undefined
    },
]

const Shortcuts = [
    {
        icon: require('@/assets/icons/chatgo.png'),
        title: 'Eshop',
        onPress: undefined,
    },
    {
        icon: require('@/assets/icons/chatgo.png'),
        title: 'Chatgo',
        onPress: undefined
    },
    {
        icon: require('@/assets/icons/Icon.png'),
        title: 'EnetLab',
        onPress: undefined
    },
    {
        icon: require('@/assets/icons/3dcube.png'),
        title: 'Staking',
        onPress: undefined
    },
    {
        icon: require('@/assets/icons/alert.png'),
        title: 'Price alert',
        onPress: undefined
    },
    {
        icon: require('@/assets/icons/edit.png'),
        title: 'Request payment',
        onPress: undefined
    },
    {
        icon: require('@/assets/icons/edit.png'),
        title: 'Edit',
        onPress: undefined
    },
]