import { StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { Image } from 'expo-image'
import { router } from 'expo-router'
import React from 'react'

export default function faceId() {
    return (
        <StyledView className='flex-1 bg-white dark:bg-background px-3 pb-5'>

            <StyledView className='flex items-center my-auto'
                style={{
                    gap: 30
                }}>
                <Image
                    source={require('@/assets/images/face.png')}
                    contentFit='contain'
                    style={{
                        height: 100,
                        width: 100
                    }} />
                <StyledText
                    className='text-black dark:text-white text-xl'
                    style={{
                        fontFamily: 'Inter_600SemiBold'
                    }}>
                    Enable Face ID
                </StyledText>
                <StyledText className='text-secondary text-sm text-center'>
                    Enable face ID to easily facilitate more  {'\n'}  convenient Login verifications, {'\n'}  complete transactions
                </StyledText>
            </StyledView>
            <StyledView>
                <StyledTouch
                    onPress={() => router.push('encryptKey')}
                    className='h-14 mb-5 w-full bg-black dark:bg-primary/80 rounded-full flex items-center justify-center'>
                    <StyledText className='text-white dark:text-black text-base ' style={{
                        fontFamily: 'Inter_500Medium',
                    }}>Activate Now</StyledText>
                </StyledTouch>
                <StyledTouch className='flex items-center justify-center'>
                    <StyledText className='text-secondary text-base ' style={{
                        fontFamily: 'Inter_500Medium',
                    }}>Activate Later</StyledText>
                </StyledTouch>
            </StyledView>
        </StyledView>
    )
}