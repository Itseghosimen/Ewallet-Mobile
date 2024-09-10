import React from 'react'
import { StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { router, useLocalSearchParams } from 'expo-router'
import { Image } from 'expo-image'
import { Dimensions } from 'react-native'

export default function importedAsset() {
    const { qrCode } = useLocalSearchParams<{ qrCode?: string }>()
    const processQRCode = () => {
        setTimeout(() => {
            router.push('/decryptingKey')
        }, 500)
    }
    const layout = Dimensions.get('window').width
    return (
        <StyledView className='flex-1 bg-white dark:bg-background px-3 pb-5 pt-[10vh]'>
            {
                qrCode && (
                    <Image
                        source={qrCode}
                        style={{
                            height: layout * 0.9,
                            width: layout * 0.9,
                            borderRadius: 25
                        }}
                    />
                )
            }
            <StyledView className='flex-1' />
            <StyledTouch
                onPress={processQRCode}
                className='h-14 bg-black dark:bg-primary/80 rounded-full flex items-center justify-center'>
                <StyledText className='text-white dark:text-black text-base ' style={{
                    fontFamily: 'Inter_500Medium',
                }}>Continue</StyledText>
            </StyledTouch>
        </StyledView>
    )
}