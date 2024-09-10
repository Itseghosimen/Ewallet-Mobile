import MoreInfo from '@/components/home/send/MoreInfo'
import ReceiverInfo from '@/components/home/send/ReceiverInfo'
import { Colors } from '@/constants/Colors'
import { StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { Image } from 'expo-image'
import { router } from 'expo-router'
import { useColorScheme } from 'nativewind'
import React from 'react'
import { StatusBar } from 'react-native'

export default function transactionReceipt() {
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

                <StyledView className='flex-row items-center justify-end mt-4 gap-x-2'>
                    <StyledText className='text-black dark:text-primary   text-xs' style={{
                        fontFamily: 'Inter_500Medium',
                    }}>Completed</StyledText>
                    <Image
                        source={require('@/assets/icons/checkSquare.png')}
                        style={{
                            height: 14,
                            width: 14,
                            tintColor: Colors[colorScheme ?? 'light'].primary
                        }}
                        contentFit='contain'
                    />
                </StyledView>
            </StyledView>

            <StyledView className='my-5'>
                <MoreInfo
                    name={'Thomas Fred'}
                    tokenFull={'Arbitrum'}
                    token={'ARB'}
                    fee={0.00}
                    whoPaid={'E•network'}
                    account={'0x63802792790427902huhkfjkhjfhjf'}
                    confirmed={true} />
            </StyledView>
            <StyledView className='flex-1' />
            <StyledView className='px-3'>
                <StyledTouch
                    onPress={() => router.replace('/home')}
                    className='h-14 mt-5 w-full border border-black dark:border-primary/80 rounded-full flex items-center justify-center'>
                    <StyledText className='text-black dark:text-primary text-base ' style={{
                        fontFamily: 'Inter_500Medium',
                    }}>
                        Exit
                    </StyledText>
                </StyledTouch>
            </StyledView>
        </StyledView>
    )
}