import { StyledText, StyledView } from '@/constants/imports';
import React from 'react'

export default function WalletBalance(props: { balance: number; increase: number; percentIncrease: number; }) {
    return (
        <StyledView className='gap-y-1 flex items-center'>
            <StyledText className='text-black dark:text-[#B6B6B6]'>Wallet Balance</StyledText>
            <StyledText style={{
                fontFamily: 'Inter_700Bold',
            }} className='text-2xl   text-black dark:text-white'>
                {
                    props.balance?.toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                        style: 'currency',
                        currency: 'USD'
                    })
                }
            </StyledText>
            <StyledView className='flex-row gap-x-1.5 items-center'>
                <StyledText
                    style={{
                        fontFamily: 'Inter_500Medium',
                    }} className='  text-xs text-black dark:text-primary'>
                    +{props.increase.toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                        style: 'currency',
                        currency: 'USD'
                    })}
                </StyledText>
                <StyledView className='px-2 h-5 rounded-md flex items-center justify-center bg-[#dddddd] dark:bg-[#073034]'>
                    <StyledText className=' font-normal text-xs text-black dark:text-primary'>
                        +{props.percentIncrease.toLocaleString('en-US', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}%
                    </StyledText>
                </StyledView>
            </StyledView>
        </StyledView>
    )
}