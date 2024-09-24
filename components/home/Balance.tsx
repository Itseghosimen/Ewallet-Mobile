import { StyledText, StyledTouch, StyledView } from '@/constants/imports'
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons'
import Button from '../general/Buttons/Button';
import { Image } from 'expo-image';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from 'nativewind';
import { router } from 'expo-router';

export default function Balance(props: { balance: number; increase: number; percentIncrease: number; menu?: boolean; }) {
    const [show, setShow] = useState(true);
    const { colorScheme } = useColorScheme()

    return (
        <StyledView className='flex-row items-center justify-between'>

            <StyledView className='gap-y-1'>
                <StyledView className='flex-row gap-x-2.5 items-center'>
                    <StyledText
                        style={{
                            fontFamily: 'Inter_400Regular',
                        }}
                        className='text-black dark:text-[#B6B6B6]'>Total Balance</StyledText>
                    <StyledTouch
                        onPress={() => setShow(!show)}>
                        <Entypo name={show ? 'eye' : 'eye-with-line'} size={14} color='#49515D' />
                    </StyledTouch>
                </StyledView>
                <StyledView className='flex-row items-baseline gap-x-1'>
                    <StyledText style={{
                        fontFamily: 'Inter_700Bold',
                    }} className='text-2xl   text-black dark:text-white'>
                        {
                            show ?
                                props.balance?.toLocaleString('en-US', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                    style: 'currency',
                                    currency: 'USD'
                                })
                                : '****'
                        }
                    </StyledText>
                    <StyledText
                        style={{
                            fontFamily: 'Inter_600SemiBold',
                        }} className='text-secondary   text-sm'>
                        {
                            show ? 'USD' : ''
                        }
                    </StyledText>
                </StyledView>
                <StyledView className='flex-row gap-x-1.5 items-center'>
                    <StyledText
                        style={{
                            fontFamily: 'Inter_500Medium',
                        }} className='  text-xs text-black dark:text-primary'>
                        +{props.increase.toLocaleString('en-US', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                            style: 'currency',
                            currency: 'USD'
                        })}
                    </StyledText>
                    <StyledView className='px-2 h-5 rounded-md flex items-center justify-center bg-[#dddddd] dark:bg-[#073034]'>
                        <StyledText style={{
                            fontFamily: 'Inter_400Regular',
                        }} className='text-xs text-black dark:text-primary'>
                            +{props.percentIncrease.toLocaleString('en-US', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}%
                        </StyledText>
                    </StyledView>
                </StyledView>
            </StyledView>

            <StyledView>
                {
                    props.menu &&
                    <Button title={'Menu'} onPress={() => router.push('/(modal)/menuModal')}
                        Icon={
                            <Image
                                source={require('@/assets/icons/menu.png')}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: Colors[colorScheme].background
                                }}
                                contentFit='contain'
                            />
                        }
                        textStyle={'text-white dark:text-black text-base'}
                        style={'bg-black dark:bg-primary/80 flex-row-reverse px-4 gap-x-2 h-11 rounded-full'} />
                }
            </StyledView>
        </StyledView>
    )
}
