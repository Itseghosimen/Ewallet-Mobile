import { View, Text } from 'react-native'
import React from 'react'
import { StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { router } from 'expo-router'
import { Image } from 'expo-image'
import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'nativewind'

export default function importKey() {
    const { colorScheme } = useColorScheme()
    return (
        <StyledView className='flex-1 bg-white dark:bg-background pb-5 px-3'>
            <StatusBar
                style={colorScheme == 'dark' ? 'light' : 'dark'}
            />
            <StyledView className='flex-1 items-center justify-center gap-y-7'>
                <Image source={require('@/assets/images/import.png')}
                    style={{
                        height: 150,
                        width: 150,
                    }}
                    contentFit='contain' />
                <StyledText
                    style={{
                        fontFamily: 'Inter_700Bold',
                    }}
                    className='  text-black dark:text-white text-xl text-center'>
                    Import recovery key
                </StyledText>
                <StyledText
                    className='text-center text-black dark:text-white  ' style={{
                        fontFamily: 'Inter_500Medium',
                    }}>
                    Your wallet will be available for use 2hrs after{'/n'}
                    successful recovery
                </StyledText>
            </StyledView>
            <StyledView className='flex gap-y-3'>
                <StyledTouch
                    onPress={() => router.push('securityPin')}
                    className='h-14 mt-5 w-full bg-black dark:bg-primary/80 rounded-full flex items-center justify-center'>
                    <StyledText className='text-white dark:text-black text-base ' style={{
                        fontFamily: 'Inter_500Medium',
                    }}>Start recovery process</StyledText>
                </StyledTouch>
                <StyledTouch
                    onPress={() => router.push('securityPin')}
                    className='h-14 mt-5 w-full border border-black dark:border-primary/80 rounded-full flex items-center justify-center'>
                    <StyledText className='text-black dark:text-primary text-base ' style={{
                        fontFamily: 'Inter_500Medium',
                    }}>Restore with guardian</StyledText>
                </StyledTouch>
            </StyledView>
        </StyledView>
    )
}