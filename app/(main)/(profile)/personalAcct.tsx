import React from 'react'
import { StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { Image, ImageBackground } from 'expo-image';
import { useColorScheme } from 'nativewind';
import * as Clipboard from 'expo-clipboard';
import { Colors } from '@/constants/Colors';
import { Entypo } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function personalAcct() {
    const { colorScheme } = useColorScheme()
    return (
        <StyledView className='flex-1 px-3 bg-white dark:bg-background pt-5 space-y-8'>
            <StyledView className='flex-row justify-between items-center p-3 rounded-xl relative mb-3 border-black dark:border-primary'
                style={{
                    backgroundColor: colorScheme === 'light' ? '#F9f9f9' : '#12131B',
                }}
            >
                <StyledView className='flex-row gap-x-3.5 items-center'>
                    <ImageBackground
                        source={require('@/assets/images/1.png')}
                        style={{
                            height: 45,
                            width: 45
                        }}
                        contentFit='contain'
                        contentPosition={'top center'}
                    />
                    <StyledView>
                        <StyledText
                            style={{
                                fontFamily: 'Inter_600SemiBold',
                            }} className='text-base  text-black dark:text-white'>
                            Johcee
                        </StyledText>

                        <StyledView className='flex-row gap-x-1.5 items-center justify-center'>
                            <StyledText
                                style={{
                                    fontFamily: 'Inter_500Medium',
                                }} className='text-xs   text-secondary'>
                                EVM: 0x06A4....67t7Db
                            </StyledText>
                            <StyledTouch onPress={async () => {
                                await Clipboard.setStringAsync('0x06A4....67t7Db');
                            }}>
                                <Image
                                    source={require('@/assets/icons/document-copy.png')}
                                    style={{
                                        height: 15,
                                        width: 15,
                                    }}
                                    contentFit='contain' />
                            </StyledTouch>
                        </StyledView>
                    </StyledView>
                </StyledView>
            </StyledView>

            <StyledTouch onPress={() => router.push('/renameWallet')} className='flex-row items-center justify-between '>
                <StyledView className='flex-row items-center '>
                    <Image
                        source={require('@/assets/icons/user-edit.png')}
                        style={{
                            height: 26,
                            width: 26
                        }}
                        contentFit='contain'
                    />
                    <StyledText
                        className='text-sm ml-2 text-black dark:text-white'
                        style={{
                            fontFamily: 'Inter_500Medium'
                        }}>
                        Change name
                    </StyledText>
                </StyledView>
                <Entypo name="chevron-small-right" size={24} color={'#49515D'} />
            </StyledTouch>


            <StyledTouch className='flex-row items-center justify-between '>
                <StyledView className='flex-row items-center '>
                    <Image
                        source={require('@/assets/icons/grid-lock.png')}
                        style={{
                            height: 26,
                            width: 26
                        }}
                        contentFit='contain'
                    />
                    <StyledText
                        className='text-sm ml-2 text-black dark:text-white'
                        style={{
                            fontFamily: 'Inter_500Medium'
                        }}>
                        Change name
                    </StyledText>
                </StyledView>
                <Entypo name="chevron-small-right" size={24} color={'#49515D'} />
            </StyledTouch>

            <StyledView className='h-[1px]  w-full bg-[#49515D]' />
            <StyledView className='flex-row items-center justify-center  pt-2 '
                style={{ gap: 16 }}>
                <BarCard
                    icon={true}
                    number={10678890}
                    type={'XP'} />
                <BarCard
                    icon={false}
                    number={10678890}
                    type={' Global ranking'} />
            </StyledView>
        </StyledView>
    )
}




const BarCard = (props: { icon: boolean; number: number; type: string }) => {
    const { colorScheme } = useColorScheme()
    return (
        <StyledView className='flex items-end gap-y-0.5 px-4 py-2 rounded-lg'
            style={{
                elevation: 5,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 1,
                backgroundColor: Colors[colorScheme].otpbg,
            }}>
            <StyledView className='flex-row items-center justify-center gap-x-4'>
                {
                    props.icon ?
                        <Image
                            source={require('@/assets/icons/Star.png')}
                            style={{
                                height: 13,
                                width: 13,
                                tintColor: Colors[colorScheme].primary
                            }}
                            contentFit='contain' /> :
                        <StyledText
                            style={{
                                fontFamily: 'Inter_600SemiBold',
                            }} className='text-black dark:text-primary text-sm  '>
                            #
                        </StyledText>
                }
                <StyledText
                    style={{
                        fontFamily: 'Inter_500Medium',
                    }} className='text-black dark:text-white  '>
                    {props.number.toLocaleString('en-us')}
                </StyledText>
            </StyledView>
            <StyledText
                style={{
                    fontFamily: 'Inter_500Medium',
                }} className='text-xs text-secondary  '>
                {props.type}
            </StyledText>
        </StyledView>
    )
}