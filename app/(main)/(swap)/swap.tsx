import SwapBtn from '@/components/home/SwapBtn'
import { Colors } from '@/constants/Colors'
import { StyledText, StyledView } from '@/constants/imports'
import { Image } from 'expo-image'
import { StyledComponent, useColorScheme } from 'nativewind'
import React, { useState } from 'react'
import { StatusBar, TouchableWithoutFeedback } from 'react-native'
import SwapSettings from '../(modal)/swapSettings'
import SwipeButton from 'rn-swipe-button';
import { router } from 'expo-router'
import Exchange from '@/components/home/Exchange'

export default function swap() {
    const [selected, setSelected] = useState('swap')
    const { colorScheme } = useColorScheme()

    return (
        <StyledView className='flex-1 bg-white dark:bg-background px-3 pb-5'>
            <StatusBar
                barStyle={colorScheme == 'dark' ? 'light-content' : 'dark-content'}
            />
            <StyledView className='flex-row items-center justify-between h-14 rounded-xl px-5 mb-8'
                style={{
                    backgroundColor: Colors[colorScheme].otpbg,
                }}>
                <StyledView className='flex-row items-center' style={{ gap: 20 }}>
                    <SwapBtn
                        title={'swap'}
                        active={selected}
                        onPress={() => setSelected('swap')} />
                    <SwapBtn
                        title={'bridge'}
                        active={selected}
                        onPress={() => setSelected('bridge')} />
                    <SwapBtn
                        title={'enetlab'}
                        active={selected}
                        onPress={() => setSelected('enetlab')} />

                </StyledView>
                <StyledView className='flex-row items-center' style={{ gap: 16 }}>
                    <StyledComponent component={TouchableWithoutFeedback}>
                        <Image source={require('@/assets/icons/clipboard2.png')}
                            style={{
                                height: 22,
                                width: 22
                            }} />
                    </StyledComponent>
                    <SwapSettings />
                </StyledView>
            </StyledView>

            <StyledView>
                {
                    selected === 'swap' ?
                        <Exchange max={true} />
                        : selected === 'bridge' ?
                            <Exchange />
                            :
                            <StyledView>
                            </StyledView>
                }
            </StyledView>

            <StyledView className='flex-1' />

            <StyledView className='mb-12 gap-y-4'>
                <StyledView className='flex-row items-center justify-between'>
                    <StyledText className='text-secondary text-xs  ' style={{
                        fontFamily: 'Inter_500Medium',
                    }}>
                        Provider
                    </StyledText>
                    <StyledView className='flex-row items-center' style={{ gap: 10 }}>
                        <Image
                            source={require('@/assets/icons/inch.png')}
                            style={{
                                height: 20,
                                width: 20
                            }} />
                        <StyledText className='text-black dark:text-white text-xs  ' style={{
                            fontFamily: 'Inter_500Medium',
                        }}>
                            1inch Network
                        </StyledText>
                    </StyledView>
                </StyledView>

                <StyledView className='flex-row items-center justify-between'>
                    <StyledText className='text-secondary text-xs  ' style={{
                        fontFamily: 'Inter_500Medium',
                    }}>
                        Minimum Received
                    </StyledText>
                    <StyledText className='text-black dark:text-primary text-xs  ' style={{
                        fontFamily: 'Inter_500Medium',
                    }}>
                        0.0000000000
                    </StyledText>
                </StyledView>

                <StyledView className='flex-row items-center justify-between'>
                    <StyledText className='text-secondary text-xs  ' style={{
                        fontFamily: 'Inter_500Medium',
                    }}>
                        Receiving address
                    </StyledText>
                    <StyledText className='text-black dark:text-white text-xs  ' style={{
                        fontFamily: 'Inter_500Medium',
                    }}>
                        0x013D5...14efzhb
                    </StyledText>
                </StyledView>

                <StyledView className='flex-row items-center justify-between'>
                    <StyledText className='text-secondary text-xs  ' style={{
                        fontFamily: 'Inter_500Medium',
                    }}>
                        Estimate fee
                    </StyledText>
                    <StyledText className='text-black dark:text-white text-xs  ' style={{
                        fontFamily: 'Inter_500Medium',
                    }}>
                        0.51 USDT
                    </StyledText>
                </StyledView>
            </StyledView>

            <SwipeButton
                title='Swipe to confirm transaction'
                titleColor={Colors[colorScheme].tint}
                titleFontSize={15}
                titleStyles={{
                    fontWeight: '600'
                }}
                railBackgroundColor={Colors[colorScheme].otpbg}
                railBorderColor={Colors[colorScheme].otpbg}
                thumbIconImageSource={require('@/assets/icons/arrowRight.png')}
                thumbIconBackgroundColor='#000'
                thumbIconBorderColor='#000'
                railFillBackgroundColor={Colors[colorScheme].primary}
                railFillBorderColor={Colors[colorScheme].primary}
                raild
                shouldResetAfterSuccess={true}
                onSwipeSuccess={router.back}

            />
        </StyledView>
    )
}




