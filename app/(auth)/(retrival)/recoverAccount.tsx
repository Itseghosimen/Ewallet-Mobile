import React, { useState } from 'react'
import { StyledInput, StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { Image } from 'expo-image'
import { useColorScheme } from 'nativewind'
import { Colors } from '@/constants/Colors'
import { router } from 'expo-router'
export default function accountRecovery() {
    const [username, setUsername] = useState('')
    const { colorScheme } = useColorScheme()

    const recoverUserAccount = () => {
        if (username) {
            router.push('/guadianRecovery')
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
                Enter the email or Username, of the account you want to retrieve.
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
                    placeholder='Username /Email / Address'
                    onChangeText={setUsername}
                    autoCorrect={false}
                    value={username}
                    placeholderTextColor={'#49515D'}
                    className={`flex-grow ${username && 'text-black dark:text-primary'} h-full text-base mb-1 px-3`} style={{
                        fontFamily: 'Inter_500Medium',
                    }} />
            </StyledView>
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
                    }}>Continue</StyledText>
            </StyledTouch>
        </StyledView>
    )
}