import React from 'react'
import { StyledInput, StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from 'nativewind'
import { Link, router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Image } from 'expo-image'

export default function mailVerification() {
    const { colorScheme } = useColorScheme()
    const [email, setEmail] = React.useState<string>('')

    const sendOtpEmail = () => {
        if (email) {
            router.push({ pathname: '/emailVerification', params: { email: email } })
        }
    }

    return (
        <StyledView
            className='flex-1 bg-white dark:bg-background px-3 pb-5'>
            <StatusBar
                style={colorScheme == 'dark' ? 'light' : 'dark'}
            />
            <StyledView className='flex gap-2'>
                <StyledText style={{
                    fontFamily: 'Inter_700Bold',
                }} className='text-black dark:text-white  text-lg'>Verify your Email</StyledText>
                <StyledText style={{
                    fontFamily: 'Inter_500Medium',
                }} className='text-black dark:text-white opacity-80 mb-3 text-xs'>The Email must match with the registered email </StyledText>
                <StyledInput
                    placeholder='Email address'
                    placeholderTextColor={'#ADB5BF'}
                    value={email}
                    onChangeText={setEmail}
                    textContentType='emailAddress'
                    keyboardType='email-address'
                    className='text-black dark:text-white text-sm w-full' style={{
                        fontFamily: 'Inter_500Medium',
                    }} />
            </StyledView>

            <StyledView className='flex-1' />


            <StyledTouch
                onPress={sendOtpEmail}
                className='h-14 px-6 w-fillflex-grow bg-black dark:bg-primary/80 rounded-full flex-row items-center justify-center'>
                <StyledText className='text-white dark:text-black text-base ' style={{
                    fontFamily: 'Inter_500Medium',
                }}>Continue</StyledText>
            </StyledTouch>

        </StyledView>
    )
} 