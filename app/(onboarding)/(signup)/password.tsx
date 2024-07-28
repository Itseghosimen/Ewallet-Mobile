import React, { useState } from 'react'
import { StyledInput, StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { StatusBar, TouchableWithoutFeedback } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { router } from 'expo-router'
import { useColorScheme } from 'nativewind'

export default function password() {
    const [password, setPassword] = useState(true)
    const [confirmPassword, setConfirmPassword] = useState(true)
    const { colorScheme } = useColorScheme()

    return (
        <StyledView className='flex-1 bg-white dark:bg-background pt-8 px-3 pb-5 gap-6'>
            <StatusBar
                barStyle={colorScheme == 'dark' ? 'light-content' : 'dark-content'}
            />
            <StyledView className='gap-y-3'>
                <StyledText className='text-sm font-regular text-black dark:text-white  ' style={{
                    fontFamily: 'Inter_500Medium',
                }}>Password</StyledText>
                <StyledView className='flex-row items-center border border-[#3A4452] px-3 h-12 rounded-lg'>
                    <StyledInput
                        secureTextEntry={password ? true : false}
                        className='flex-grow text-lg  text-black dark:text-white'
                        style={{
                            fontFamily: 'Inter_500Medium',
                        }}
                    />
                    <TouchableWithoutFeedback onPress={() => setPassword(!password)}>
                        <Entypo name={password ? 'eye' : 'eye-with-line'} size={20} color='#49515D' />
                    </TouchableWithoutFeedback>
                </StyledView>
            </StyledView>
            <StyledView className='gap-y-3'>
                <StyledText className='text-sm font-regular text-black dark:text-white  ' style={{
                    fontFamily: 'Inter_500Medium',
                }}>Confirm Password</StyledText>
                <StyledView className='flex-row items-center border border-[#3A4452] px-3 h-12 rounded-lg'>
                    <StyledInput
                        secureTextEntry={password ? true : false}
                        className='flex-grow text-lg  text-black dark:text-white'
                        style={{
                            fontFamily: 'Inter_500Medium',
                        }}
                    />
                    <TouchableWithoutFeedback onPress={() => setConfirmPassword(!confirmPassword)}>
                        <Entypo name={password ? 'eye' : 'eye-with-line'} size={20} color='#49515D' />
                    </TouchableWithoutFeedback>
                </StyledView>
            </StyledView>
            <StyledView className='gap-y-3'>
                <StyledText className='text-xs text-secondary  '
                    style={{
                        fontFamily: 'Inter_500Medium',
                    }}>
                    Password strength
                </StyledText>
                <StyledView className='gap-y-0.5'>
                    <StyledText className='text-black dark:text-white  '
                        style={{
                            fontFamily: 'Inter_500Medium',
                        }}>Rules:</StyledText>
                    <StyledView className='flex-row items-center gap-2'>
                        <StyledView className={`h-2.5 w-2.5 rounded-full border border-black dark:border-primary`} />
                        <StyledText className='text-secondary text-xs '
                            style={{
                                fontFamily: 'Inter_500Medium',
                            }}>Not shorter than 8 characters</StyledText>
                    </StyledView>
                    <StyledView className='flex-row items-center gap-2'>
                        <StyledView className={`h-2.5 w-2.5 rounded-full border border-black dark:border-primary`} />
                        <StyledText className='text-secondary text-xs '
                            style={{
                                fontFamily: 'Inter_500Medium',
                            }}>Not shorter than 8 characters</StyledText>
                    </StyledView>
                    <StyledView className='flex-row items-center gap-2'>
                        <StyledView className={`h-2.5 w-2.5 rounded-full border border-[#F80F0F]`} />
                        <StyledText className='text-secondary text-xs ' style={{
                            fontFamily: 'Inter_500Medium',
                        }}>Not shorter than 8 characters</StyledText>
                    </StyledView>
                </StyledView>
            </StyledView>
            <StyledView className='flex-1' />
            <StyledTouch
                onPress={() => router.push('createPin')}
                className='h-14 bg-black dark:bg-primary/80 rounded-full flex items-center justify-center'>
                <StyledText className='text-white dark:text-black text-base ' style={{
                    fontFamily: 'Inter_500Medium',
                }}>Continue</StyledText>
            </StyledTouch>
        </StyledView>
    )
}