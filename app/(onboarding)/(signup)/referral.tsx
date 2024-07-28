import React from 'react'
import { StyledInput, StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from 'nativewind'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function referral() {
    const { colorScheme } = useColorScheme()
    return (
        <StyledView
            className='flex-1 bg-white dark:bg-background px-3 pb-5'>
            <StatusBar
                style={colorScheme == 'dark' ? 'light' : 'dark'}
            />
            <StyledView className='flex gap-2'>
                <StyledView className='flex-row items-center'>
                    <StyledText
                        style={{
                            fontFamily: 'Inter_700Bold',
                        }} className='text-black dark:text-white  text-lg '>Referral code{' '}</StyledText>
                    <StyledText style={{
                        fontFamily: 'Inter_700Bold',
                    }} className='text-[#B08BFF]  text-sm'>(optional)</StyledText>
                </StyledView>
                <StyledInput
                    placeholder='Referral Code'
                    placeholderTextColor={Colors[colorScheme].tint}
                    className='text-black dark:text-primary text-base' style={{
                        fontFamily: 'Inter_500Medium',
                    }} />
            </StyledView>
            <StyledView className='flex-1' />
            <StyledView className='flex gap-5'>
                <StyledTouch className='flex items-center justify-center'>
                    <StyledText className='text-black dark:text-white text-base ' style={{
                        fontFamily: 'Inter_500Medium',
                    }}>Skip</StyledText>
                </StyledTouch>
                <StyledTouch
                    onPress={() => router.push('number')}
                    className='h-14 bg-black dark:bg-primary/80 rounded-full flex items-center justify-center'>
                    <StyledText className='text-white dark:text-black text-base  ' style={{
                        fontFamily: 'Inter_500Medium',
                    }}>Continue</StyledText>
                </StyledTouch>
            </StyledView>
        </StyledView>
    )
} 