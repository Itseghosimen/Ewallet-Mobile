import { Modal, Pressable } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'nativewind'
import { StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { Colors } from '@/constants/Colors'
import { Image, ImageBackground } from 'expo-image'
import { Href, router } from 'expo-router'


type SecurityProps = {
    isVisible: boolean,
    type: string,
    to: Href<string>,
    close: () => void
}

export default function ConfirmRecovery(props: SecurityProps) {
    const { colorScheme } = useColorScheme()
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={props.isVisible}
            onRequestClose={props.close}
        >
            <StatusBar style='auto' />

            <StyledView className='bg-black/70 flex-1'>
                <StyledView className='flex-1' />
                <StyledView className='min-h-[75vh] bg-white dark:bg-background rounded-t-3xl py-5'>
                    <StyledView className='flex-row items-center justify-between px-5'>
                        <StyledText
                            className='text-black dark:text-white'
                            style={{
                                fontFamily: 'Inter_700Bold',
                                fontSize: 20,
                            }}>
                            Confirm order
                        </StyledText>
                        <Pressable onPress={props.close}>
                            <Image
                                source={require('@/assets/icons/times.png')}
                                style={{
                                    height: 15,
                                    width: 15,
                                    tintColor: Colors[colorScheme].tint
                                }} />
                        </Pressable>
                    </StyledView>
                    <StyledView className='my-14 px-5'>
                        <StyledView className='flex-row items-center ' style={{ gap: 15 }}>
                            <StyledView className='relative'>
                                <ImageBackground source={require('@/assets/images/appicon.png')} style={{
                                    height: 50,
                                    width: 50,
                                    borderRadius: 8,
                                    overflow: 'hidden'
                                }} />

                            </StyledView>
                            <StyledView>
                                <StyledText
                                    style={{
                                        fontFamily: 'Inter_700Bold',
                                    }} className='text-base text-black dark:text-white'>Enetwallet</StyledText>
                                <StyledText style={{
                                    fontFamily: 'Inter_500Medium',
                                }} className='text-xs text-secondary'>Smart Contract Call</StyledText>
                            </StyledView>
                        </StyledView>
                    </StyledView>



                    <StyledView className='bg-releiveLight dark:bg-releive py-7 px-5'
                        style={{
                            backgroundColor: Colors[colorScheme].otpbg,
                            gap: 30
                        }}>

                        <StyledView className='flex-row items-center justify-between'>
                            <StyledView className='flex-row items-center gap-x-2'>
                                <Image
                                    source={require('@/assets/icons/contact.png')}
                                    style={{
                                        height: 18,
                                        width: 18,
                                        tintColor: Colors[colorScheme].tint,
                                        opacity: 0.6
                                    }}
                                    contentFit='contain'
                                />
                                <StyledText
                                    style={{
                                        fontFamily: 'Inter_500Medium',
                                    }} className='text-sm  text-secondary '>
                                    Contract call
                                </StyledText>
                            </StyledView>
                            <StyledText
                                style={{
                                    fontFamily: 'Inter_500Medium',
                                }} className='text-sm   text-black dark:text-white'>
                                0x06A....67t7b
                            </StyledText>
                        </StyledView>

                        <StyledView className='flex-row items-center justify-between'>
                            <StyledView className='flex-row items-center gap-x-2'>
                                <Image
                                    source={require('@/assets/icons/arct.png')}
                                    style={{
                                        height: 18,
                                        width: 18,
                                        tintColor: Colors[colorScheme].tint,
                                        opacity: 0.6
                                    }}
                                    contentFit='contain'
                                />
                                <StyledText
                                    style={{
                                        fontFamily: 'Inter_500Medium',
                                    }} className='text-sm  text-secondary '>
                                    Art
                                </StyledText>
                            </StyledView>
                            <StyledText
                                style={{
                                    fontFamily: 'Inter_500Medium',
                                }} className='text-sm   text-black dark:text-white'>
                                {props.type}
                            </StyledText>
                        </StyledView>


                        <StyledView className='flex-row items-center justify-between'>
                            <StyledView className='flex-row items-center gap-x-2'>
                                <Image
                                    source={require('@/assets/icons/gas.png')}
                                    style={{
                                        height: 18,
                                        width: 18,
                                        tintColor: Colors[colorScheme].tint,
                                        opacity: 0.6
                                    }}
                                    contentFit='contain'
                                />
                                <StyledText style={{
                                    fontFamily: 'Inter_500Medium',
                                }}
                                    className='text-sm  text-secondary '>
                                    Fee
                                </StyledText>
                            </StyledView>
                            <StyledText
                                style={{
                                    fontFamily: 'Inter_500Medium',
                                }} className='text-sm   text-black dark:text-white'>
                                ~$0.0
                            </StyledText>
                        </StyledView>

                        <StyledView className='flex-row items-center justify-between'>
                            <StyledView className='flex-row items-center gap-x-2'>
                                <Image
                                    source={require('@/assets/icons/gasfee.png')}
                                    style={{
                                        height: 18,
                                        width: 18,
                                        tintColor: Colors[colorScheme].tint,
                                        opacity: 0.6
                                    }}
                                    contentFit='contain'
                                />
                                <StyledText
                                    style={{
                                        fontFamily: 'Inter_500Medium',
                                    }} className='text-sm  text-secondary '>
                                    Gas fee paid by
                                </StyledText>
                            </StyledView>
                            <StyledText
                                style={{
                                    fontFamily: 'Inter_500Medium',
                                }} className='text-sm   text-black dark:text-white'>
                                _ _ _
                            </StyledText>
                        </StyledView>


                    </StyledView>

                    <StyledView className='flex-1' />
                    <StyledView className='px-4'>
                        <StyledTouch
                            onPress={() => {
                                props.close()
                                router.push(props.to)
                            }}
                            className='h-14 mt-3 w-full bg-black dark:bg-primary rounded-full flex items-center justify-center'>
                            <StyledText className='text-white dark:text-black' style={{
                                fontFamily: 'Inter_600SemiBold',
                                fontSize: 15
                            }}>
                                Recover with Guardians
                            </StyledText>
                        </StyledTouch>
                    </StyledView>
                </StyledView>
            </StyledView>

        </Modal>
    )
}