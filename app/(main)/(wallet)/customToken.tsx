import React, { useState } from 'react'
import { StyledInput, StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from 'nativewind'
import * as Clipboard from 'expo-clipboard';
import { Entypo } from '@expo/vector-icons'
import { Image } from 'expo-image'
import Button from '@/components/general/Buttons/Button';
import { router } from 'expo-router';

export default function customToken() {
    const { colorScheme } = useColorScheme()
    const [address, setAddress] = useState('')
    const fetchCopiedText = async () => {
        const text = await Clipboard.getStringAsync();
        setAddress(text);
    };

    return (
        <StyledView className='flex-1 bg-white dark:bg-background px-3 '>
            <StyledView
                style={{
                    backgroundColor: Colors[colorScheme].otpbg,
                    height: 45,
                    borderRadius: 10,
                    paddingHorizontal: 15,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                <StyledText
                    className='text-sm text-black dark:text-white'
                    style={{ fontFamily: 'Inter_500Medium' }}
                >
                    Network
                </StyledText>
                <Button
                    onPress={() => router.push('network')}
                    title={"Binance"}
                    textStyle={'text-[#F3BA2F] text-sm'}
                    style={'flex-row-reverse'}
                    Icon={
                        <Entypo name="chevron-small-right" size={20} color="#F3BA2F" />
                    }
                />
            </StyledView>

            <StyledView className='pt-10 gap-y-7'>
                <StyledView className='flex-row items-center border border-secondary px-3 h-12 rounded-lg'>
                    <StyledInput
                        placeholder='Contract Address'
                        value={address}
                        onChangeText={setAddress}
                        placeholderTextColor={'#49515D'}
                        className='flex-grow text-sm  text-black dark:text-white'
                    />
                    <StyledView className='flex-row items-center h-full' style={{ gap: 15 }}>
                        <StyledTouch
                            onPress={fetchCopiedText}>
                            <StyledText className='text-dark dark:text-primary text-xs'
                                style={{
                                    fontFamily: 'Inter_500Medium'
                                }}>
                                Paste
                            </StyledText>
                        </StyledTouch>
                        <StyledTouch>
                            <Image
                                source={require('@/assets/icons/scan.png')}
                                style={{
                                    height: 17,
                                    width: 17,
                                    tintColor: Colors[colorScheme].primary
                                }}
                                contentFit='contain' />
                        </StyledTouch>
                    </StyledView>
                </StyledView>
                <StyledView className='flex-row items-center border border-secondary px-3 h-12 rounded-lg'>
                    <StyledInput
                        placeholder='Name'
                        placeholderTextColor={'#49515D'}
                        className='flex-grow text-sm  text-black dark:text-white'
                    />
                </StyledView>
                <StyledView className='flex-row items-center border border-secondary px-3 h-12 rounded-lg'>
                    <StyledInput
                        placeholder='Symbol'
                        placeholderTextColor={'#49515D'}
                        className='flex-grow text-sm  text-black dark:text-white'
                    />
                </StyledView>
                <StyledView className='flex-row items-center border border-secondary px-3 h-12 rounded-lg'>
                    <StyledInput
                        placeholder='Decimals'
                        placeholderTextColor={'#49515D'}
                        className='flex-grow text-sm  text-black dark:text-white'
                    />
                </StyledView>
            </StyledView>

            <StyledView className='flex-1 items-center pt-28'>
                <StyledView className='flex-row items-center justify-center w-full max-w-[90vw] h-20 rounded-xl'
                    style={{
                        gap: 10,
                        backgroundColor: 'rgba(243, 85, 85, 0.15)'
                    }}>
                    <Image
                        source={require('@/assets/icons/shield.png')}
                        style={{
                            height: 24,
                            width: 24,
                            tintColor: '#FE0A0A'
                        }}
                    />
                    <StyledText className='whitespace-pre-line max-w-[70vw] text-[#FC0404] text-xs'>
                        Anyone can create a token, including fake
                        versions of existing tokens. Learn about Scams
                        and security risk and management.
                    </StyledText>
                </StyledView>
            </StyledView>
        </StyledView>
    )
}