import React from 'react'
import { StyledInput, StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from 'nativewind'
import { Link, router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function email() {
    const { colorScheme, toggleColorScheme } = useColorScheme()
    return (
        <StyledView
            className='flex-1 bg-white dark:bg-background px-3 pb-5'>
            <StatusBar
                style={colorScheme == 'dark' ? 'light' : 'dark'}
            />
            <StyledView className='flex gap-2'>
                <StyledText style={{
                    fontFamily: 'Inter_700Bold',
                }} className='text-black dark:text-white  text-lg'>Enter your Email</StyledText>
                <StyledInput
                    placeholder='Email address'
                    placeholderTextColor={Colors[colorScheme].tint}
                    className='text-black dark:text-white text-sm' style={{
                        fontFamily: 'Inter_500Medium',
                    }} />
            </StyledView>
            <StyledView className='flex-1' />
            <StyledView className='flex gap-2 flex-row items-center'>
                <Link href={''}>
                    <StyledText className="text-black dark:text-[#BEE9E5] text-sm  ">Why we need your email?</StyledText>
                </Link>
                <StyledTouch
                    onPress={() => router.push('verify')}
                    className='h-14 flex-grow bg-black dark:bg-primary/80 rounded-full flex items-center justify-center'>
                    <StyledText className='text-white dark:text-black text-base '>Continue</StyledText>
                </StyledTouch>
            </StyledView>
        </StyledView>
    )
} 