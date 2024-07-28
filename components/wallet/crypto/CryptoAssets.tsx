import { View, Text, FlatList, Dimensions, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { StyledText, StyledView } from '@/constants/imports'
import { Image } from 'expo-image'
import { Colors } from '@/constants/Colors'
import { StyledComponent, useColorScheme } from 'nativewind'
import { router } from 'expo-router'

export default function CryptoAssets() {
    const layout = Dimensions.get('window').width
    const { colorScheme } = useColorScheme()
    return (
        <FlatList
            numColumns={2}
            scrollEnabled={false}
            data={OverAssets}
            columnWrapperStyle={{
                gap: layout * 0.02
            }}
            contentContainerStyle={{
                gap: layout * 0.02,
                paddingHorizontal: 12
            }}
            renderItem={({ item }) => {
                return (

                    <StyledComponent
                        onPress={() => router.push('walletToken/[slug]')}
                        component={TouchableWithoutFeedback}>
                        <StyledView
                            className='pr-1.5 pb-1.5 pt-3 pl-3'
                            style={{
                                width: '49%',
                                height: 120,
                                borderRadius: 12,
                                overflow: 'hidden',
                                backgroundColor: Colors[colorScheme].otpbg,
                                justifyContent: 'space-between'
                            }}>
                            <StyledView className='flex-row items-center'>
                                <Image
                                    source={require('@/assets/icons/ethereum.png')}
                                    contentFit="contain"
                                    style={{
                                        height: 35,
                                        width: 35
                                    }} />
                                <StyledView className='ml-2'>
                                    <StyledText
                                        className='text-sm text-black dark:text-white'
                                        style={{
                                            fontFamily: 'Inter_500Medium'
                                        }}
                                    >
                                        {item.title}
                                    </StyledText>
                                    <StyledText
                                        className='text-xs text-secondary'
                                        style={{
                                            fontFamily: 'Inter_500Medium'
                                        }}>
                                        {item.exchange.toLocaleString('en-US', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                            style: 'currency',
                                            currency: 'USD'
                                        })}
                                    </StyledText>
                                </StyledView>
                            </StyledView>

                            <StyledView className='flex-row items-end justify-between'>
                                <StyledView>
                                    <StyledView className='flex-row items-center'>
                                        <StyledText
                                            style={{
                                                fontFamily: 'Inter_500Medium'
                                            }}
                                            className='text-[13px] text-black dark:text-white'>
                                            {item.asset.toLocaleString('en-US', {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2,
                                            })}
                                        </StyledText>
                                        <StyledText className='text-[11px] text-secondary uppercase'
                                            style={{
                                                fontFamily: 'Inter_500Medium'
                                            }}>
                                            {' '}{item.slug}
                                        </StyledText>
                                    </StyledView>


                                    <StyledText className='text-[11px] text-secondary uppercase'
                                        style={{
                                            fontFamily: 'Inter_500Medium'
                                        }}>
                                        {item.pip.toLocaleString('en-US', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                            style: 'currency',
                                            currency: 'USD'
                                        })}
                                    </StyledText>
                                </StyledView>
                                <StyledText className='text-[10px] text-black dark:text-primary uppercase bg-white dark:bg-background px-2 py-1 rounded-full'
                                    style={{
                                        fontFamily: 'Inter_500Medium',
                                        color: item.signal > 0 ? '#18EAFF' : '#F80F0F'
                                    }}>
                                    {item.signal > 0 ? '+' : ''}{item.signal.toLocaleString('en-US', {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                    })}%
                                </StyledText>

                            </StyledView>
                        </StyledView>
                    </StyledComponent>

                )
            }}
        />
    )
}

const OverAssets = [
    {
        title: 'E•network',
        exchange: 0.08,
        asset: 110.05,
        slug: 'Enet',
        pip: 8008000.69,
        signal: 1007.71
    },
    {
        title: 'Bitcoin',
        exchange: 0.08,
        asset: 110.05,
        slug: 'Enet',
        pip: 8008000.69,
        signal: -1007.71
    },
    {
        title: 'Ethereum',
        exchange: 0.08,
        asset: 110.05,
        slug: 'Enet',
        pip: 8008000.69,
        signal: 1007.71
    },
    {
        title: 'Binance',
        exchange: 0.08,
        asset: 110.05,
        slug: 'Enet',
        pip: 8008000.69,
        signal: 1007.71
    },
    {
        title: 'Polygon',
        exchange: 0.08,
        asset: 110.05,
        slug: 'Enet',
        pip: 8008000.69,
        signal: -1007.71
    },
    {
        title: 'Base',
        exchange: 0.08,
        asset: 110.05,
        slug: 'Enet',
        pip: 8008000.69,
        signal: 1007.71
    },
    {
        title: 'Arbitrum',
        exchange: 0.08,
        asset: 110.05,
        slug: 'Enet',
        pip: 8008000.69,
        signal: -1007.71
    },
    {
        title: 'Tron',
        exchange: 0.08,
        asset: 110.05,
        slug: 'Enet',
        pip: 8008000.69,
        signal: 1007.71
    }

]