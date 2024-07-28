import React from 'react'
import { useColorScheme } from 'nativewind'
import { BlurView } from 'expo-blur'
import { Colors } from '@/constants/Colors'
import { StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { Image } from 'expo-image'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import Button from '../general/Buttons/Button'
import * as Clipboard from 'expo-clipboard';


export default function WalletTokenHeader() {
    const { top } = useSafeAreaInsets()
    const { colorScheme } = useColorScheme()
    const Account = '0x045....zZT6'
    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(Account);
    };



    return (
        <BlurView
            intensity={0.3}
            tint='default'
            style={{
                backgroundColor: Colors[colorScheme].background,
                paddingTop: top,
                paddingBottom: 10
            }}>
            <StyledView className='flex-row items-start justify-between pl-4 pr-7'>

                <StyledTouch onPress={router.back} className='mt-1'>
                    <Image source={require('@/assets/icons/back-arrow.png')}
                        style={{
                            height: 25,
                            width: 25,
                            tintColor: Colors[colorScheme].tint,
                            marginRight: 10
                        }}
                    />
                </StyledTouch>

                <StyledView className='flex items-center'>
                    <StyledView className='flex-row items-center mb-1'>
                        <Image
                            source={require('@/assets/icons/ethereum.png')}
                            style={{
                                height: 30,
                                width: 30
                            }}
                            contentFit='contain'
                        />
                        <StyledText
                            className='text-black dark:text-white text-base ml-2 uppercase'
                            style={{
                                fontFamily: 'Inter_600SemiBold'
                            }}>
                            Eth
                        </StyledText>
                    </StyledView>
                    <Button title={Account}
                        onPress={copyToClipboard}
                        style={'flex-row-reverse'}
                        textStyle={'text-xs text-secondary'}
                        Icon={
                            <Image
                                source={require('@/assets/icons/document-copy.png')}
                                style={{
                                    height: 13,
                                    width: 13,
                                    tintColor: Colors[colorScheme].primary,
                                    marginLeft: 8
                                }}
                                contentFit='contain'
                            />
                        } />
                </StyledView>


                <StyledTouch className='mt-2'>
                    <Image
                        source={require('@/assets/icons/alert.png')}
                        contentFit="contain"
                        style={{
                            tintColor: Colors[colorScheme].tint,
                            height: 16,
                            width: 16
                        }} />
                </StyledTouch>
            </StyledView>
        </BlurView>
    )
}