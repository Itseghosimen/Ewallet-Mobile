import React, { useState } from 'react'
import { useHeaderHeight } from '@react-navigation/elements';
import { StyledText, StyledView } from '@/constants/imports';
import { GestureResponderEvent, TouchableWithoutFeedback } from 'react-native';
import { StyledComponent, useColorScheme } from 'nativewind';
import { Image } from 'expo-image';
import { Colors } from '@/constants/Colors';
import Pools from '@/components/TokenPg/Pools';
import Tradex from '@/components/TokenPg/Tradex';
import InfoContent from '@/components/wallet/InfoContent';
import OrderBook from '@/components/TokenPg/OrderBook';
import Button from '@/components/general/Buttons/Button';
import ScrollRefresh from '@/components/general/ScrollRefresh';


export default function trade() {
    const headerHeight = useHeaderHeight();
    const { colorScheme } = useColorScheme()
    const [selected, setSelected] = useState('pools')
    const balance = 1234.56
    return (
        <StyledView className='bg-white flex-1 dark:bg-background'
            style={{
                paddingTop: headerHeight
            }}>
            <ScrollRefresh
                contentContainerStyle={{
                    gap: 15
                }}
                showsVerticalScrollIndicator={false}>
                <StyledView className='px-4 mt-2 flex-row items-start justify-between'>
                    <StyledView className='flex-1 h-full items-start max-h-[20vh]'>
                        <StyledView>
                            <StyledText style={{
                                fontFamily: 'Inter_700Bold',
                            }} className='text-2xl   text-black dark:text-white'>
                                {
                                    balance?.toLocaleString('en-US', {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                        style: 'currency',
                                        currency: 'USD'
                                    })
                                }
                            </StyledText>
                        </StyledView>
                        <StyledView className='flex-row items-center' style={{
                            gap: 15
                        }}>
                            <StyledText
                                style={{
                                    fontFamily: 'Inter_500Medium',
                                }} className='  text-sm text-black dark:text-white'>
                                ~1.034.90 €
                            </StyledText>
                            <StyledText style={{
                                fontFamily: 'Inter_500Medium',
                            }} className='text-[13px] text-black dark:text-primary'>
                                +0.34%
                            </StyledText>
                        </StyledView>

                        <StyledView className='bg-black/25 dark:bg-primary/25 px-2 w-auto mt-auto flex-row items-center'
                            style={{
                                gap: 10
                            }}>
                            <StyledText style={{
                                fontFamily: 'Inter_400Regular',
                            }} className='text-[10px] text-black dark:text-primary'>
                                Layer 1 / Layer 2
                            </StyledText>
                            <StyledView className='h-4/5 w-0.5 rounded bg-black dark:bg-primary' />
                            <StyledText style={{
                                fontFamily: 'Inter_400Regular',
                            }} className='text-[10px] text-black dark:text-primary'>
                                Hot
                            </StyledText>
                        </StyledView>
                    </StyledView>
                    <StyledView className='w-40vw flex' style={{
                        gap: 10
                    }}>
                        <StyledView className='flex-row items-start'>
                            <StyledView style={{ gap: 3 }} className='w-[20vw] flex items-start'>
                                <StyledText className='text-[10px] text-secondary'
                                    style={{
                                        fontFamily: 'Inter_400Regular'
                                    }}>24h High</StyledText>
                                <StyledText className='text-[12.5px] text-black dark:text-white'
                                    style={{
                                        fontFamily: 'Inter_400Regular'
                                    }}>$1,500.34</StyledText>
                            </StyledView>
                            <StyledView style={{ gap: 3 }} className='w-[20vw] flex items-start'>
                                <StyledText className='text-[10px] text-secondary'
                                    style={{
                                        fontFamily: 'Inter_400Regular'
                                    }}>24h Vol(ETH)</StyledText>
                                <StyledText className='text-[12.5px] text-black dark:text-white'
                                    style={{
                                        fontFamily: 'Inter_400Regular'
                                    }}>601.67k</StyledText>
                            </StyledView>
                        </StyledView>
                        <StyledView className='flex-row items-start'>
                            <StyledView style={{ gap: 3 }} className='w-[20vw] flex items-start'>
                                <StyledText className='text-[10px] text-secondary'
                                    style={{
                                        fontFamily: 'Inter_400Regular'
                                    }}>24h Low</StyledText>
                                <StyledText className='text-[12.5px] text-black dark:text-white'
                                    style={{
                                        fontFamily: 'Inter_400Regular'
                                    }}>$1,100.43</StyledText>
                            </StyledView>
                            <StyledView style={{ gap: 3 }} className='w-[20vw] flex items-start'>
                                <StyledText className='text-[10px] text-secondary'
                                    style={{
                                        fontFamily: 'Inter_400Regular'
                                    }}>24h Vol(USDT)</StyledText>
                                <StyledText className='text-[12.5px] text-black dark:text-white'
                                    style={{
                                        fontFamily: 'Inter_400Regular'
                                    }}>794.41M</StyledText>
                            </StyledView>
                        </StyledView>
                        <StyledView className='flex-row items-start'>
                            <StyledView style={{ gap: 3 }} className='w-[20vw] flex items-start'>
                                <StyledText className='text-[10px] text-secondary'
                                    style={{
                                        fontFamily: 'Inter_400Regular'
                                    }}>TVL</StyledText>
                                <StyledText className='text-[12.5px] text-black dark:text-white'
                                    style={{
                                        fontFamily: 'Inter_400Regular'
                                    }}>$601.67k</StyledText>
                            </StyledView>
                            <StyledView style={{ gap: 3 }} className='w-[20vw] flex items-start'>
                                <StyledText className='text-[10px] text-secondary'
                                    style={{
                                        fontFamily: 'Inter_400Regular'
                                    }}>Market  Cap</StyledText>
                                <StyledText className='text-[12.5px] text-black dark:text-white'
                                    style={{
                                        fontFamily: 'Inter_400Regular'
                                    }}>$794.41M</StyledText>
                            </StyledView>
                        </StyledView>
                    </StyledView>
                </StyledView>
                <StyledView className='h-[50vh]'>

                </StyledView>
                <StyledView className='px-3 border-b border-secondary/20 flex-row items-center justify-between'>
                    <StyledView className='h-12 flex-row items-center' style={{
                        gap: 20
                    }}>

                        <ToggleBtn
                            title={'pools'}
                            active={selected}
                            onPress={() => setSelected('pools')} />
                        <ToggleBtn
                            title={'trades'}
                            active={selected}
                            onPress={() => setSelected('trades')} />
                        <ToggleBtn
                            title={'info'}
                            active={selected}
                            onPress={() => setSelected('info')} />
                        <ToggleBtn
                            title={'order-book'}
                            active={selected}
                            onPress={() => setSelected('order-book')} />
                    </StyledView>
                    <StyledComponent component={TouchableWithoutFeedback}>
                        <Image
                            source={require('@/assets/icons/diagram.png')}
                            style={{
                                height: 20,
                                width: 20,
                                tintColor: Colors[colorScheme].primary
                            }}
                            contentFit='contain' />
                    </StyledComponent>
                </StyledView>

                <StyledView className='pt-4 pb-16 px-4'>
                    {
                        selected == 'pools' ?
                            <Pools /> : selected == 'trades' ?
                                <Tradex /> : selected == 'info' ?
                                    <InfoContent /> : <OrderBook />
                    }
                </StyledView>
            </ScrollRefresh>
            <StyledView className='absolute bottom-0 left-0 right-0 z-50 py-2 px-4 bg-white dark:bg-background flex-row items-center justify-between'>
                <Image
                    source={require('@/assets/icons/verified_trader.png')}
                    style={{
                        height: 25,
                        width: 25,
                        tintColor: Colors[colorScheme].tint
                    }}
                    contentFit='contain' />
                <Button
                    onPress={undefined}
                    title={'Trade'}
                    textStyle={'text-base text-center text-[#ADB5BF]'}
                    style={'h-12 rounded-lg border-2 border-[#ADB5BF] bg-black w-[35vw] items-center justify-center'}
                />
            </StyledView>

        </StyledView>
    )
}






const ToggleBtn = (props: { onPress: ((event: GestureResponderEvent) => void) | undefined; active: any; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined }) => {
    return (
        <StyledComponent
            onPress={props.onPress}
            component={TouchableWithoutFeedback}>
            <StyledView className='h-full flex items-center'>
                <StyledText
                    style={{
                        fontFamily: 'Inter_700Bold',
                    }} className={`text-sm  ${props.active == props.title ? 'text-black dark:text-primary' : 'text-secondary'}  ${props.title === 'nft' ? 'uppercase' : 'capitalize'} my-auto `}>{props.title}</StyledText>
                <StyledView className={`h-0.5 w-full rounded ${props.active == props.title ? 'opacity-100' : 'opacity-0'} bg-black dark:bg-primary`} />
            </StyledView>
        </StyledComponent>
    )
}