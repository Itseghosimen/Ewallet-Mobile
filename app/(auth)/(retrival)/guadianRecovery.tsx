import React, { useState } from 'react'
import { StyledInput, StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { Image } from 'expo-image'
import { useColorScheme } from 'nativewind'
import { Colors } from '@/constants/Colors'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function guadianRecovery() {
    const [username, setUsername] = useState('')
    const { colorScheme } = useColorScheme()
    const address = '0x667...jj78k'
    const recoverUserAccount = () => {
        if (username) {
            router.replace('/request')
        }
    }

    return (
        <StyledView className='py-5 px-3 bg-white dark:bg-background flex-1'>
            <StyledText
                className='text-black dark:text-white'
                style={{
                    fontSize: 11,
                    fontFamily: 'Inter_400Regular'
                }}>
                Enter the email / Username / Address, of the guardian you want to use and recover your account.
            </StyledText>
            <StyledView className='flex flex-row bg-white dark:bg-black items-center px-3 h-14 rounded-xl mt-3'
                style={{
                    borderWidth: 2,
                    borderColor: Colors[colorScheme].otpbg
                }}>
                <Image source={require('@/assets/icons/username.png')}
                    style={{
                        height: 20,
                        width: 20,
                        tintColor: !username ? '#49515D' : Colors[colorScheme].primary
                    }}
                />
                <StyledInput
                    placeholder='Johcee'
                    onChangeText={setUsername}
                    autoCorrect={false}
                    value={username}
                    placeholderTextColor={'#49515D'}
                    className={`flex-grow ${username && 'text-black dark:text-primary'} h-full text-base mb-1 px-3`} style={{
                        fontFamily: 'Inter_500Medium',
                    }} />
                <StyledTouch>
                    <Ionicons name="qr-code-outline" size={20} color={'#49515D'} />
                </StyledTouch>
            </StyledView>
            {
                address && (
                    <StyledView className='mt-2 flex-row items-center'>
                        <StyledText className='text-xs text-black dark:text-primary'
                            style={{
                                fontFamily: 'Inter_500Medium'
                            }}>Address : {address}</StyledText>
                        <Image source={require('@/assets/icons/3dcheck.png')}
                            style={{
                                height: 20,
                                width: 20
                            }}
                            contentFit='contain'
                        />
                    </StyledView>
                )
            }
            <StyledView className='flex-1' />

            <StyledTouch
                onPress={recoverUserAccount}
                style={{
                    paddingVertical: 16,
                    borderRadius: 25,
                    backgroundColor: username ? Colors[colorScheme].primary : Colors[colorScheme].otpbg,
                }}
                className='h-14 w-full rounded-full  flex items-center justify-center'>
                <StyledText className={`text-base ${username ? 'text-white dark:text-black' : 'text-[#939393]'} `}
                    style={{
                        fontFamily: 'Inter_500Medium',
                    }}>Send Request</StyledText>
            </StyledTouch>
        </StyledView>
    )
}