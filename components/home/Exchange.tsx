import React from 'react'
import { useColorScheme } from 'nativewind'
import { StyledInput, StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { Colors } from '@/constants/Colors'
import { Image } from 'expo-image'
import { router } from 'expo-router'

export default function Exchange(props: { max?: boolean | undefined; }) {
    const { colorScheme } = useColorScheme()
    return (
        <StyledView className='flex gap-y-0.5'>
            <StyledView className='rounded-xl p-1.5 pb-3'
                style={{
                    backgroundColor: Colors[colorScheme].otpbg,
                    gap: 8
                }}
            >
                <StyledView className='bg-white dark:bg-background rounded-lg pr-2 flex-row items-center justify-between'>
                    <StyledView className='flex-row items-center p-2 rounded-lg min-w-[50vw]'
                        style={{
                            backgroundColor: Colors[colorScheme].otpbg,
                            gap: 8
                        }}>
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
                                <Image source={require('@/assets/icons/arrow-bottom.png')}
                                    style={{
                                        height: 25,
                                        width: 25,
                                        tintColor: Colors[colorScheme].primary
                                    }}
                                    contentFit="contain" />
                            </StyledTouch>
                            <StyledText className='text-xs text-secondary '>Ethereum</StyledText>
                        </StyledView>
                    </StyledView>
                    <StyledView className='flex items-end'>
                        <StyledInput
                            placeholder='0'
                            style={{
                                fontFamily: 'Inter_500Medium',
                            }}
                            placeholderTextColor={Colors[colorScheme].tint}
                            className='text-black dark:text-white text-lg  text-right' />
                        <StyledText className='text-xs text-secondary '>$0.0</StyledText>
                    </StyledView>
                </StyledView>
                <StyledView className='flex-row items-center justify-between px-3'>
                    <StyledText
                        style={{
                            fontFamily: 'Inter_500Medium',
                        }} className='text-xs  text-secondary '>
                        From
                    </StyledText>
                    <StyledView className='flex items-end gap-y-2'>
                        <StyledView className='items-center flex-row '>
                            <Image
                                source={require('@/assets/icons/empty-wallet.png')}
                                contentFit="contain"
                                style={{
                                    height: 15,
                                    width: 15,
                                }} />
                            <StyledText
                                style={{
                                    fontFamily: 'Inter_500Medium',
                                }} className='ml-1 text-secondary  text-xs '>250.06 DAI</StyledText>
                        </StyledView>
                        <StyledTouch>
                            <StyledText
                                style={{
                                    fontFamily: 'Inter_500Medium',
                                }} className='text-xs text-black dark:text-primary '>
                                {props.max && 'MAX'}
                            </StyledText>
                        </StyledTouch>
                    </StyledView>
                </StyledView>
            </StyledView>
            <StyledView style={{
                height: 6,
                position: 'relative',
                zIndex: 2,
                width: 45,
                marginHorizontal: 'auto'
            }}>
                <StyledView style={{
                    position: 'absolute',
                    zIndex: 10,
                    height: 45,
                    width: 45,
                    top: -19.5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: Colors[colorScheme].background,
                    borderRadius: 50,
                }}>
                    <StyledView style={{
                        height: 35,
                        width: 35,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: Colors[colorScheme].otpbg,
                        borderRadius: 40,
                    }}>
                        <Image
                            source={require('@/assets/icons/shapes.png')}
                            contentFit="contain"
                            style={{
                                height: 22,
                                width: 22,
                                tintColor: Colors[colorScheme].primary

                            }} />
                    </StyledView>
                </StyledView>
            </StyledView>
            <StyledView className='rounded-xl p-1.5'
                style={{
                    backgroundColor: Colors[colorScheme].otpbg,
                    gap: 8
                }}
            >
                <StyledView className='flex-row items-center justify-between px-3'>
                    <StyledText
                        style={{
                            fontFamily: 'Inter_500Medium',
                        }} className='text-xs  text-secondary '>
                        To
                    </StyledText>
                    <StyledView className='flex items-end gap-y-2'>
                        <StyledText />
                        <StyledView className='items-center flex-row '>
                            <Image
                                source={require('@/assets/icons/empty-wallet.png')}
                                contentFit="contain"
                                style={{
                                    height: 15,
                                    width: 15,
                                }} />
                            <StyledText
                                style={{
                                    fontFamily: 'Inter_500Medium',
                                }} className='ml-1 text-secondary  text-xs '>250.06 DAI</StyledText>
                        </StyledView>
                    </StyledView>
                </StyledView>
                <StyledView className=' bg-white dark:bg-background rounded-lg pr-2 flex-row items-center justify-between'>
                    <StyledView className='flex-row items-center p-2 rounded-lg min-w-[50vw]'
                        style={{
                            backgroundColor: Colors[colorScheme].otpbg,
                            gap: 8
                        }}>
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
                                <Image source={require('@/assets/icons/arrow-bottom.png')}
                                    style={{
                                        height: 25,
                                        width: 25,
                                        tintColor: Colors[colorScheme].primary
                                    }}
                                    contentFit="contain" />
                            </StyledTouch>
                            <StyledText className='text-xs text-secondary '>Ethereum</StyledText>
                        </StyledView>
                    </StyledView>
                    <StyledView className='flex items-end'>
                        <StyledInput
                            placeholder='0'
                            placeholderTextColor={Colors[colorScheme].tint}
                            style={{
                                fontFamily: 'Inter_500Medium',
                            }}
                            className='text-black dark:text-white text-lg  text-right' />
                        <StyledText className='text-xs text-secondary '>$0.0</StyledText>
                    </StyledView>
                </StyledView>
            </StyledView>
            <StyledView className='pt-3 flex-row items-center'>
                <Image
                    source={require('@/assets/icons/exchange.png')}
                    style={{
                        height: 15,
                        width: 15,
                        tintColor: Colors[colorScheme].primary
                    }} />
                <StyledView className='flex-row items-center ml-2'>
                    <StyledText
                        style={{
                            fontFamily: 'Inter_500Medium',
                        }} className='text-black dark:text-white text-sm  '>
                        1 DAI = 1.001 USDT
                    </StyledText>
                    <StyledText
                        style={{
                            fontFamily: 'Inter_500Medium',
                        }} className='text-secondary text-xs   ml-1'>
                        ( $1.00,5 )
                    </StyledText>
                </StyledView>
            </StyledView>
        </StyledView>
    )
}