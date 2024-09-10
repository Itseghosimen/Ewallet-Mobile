import React from 'react'
import { StyledInput, StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from 'nativewind'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Image } from 'expo-image'
import QRCodeImporter from '@/components/general/Buttons/QRCodeImporter'

export default function loginUserName() {
    const { colorScheme } = useColorScheme()
    return (
        <StyledView
            className='flex-1 bg-white dark:bg-background px-3 pb-5 pt-3'>
            <StatusBar
                style={colorScheme == 'dark' ? 'light' : 'dark'}
            />
            <StyledView className='flex gap-2'>
                <StyledText
                    style={{
                        fontFamily: 'Inter_700Bold',
                    }} className='text-black dark:text-white text-base'>
                    Enter your Email / Number / Username
                </StyledText>
                <StyledText
                    style={{
                        fontFamily: 'Inter_500Medium',
                        fontSize: 12,
                        marginBottom: 10
                    }}
                    className='text-light-text dark:text-dark-text'>
                    The Email/Username must match with the registered wallet {'\n'}
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

                <QRCodeImporter
                    background={Colors[colorScheme].otpbg}
                    labelColor={Colors[colorScheme].tint}
                />

                <StyledTouch
                    onPress={() => router.push('/scanQRCode')}
                    className='h-14 bg-black dark:bg-primary/80 rounded-full flex items-center justify-center'>
                    <StyledText className='text-white dark:text-black text-base ' style={{
                        fontFamily: 'Inter_500Medium',
                    }}>Continue</StyledText>
                </StyledTouch>
            </StyledView>

        </StyledView>
    )
}