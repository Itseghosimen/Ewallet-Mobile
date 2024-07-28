import { StyledComponent, useColorScheme } from 'nativewind';
import React from 'react'
import { StyledText, StyledView } from '@/constants/imports';
import { Dimensions, FlatList, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/constants/Colors';
import Balance from '../home/Balance';
import PageSwipe from './PageSwipe';
import ScrollRefresh from '../general/ScrollRefresh';


export default function Overview({ navigation }: any) {
    const { colorScheme } = useColorScheme()
    const layout = Dimensions.get('window').width
    return (
        <StyledView className='flex-1'>
            <ScrollRefresh
                contentContainerStyle={{
                    paddingBottom: 20
                }}
                showsVerticalScrollIndicator={false}>
                <StyledView className='my-5 px-3'>
                    <Balance
                        balance={90438.04}
                        increase={20500.65}
                        percentIncrease={200.65}
                    />
                </StyledView>
                <PageSwipe />
                <FlatList
                    numColumns={2}
                    scrollEnabled={false}
                    data={OverAssets}
                    columnWrapperStyle={{
                        gap: layout * 0.02
                    }}
                    contentContainerStyle={{
                        paddingHorizontal: 13
                    }}
                    renderItem={({ item, index }) => {
                        return (
                            <StyledComponent
                                onPress={() => navigation.navigate(item.link)}
                                component={TouchableWithoutFeedback}>
                                <StyledView
                                    style={[{
                                        width: '49%',
                                        height: 120,
                                        borderWidth: 2,
                                        borderRadius: 8,
                                        overflow: 'hidden',
                                        borderColor: Colors[colorScheme].otpbg,
                                    },
                                    OverAssets.length - 1 === index || OverAssets.length - 2 === index ? {
                                        marginBottom: 0
                                    } : { marginBottom: -15 }]}>

                                    <LinearGradient
                                        style={{
                                            flex: 1,
                                            paddingHorizontal: 16,
                                            paddingTop: 14,
                                            paddingBottom: 20,
                                            justifyContent: 'space-between'
                                        }}
                                        colors={[
                                            Colors[colorScheme].background,
                                            colorScheme == 'light' ? '#f0f0f0' : '#13171D'
                                        ]}
                                        start={[0, 1]}
                                        end={[0, 0]}
                                    >
                                        <StyledText
                                            className='text-sm text-black dark:text-white'
                                            style={{ fontFamily: 'Inter_500Medium' }}>
                                            {item.title}
                                        </StyledText>
                                        <StyledView className='flex items-end'>
                                            {
                                                typeof item.asset === 'string' ?
                                                    <StyledText
                                                        className='text-xs text-secondary'
                                                        style={{ fontFamily: 'Inter_500Medium' }}
                                                    >
                                                        {item.asset}
                                                    </StyledText>
                                                    : <StyledView className='flex-row items-center'>
                                                        <StyledText
                                                            className='text-xs text-black dark:text-white'
                                                            style={{ fontFamily: 'Inter_500Medium' }}
                                                        >
                                                            {item.asset.toLocaleString('en-US', {
                                                                minimumFractionDigits: 2,
                                                                maximumFractionDigits: 2,
                                                                style: 'currency',
                                                                currency: 'USD'
                                                            })}
                                                        </StyledText>
                                                        <StyledText
                                                            className='text-[10px] text-secondary uppercase'
                                                            style={{ fontFamily: 'Inter_500Medium' }}
                                                        >
                                                            {' '}USd
                                                        </StyledText>
                                                    </StyledView>
                                            }
                                        </StyledView>

                                    </LinearGradient>
                                </StyledView>
                            </StyledComponent>
                        )
                    }}
                />
            </ScrollRefresh>
        </StyledView>
    )
}

const OverAssets = [
    {
        title: 'Crypto Assets',
        asset: 30989.09,
        link: 'crypto'
    },
    {
        title: 'NFT',
        asset: 'Coming soon',
        link: 'nft'
    },
    {
        title: 'EnetCard',
        asset: 'Coming soon',
        link: 'card'
    },
    {
        title: 'Staking',
        asset: 'Coming soon',
        link: 'earn'
    },
    {
        title: 'Farming',
        asset: 'Coming soon',
        link: 'card'
    },
    {
        title: 'Node',
        asset: 'Coming soon',
        link: 'card'
    },
]