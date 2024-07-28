import MoreInfo from '@/components/home/send/MoreInfo'
import ReceiverInfo from '@/components/home/send/ReceiverInfo'
import { Colors } from '@/constants/Colors'
import { StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { Image } from 'expo-image'
import { router } from 'expo-router'
import { useColorScheme } from 'nativewind'
import React from 'react'
import { StatusBar } from 'react-native'

export default function confirmOrder() {
    const { colorScheme } = useColorScheme()
    return (
        <StyledView className='flex-1 bg-white dark:bg-background pb-5'>
            <StatusBar
                barStyle={colorScheme == 'dark' ? 'light-content' : 'dark-content'}
            />
            <StyledView className='my-8 px-3'>
                <ReceiverInfo
                    name={'Thomas Fred'}
                    Amount={200000.68}
                    token={'ARB'}
                    icon={require('@/assets/icons/art.png')}
                    person={require('@/assets/images/1.png')}
                    minusGas={158000.87}
                />
            </StyledView>

            <StyledView className='my-5'>
                <MoreInfo
                    name={'Thomas Fred'}
                    tokenFull={'Arbitrum'}
                    token={'ARB'}
                    fee={0.00}
                    whoPaid={'E•network'}
                    account={'0x63802792790427902huhkfjkhjfhjf'}
                    confirmed={false} />
            </StyledView>

            <StyledView className='px-5 mt-3 flex-row items-center gap-x-2.5'>
                <Image
                    source={require('@/assets/icons/danger.png')}
                    style={{
                        height: 24,
                        width: 24,
                        tintColor: Colors[colorScheme].tint,
                        opacity: 0.5
                    }}
                    contentFit='contain' />
                <StyledText className='text-xs text-black dark:text-white'>
                    Ensure that the contact/address is correct and the network
                    corresponds with the receiving contact/address.
                </StyledText>
            </StyledView>

            <StyledView className='flex-1' />

            <StyledView className='px-3'>
                <StyledTouch
                    onPress={() => router.push('requirements')}
                    className='h-14 mt-5 w-full border border-black dark:border-primary/80 rounded-full flex items-center justify-center'>
                    <StyledText className='text-black dark:text-primary text-base ' style={{
                        fontFamily: 'Inter_500Medium',
                    }}>
                        Confirm
                    </StyledText>
                </StyledTouch>
            </StyledView>
        </StyledView>
    )
}