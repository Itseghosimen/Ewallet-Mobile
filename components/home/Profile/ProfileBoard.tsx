import React from 'react'
import * as Clipboard from 'expo-clipboard';
import { StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { Image, ImageBackground } from 'expo-image'
import { useColorScheme } from 'nativewind'
import { Link } from 'expo-router'
import { Colors } from '@/constants/Colors'

export default function ProfileBoard() {
    const { colorScheme } = useColorScheme()
    const Account = '0x06A4....67t7Db'

    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(Account);
    };


    return (
        <StyledView className='relative px-3 min-h-[30vh]'>
            <ImageBackground
                source={require('@/assets/images/4.png')}
                style={{
                    height: 70,
                    width: 70,
                    borderColor: Colors[colorScheme].otpbg,
                    borderWidth: 1,
                    borderRadius: 6,
                    alignSelf: 'center',
                }}
                contentFit='contain'
                contentPosition={'center'} />
            <StyledView className='p-4 absolute top-11 inset-x-3 -z-10 w-full rounded-xl gap-y-1'
                style={{ backgroundColor: Colors[colorScheme].otpbg }}>
                <StyledView className='flex-row items-center justify-between'>
                    <Link href={'scanCode'} asChild>
                        <StyledTouch>
                            <Image
                                source={require('@/assets/icons/qrcode.png')}
                                style={{
                                    height: 15,
                                    width: 15,
                                    tintColor: Colors[colorScheme ?? 'dark'].tint
                                }}
                                contentFit='contain' />
                        </StyledTouch>
                    </Link>
                    <Link href={'switchAccount'} asChild>
                        <StyledTouch>
                            <Image
                                source={require('@/assets/icons/pen.png')}
                                style={{
                                    height: 15,
                                    width: 15
                                }}
                                contentFit='contain' />
                        </StyledTouch>
                    </Link>
                </StyledView>
                <StyledView className='flex-row items-center justify-center gap-x-2'>
                    <StyledText
                        style={{
                            fontFamily: 'Inter_500Medium',
                        }} className='text-sm   text-black dark:text-white'>
                        App ID: @Johcee
                    </StyledText>
                    <Image
                        source={require('@/assets/icons/verified.png')}
                        style={{
                            height: 17,
                            width: 17,
                            tintColor: Colors[colorScheme].primary
                        }}
                        contentFit='contain' />
                </StyledView>
                <StyledView className='flex-row items-center justify-center gap-x-2'>
                    <StyledText
                        style={{
                            fontFamily: 'Inter_500Medium',
                        }}
                        className='text-secondary   text-xs'>
                        EVM: {Account}
                    </StyledText>
                    <StyledTouch onPress={copyToClipboard}>
                        <Image
                            source={require('@/assets/icons/document-copy.png')}
                            style={{
                                height: 17,
                                width: 17,
                                tintColor: Colors[colorScheme].primary
                            }}
                            contentFit='contain' />
                    </StyledTouch>
                </StyledView>
                <StyledView className='flex-row items-center justify-center pt-2 '
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