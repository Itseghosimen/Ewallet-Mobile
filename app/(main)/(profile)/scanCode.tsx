import React from 'react'
import { StyledText, StyledView } from '@/constants/imports'
import { Dimensions } from 'react-native'
import { ImageBackground } from 'expo-image'
import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'nativewind'

export default function scanCode() {
    const layout = Dimensions.get('window')
    const { colorScheme } = useColorScheme()
    return (
        <StyledView className='flex-1 bg-white dark:bg-background pt-16 gap-y-10'>
            <StatusBar
                style={colorScheme == 'dark' ? 'light' : 'dark'}
            />
            <ImageBackground
                source={require('@/assets/images/personalCode.png')}
                style={{
                    height: layout.height * 0.5,
                    width: '100%',
                }}
                contentFit='contain'
            />
            <StyledText
                style={{
                    fontFamily: 'Inter_600SemiBold',
                }} className='text-black dark:text-white text-center text-base '>
                @Johcee
            </StyledText>
        </StyledView>
    )
}