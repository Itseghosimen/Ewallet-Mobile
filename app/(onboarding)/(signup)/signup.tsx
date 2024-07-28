import React from 'react'
import { StyledInput, StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from 'nativewind'
import Button from '@/components/general/Buttons/Button'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function signup() {
    const { colorScheme } = useColorScheme()
    return (
        <StyledView
            className='flex-1 bg-white dark:bg-background px-3 pb-5'>
            <StatusBar
                style={colorScheme == 'dark' ? 'light' : 'dark'}
            />
            <StyledView className='flex gap-2'>
                <StyledText style={{
                    fontFamily: 'Inter_700Bold',
                }} className='text-black dark:text-white  text-lg'>Choose a username</StyledText>
                <StyledInput
                    placeholder='Johcee'
                    placeholderTextColor={Colors[colorScheme].primary}
                    className='text-black dark:text-primary text-base' style={{
                        fontFamily: 'Inter_500Medium',
                    }} />
            </StyledView>
            <StyledView className='flex-1' />
            <StyledView className='flex gap-2'>
                <StyledTouch
                    onPress={() => router.push('referral')}
                    className='h-14 bg-black dark:bg-primary/80 rounded-full flex items-center justify-center'>
                    <StyledText
                        style={{
                            fontFamily: 'Inter_600SemiBold',
                        }} className='text-white dark:text-black text-base '>Continue</StyledText>
                </StyledTouch>
                <StyledView className='flex-row flex-wrap justify-center  text-white'>
                    <StyledText className='text-sm   text-black/70 dark:text-white' style={{
                        fontFamily: 'Inter_500Medium',
                    }}>
                        By pressing continue, you agree to our
                    </StyledText>
                    <Button
                        onPress={undefined}
                        title={'Terms & Conditions'}
                        textStyle={'text-sm  text-black dark:text-primary'}
                    />
                    <StyledText className='text-sm   text-black/70 dark:text-white' style={{
                        fontFamily: 'Inter_500Medium',
                    }}>{' '}and{' '}</StyledText>
                    <Button
                        onPress={undefined}
                        title={'Policy'}
                        textStyle={'text-sm  text-black dark:text-primary'} />
                </StyledView>
            </StyledView>
        </StyledView>
    )
} 