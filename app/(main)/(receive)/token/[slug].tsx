import React from 'react'
import { StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { Image, ImageBackground } from 'expo-image'
import * as Clipboard from 'expo-clipboard';
import { useLocalSearchParams } from 'expo-router';
import { StyledComponent, useColorScheme } from 'nativewind';
import { Dimensions, StatusBar } from 'react-native';
import { Colors } from '@/constants/Colors';

export default function Token() {
    const { name } = useLocalSearchParams<{ name: string }>()
    const { colorScheme } = useColorScheme()
    const Account = '0x63802792790427902huhkfjkhjfhjf'

    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(Account);
    };

    return (
        <StyledView className='flex-1 items-center bg-white dark:bg-background gap-y-3 px-3 pb-5' style={{ gap: 20 }}>
            <StatusBar
                barStyle={colorScheme == 'dark' ? 'light-content' : 'dark-content'}
            />
            <StyledTouch className='flex-row items-center rounded-lg h-12 px-3'
                style={{
                    backgroundColor: Colors[colorScheme].otpbg
                }}>
                <Image source={require('@/assets/icons/eth.png')}
                    style={{
                        height: 25,
                        width: 25
                    }}
                    contentFit="contain" />
                <StyledText className='text-sm  text-black dark:text-white mx-2' style={{
                    fontFamily: 'Inter_500Medium',
                }}>
                    Polygon
                </StyledText>
                <Image source={require('@/assets/icons/arrow-bottom.png')}
                    style={{
                        height: 25,
                        width: 25,
                        tintColor: Colors[colorScheme].primary
                    }}
                    contentFit="contain" />
            </StyledTouch>

            <StyledView className='flex items-center' style={{ gap: 4 }}>
                <StyledComponent component={ImageBackground}
                    source={require('@/assets/images/qrcode.png')}
                    contentFit="contain"
                    className='w-[60vw] mx-auto h-[60vw] mb-3'
                />
                <StyledText className='text-sm text-black dark:text-white' style={{
                    fontFamily: 'Inter_500Medium',
                }}>Scan QR code to receive DAI</StyledText>
            </StyledView>
            <StyledView className='flex-row w-full items-center justify-between pl-4 pr-8 h-12 rounded-lg'
                style={{
                    backgroundColor: Colors[colorScheme].otpbg
                }}>
                <StyledText className='text-sm   text-secondary' style={{
                    fontFamily: 'Inter_500Medium',
                }}>
                    {Account}
                </StyledText>
                <StyledTouch
                    onPress={copyToClipboard}>
                    <Image source={require('@/assets/icons/document-copy.png')}
                        style={{
                            height: 17,
                            width: 17,
                            marginHorizontal: 'auto',
                            tintColor: Colors[colorScheme].primary
                        }}
                        contentFit="contain"
                    />
                </StyledTouch>
            </StyledView>
            <StyledView className='flex-1 items-center justify-center'>
                <StyledText className='text-xs   text-secondary max-w-[90vw] mx-auto text-center' style={{
                    fontFamily: 'Inter_500Medium',
                }}>
                    NOTE: Send only <StyledText
                        style={{
                            fontFamily: 'Inter_700Bold',
                        }} className=' text-black dark:text-white '>
                        {' '}USDT{' '}
                    </StyledText>
                    ({name}) to this wallet address.
                    Sending other token from other public chains might result in
                    permanent loss
                </StyledText>
            </StyledView>
            <StyledTouch
                onPress={undefined}
                className='h-14 w-full rounded-2xl flex items-center justify-center'
                style={{
                    backgroundColor: Colors[colorScheme].otpbg
                }}>
                <StyledText className='text-black dark:text-white text-base' style={{
                    fontFamily: 'Inter_500Medium',
                }}>Share</StyledText>
            </StyledTouch>
        </StyledView>
    )
}