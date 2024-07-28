import React from 'react'
import { StyledText, StyledView } from '@/constants/imports'
import { ScrollView } from 'react-native'
import { Image } from 'expo-image'

export default function Activity() {
    return (
        <StyledView>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    paddingHorizontal: 12,
                    paddingTop: 15,
                }}>
                {
                    act.map((items, idx) => {
                        return (
                            <StyledView key={idx} className='pb-5'>
                                <StyledText
                                    className='text-xs mb-2 text-secondary'
                                    style={{
                                        fontFamily: 'Inter_600SemiBold'
                                    }}>{items.date}</StyledText>
                                <StyledView style={{ gap: 25, paddingVertical: 15, width: '100%' }}>
                                    {
                                        items.activities.map((items, index) => (
                                            <StyledView
                                                key={index}
                                                className='flex-row items-center justify-between'>
                                                <StyledView className='flex-row items-start'>
                                                    <Image
                                                        source={items.type === 'transfer' ?
                                                            require('@/assets/icons/transfer-icon.png')
                                                            : items.type === 'received' ?
                                                                require('@/assets/icons/receive-icon.png')
                                                                : items.type === 'swap' ?
                                                                    require('@/assets/icons/swap-icon.png')
                                                                    : items.type === 'smart contract' ?
                                                                        require('@/assets/icons/contract-icon.png')
                                                                        : items.type === 'buy' || items.type === 'sell' ?
                                                                            require('@/assets/icons/convert-card.png')
                                                                            : null
                                                        }
                                                        style={[{
                                                            height: 25,
                                                            width: 25,
                                                        }, items.type === 'sell' && { tintColor: '#F80F0F' }]}
                                                    />
                                                    <StyledView className='ml-2'>
                                                        <StyledText
                                                            className='text-black dark:text-white text-sm capitalize'
                                                            style={{
                                                                fontFamily: 'Inter_500Medium'
                                                            }}>{items.type}
                                                        </StyledText>
                                                        <StyledText
                                                            className={`text-secondary ${items.type == 'swap' ? 'uppercase' : 'capitalize'} text-xs `}
                                                            style={{
                                                                fontFamily: 'Inter_500Medium'
                                                            }}>
                                                            {
                                                                items.type == 'transfer' || items.type == 'smart contract' || items.type == 'sell' ?
                                                                    'to: ' : items.type == 'received' || items.type == 'buy' ?
                                                                        'from: ' : ''
                                                            }

                                                            {
                                                                items.type == 'swap' ? items.networks : items.receiver
                                                            }
                                                        </StyledText>
                                                    </StyledView>
                                                </StyledView>

                                                <StyledText
                                                    style={{
                                                        fontFamily: 'Inter_500Medium'
                                                    }}
                                                    className={`text-[13px] ${items.type == 'swap' ||
                                                        items.type === 'smart contract' ?
                                                        'text-black dark:text-white' :
                                                        items.type == 'transfer' || items.type == 'sell' ?
                                                            'text-[#F80F0F]' : 'text-primary'
                                                        } uppercase`}
                                                >
                                                    {items.amount.toLocaleString('en-US', {
                                                        minimumFractionDigits: 3,
                                                        maximumFractionDigits: 3
                                                    })}{' '}bnb
                                                </StyledText>
                                            </StyledView>
                                        ))
                                    }
                                </StyledView>
                            </StyledView>
                        )
                    })
                }
            </ScrollView>
        </StyledView>
    )
}


const act = [
    {
        date: 'Sep 18 2022',
        activities: [
            {
                type: 'transfer',
                receiver: 'Laura Hiile',
                amount: 2.000
            },
            {
                type: 'transfer',
                receiver: 'Laura Hiile',
                amount: 2.000
            },
            {
                type: 'received',
                receiver: 'Emeka Jim',
                amount: 2.000
            }
        ]
    },
    {
        date: 'Sep 12 2022',
        activities: [
            {
                type: 'swap',
                networks: 'BNB - ETH',
                amount: 2.000
            },
            {
                type: 'smart contract',
                receiver: '0x305A...2d8bAb7',
                amount: 2.000
            },
            {
                type: 'buy',
                receiver: '0x305A...2d8bAb7',
                amount: 21.000
            },
            {
                type: 'sell',
                receiver: '0x305A...2d8bAb7',
                amount: 21.000
            }
        ]
    },
    {
        date: 'Sep 10 2022',
        activities: [
            {
                type: 'transfer',
                receiver: 'Laura Hiile',
                amount: 2.000
            },
            {
                type: 'transfer',
                receiver: 'Laura Hiile',
                amount: 2.000
            },
            {
                type: 'received',
                receiver: 'Emeka Jim',
                amount: 2.000
            }
        ]
    },
    {
        date: 'Sep 5 2022',
        activities: [
            {
                type: 'swap',
                networks: 'BNB - ETH',
                amount: 2.000
            },
            {
                type: 'smart contract',
                receiver: '0x305A...2d8bAb7',
                amount: 2.000
            },
            {
                type: 'buy',
                receiver: '0x305A...2d8bAb7',
                amount: 21.000
            },
            {
                type: 'sell',
                receiver: '0x305A...2d8bAb7',
                amount: 21.000
            }
        ]
    },
]