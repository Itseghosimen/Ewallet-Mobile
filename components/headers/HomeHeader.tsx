import React from 'react'
import { BlurView } from 'expo-blur'
import { useColorScheme } from 'nativewind'
import { Colors } from '@/constants/Colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { StyledText, StyledTouch, StyledView } from '@/constants/imports'
import Button from '../general/Buttons/Button'
import { router } from 'expo-router'
import { Image } from 'expo-image'

export default function HomeHeader() {
    const { top } = useSafeAreaInsets()
    const { colorScheme } = useColorScheme()
    return (
        <BlurView
            intensity={0.3}
            tint='default'
            style={{
                backgroundColor: Colors[colorScheme].background,
                paddingTop: top,
            }}>

            <StyledView className='h-14 flex-row items-center justify-between px-3'>
                <Button
                    onPress={() => router.push('/profile')}
                    title={`Hello ${'Micheal'}`}
                    textStyle={'text-base text-black dark:text-white'}
                    style={'gap-2'}
                    Icon={
                        <Image
                            source={require('@/assets/icons/profile.png')}
                            style={{
                                height: 24,
                                width: 24
                            }}
                        />} />
                <StyledView className='flex-row gap-x-4 items-center'>
                    <StyledTouch>
                        <Image
                            source={require('@/assets/icons/scanner.png')}
                            style={{
                                height: 20,
                                width: 20
                            }}
                            contentFit='contain'
                        />
                    </StyledTouch>
                    <StyledTouch>
                        <StyledView className='relative'>
                            <Image
                                source={require('@/assets/icons/notification.png')}
                                style={{
                                    height: 20,
                                    width: 20
                                }}
                                contentFit='contain'
                            />
                            <StyledView className='h-3 w-3 absolute -top-2 -right-1.5'>
                                <StyledView className='h-3 w-3 rounded-full bg-black dark:bg-primary flex items-center justify-center'>
                                    <StyledText
                                        style={{
                                            fontSize: 10,
                                            fontFamily: 'Inter_500Medium',
                                        }}
                                        className='text-white dark:text-black  '
                                    >4</StyledText>
                                </StyledView>
                            </StyledView>
                        </StyledView>
                    </StyledTouch>
                    <StyledTouch
                        onPress={() => router.push('/transaction')}>
                        <StyledView className='relative'>
                            <Image
                                source={require('@/assets/icons/clipboard2.png')}
                                style={{
                                    height: 20,
                                    width: 20
                                }}
                                contentFit='contain'
                            />
                            <StyledView className='h-3 w-3 absolute -top-2 -right-1.5'>
                                <StyledView className='h-3 w-3 rounded-full bg-black dark:bg-primary flex items-center justify-center'>
                                    <StyledText
                                        style={{
                                            fontSize: 10,
                                            fontFamily: 'Inter_500Medium',
                                        }}
                                        className='text-white dark:text-black  ' >4</StyledText>
                                </StyledView>
                            </StyledView>
                        </StyledView>
                    </StyledTouch>
                    <StyledTouch
                        onPress={() => router.push('/(modal)/tokenModal')}>
                        <Image
                            source={require('@/assets/icons/tok.png')}
                            style={{
                                height: 24,
                                width: 24
                            }}
                            contentFit='contain'
                        />
                    </StyledTouch>
                </StyledView>
            </StyledView>
        </BlurView >
    )
}