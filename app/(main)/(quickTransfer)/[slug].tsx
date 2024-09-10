import Button from '@/components/general/Buttons/Button'
import CoinSendSelector from '@/components/home/ModalScreens/CoinSendSelector'
import { Colors } from '@/constants/Colors'
import { StyledText, StyledTouch, StyledView } from '@/constants/imports'
import Slider from '@react-native-community/slider'
import { Image } from 'expo-image'
import { router } from 'expo-router'
import { StyledComponent, useColorScheme } from 'nativewind'
import React, { useState } from 'react'
import { Dimensions, Pressable } from 'react-native'



export default function QuickTransfer() {
    const { colorScheme } = useColorScheme()
    const layout = Dimensions.get('window')
    const [range, setRange] = useState<number>(0)
    const DomValue = 150000.87
    return (
        <StyledComponent component={Pressable} onPress={router.back} className='flex-1 bg-black/60'>
            <StyledView className="flex-1" />

            <StyledView className='relative pt-3 px-3 bg-white dark:bg-background pb-5 rounded-t-3xl items-center flex'>
                <StyledView className='h-1 w-16 rounded bg-black dark:bg-primary mx-auto' />
                <StyledView className='flex'>
                    <StyledText className="text-[17px] text-center text-black dark:text-white my-5"
                        style={{
                            fontFamily: 'Inter_600SemiBold'
                        }}>
                        Quick Send
                    </StyledText>
                </StyledView>

                <StyledText className="text-secondary text-center text-[15px] mb-3"
                    style={{
                        fontFamily: 'Inter_500Medium'
                    }}>
                    Available
                </StyledText>

                <StyledView className='flex flex-row items-center justify-center gap-x-1'>
                    <StyledTouch onPress={() => router.push('/(send)/tokenSend')}>
                        <Image
                            source={require("@/assets/icons/usdt.png")}
                            style={{
                                height: 15,
                                width: 15
                            }}
                            contentFit='contain'
                        />
                    </StyledTouch>
                    <StyledText className="text-secondary text-center text-sm"
                        style={{
                            fontFamily: 'Inter_700Bold'
                        }}>
                        {DomValue.toLocaleString('en-US', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        })} USDT
                    </StyledText>
                </StyledView>

                <StyledView className='pt-12 pb-8'>
                    <StyledView className='flex flex-row items-baseline justify-center mb-8'>
                        <StyledText style={{
                            fontFamily: 'Inter_700Bold',
                        }} className='text-5xl text-black dark:text-primary'>
                            {range.toLocaleString('en-US', {
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0,
                            })}
                        </StyledText>
                        <StyledText style={{
                            fontFamily: 'Inter_600SemiBold',
                        }} className='text-xl text-black dark:text-primary opacity-50'>
                            USDT
                        </StyledText>
                    </StyledView>
                    <Slider
                        style={{
                            width: layout.width * 0.95,
                            height: 50
                        }}
                        onValueChange={(val) => setRange(val)}
                        minimumValue={0}
                        maximumValue={DomValue}
                        thumbTintColor={Colors[colorScheme].primary}
                        minimumTrackTintColor={Colors[colorScheme].primary}
                        maximumTrackTintColor={colorScheme == 'light' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(24, 234, 255, 0.5)'} />
                </StyledView>

                <CoinSendSelector />

                <Button
                    onPress={() => router.push('/confirmOrder')}
                    title={'Continue'}
                    textStyle={'text-center text-white dark:text-black'}
                    style={'w-full justify-center h-14 flex-grow bg-black dark:bg-primary/80 rounded-full items-center justify-center'}
                />
            </StyledView>
        </StyledComponent>
    )
}