import { StyledText, StyledTouch } from '@/constants/imports'
import { Image } from 'expo-image'
import React from 'react'

export default function Logout() {
    return (
        <StyledTouch
            className='flex-row items-center justify-center py-4 w-full rounded-md border border-[#f80f0f]'>
            <StyledText className='text-sm   text-black dark:text-white text-[#f80f0f'
                style={{
                    color: '#F80F0F',
                    fontFamily: 'Inter_500Medium',

                }}>Log out</StyledText>
            <Image
                source={require('@/assets/icons/logout.png')}
                style={{
                    height: 25,
                    width: 25,
                    tintColor: '#F80F0F',
                    marginLeft: 10
                }}
                contentFit='contain' />
        </StyledTouch>
    )
}