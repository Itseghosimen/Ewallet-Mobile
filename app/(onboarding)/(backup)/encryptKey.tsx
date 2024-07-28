import { Dimensions, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { StyledInput, StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { Image } from 'expo-image'
import { useColorScheme } from 'nativewind'
import { Colors } from '@/constants/Colors'
import { Entypo } from '@expo/vector-icons'
import { router } from 'expo-router'
import EncryptModal from '@/app/(main)/(modal)/encryptModal'

export default function encryptKey() {
    const { colorScheme } = useColorScheme()
    const layout = Dimensions.get('window')
    const [password, setPassword] = useState(true)
    const [confirmPassword, setConfirmPassword] = useState(true)

    return (
        <StyledView className='flex-1 bg-white dark:bg-background px-3 pb-5 gap-y-3'>
            <StyledView className='gap-y-1 flex items-center'>
                <StyledView className='h-10 w-10 rounded-full bg-black dark:bg-white flex items-center justify-center'>
                    <Image
                        source={require('@/assets/icons/scantone.png')}
                        style={{
                            height: 25,
                            width: 25,
                            tintColor: Colors[colorScheme].background
                        }}
                        contentFit='contain' />
                </StyledView>
                <StyledView className='flex gap-y-4'>
                    <StyledText
                        className='  text-sm text-black dark:text-white text-center' style={{
                            fontFamily: 'Inter_500Medium',
                        }}>
                        Encrypt your Key in a QR code
                    </StyledText>
                    <StyledText
                        className='  text-xs text-black dark:text-white text-center'
                        style={{
                            maxWidth: layout.width * 0.85,
                            marginHorizontal: 'auto',
                            fontFamily: 'Inter_400Regular',
                        }}>
                        We will generate a QR code that contains your encrypted key
                        The QR code will be encrypted with the password you will define
                        below
                    </StyledText>
                </StyledView>
            </StyledView>

            <StyledView className='gap-y-3 w-full'>
                <StyledText className='text-sm font-regular text-black dark:text-white  ' style={{
                    fontFamily: 'Inter_500Medium',
                }}>Password</StyledText>
                <StyledView className='flex-row items-center border border-[#3A4452] px-3 h-12 rounded-lg'>
                    <StyledInput
                        secureTextEntry={password ? true : false}
                        className='flex-grow text-lg  text-black dark:text-white'
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
                    />
                    <TouchableWithoutFeedback onPress={() => setConfirmPassword(!confirmPassword)}>
                        <Entypo name={password ? 'eye' : 'eye-with-line'} size={20} color='#49515D' />
                    </TouchableWithoutFeedback>
                </StyledView>
            </StyledView>
            <StyledView className='gap-y-3'>
                <StyledText className='text-xs text-secondary  ' style={{
                    fontFamily: 'Inter_500Medium',
                }}>
                    Password strength
                </StyledText>
                <StyledView className='gap-y-0.5'>
                    <StyledText className='text-black dark:text-white  ' style={{
                        fontFamily: 'Inter_500Medium',
                    }}>Rules:</StyledText>
                    <StyledText
                        className='text-secondary text-xs'
                        style={{
                            fontFamily: 'Inter_400Regular'
                        }}>
                        Password should
                        <StyledText className='text-xs  text-[#AF2525]' style={{
                            fontFamily: 'Inter_500Medium',
                        }}>{' '}NOT{' '}
                        </StyledText>be the same with your registration password
                    </StyledText>
                    <StyledView className='flex-row items-center gap-2'>
                        <StyledView className={`h-2.5 w-2.5 rounded-full border border-black dark:border-primary`} />
                        <StyledText className='text-secondary text-xs ' style={{
                            fontFamily: 'Inter_500Medium',
                        }}>Not shorter than 8 characters</StyledText>
                    </StyledView>
                    <StyledView className='flex-row items-center gap-2'>
                        <StyledView className={`h-2.5 w-2.5 rounded-full border border-black dark:border-primary`} />
                        <StyledText className='text-secondary text-xs ' style={{
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
            <StyledView className='flex-1 items-center justify-center gap-y-1'>
                <Image
                    source={require('@/assets/icons/lock-circle.png')}
                    style={{
                        height: 35,
                        width: 35,
                        tintColor: '#F80F0F'
                    }}
                    contentFit='contain' />
                <StyledText className='text-xs   text-[#F80F0F]' style={{
                    fontFamily: 'Inter_500Medium',
                }}>Remember to use password you CANNOT forget</StyledText>
            </StyledView>
            <StyledTouch
                onPress={() => router.push('encryptCode')}
                className='h-14 bg-black dark:bg-primary/80 rounded-full flex items-center justify-center'>
                <StyledText className='text-white dark:text-black text-base ' style={{
                    fontFamily: 'Inter_500Medium',
                }}>Continue</StyledText>
            </StyledTouch>
            <EncryptModal />
        </StyledView>
    )
}