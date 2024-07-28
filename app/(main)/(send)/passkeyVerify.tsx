import { Colors } from '@/constants/Colors'
import { StyledText, StyledView } from '@/constants/imports'
import { Image } from 'expo-image'
import { router } from 'expo-router'
import { useColorScheme } from 'nativewind'
import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'


export default function passkeyVerify() {
    useEffect(() => {
        setTimeout(() => {
            router.replace('transactionOutcome')
        }, 1500);
    }, [])

    const { colorScheme } = useColorScheme()
    return (
        <StyledView className='flex-1 items-center pt-[25vh] bg-white dark:bg-background'>
            <StatusBar
                barStyle={colorScheme == 'dark' ? 'light-content' : 'dark-content'}
            />
            <StyledView className='flex items-center justify-center gap-y-7'>
                <Image
                    source={require('@/assets/icons/security.png')}
                    style={{
                        height: 120,
                        width: 120,
                        tintColor: Colors[colorScheme ?? 'light'].primary,
                    }}
                    contentFit='contain' />
                <StyledView className='flex-row items-center justify-center'>
                    <Image
                        source={require('@/assets/icons/verify.png')}
                        style={{
                            height: 30,
                            width: 30,
                            tintColor: Colors[colorScheme].primary
                        }}
                        contentFit='contain' />
                    <StyledText className='text-black dark:text-primary text-base  ' style={{
                        fontFamily: 'Inter_500Medium',
                    }}>
                        Verifying Transaction
                    </StyledText>
                </StyledView>
            </StyledView>
        </StyledView>
    )
}