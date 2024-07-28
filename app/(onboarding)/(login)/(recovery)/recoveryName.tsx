import React from 'react'
import { StyledInput, StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from 'nativewind'
import Button from '@/components/general/Buttons/Button'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Image } from 'expo-image'

export default function recoveryName() {
    const { colorScheme } = useColorScheme()
    return (
        <StyledView
            className='flex-1 bg-white dark:bg-background px-3 pb-5'>
            <StatusBar
                style={colorScheme == 'dark' ? 'light' : 'dark'}
            />
            <StyledView className='flex gap-2'>
                <StyledText
                    style={{
                        fontFamily: 'Inter_700Bold',
                    }} className='text-black dark:text-white  text-lg'>Choose a username</StyledText>
                <StyledText className='text-light-text dark:text-dark-text text-xs'>
                    The Email/Username must match with the registered wallet
                    info
                </StyledText>
                <StyledInput
                    placeholder='Email / Username'
                    placeholderTextColor={Colors[colorScheme].tint}
                    className='text-black dark:text-primary text-sm ' style={{
                        fontFamily: 'Inter_500Medium',
                    }} />
            </StyledView>
            <StyledView className='flex-1' />
            <StyledView className='flex gap-y-16'>

                <StyledTouch className='rounded-lg h-14 flex-row px-4 justify-between items-center'
                    style={{
                        backgroundColor: Colors[colorScheme].otpbg
                    }}>
                    <StyledText className='text-xs  text-black dark:text-white' style={{
                        fontFamily: 'Inter_500Medium'
                    }}>
                        Import log in details using QR code
                    </StyledText>
                    <StyledView className='h-10 w-10 rounded-full bg-black dark:bg-white flex items-center justify-center'>
                        <Image
                            source={require('@/assets/icons/scantone.png')}
                            style={{
                                height: 25,
                                width: 25,
                                tintColor: Colors[colorScheme].background
                            }}
                            contentFit='contain' />
                    </StyledView>
                </StyledTouch>
                <StyledTouch
                    onPress={() => router.push('recoveryCode')}
                    className='h-14 bg-black dark:bg-primary/80 rounded-full flex items-center justify-center'>
                    <StyledText className='text-white dark:text-black text-base ' style={{
                        fontFamily: 'Inter_500Medium',
                    }}>Continue</StyledText>
                </StyledTouch>
            </StyledView>

        </StyledView>
    )
} 