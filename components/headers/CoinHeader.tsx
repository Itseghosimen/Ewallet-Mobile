import { StyledText, StyledView } from '@/constants/imports'
import React from 'react'

export default function CoinHeader() {
    return (
        <StyledView className='flex-row items-center justify-between'>
            <StyledText
                className='text-xs text-secondary px-2'
                style={{
                    fontFamily: 'Inter_500Medium'
                }}>
                Coin
            </StyledText>
            <StyledView className='flex-row items-center w-[45vw] justify-between'>

                <StyledText
                    className='text-xs text-secondary px-3'
                    style={{
                        fontFamily: 'Inter_500Medium'
                    }}>Last price
                </StyledText>

                <StyledText
                    className='text-xs text-secondary px-3'
                    style={{
                        fontFamily: 'Inter_500Medium'
                    }}>24h chg%
                </StyledText>
            </StyledView>

        </StyledView>
    )
}