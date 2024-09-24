
import React from 'react'
import { StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { router } from 'expo-router'

export default function upload() {

    return (
        <StyledView className='flex-1 bg-black/70 '>
            <StyledView className='flex-1 ' />
            <StyledView className='h-[380px] px-3 rounded-t-3xl space-y-4 pb-7 bg-white dark:bg-background'>

                <StyledTouch>
                    <StyledText className='text-base text-center my-4 text-black dark:text-white'
                        style={{
                            fontFamily: 'Inter_500Medium'
                        }}>
                        Rename wallet
                    </StyledText>
                </StyledTouch>

                <StyledTouch>
                    <StyledText className='text-base text-center my-4 text-black dark:text-white'
                        style={{
                            fontFamily: 'Inter_500Medium'
                        }}>
                        Upload from Gallery
                    </StyledText>
                </StyledTouch>
                <StyledTouch>
                    <StyledText className='text-base text-center my-4 text-black dark:text-white'
                        style={{
                            fontFamily: 'Inter_500Medium'
                        }}>
                        Switch to camera
                    </StyledText>
                </StyledTouch>
                <StyledTouch>
                    <StyledText className='text-base text-center my-4 text-black dark:text-white'
                        style={{
                            fontFamily: 'Inter_500Medium'
                        }}>
                        Rename wallet
                    </StyledText>
                </StyledTouch>

                <StyledView className='flex-row items-center justify-center' style={{ gap: 15 }}>
                    <StyledTouch onPress={() => router.replace('/profile')} className='justify-center items-center h-14 rounded-xl  flex-grow'>
                        <StyledText className='text-sm text-secondary'
                            style={{
                                fontFamily: 'Inter_500Medium'
                            }}>
                            Confirm
                        </StyledText>
                    </StyledTouch>
                </StyledView>
            </StyledView>
        </StyledView>
    )
}