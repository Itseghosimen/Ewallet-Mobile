import React from 'react'
import { StyledText, StyledView } from '@/constants/imports'
import { Image } from 'expo-image'
import Button from '../general/Buttons/Button'
import { FlatList, TouchableWithoutFeedback } from 'react-native'
import { Link } from 'expo-router'

export default function Tradex() {
    return (
        <StyledView>
            <StyledView className='flex-row items-center justify-between mb-2'>
                <StyledText className='text-secondary text-[12.5px]'
                    style={{
                        fontFamily: 'Inter_500Medium'
                    }}>
                    Type
                </StyledText>
                <StyledView className='w-[50vw] flex-row items-center justify-between'>
                    <StyledText className='text-secondary text-[12.5px]'
                        style={{
                            fontFamily: 'Inter_500Medium'
                        }}>
                        Amount
                    </StyledText>
                    <StyledText className='text-secondary text-[12.5px]'
                        style={{
                            fontFamily: 'Inter_500Medium'
                        }}>
                        Value/Price
                    </StyledText>
                </StyledView>
            </StyledView>

            <FlatList
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                data={PoolContent}
                renderItem={({ item }) => (
                    <StyledView className='flex-row w-full items-center justify-between my-4'>
                        <StyledView className='w-[20vw]' style={{ gap: 3 }}>
                            <StyledText
                                style={{
                                    fontFamily: 'Inter_500Medium'
                                }}
                                className={`capitalize text-sm ${item.type === 'sell' ? 'text-[#F35555]' : 'text-black dark:text-primary'}`}>
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

                        <StyledView className='w-[50vw] items-center flex-row justify-between'>
                            <StyledView className='items-end' style={{ gap: 3 }}>
                                <StyledText
                                    style={{
                                        fontFamily: 'Inter_500Medium'
                                    }}
                                    className={`capitalize ${item.type === 'sell' ? 'text-[#F35555]' : 'text-black dark:text-primary'}`}>
                                    {item.amount}
                                </StyledText>

                                <Link href={item.token} asChild>
                                    <TouchableWithoutFeedback>
                                        <StyledText
                                            style={{
                                                fontFamily: 'Inter_500Medium'
                                            }}
                                            className='text-secondary uppercase text-xs'>
                                            Link
                                        </StyledText>
                                    </TouchableWithoutFeedback>
                                </Link>

                            </StyledView>

                            <StyledView className='items-start' style={{ gap: 3 }}>
                                <Button
                                    onPress={undefined}
                                    title={item.user}
                                    textStyle={'text-black dark:text-white text-sm'}
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
                                <StyledText
                                    style={{
                                        fontFamily: 'Inter_500Medium'
                                    }}
                                    className='text-secondary text-xs'>
                                    $6.15
                                </StyledText>
                            </StyledView>
                        </StyledView>
                    </StyledView>
                )}
            />
        </StyledView>
    )
}


const PoolContent = [
    {
        type: 'sell',
        amount: '-349.70k',

        token: '',

        user: '0x...aE14'
    },
    {
        type: 'buy',
        amount: '-349.70k',

        token: '',

        user: '0x...aE14'
    },
    {
        type: 'sell',
        amount: '-349.70k',

        token: '',

        user: '0x...aE14'
    },
    {
        type: 'buy',
        amount: '-349.70k',

        token: '',

        user: '0x...aE14'
    },
    {
        type: 'sell',
        amount: '-349.70k',

        token: '',

        user: '0x...aE14'
    },
    {
        type: 'buy',
        amount: '-349.70k',

        token: '',

        user: '0x...aE14'
    },
    {
        type: 'sell',
        amount: '-349.70k',

        token: '',

        user: '0x...aE14'
    },
    {
        type: 'buy',
        amount: '-349.70k',

        token: '',

        user: '0x...aE14'
    },
    {
        type: 'sell',
        amount: '-349.70k',

        token: '',

        user: '0x...aE14'
    },
    {
        type: 'buy',
        amount: '-349.70k',

        token: '',

        user: '0x...aE14'
    }
]