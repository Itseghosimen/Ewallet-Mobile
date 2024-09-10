import { StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { Image } from 'expo-image'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

export default function notificationSetup() {

    const setUpNotifier = () => {

    }

    return (
        <StyledView className='flex-1 bg-white dark:bg-background px-3 pb-10'>
            <StatusBar style='auto' />
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
                    onPress={setUpNotifier}
                    className='h-14 mb-5 w-full bg-black dark:bg-primary rounded-full flex items-center justify-center'>
                    <StyledText className='text-white dark:text-black text-base ' style={{
                        fontFamily: 'Inter_600SemiBold',
                    }}>Turn on</StyledText>
                </StyledTouch>
                <StyledTouch
                    onPress={() => router.push('/securitySetup')}
                    className='flex items-center justify-center'>
                    <StyledText className='text-secondary text-base ' style={{
                        fontFamily: 'Inter_500Medium',
                    }}>Skip</StyledText>
                </StyledTouch>
            </StyledView>
        </StyledView>
    )
}