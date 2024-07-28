import { Colors } from '@/constants/Colors'
import { StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { Image } from 'expo-image'
import { router } from 'expo-router'
import { useColorScheme } from 'nativewind'
import React, { useState } from 'react'
import { Dimensions, StatusBar } from 'react-native'
import CircularProgress from 'react-native-circular-progress-indicator'
import CountDown from 'react-native-countdown-component';

export default function walletFinding() {
    const { colorScheme } = useColorScheme()
    const [recovered, setRecovered] = useState(false)
    const layout = Dimensions.get('window')
    const timerCountDown = 10
    return (
        <StyledView className='flex-1 items-center bg-white dark:bg-background gap-y-12 pb-5 px-3'>
            <StatusBar
                barStyle={colorScheme == 'dark' ? 'light-content' : 'dark-content'}
            />
            <StyledView>
                <CircularProgress
                    value={100}
                    radius={100}
                    inActiveStrokeOpacity={1}
                    activeStrokeWidth={30}
                    inActiveStrokeWidth={30}
                    showProgressValue={false}
                    activeStrokeSecondaryColor={Colors[colorScheme].primary}
                    activeStrokeColor={Colors[colorScheme].primary}
                    inActiveStrokeColor="#394149"
                    duration={timerCountDown * 1000}
                    dashedStrokeConfig={{
                        count: 35,
                        width: 7,
                    }}
                    strokeLinecap='butt'
                    onAnimationComplete={() => setRecovered(true)}

                />
                <StyledView style={{
                    position: 'absolute',
                    top: 50,
                    left: 50
                }}>
                    <Image
                        source={require('@/assets/icons/Icon.png')}
                        contentFit='contain'
                        style={{
                            width: 100,
                            height: 100,
                            tintColor: Colors[colorScheme].primary
                        }} />
                </StyledView>
            </StyledView>
            <StyledView>
                <StyledText
                    style={{ textAlign: 'center', width: layout.width * 0.8, marginHorizontal: 'auto' }}
                    className='text-sm text-black dark:text-white'>
                    Your wallet will be available  and operational
                    in this device in ......
                </StyledText>
            </StyledView>

            <StyledView>
                <CountDown
                    until={timerCountDown}
                    size={30}
                    digitStyle={{
                        backgroundColor: Colors[colorScheme].otpbg,
                        marginHorizontal: 30,
                        width: 60,
                        height: 50,
                        borderWidth: 1,
                        borderColor: '#171925'
                    }}
                    digitTxtStyle={{
                        color: Colors[colorScheme].primary,
                        fontSize: 20,

                    }}
                    timeLabelStyle={{
                        color: Colors[colorScheme].tint,
                    }}
                    timeToShow={['H', 'M', 'S']}
                    timeLabels={{ h: 'hrs', m: 'mins', s: 'secs' }}
                />
            </StyledView>
            <StyledView className='flex-1' />
            <StyledView className='flex gap-y-4 w-full'>
                <StyledTouch className='flex items-center justify-center'>
                    <StyledText className='text-black dark:text-primary/80 text-base ' style={{
                        fontFamily: 'Inter_500Medium',
                    }}>
                        Contact support
                    </StyledText>
                </StyledTouch>
                <StyledTouch
                    onPress={() => router.push('home')}
                    style={{
                        paddingVertical: 16,
                        borderRadius: 25,
                        backgroundColor: recovered ? Colors[colorScheme].primary : Colors[colorScheme].otpbg,
                    }}
                    className='h-14 w-full rounded-full  flex items-center justify-center'>
                    <StyledText className={`text-base ${recovered ? 'text-white dark:text-black' : 'text-[#939393]'} `}
                        style={{
                            color: recovered ? '#000' : '#939393',

                            fontFamily: 'Inter_500Medium',

                        }}>Verify code</StyledText>
                </StyledTouch>
            </StyledView>
        </StyledView>
    )
}