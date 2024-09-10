import { Colors } from '@/constants/Colors'
import { StyledInput, StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { Image } from 'expo-image'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'nativewind'
import React from 'react'

export default function decryptingKey() {
    const { colorScheme } = useColorScheme()
    const [password, setPassword] = React.useState<string>()

    const confimPassword = () => {
        router.push('/otpVerify')
    }

    return (
        <StyledView className='flex-1 bg-white dark:bg-background px-3 pb-5'>
            <StatusBar style='auto' />
            <StyledView className='flex items-center pt-10'>
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
                <StyledText
                    style={{
                        fontFamily: 'Inter_500Medium',
                        color: Colors[colorScheme].tint,
                        fontSize: 14,
                        marginTop: 16,
                        marginBottom: 11,
                        opacity: .9
                    }}>
                    Decrypt your Key and log in
                </StyledText>
                <StyledText
                    style={{
                        fontFamily: 'Inter_400Regular',
                        color: Colors[colorScheme].tint,
                        fontSize: 12,
                        textAlign: 'center',
                        opacity: .75
                    }}>
                    Decrypt the QR code by entering the {'\n'} password you encrypted it with
                </StyledText>
            </StyledView>
            <StyledView className='gap-y-3 mt-8'>
                <StyledText className='text-sm font-regular text-black dark:text-white' style={{
                    fontFamily: 'Inter_500Medium',
                }}>Password</StyledText>
                <StyledView className='flex-row items-center border border-[#3A4452] px-3 h-12 rounded-lg'>
                    <StyledInput
                        secureTextEntry={true}
                        onChangeText={setPassword}
                        value={password}
                        className='flex-grow text-lg text-black dark:text-white'
                        style={{
                            fontFamily: 'Inter_500Medium',
                            height: 50,
                            verticalAlign: 'middle'
                        }} />
                </StyledView>

            </StyledView>
            <StyledView className='flex-1' />
            <StyledTouch
                onPress={confimPassword}
                className='h-14 bg-black dark:bg-primary/80 rounded-full flex items-center justify-center'>
                <StyledText className='text-white dark:text-black text-base ' style={{
                    fontFamily: 'Inter_500Medium',
                }}>Continue</StyledText>
            </StyledTouch>
        </StyledView>
    )
}