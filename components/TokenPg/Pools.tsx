import { StyledText, StyledView } from '@/constants/imports'
import { Image } from 'expo-image'
import React, { useState } from 'react'
import Button from '../general/Buttons/Button'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from 'nativewind'
import { FlatList } from 'react-native'

export default function Pools() {
    const { colorScheme } = useColorScheme()
    const [pool, setPool] = useState(1)


    return (
        <StyledView>
            <StyledView className='flex-row items-center justify-between mb-6'>
                <StyledText className='text-secondary text-[12.5px]'
                    style={{
                        fontFamily: 'Inter_500Medium'
                    }}>
                    Pools
                </StyledText>
                <StyledView className='w-[70vw] flex-row items-center justify-between'>
                    <StyledText className='text-secondary text-[12.5px]'
                        style={{
                            fontFamily: 'Inter_500Medium'
                        }}>
                        Trading Pairs
                    </StyledText>
                    <StyledText className='text-secondary text-[12.5px]'
                        style={{
                            fontFamily: 'Inter_500Medium'
                        }}>
                        Total liquidity
                    </StyledText>
                </StyledView>
            </StyledView>
            <StyledView className='flex' style={{ gap: 40 }}>
                <StyledView className='flex-row items-center justify-between'>
                    <Image
                        source={require('@/assets/icons/horse.png')}
                        style={{
                            height: 30,
                            width: 30
                        }}
                        contentFit='contain'
                    />
                    <StyledView className='w-[70vw] flex-row items-center justify-between'>
                        <StyledView className='flex' style={{ gap: 5 }}>
                            <StyledView className='flex-row items-center' style={{ gap: 5 }}>
                                <Image
                                    source={require('@/assets/icons/horse.png')}
                                    style={{
                                        height: 15,
                                        width: 15
                                    }}
                                    contentFit='contain'
                                />
                                <StyledText className='text-secondary text-[13px]' style={{
                                    fontFamily: 'Inter_400Regular'
                                }}>
                                    WETH
                                </StyledText>
                                <StyledText className='text-black dark:text-white text-[13px]' style={{
                                    fontFamily: 'Inter_400Regular'
                                }}>
                                    100.780
                                </StyledText>
                            </StyledView>

                            <StyledView className='flex-row items-center' style={{ gap: 5 }}>
                                <Image
                                    source={require('@/assets/icons/horse.png')}
                                    style={{
                                        height: 15,
                                        width: 15
                                    }}
                                    contentFit='contain'
                                />
                                <StyledText className='text-secondary text-[13px]' style={{
                                    fontFamily: 'Inter_400Regular'
                                }}>
                                    WBTC
                                </StyledText>
                                <StyledText className='text-black dark:text-white text-[13px]' style={{
                                    fontFamily: 'Inter_400Regular'
                                }}>
                                    1.237
                                </StyledText>
                            </StyledView>



                        </StyledView>

                        <StyledView className='flex items-end' style={{ gap: 5 }}>
                            <StyledText className='text-black dark:text-white text-[13px] text-end' style={{
                                fontFamily: 'Inter_400Regular'
                            }}>
                                $100.780.785
                            </StyledText>
                            <StyledView className='flex-row items-center' style={{ gap: 5 }}>
                                <StyledText className='text-secondary text-[10px]' style={{
                                    fontFamily: 'Inter_400Regular'
                                }}>
                                    WETH : WBTC
                                </StyledText>
                                <StyledText className='text-black dark:text-white text-[10px]' style={{
                                    fontFamily: 'Inter_400Regular'
                                }}>
                                    1:0.0555586
                                </StyledText>
                            </StyledView>
                        </StyledView>
                    </StyledView>
                </StyledView>

                <StyledView className='flex-row items-center justify-between'>
                    <Image
                        source={require('@/assets/icons/horse.png')}
                        style={{
                            height: 30,
                            width: 30
                        }}
                        contentFit='contain'
                    />
                    <StyledView className='w-[70vw] flex-row items-center justify-between'>
                        <StyledView className='flex' style={{ gap: 5 }}>
                            <StyledView className='flex-row items-center' style={{ gap: 5 }}>
                                <Image
                                    source={require('@/assets/icons/horse.png')}
                                    style={{
                                        height: 15,
                                        width: 15
                                    }}
                                    contentFit='contain'
                                />
                                <StyledText className='text-secondary text-[11px]' style={{
                                    fontFamily: 'Inter_400Regular'
                                }}>
                                    WETH
                                </StyledText>
                                <StyledText className='text-black dark:text-white text-[11px]' style={{
                                    fontFamily: 'Inter_400Regular'
                                }}>
                                    100.780
                                </StyledText>
                            </StyledView>

                            <StyledView className='flex-row items-center' style={{ gap: 5 }}>
                                <Image
                                    source={require('@/assets/icons/horse.png')}
                                    style={{
                                        height: 15,
                                        width: 15
                                    }}
                                    contentFit='contain'
                                />
                                <StyledText className='text-secondary text-[11px]' style={{
                                    fontFamily: 'Inter_400Regular'
                                }}>
                                    WBTC
                                </StyledText>
                                <StyledText className='text-black dark:text-white text-[11px]' style={{
                                    fontFamily: 'Inter_400Regular'
                                }}>
                                    1.237
                                </StyledText>
                            </StyledView>
                        </StyledView>

                        <StyledView className='flex items-end' style={{ gap: 5 }}>
                            <StyledText className='text-black dark:text-white text-[11px] text-end' style={{
                                fontFamily: 'Inter_400Regular'
                            }}>
                                $100.780.785
                            </StyledText>
                            <StyledView className='flex-row items-center' style={{ gap: 5 }}>
                                <StyledText className='text-secondary text-[10px]' style={{
                                    fontFamily: 'Inter_400Regular'
                                }}>
                                    WETH : WBTC
                                </StyledText>
                                <StyledText className='text-black dark:text-white text-[10px]' style={{
                                    fontFamily: 'Inter_400Regular'
                                }}>
                                    1:0.0555586
                                </StyledText>
                            </StyledView>
                        </StyledView>
                    </StyledView>
                </StyledView>

                <StyledView className='flex-row items-center justify-between'>
                    <Image
                        source={require('@/assets/icons/horse.png')}
                        style={{
                            height: 30,
                            width: 30
                        }}
                        contentFit='contain'
                    />
                    <StyledView className='w-[70vw] flex-row items-center justify-between'>
                        <StyledView className='flex' style={{ gap: 5 }}>
                            <StyledView className='flex-row items-center' style={{ gap: 5 }}>
                                <Image
                                    source={require('@/assets/icons/horse.png')}
                                    style={{
                                        height: 15,
                                        width: 15
                                    }}
                                    contentFit='contain'
                                />
                                <StyledText className='text-secondary text-[11px]' style={{
                                    fontFamily: 'Inter_400Regular'
                                }}>
                                    WETH
                                </StyledText>
                                <StyledText className='text-black dark:text-white text-[11px]' style={{
                                    fontFamily: 'Inter_400Regular'
                                }}>
                                    100.780
                                </StyledText>
                            </StyledView>

                            <StyledView className='flex-row items-center' style={{ gap: 5 }}>
                                <Image
                                    source={require('@/assets/icons/horse.png')}
                                    style={{
                                        height: 15,
                                        width: 15
                                    }}
                                    contentFit='contain'
                                />
                                <StyledText className='text-secondary text-[11px]' style={{
                                    fontFamily: 'Inter_400Regular'
                                }}>
                                    WBTC
                                </StyledText>
                                <StyledText className='text-black dark:text-white text-[11px]' style={{
                                    fontFamily: 'Inter_400Regular'
                                }}>
                                    1.237
                                </StyledText>
                            </StyledView>
                        </StyledView>

                        <StyledView className='flex items-end' style={{ gap: 5 }}>
                            <StyledText className='text-black dark:text-white text-[11px] text-end' style={{
                                fontFamily: 'Inter_400Regular'
                            }}>
                                $100.780.785
                            </StyledText>
                            <StyledView className='flex-row items-center' style={{ gap: 5 }}>
                                <StyledText className='text-secondary text-[10px]' style={{
                                    fontFamily: 'Inter_400Regular'
                                }}>
                                    WETH : WBTC
                                </StyledText>
                                <StyledText className='text-black dark:text-white text-[10px]' style={{
                                    fontFamily: 'Inter_400Regular'
                                }}>
                                    1:0.0555586
                                </StyledText>
                            </StyledView>
                        </StyledView>
                    </StyledView>
                </StyledView>
            </StyledView>


            <StyledView className='mt-10 flex items-start' style={{ gap: 30 }}>
                <StyledText className='text-black dark:text-white text-base'
                    style={{
                        fontFamily: 'Inter_600SemiBold'
                    }}>
                    Pool Changes
                </StyledText>

                <StyledView
                    className='p-0.5 rounded-full flex-row items-center'
                    style={{
                        backgroundColor: Colors[colorScheme].otpbg
                    }}>
                    <Button
                        title={'All'}
                        onPress={() => setPool(1)}
                        textStyle={`text-[13px] ${pool === 1 ? 'text-black dark:text-white ' : 'text-secondary'} text-center`}
                        style={`py-1 ${pool === 1 ? 'bg-white dark:bg-background' : 'bg-transarent'} min-w-[70px] px-3 rounded-full justify-center items-center`}
                    />
                    <Button
                        title={'Add'}
                        onPress={() => setPool(2)}
                        textStyle={`text-[13px] ${pool === 2 ? 'text-black dark:text-white ' : 'text-secondary'} text-center`}
                        style={`py-1 ${pool === 2 ? 'bg-white dark:bg-background' : 'bg-transarent'} min-w-[70px] px-3 rounded-full justify-center items-center`}
                    />
                    <Button
                        title={'Remove'}
                        onPress={() => setPool(3)}
                        textStyle={`text-[13px] ${pool === 3 ? 'text-black dark:text-white ' : 'text-secondary'} text-center`}
                        style={`py-1 ${pool === 3 ? 'bg-white dark:bg-background' : 'bg-transarent'} min-w-[70px] px-3 rounded-full justify-center items-center`}
                    />
                </StyledView>

                <StyledView>
                    <StyledView className='flex-row w-full items-center justify-between mb-2'>
                        <StyledView className='w-[20vw]'>
                            <StyledText
                                className='text-xs text-secondary'
                                style={{ fontFamily: 'Inter_500Medium' }}>
                                Type
                            </StyledText>
                        </StyledView>
                        <StyledView className='w-[45vw]'>
                            <StyledText
                                className='text-xs text-center text-secondary'
                                style={{ fontFamily: 'Inter_500Medium' }}>
                                Amount / Token
                            </StyledText>
                        </StyledView>
                        <StyledView className='w-[20vw] flex items-end'>
                            <StyledText
                                className='text-xs text-end text-secondary'
                                style={{ fontFamily: 'Inter_500Medium' }}>
                                User
                            </StyledText>
                        </StyledView>
                    </StyledView>

                    <FlatList
                        scrollEnabled={false}
                        showsVerticalScrollIndicator={false}
                        data={PoolContent}
                        renderItem={({ item }) => (
                            <StyledView className={`
                        flex-row w-full 
                        ${pool === 2 && item.type !== 'add' ?
                                    'hidden' : pool === 3 && item.type !== 'remove' ?
                                        'hidden' : 'block'
                                }
                        items-center justify-between my-4
                        `}>
                                <StyledView className='w-[20vw]' style={{ gap: 3 }}>
                                    <StyledText
                                        style={{
                                            fontFamily: 'Inter_500Medium'
                                        }}
                                        className={`capitalize ${item.type === 'remove' ? 'text-[#F35555]' : 'text-black dark:text-primary'}`}>
                                        {item.type}
                                    </StyledText>
                                    <StyledText
                                        style={{
                                            fontFamily: 'Inter_400Regular'
                                        }}
                                        className='text-xs text-secondary'>
                                        12m ago
                                    </StyledText>
                                </StyledView>

                                <StyledView className='items-center w-[45vw]' style={{ gap: 3 }}>
                                    <StyledView className='flex-row items-center'
                                        style={{
                                            gap: 5
                                        }}>
                                        <StyledText
                                            style={{
                                                fontFamily: 'Inter_500Medium'
                                            }}
                                            className='text-black dark:text-white text-xs'>
                                            {item.amount}
                                        </StyledText>
                                        <StyledText
                                            style={{
                                                fontFamily: 'Inter_500Medium'
                                            }}
                                            className='text-secondary text-xs'>
                                            {item.amountCurrency}
                                        </StyledText>
                                    </StyledView>
                                    <StyledView className='flex-row items-center'
                                        style={{
                                            gap: 5
                                        }}>
                                        <StyledText
                                            style={{
                                                fontFamily: 'Inter_500Medium'
                                            }}
                                            className='text-black dark:text-white text-xs'>
                                            {item.token}
                                        </StyledText>
                                        <StyledText
                                            style={{
                                                fontFamily: 'Inter_500Medium'
                                            }}
                                            className='text-secondary text-xs'>
                                            {item.tokenCurrency}
                                        </StyledText>
                                    </StyledView>
                                </StyledView>

                                <Button
                                    onPress={undefined}
                                    title={item.user}
                                    textStyle={'text-secondary text-xs'}
                                    style={'flex-row-reverse gap-x-1'}
                                    Icon={
                                        <Image
                                            source={require('@/assets/icons/share.png')}
                                            style={{
                                                height: 13,
                                                width: 13
                                            }}
                                            contentFit='contain' />
                                    }
                                />
                            </StyledView>
                        )}
                    />
                </StyledView>
            </StyledView>
        </StyledView >
    )
}




