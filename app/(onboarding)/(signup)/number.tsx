import React from 'react'
import { StyledInput, StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from 'nativewind'
import { Link, router } from 'expo-router'
import { Image } from 'expo-image'
import { StatusBar } from 'expo-status-bar'

export default function number() {
    const { colorScheme } = useColorScheme()
    return (
        <StyledView
            className='flex-1 bg-white dark:bg-background px-3 pb-5'>
            <StatusBar
                style={colorScheme == 'dark' ? 'light' : 'dark'}
            />
            <StyledView className='flex gap-0.5'>
                <StyledText
                    style={{
                        fontFamily: 'Inter_700Bold',
                    }} className='text-black dark:text-white  text-lg'>Enter Phone number</StyledText>
                <StyledView className='flex-row gap-2 items-center'>
                    <StyledTouch className='flex-row items-center' style={{ gap: 6 }}>
                        <Image
                            source={{ uri: 'https://flagsapi.com/US/flat/64.png' }}
                            contentFit='contain'
                            style={{
                                height: 25,
                                width: 25
                            }}
                        />
                        <StyledText className='text-black dark:text-white text-sm' style={{
                            fontFamily: 'Inter_500Medium',
                        }}>+1</StyledText>
                    </StyledTouch>
                    <StyledInput
                        placeholder='234567890'
                        keyboardType='number-pad'
                        placeholderTextColor={Colors[colorScheme].tint}
                        className='text-black dark:text-white text-sm' style={{
                            fontFamily: 'Inter_500Medium',
                        }} />
                </StyledView>
            </StyledView>
            <StyledView className='flex-1' />
            <StyledView className='flex gap-2 flex-row items-center'>
                <Link href={''}>
                    <StyledText className="text-black dark:text-[#BEE9E5] text-sm  " style={{
                        fontFamily: 'Inter_500Medium',
                    }}>Why we need your number?</StyledText>
                </Link>
                <StyledTouch
                    onPress={() => router.push('email')}
                    className='h-14 flex-grow bg-black dark:bg-primary/80 rounded-full flex items-center justify-center'>
                    <StyledText className='text-white dark:text-black text-base ' style={{
                        fontFamily: 'Inter_500Medium',
                    }}>Continue</StyledText>
                </StyledTouch>
            </StyledView>
        </StyledView >
    )
} 