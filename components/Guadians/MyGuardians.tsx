import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { Image } from 'expo-image'
import SwitchBtn from '../general/Switch'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from 'nativewind'

export default function MyGuardians() {
    const { colorScheme } = useColorScheme()
    return (
        <StyledView className='flex-1 pt-5 space-y-7 pb-5'>
            <StyledText
                className='text-[#979797]'
                style={{
                    fontSize: 12,
                    fontFamily: 'Inter_500Medium'
                }}>
                Registered guardians can help you retrieve your Enetwallet account, approve or discontinue unwanted transactions
            </StyledText>

            <StyledView className='h-20 rounded-xl px-5 flex-row items-center justify-between bg-releiveLight dark:bg-releive'>
                <StyledText className='text-base text-black dark:text-white'
                    style={{
                        fontFamily: 'Inter_500Medium'
                    }}>
                    Ceomal20@gmail.com
                </StyledText>
                <Image source={require('@/assets/icons/3dcheck.png')}
                    style={{
                        height: 25,
                        width: 25
                    }}
                    contentFit='contain'
                />
            </StyledView>

            <StyledView className='rounded-xl px-5 py-3 bg-releiveLight dark:bg-releive'>
                <StyledView className='flex-row items-center justify-between'>
                    <StyledView className='flex-row items-center'>
                        <StyledText className='text-sm mr-3 text-black dark:text-white'
                            style={{
                                fontFamily: 'Inter_500Medium'
                            }}>
                            Johnny
                        </StyledText>
                        <Image source={require('@/assets/icons/verified.png')}
                            style={{
                                height: 13,
                                width: 13
                            }}
                            contentFit='contain'
                        />
                        <StyledText className='text-xs ml-1 text-black dark:text-primary'
                            style={{
                                fontFamily: 'Inter_500Medium'
                            }}>
                            Successful
                        </StyledText>
                    </StyledView>
                    <SwitchBtn />
                </StyledView>

                <StyledView className='bg-slate-200 dark:bg-[#171925] rounded-lg shadow-md mt-4 py-2 px-3'>
                    <StyledText className='text-secondary text-xs' style={{
                        fontFamily: 'Inter_400Regular'
                    }}>
                        Guardian since 08.Aug.2023
                    </StyledText>
                </StyledView>
            </StyledView>

            <StyledView className='rounded-xl px-5 py-3 bg-releiveLight dark:bg-releive'>
                <StyledView className='flex-row items-center justify-between'>
                    <StyledView className='flex-row items-center'>
                        <StyledText className='text-sm mr-3 text-black dark:text-white'
                            style={{
                                fontFamily: 'Inter_500Medium'
                            }}>
                            Johnny
                        </StyledText>
                        <Image source={require('@/assets/icons/verified.png')}
                            style={{
                                height: 13,
                                width: 13
                            }}
                            contentFit='contain'
                        />
                        <StyledText className='text-xs ml-1 text-black dark:text-primary'
                            style={{
                                fontFamily: 'Inter_500Medium'
                            }}>
                            Successful
                        </StyledText>
                    </StyledView>
                    <Pressable>
                        <Image source={require('@/assets/icons/times.png')}
                            style={{
                                height: 13,
                                width: 13,
                                tintColor: Colors[colorScheme].tint
                            }}
                            contentFit='contain'
                        />
                    </Pressable>
                </StyledView>

                <StyledView className='bg-slate-200 dark:bg-[#171925] rounded-lg shadow-md mt-4 py-2 px-3'>
                    <StyledText className='text-secondary text-xs' style={{
                        fontFamily: 'Inter_400Regular'
                    }}>
                        Guardian since 08.Aug.2023
                    </StyledText>
                </StyledView>
            </StyledView>

            <StyledView className='flex-1' />
            <StyledTouch className="flex-row items-center justify-center h-14 rounded-full bg-releive">
                <Image source={require('@/assets/icons/addguardian.png')}
                    style={{
                        height: 22,
                        width: 22,
                        tintColor: Colors[colorScheme].tint
                    }}
                    contentFit='contain'
                />
                <StyledText className={'ml-3 text-base text-black dark:text-white'}>
                    Add Guardian
                </StyledText>
            </StyledTouch>
        </StyledView>
    )
}