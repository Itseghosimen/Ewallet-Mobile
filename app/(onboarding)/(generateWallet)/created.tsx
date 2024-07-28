import React from 'react'
import { StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { Image, ImageBackground } from 'expo-image'
import { router } from 'expo-router'
import { Dimensions } from 'react-native'

export default function created() {
    const layout = Dimensions.get('window').width
    return (
        <StyledView className='flex-1 bg-white dark:bg-background px-3 pt-12 pb-4'>
            <StyledView className='h-[25vh] items-center justify-center'>
                <Image
                    source={require('@/assets/images/wallet.png')}
                    contentFit='contain'
                    style={{
                        height: '50%',
                        width: '100%'
                    }}
                />
            </StyledView>
            <StyledText className='text-center mx-auto max-w-[80vw] text-2xl text-black dark:text-white mb-5'
                style={{
                    fontFamily: 'Inter_700Bold'
                }}>
                Your Enetwallet has been created successfully
            </StyledText>
            <StyledText
                className='text-secondary text-center text-sm mx-auto max-w-[75vw]'
                style={{
                    fontFamily: 'Inter_400Regular'
                }}>
                Your Enetwallet
                <StyledText
                    className='text-black dark:text-white text-sm'
                    style={{
                        fontFamily: 'Inter_700Bold'
                    }}>(0x5a6...67dca){' '}</StyledText>
                is available on these following chains
            </StyledText>
            <ImageBackground
                source={require('@/assets/images/address.png')}
                contentFit='contain'
                style={{
                    marginTop: 40,
                    height: layout * 0.5,
                    width: layout * 0.9,
                }}
            />
            <StyledView className='flex-1' />
            <StyledTouch
                onPress={() => router.push('turnNotification')}
                className='h-14 bg-black dark:bg-primary/80 rounded-full flex items-center justify-center'>
                <StyledText className='text-white dark:text-black text-base ' style={{
                    fontFamily: 'Inter_500Medium',
                }}>Continue</StyledText>
            </StyledTouch>
        </StyledView>
    )
}