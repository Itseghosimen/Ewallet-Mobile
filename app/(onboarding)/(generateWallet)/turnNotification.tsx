import { StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { Image } from 'expo-image'
import { router } from 'expo-router'
import React from 'react'

export default function turnNotification() {
    return (
        <StyledView className='flex-1 bg-white dark:bg-background px-3 pb-5'>

            <StyledView className='flex items-center my-auto'
                style={{
                    gap: 30
                }}>
                <Image
                    source={require('@/assets/images/notify.png')}
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
                    Turn on notifications
                </StyledText>
                <StyledText className='text-secondary text-sm text-center'>
                    Get notified about important events {'\n'} and actions on your wallet
                </StyledText>
            </StyledView>
            <StyledView>
                <StyledTouch
                    onPress={() => router.push('faceId')}
                    className='h-14 mb-5 w-full bg-black dark:bg-primary/80 rounded-full flex items-center justify-center'>
                    <StyledText className='text-white dark:text-black text-base ' style={{
                        fontFamily: 'Inter_500Medium',
                    }}>Turn on</StyledText>
                </StyledTouch>
                <StyledTouch className='flex items-center justify-center'>
                    <StyledText className='text-secondary text-base ' style={{
                        fontFamily: 'Inter_500Medium',
                    }}>Skip</StyledText>
                </StyledTouch>
            </StyledView>
        </StyledView>
    )
}