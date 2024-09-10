import React from 'react'
import { StyledText, StyledView } from '@/constants/imports'
import Button from '@/components/general/Buttons/Button'
import { router } from 'expo-router'
import { Image } from 'expo-image'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from 'nativewind'
import { StatusBar } from 'react-native'

export default function recoverySuccess() {
    const { colorScheme } = useColorScheme()
    return (
        <StyledView className='flex-1 bg-white dark:bg-background pt-[20vh] pb-5 px-3'>
            <StatusBar
                barStyle={colorScheme == 'dark' ? 'light-content' : 'dark-content'}
            />
            <StyledView className='items-center flex gap-y-5'>
                <Image
                    source={require('@/assets/images/success.png')}
                    style={{
                        height: 200,
                        width: 200,
                        tintColor: Colors[colorScheme].primary
                    }}
                    transition={800}
                    contentFit='contain' />
                <StyledText
                    style={{
                        fontFamily: 'Inter_600SemiBold',
                    }} className='text-2xl text-black dark:text-primary  '>
                    Welcome Back!!!
                </StyledText>
                <StyledText
                    style={{
                        fontFamily: 'Inter_600SemiBold',
                    }} className='text-base text-black dark:text-white'>
                    @Johcee_10
                </StyledText>
            </StyledView>
            <StyledView className='flex-1' />
            <StyledView className='flex-row items-center' style={{ gap: 13 }}>
                <Button title={"Continue"} onPress={() => router.replace('/createPin')}
                    style={'flex-grow h-12 bg-black dark:bg-primary rounded-full justify-center'}
                    textStyle={'text-white dark:text-black'}
                />
            </StyledView>
        </StyledView>
    )
}