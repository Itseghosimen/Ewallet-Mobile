import SendCoin from '@/components/home/send/SendCoin'
import { StyledInput, StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { useColorScheme } from 'nativewind'
import React, { useState } from 'react'
import { StatusBar } from 'react-native'
import RecurringTransfer from '../(modal)/recurringTransfer'
import { Image } from 'expo-image'
import { Colors } from '@/constants/Colors'
import SettingBtn from '@/components/home/settings/SettingBtn'
import { Switch } from 'react-native-switch'
import Contacts from '@/components/general/Contacts'
import SwipeButton from 'rn-swipe-button';
import { router } from 'expo-router'




export default function send() {
    const { colorScheme } = useColorScheme()
    const [showContact, setShowContact] = useState(true)
    const [toggled, setToggled] = useState(false)
    function toggleSwitch() {
        setToggled(previousState => !previousState);
    }

    return (
        <StyledView className='flex-1 bg-white dark:bg-background px-3 pb-5'
        >
            <StatusBar
                barStyle={colorScheme == 'dark' ? 'light-content' : 'dark-content'}
            />
            <StyledView className='flex-1'
                style={{ gap: 40 }}>
                <SendCoin />

                <StyledView style={{ gap: 6 }}>
                    <StyledView className='flex-row items-center justify-between'>
                        <StyledText className='text-xs text-secondary'>Paste recipient details</StyledText>
                        <RecurringTransfer />
                    </StyledView>
                    <StyledView className='flex-row items-center border border-secondary px-3 h-12 rounded-lg'>
                        <StyledInput
                            placeholder='Enet ID / Number / ENS / Email / Wallet Address'
                            placeholderTextColor={'#49515D'}
                            className='flex-grow text-xs  text-black dark:text-white'
                        />
                        <StyledView className='flex-row items-center h-full' style={{ gap: 7 }}>
                            <StyledTouch>
                                <Image
                                    source={require('@/assets/icons/user-square.png')}
                                    style={{
                                        height: 18,
                                        width: 18,
                                        tintColor: Colors[colorScheme].primary
                                    }}
                                    contentFit='contain' />
                            </StyledTouch>
                            <StyledView className='w-0.5 h-2/5 bg-secondary' />
                            <StyledTouch>
                                <Image
                                    source={require('@/assets/icons/scan.png')}
                                    style={{
                                        height: 17,
                                        width: 17,
                                        tintColor: Colors[colorScheme].primary
                                    }}
                                    contentFit='contain' />
                            </StyledTouch>
                        </StyledView>
                    </StyledView>
                    <StyledView className='flex-row items-center justify-between'>
                        <StyledTouch
                            onPress={() => setShowContact(!showContact)}
                            className='flex-row items-center'>
                            <StyledText className='text-xs  text-black/80 dark:text-primary/80 mr-1' style={{
                                fontFamily: 'Inter_500Medium',
                            }}>
                                Recent transactions
                            </StyledText>
                            <Image source={require('@/assets/icons/arrow-bottom.png')}
                                style={{
                                    height: 25,
                                    width: 25,
                                    tintColor: Colors[colorScheme].primary,
                                    transform: [{ rotate: !showContact ? '180deg' : '0deg' }]
                                }}
                                contentFit="contain" />
                        </StyledTouch>
                        <SettingBtn
                            frontIcon={undefined}
                            title={'Add to Beneficiary'}
                            type={'switch'}
                            style={{
                                alignItems: 'center',
                                gap: 10
                            }}
                            textStyle={{
                                color: Colors[colorScheme].primary,
                                fontSize: 12,
                                opacity: 0.8
                            }}
                            backIcon={
                                <Switch
                                    value={toggled}
                                    onValueChange={toggleSwitch}
                                    disabled={false}
                                    activeText={'On'}
                                    inActiveText={'Off'}
                                    circleSize={12}
                                    barHeight={15}
                                    circleBorderWidth={0}
                                    backgroundActive={Colors[colorScheme].primary}
                                    backgroundInactive={colorScheme == 'dark' ? '#000' : '#C4C4C4'}
                                    circleActiveColor={Colors[colorScheme].background}
                                    circleInActiveColor={Colors[colorScheme].primary}
                                    renderActiveText={false}
                                    renderInActiveText={false}
                                    switchLeftPx={2.5}
                                    switchRightPx={2.5}
                                    switchWidthMultiplier={2}
                                    switchBorderRadius={30}
                                />
                            }
                        />
                    </StyledView>
                    {
                        !showContact ?
                            <Contacts />
                            : null

                    }
                </StyledView>


                <StyledView className='gap-y-2'>
                    <StyledText className='text-xs text-secondary'>Enter Amount</StyledText>
                    <StyledView className='flex-row items-center justify-between border border-secondary px-3 h-12 rounded-lg'>
                        <StyledView className='flex-row items-center' style={{ gap: 5 }}>
                            <StyledInput
                                placeholder='0.0'
                                placeholderTextColor={Colors[colorScheme].tint}
                                className='text-base  text-black dark:text-white'
                            />
                            <StyledText className='text-secondary text-sm '>~$0.0</StyledText>
                        </StyledView>
                        <StyledView className='flex-row items-center h-full' style={{ gap: 7 }}>
                            <StyledText className='text-sm text-secondary  uppercase'>
                                DAI
                            </StyledText>
                            <StyledView className='w-0.5 h-2/5 bg-secondary' />
                            <StyledTouch>
                                <StyledText className='text-sm text-black/80 dark:text-primary/80  uppercase'>
                                    max
                                </StyledText>
                            </StyledTouch>
                        </StyledView>
                    </StyledView>
                </StyledView >

                <StyledView className='gap-y-2'>
                    <StyledText className='text-xs text-secondary '>Memo</StyledText>
                    <StyledView className='flex-row items-center justify-between border border-secondary px-3 h-12 rounded-lg'>

                        <StyledInput
                            placeholder='Enter memo'
                            placeholderTextColor='#49515D'
                            className='text-sm  text-black dark:text-white'
                        />

                    </StyledView>
                </StyledView >
            </StyledView>

            <StyledView className='my-6'>
                <StyledText className='text-sm text-secondary  text-left'>Receive Amount</StyledText>
                <StyledView className='flex-row items-baseline'>
                    <StyledText
                        style={{
                            fontFamily: 'Inter_600SemiBold',
                        }} className=' text-black dark:text-white text-lg  text-left'>0.0</StyledText>
                    <StyledText className='text-sm text-secondary   text-left' style={{
                        fontFamily: 'Inter_500Medium',
                    }}>{' '}DAI</StyledText>
                </StyledView>
                <StyledView className='flex-row items-baseline'>
                    <StyledText className='text-sm text-secondary  text-left'>Fee:{' '}</StyledText>
                    <StyledText
                        style={{
                            fontFamily: 'Inter_600SemiBold',
                        }} className=' text-black dark:text-white text-base  text-left'>0.0</StyledText>
                    <StyledText className='text-sm text-secondary   text-left' style={{
                        fontFamily: 'Inter_500Medium',
                    }}>{' '}DAI</StyledText>
                </StyledView>
            </StyledView>

            <SwipeButton
                title='Swipe To Confirm'
                titleColor={Colors[colorScheme].tint}
                titleFontSize={15}
                titleStyles={{
                    fontWeight: '600'
                }}
                railBackgroundColor={Colors[colorScheme].otpbg}
                railBorderColor={Colors[colorScheme].otpbg}
                thumbIconImageSource={require('@/assets/icons/arrowRight.png')}
                thumbIconBackgroundColor='#000'
                thumbIconBorderColor='#000'
                railFillBackgroundColor={Colors[colorScheme].primary}
                railFillBorderColor={Colors[colorScheme].primary}
                raild
                shouldResetAfterSuccess={true}
                onSwipeSuccess={() => router.push('/confirmOrder')}

            />

        </StyledView >
    )
}