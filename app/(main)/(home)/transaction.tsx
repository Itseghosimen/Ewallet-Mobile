import { FlatList } from 'react-native'
import React from 'react'
import { StyledText, StyledView } from '@/constants/imports'
import { useColorScheme } from 'nativewind'
import { Colors } from '@/constants/Colors'
import { Image } from 'expo-image'

export default function transaction() {
    const { colorScheme } = useColorScheme()
    return (
        <StyledView className='flex-1 bg-white dark:bg-background px-3'>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={TransactionsDetail}
                renderItem={({ item }) => {
                    return (
                        <StyledView className='pt-4 pb-1.5 border-b'
                            style={{
                                borderBottomColor: Colors[colorScheme].otpbg
                            }}>
                            <StyledView className='flex-row items-start justify-between'>
                                <StyledView className='flex-row items-center'
                                    style={{
                                        gap: 15
                                    }}>
                                    <StyledView
                                        style={{
                                            backgroundColor: Colors[colorScheme].otpbg
                                        }}
                                        className={`h-12 w-12 overflow-hidden rounded-full border
                                ${item.type == 'failed' ? 'border-[#F3BA2F]' : item.type == 'media' ? 'border-[#F80F0F]' : 'border-black/5 dark:border-white/5'}`}>
                                        {
                                            item.icon && <Image
                                                source={item.icon}
                                                style={{
                                                    height: '100%',
                                                    width: '100%'
                                                }}
                                                contentFit='contain'
                                                contentPosition={'top center'} />
                                        }
                                    </StyledView>
                                    <StyledView className='w-[70vw]'>
                                        <StyledText
                                            className='text-secondary text-base mb-1'
                                            style={{
                                                fontFamily: 'Inter_500Medium'
                                            }}
                                        >
                                            {item.status}
                                        </StyledText>
                                        <StyledText
                                            className='text-black/80 dark:text-white/80 text-[10px] mb-2'
                                            style={{
                                                fontFamily: 'Inter_400Regular'
                                            }}
                                        >
                                            {item.remark}
                                        </StyledText>
                                    </StyledView>
                                </StyledView>
                                <StyledView>
                                    <Image
                                        source={
                                            item.type === 'received' ?
                                                require('@/assets/icons/received-transaction.png')
                                                : item.type === 'failed' ?
                                                    require('@/assets/icons/failed-transaction.png')
                                                    : item.type === 'spend' ?
                                                        require('@/assets/icons/spent-transaction.png')
                                                        : item.type === 'media' ?
                                                            require('@/assets/icons/media-transaction.png')
                                                            : item.type === 'pending' ?
                                                                require('@/assets/icons/pending-transaction.png')
                                                                : undefined
                                        }
                                        style={{
                                            height: 20,
                                            width: 20
                                        }}
                                        contentFit='contain' />
                                </StyledView>
                            </StyledView>
                            <StyledView className='flex items-end'>
                                <StyledText className='text-[9px] text-secondary text-end '>
                                    {item.date}
                                </StyledText>
                            </StyledView>
                        </StyledView>
                    )
                }} />
        </StyledView>
    )
}






const TransactionsDetail = [
    {
        icon: require('@/assets/images/1.png'),
        status: 'Transaction successful',
        remark: 'You Received 45.000 ENET ($400,67) from Ignacho.',
        date: '29 November 2021 (13.00)',
        type: 'received'
    },
    {
        icon: undefined,
        status: 'Transaction successful',
        remark: 'You Received 45.000 ENET ($400,67) from Ignacho.',
        date: '29 November 2021 (13.00)',
        type: 'failed'
    },
    {
        icon: require('@/assets/images/2.png'),
        status: 'Transaction successful',
        remark: 'You Received 45.000 ENET ($400,67) from Ignacho.',
        date: '29 November 2021 (13.00)',
        type: 'spend'
    },
    {
        icon: undefined,
        status: 'Transaction successful',
        remark: 'You Received 45.000 ENET ($400,67) from Ignacho.',
        date: '29 November 2021 (13.00)',
        type: 'media'
    },
    {
        icon: undefined,
        status: 'Transaction successful',
        remark: 'You Received 45.000 ENET ($400,67) from Ignacho.',
        date: '29 November 2021 (13.00)',
        type: 'pending'
    },
    {
        icon: require('@/assets/icons/Icon.png'),
        status: 'Transaction successful',
        remark: 'You Received 45.000 ENET ($400,67) from Ignacho.',
        date: '29 November 2021 (13.00)',
        type: 'swap'
    }
]