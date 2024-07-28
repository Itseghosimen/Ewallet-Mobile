import React, { useState } from 'react'
import { useColorScheme } from 'nativewind'
import { StyledInput, StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { Dimensions, StatusBar } from 'react-native'
import { Image, ImageBackground } from 'expo-image'
import { router } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Button from '@/components/general/Buttons/Button'
import { Colors } from '@/constants/Colors'


export default function login() {
    const layout = Dimensions.get('window')
    const { colorScheme } = useColorScheme()
    const [focused, setFocused] = useState<string>('')
    const { top } = useSafeAreaInsets()

    return (
        <StyledView className='flex-1 bg-white dark:bg-background px-3 pb-5 gap-y-7' style={{ paddingTop: top }}>
            <StatusBar
                barStyle={colorScheme == 'dark' ? 'light-content' : 'dark-content'}
            />
            <StyledView>
                <StyledView className='flex-row items-center justify-center gap-x-2 mb-2'>
                    <StyledView className='h-1 w-1 rounded-full bg-black dark:bg-white' />
                    <StyledText style={{
                        fontFamily: 'Inter_700Bold',
                    }}
                        className='text-xl   text-black dark:text-white'>
                        Enetwallet
                    </StyledText>
                    <StyledView className='h-1 w-1 rounded-full bg-black dark:bg-white' />
                </StyledView>
                {
                    colorScheme == 'light' ?
                        <ImageBackground
                            source={require('@/assets/images/handfull-light.png')}
                            transition={500}
                            style={{
                                height: layout.height * 0.32,
                                width: '100%'
                            }}
                            contentFit='contain'
                        />
                        :
                        <ImageBackground
                            source={require('@/assets/images/handfull.png')}
                            transition={500}
                            style={{
                                height: layout.height * 0.32,
                                width: '100%'
                            }}
                            contentFit='contain'
                        />
                }
            </StyledView>
            <StyledView className='gap-y-7'>
                <StyledInput
                    placeholder='Phone or Email Address'
                    onFocus={() => setFocused('userName')}
                    onBlur={() => setFocused('')}
                    placeholderTextColor={focused === 'userName' ? 'rgba(24, 234, 255, 0.2)' : 'rgba(73, 81, 93, 0.2)'}
                    className={`flex-row items-center border border-[#3A4452] px-3 h-12 rounded-lg flex-grow text-sm  text-black ${focused === 'userName' ? 'border-black dark:border-[#18EAFF]' : 'border-[#49515D] '} dark:text-white`}
                />
                <StyledInput
                    placeholder='Password'
                    onFocus={() => setFocused('password')}
                    onBlur={() => setFocused('')}
                    secureTextEntry={true}
                    placeholderTextColor={focused === 'password' ? 'rgba(24, 234, 255, 0.2)' : 'rgba(73, 81, 93, 0.2)'}
                    className={`flex-row items-center border border-[#3A4452] px-3 h-12 rounded-lg flex-grow text-sm  text-black ${focused === 'password' ? 'border-black dark:border-[#18EAFF]' : 'border-[#49515D] '} dark:text-white`}
                />
                <StyledTouch
                    onPress={() => router.replace('home')}
                    className='h-14 bg-black dark:bg-primary/80 rounded-2xl flex items-center justify-center'>
                    <StyledText className='text-white dark:text-black text-base ' style={{
                        fontFamily: 'Inter_500Medium',
                    }}>Continue</StyledText>
                </StyledTouch>
            </StyledView>
            <StyledView className='flex items-center justify-center'>
                <Button onPress={() => router.push('recoveryName')} title={'Forgot Password?'}
                    textStyle={'text-sm   text-black dark:text-primary underline underline-offset-2 text-center'} />
            </StyledView>
            <StyledView className='flex-1 justify-center items-center gap-y-3'>
                <StyledView className='flex-row items-center justify-center gap-x-2'>
                    <StyledView style={{
                        width: layout.width * 0.2,
                        height: 1,
                        backgroundColor: Colors[colorScheme].tint
                    }} />
                    <StyledText className='text-xs  text-[#B6B6B6]'>Get Started </StyledText>
                    <StyledView style={{
                        width: layout.width * 0.2,
                        height: 1,
                        backgroundColor: Colors[colorScheme].tint
                    }} />
                </StyledView>
                <StyledView className='flex-row items-center justify-center gap-3'>
                    <StyledTouch className='border border-black dark:border-primary/40 h-11 w-11 flex items-center justify-center rounded-xl'>
                        <Image source={require('@/assets/icons/passkey.png')}
                            style={{
                                height: 25,
                                width: 25,
                                tintColor: Colors[colorScheme].primary
                            }}
                        />
                    </StyledTouch>
                    <StyledTouch className='border border-black dark:border-primary/40 h-11 w-11 flex items-center justify-center rounded-xl'>
                        <Image source={require('@/assets/icons/apple.png')}
                            style={{
                                height: 25,
                                width: 25,
                                tintColor: Colors[colorScheme].tint
                            }}
                        />
                    </StyledTouch>
                    <StyledTouch className='border border-black dark:border-primary/40 h-11 w-11 flex items-center justify-center rounded-xl'>
                        <Image source={require('@/assets/icons/google.png')}
                            style={{
                                height: 30,
                                width: 30,
                            }}
                        />
                    </StyledTouch>
                </StyledView>
            </StyledView>
        </StyledView>
    )
}