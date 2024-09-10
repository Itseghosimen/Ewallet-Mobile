import { Colors } from '@/constants/Colors'
import { StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { Image } from 'expo-image'
import { router } from 'expo-router'
import { useColorScheme } from 'nativewind'
import React from 'react'
import { StatusBar } from 'react-native'

export default function requirements() {
    const { colorScheme } = useColorScheme()
    return (
        <StyledView className='flex-1 bg-white dark:bg-background px-3'>
            <StatusBar
                barStyle={colorScheme == 'dark' ? 'light-content' : 'dark-content'}
            />
            <StyledText className='text-black dark:text-white text-sm  ' style={{
                fontFamily: 'Inter_500Medium',
            }}>
                Complete the verifications step to continue with your transactions
            </StyledText>
            <StyledView className='flex-1 pt-[30vh]'>
                <StyledView className='gap-y-2'>
                    <StyledView className='flex-row items-center rounded-lg justify-between pl-5'
                        style={{
                            backgroundColor: Colors[colorScheme].otpbg
                        }}>
                        <StyledText className='text-black/80 dark:text-white/80 mr-2'>
                            Verify with Biometris or security keys
                        </StyledText>
                        <StyledTouch onPress={() => router.push('/passkeyVerify')}
                            className='bg-black dark:bg-primary rounded-lg h-20 w-20 flex items-center justify-center shrink-0'>
                            <Image
                                source={require('@/assets/icons/security.png')}
                                style={{
                                    height: 35,
                                    width: 35,
                                    tintColor: colorScheme == 'dark' ? '#000' : '#fff',
                                    opacity: 0.8
                                }}
                                contentFit='contain' />
                        </StyledTouch>
                    </StyledView>
                    <StyledTouch>
                        <StyledText className='text-sm text-black dark:text-primary '>
                            Verification unavailable?
                        </StyledText>
                    </StyledTouch>
                </StyledView>
            </StyledView>
        </StyledView>
    )
}