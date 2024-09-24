import React from 'react'
import { StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function addedSus() {
    return (

        <StyledView className='flex-1 bg-white dark:bg-background'>
            <SafeAreaView style={{
                flex: 1,
                paddingHorizontal: 15,
                paddingTop: 15
            }}>
                <StyledText
                    className='text-black dark:text-white'
                    style={{
                        fontFamily: 'Inter_700Bold',
                        fontSize: 23,
                    }}>
                    Guardian Added Successfully
                </StyledText>
                <StyledText
                    style={{
                        fontFamily: 'Inter_500Medium',
                        fontSize: 12,
                        color: '#979797',
                        marginTop: 15
                    }}>
                    Recover your wallet with your Guardian, after a 48hrs cooldown
                </StyledText>
                <StyledView className='flex-1' />
                <StyledTouch
                    onPress={() =>
                        router.push('/setGuardian')
                    }
                    className='h-14 w-full mt-12 bg-black dark:bg-primary rounded-full flex items-center justify-center'>
                    <StyledText className='text-white dark:text-black' style={{
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: 14
                    }}>
                        My Guardian
                    </StyledText>
                </StyledTouch>
                <StyledTouch
                    onPress={() =>
                        router.push('/home')
                    }
                    className='h-14 w-full mt-4 bg-releiveLight dark:bg-releive rounded-full flex items-center justify-center'>
                    <StyledText className=' text-black dark:text-white' style={{
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: 14
                    }}>
                        Exit
                    </StyledText>
                </StyledTouch>
            </SafeAreaView>
        </StyledView>

    )
}