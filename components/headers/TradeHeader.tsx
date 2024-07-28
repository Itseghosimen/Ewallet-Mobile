import React, { useState } from 'react'
import { useColorScheme } from 'nativewind'
import { BlurView } from 'expo-blur'
import { Colors } from '@/constants/Colors'
import { StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { Image } from 'expo-image'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { router } from 'expo-router'



export default function TradeHeader() {
    const { top } = useSafeAreaInsets()
    const { colorScheme } = useColorScheme()
    const [favourite, setFavourite] = useState(false)




    return (
        <BlurView
            intensity={0.3}
            tint='default'
            style={{
                backgroundColor: Colors[colorScheme].background,
                paddingTop: top,
                paddingBottom: 10
            }}>
            <StyledView className='flex-row items-center justify-between pl-4 pr-7'>
                <StyledView className='flex-row items-center' style={{ gap: 8 }}>
                    <Image source={require('@/assets/icons/ethereum.png')}
                        style={{
                            height: 40,
                            width: 40
                        }}
                        contentFit='contain'
                    />
                    <StyledView>
                        <StyledTouch
                            onPress={() => router.push('swapToken')}
                            className='flex-row items-center'>
                            <StyledText
                                style={{
                                    fontFamily: 'Inter_500Medium',
                                }} className='text-sm  text-black dark:text-white mr-1 uppercase'>
                                Eth
                            </StyledText>
                            <Image source={require('@/assets/icons/chervon-arrow-down.png')}
                                style={{
                                    height: 15,
                                    width: 15,
                                    tintColor: Colors[colorScheme].tint
                                }}
                                contentFit="contain" />
                        </StyledTouch>
                        <StyledText className='text-xs text-secondary '>Ethereum</StyledText>
                    </StyledView>
                </StyledView>


                <StyledView className='flex-row items-center' style={{
                    gap: 20
                }}>
                    <StyledTouch
                        onPress={() => setFavourite(!favourite)}>
                        <Image
                            source={favourite ? require('@/assets/icons/star-filled.png') : require('@/assets/icons/star-outline.png')}
                            contentFit="contain"
                            style={{
                                height: 20,
                                width: 20
                            }} />
                    </StyledTouch>
                    <StyledTouch>
                        <Image
                            source={require('@/assets/icons/alert.png')}
                            contentFit="contain"
                            style={{
                                tintColor: '#49515D',
                                height: 16,
                                width: 16
                            }} />
                    </StyledTouch>
                    <StyledTouch>
                        <Image
                            source={require('@/assets/icons/export.png')}
                            contentFit="contain"
                            style={{
                                tintColor: '#49515D',
                                height: 16,
                                width: 16
                            }} />
                    </StyledTouch>
                </StyledView>
            </StyledView>
        </BlurView>
    )
}