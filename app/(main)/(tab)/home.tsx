import { ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { StyledText, StyledView } from '@/constants/imports'
import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'nativewind'
import Balance from '@/components/home/Balance'
import { useHeaderHeight } from '@react-navigation/elements';
import Button from '@/components/general/Buttons/Button'
import { Image } from 'expo-image'
import { Colors } from '@/constants/Colors'
import Advertisment from '@/components/home/Advertisment'
import Transfer from '@/components/home/Transfer'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import HomeCampus from '@/components/home/HomeCampus'
import CoinStatus from '@/components/home/CoinStatus'
import ScrollRefresh from '@/components/general/ScrollRefresh'


export default function home() {
    const headerHeight = useHeaderHeight();
    const { colorScheme } = useColorScheme()
    const balance = 90438.04;


    return (
        <StyledView className='flex-1 bg-white dark:bg-background px-3 pt-4'
            style={{ paddingTop: headerHeight }}>
            <StatusBar
                style={colorScheme == 'dark' ? 'light' : 'dark'}
            />
            <ScrollRefresh
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    gap: 30
                }}
            >

                <StyledView >
                    <Balance balance={balance} increase={20500.65} percentIncrease={200.65} menu={true} />
                </StyledView>

                <StyledView className='flex-row justify-between items-center px-1'>
                    <TouchableWithoutFeedback
                        onPress={() => router.push('/send')}>
                        <StyledView className='flex-col items-center' style={{ gap: 5 }}>
                            <StyledView
                                style={{
                                    backgroundColor: Colors[colorScheme].otpbg,
                                    shadowColor: 'black',
                                    elevation: 6,

                                }}
                                className='h-14 w-14 rounded-full flex items-center justify-center'>
                                <Image source={require('@/assets/icons/send.png')}
                                    style={{
                                        tintColor: Colors[colorScheme].primary,
                                        height: 26,
                                        width: 26,
                                    }}
                                />
                            </StyledView>
                            <StyledText className='text-[13px] text-secondary'
                                style={{
                                    fontFamily: 'Inter_600SemiBold',
                                }}>Send
                            </StyledText>
                        </StyledView>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback
                        onPress={() => router.push('/receive')}>
                        <StyledView className='flex-col items-center' style={{ gap: 5 }}>
                            <StyledView
                                style={{
                                    backgroundColor: Colors[colorScheme].otpbg,
                                    shadowColor: 'black',
                                    elevation: 6,

                                }}
                                className='h-14 w-14 rounded-full flex items-center justify-center'>
                                <Image source={require('@/assets/icons/receive.png')}
                                    style={{
                                        tintColor: Colors[colorScheme].primary,
                                        height: 26,
                                        width: 26,
                                    }}
                                />
                            </StyledView>
                            <StyledText className='text-[13px] text-secondary'
                                style={{
                                    fontFamily: 'Inter_600SemiBold',
                                }}>Receive
                            </StyledText>
                        </StyledView>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback
                        onPress={() => router.push('/swap')}>
                        <StyledView className='flex-col items-center' style={{ gap: 5 }}>
                            <StyledView
                                style={{
                                    backgroundColor: Colors[colorScheme].otpbg,
                                    shadowColor: 'black',
                                    elevation: 6,

                                }}
                                className='h-14 w-14 rounded-full flex items-center justify-center'>
                                <Image source={require('@/assets/icons/swap.png')}
                                    style={{
                                        tintColor: Colors[colorScheme].primary,
                                        height: 26,
                                        width: 26,
                                    }}
                                />
                            </StyledView>
                            <StyledText className='text-[13px] text-secondary'
                                style={{
                                    fontFamily: 'Inter_600SemiBold',
                                }}>Swap
                            </StyledText>
                        </StyledView>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback
                        onPress={() => router.push('/(modal)/tradeModal')}>
                        <StyledView className='flex-col items-center' style={{ gap: 5 }}>
                            <StyledView
                                style={{
                                    backgroundColor: Colors[colorScheme].otpbg,
                                    shadowColor: 'black',
                                    elevation: 6,

                                }}
                                className='h-14 w-14 rounded-full flex items-center justify-center'>
                                <Image source={require('@/assets/icons/trading.png')}
                                    style={{
                                        tintColor: Colors[colorScheme].primary,
                                        height: 26,
                                        width: 26,
                                    }}
                                />
                            </StyledView>
                            <StyledText className='text-[13px] text-secondary'
                                style={{
                                    fontFamily: 'Inter_600SemiBold',
                                }}>Trade
                            </StyledText>
                        </StyledView>
                    </TouchableWithoutFeedback>

                </StyledView>
                <Advertisment />
                <Transfer />
                <LinearGradient
                    colors={['rgba(12, 47, 51, 0.81)', 'rgba(12, 47, 51, 0.81)', 'rgba(61, 41, 41, 0.71)']}
                    style={style.button}
                    start={[0., -1]}
                    end={[0.7, 1]}>
                    <StyledView className='flex-row items-center justify-between w-full'>
                        <StyledText className='text-xs   text-dark-text' style={{
                            fontFamily: 'Inter_500Medium',
                        }}>
                            $FOUND
                        </StyledText>
                        <StyledText className='text-xs   text-dark-text' style={{
                            fontFamily: 'Inter_500Medium',
                        }}>
                            Earned XP
                        </StyledText>
                    </StyledView>
                    <StyledView className='flex-row items-center justify-between w-full'>
                        <StyledText className='  text-sm text-white' style={{
                            fontFamily: 'Inter_500Medium',
                        }}>
                            {'23500'} $FOUND
                        </StyledText>
                        <StyledText className='  text-sm text-primary' style={{
                            fontFamily: 'Inter_500Medium',
                        }}>
                            {'10,678,890'} XP
                        </StyledText>
                    </StyledView>
                </LinearGradient>
                <HomeCampus />
                <StyledView className='h-[400px] flex-1'>
                    <CoinStatus />
                </StyledView>

                <Button
                    onPress={() => router.push('/(modal)/coinStatusModal')}
                    title='View more'
                    style={'px-6 bg-black/70 my-3 max-w-[50vw] mx-auto dark:bg-primary/70 h-12 rounded-lg'}
                    textStyle={'text-white dark:text-white text-sm'}
                />

            </ScrollRefresh>
        </StyledView>
    )
}

const style = StyleSheet.create({
    transferText: {
        fontSize: 13,
        fontWeight: '600',
    },
    button: {
        alignItems: 'center',
        borderRadius: 11,
        paddingHorizontal: 18,
        paddingVertical: 8,
        gap: 10,
    },
})