const PoolContent = [
    {
        type: 'remove',
        amount: '-349.70k',
        amountCurrency: 'USDC',
        token: '-3409.70k',
        tokenCurrency: 'WETH',
        user: '0x...aE14'
    },
    {
        type: 'add',
        amount: '-349.70k',
        amountCurrency: 'USDC',
        token: '-3409.70k',
        tokenCurrency: 'WETH',
        user: '0x...aE14'
    },
    {
        type: 'remove',
        amount: '-349.70k',
        amountCurrency: 'USDC',
        token: '-3409.70k',
        tokenCurrency: 'WETH',
        user: '0x...aE14'
    },
    {
        type: 'add',
        amount: '-349.70k',
        amountCurrency: 'USDC',
        token: '-3409.70k',
        tokenCurrency: 'WETH',
        user: '0x...aE14'
    },
    {
        type: 'remove',
        amount: '-349.70k',
        amountCurrency: 'USDC',
        token: '-3409.70k',
        tokenCurrency: 'WETH',
        user: '0x...aE14'
    },
    {
        type: 'add',
        amount: '-349.70k',
        amountCurrency: 'USDC',
        token: '-3409.70k',
        tokenCurrency: 'WETH',
        user: '0x...aE14'
    },
    {
        type: 'remove',
        amount: '-349.70k',
        amountCurrency: 'USDC',
        token: '-3409.70k',
        tokenCurrency: 'WETH',
        user: '0x...aE14'
    },
    {
        type: 'add',
        amount: '-349.70k',
        amountCurrency: 'USDC',
        token: '-3409.70k',
        tokenCurrency: 'WETH',
        user: '0x...aE14'
    },
    {
        type: 'remove',
        amount: '-349.70k',
        amountCurrency: 'USDC',
        token: '-3409.70k',
        tokenCurrency: 'WETH',
        user: '0x...aE14'
    },
    {
        type: 'add',
        amount: '-349.70k',
        amountCurrency: 'USDC',
        token: '-3409.70k',
        tokenCurrency: 'WETH',
        user: '0x...aE14'
    }
]