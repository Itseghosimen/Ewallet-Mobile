import { StyledText, StyledTouch, StyledView } from '@/constants/imports';
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import { StyledComponent, useColorScheme } from 'nativewind';
import { Pressable } from 'react-native';
import { router } from 'expo-router';
import { Image } from 'expo-image';
import { Entypo } from '@expo/vector-icons';

export default function tradeModal() {
    const { top } = useSafeAreaInsets()
    const { colorScheme } = useColorScheme()
    return (
        <StyledView
            style={{
                paddingTop: top
            }}
            className='flex-1 bg-black/80'>
            <StyledComponent className='flex-1' component={Pressable} onPress={router.back}>
                <StyledView className=" pb-6 pt-3 mt-auto px-3 bg-white dark:bg-black rounded-t-3xl">
                    <StyledView className='h-1 w-14 rounded bg-black dark:bg-primary mx-auto' />
                    <StyledView className='mt-8'>
                        <StyledView className='flex px-4 py-3 border border-secondary rounded-lg'
                            style={{
                                backgroundColor: Colors[colorScheme].otpbg
                            }}>
                            <StyledView className='flex-row mb-5 items-center justify-between'>
                                <StyledView>
                                    <StyledText
                                        className='text-base text-black dark:text-white'
                                        style={{
                                            fontFamily: 'Inter_500Medium'
                                        }}>Buy crypto</StyledText>
                                    <StyledText
                                        className='text-xs text-secondary'
                                        style={{
                                            fontFamily: 'Inter_500Medium'
                                        }}>Master card, Visa and others</StyledText>
                                </StyledView>
                                <Image
                                    source={require('@/assets/icons/atm.png')}
                                    style={{
                                        width: 55,
                                        height: 30
                                    }}
                                    contentFit='contain' />
                            </StyledView>
                            <StyledTouch className='flex-row items-center'>
                                <StyledText
                                    className='text-base text-black dark:text-primary mr-0.5'
                                    style={{
                                        fontFamily: 'Inter_500Medium'
                                    }}>Buy</StyledText>
                                <Entypo name="chevron-small-right" size={20} color={Colors[colorScheme].primary} />
                            </StyledTouch>
                        </StyledView>
                        <StyledView className='flex px-4 mt-3.5 py-3 border border-secondary rounded-lg'
                            style={{
                                backgroundColor: Colors[colorScheme].otpbg
                            }}>
                            <StyledView className='flex-row mb-5 items-center justify-between'>
                                <StyledView>
                                    <StyledText
                                        className='text-base text-black dark:text-white'
                                        style={{
                                            fontFamily: 'Inter_500Medium'
                                        }}>P2P  </StyledText>
                                    <StyledText
                                        className='text-xs text-secondary'
                                        style={{
                                            fontFamily: 'Inter_500Medium'
                                        }}>Trade, sell & exchange on yout own rate</StyledText>
                                </StyledView>
                                <Image
                                    source={require('@/assets/icons/p2p.png')}
                                    style={{
                                        width: 55,
                                        height: 30
                                    }}
                                    contentFit='contain' />
                            </StyledView>
                            <StyledTouch className='flex-row items-center'>
                                <StyledText
                                    className='text-base text-black dark:text-primary mr-0.5'
                                    style={{
                                        fontFamily: 'Inter_500Medium'
                                    }}>Buy</StyledText>
                                <Entypo name="chevron-small-right" size={20} color={Colors[colorScheme].primary} />
                            </StyledTouch>
                        </StyledView>
                    </StyledView>
                </StyledView>
            </StyledComponent>
        </StyledView>
    )
}