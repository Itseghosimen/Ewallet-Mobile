import { Colors } from '@/constants/Colors'
import { StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { Image } from 'expo-image'
import { router } from 'expo-router'
import { useColorScheme } from 'nativewind'
import React from 'react'

export default function SendCoin() {
    const { colorScheme } = useColorScheme()
    return (
        <StyledView className='flex-row items-center justify-between px-3 py-3 mt-2 rounded-xl'
            style={{
                elevation: 3,
                shadowColor: '#000',
                backgroundColor: Colors[colorScheme].otpbg,
                shadowOffset: { width: 2, height: 2 },
                shadowRadius: 1.5,
                shadowOpacity: 0.2
            }}>
            <StyledView className='flex-row items-center gap-x-3'>
                <Image source={require('@/assets/icons/ethereum.png')}
                    style={{
                        height: 45,
                        width: 45
                    }}
                    contentFit='contain'
                />
                <StyledView>
                    <StyledTouch
                        onPress={() => router.push('/tokenSend')}
                        className='flex-row items-center'>
                        <StyledText
                            style={{
                                fontFamily: 'Inter_500Medium',
                            }} className='text-sm  text-black dark:text-white mr-1 uppercase'>
                            Eth
                        </StyledText>
                        <Image source={require('@/assets/icons/arrow-bottom.png')}
                            style={{
                                height: 25,
                                width: 25,
                                tintColor: Colors[colorScheme].primary
                            }}
                            contentFit="contain" />
                    </StyledTouch>
                    <StyledText className='text-xs text-secondary '>Ethereum</StyledText>
                </StyledView>
            </StyledView>
            <StyledView className='flex items-end gap-y-1.5'>
                <StyledText className='text-sm text-right text-secondary '>
                    Available
                </StyledText>
                <StyledText
                    style={{
                        fontFamily: 'Inter_600SemiBold',
                    }} className='text-sm text-right text-black dark:text-white'>
                    600.000,89<StyledText className='text-xs text-secondary'> DAI</StyledText>
                </StyledText>
            </StyledView>
        </StyledView>
    )
}