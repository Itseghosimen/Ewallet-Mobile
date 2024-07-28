import React, { useState } from 'react'
import { StyledText, StyledView } from '@/constants/imports'
import Button from '../general/Buttons/Button'
import { Image } from 'expo-image'
import WebCampus from './WebCampus'

export default function HomeCampus() {
    const [visible, setVisible] = useState(true)

    return (
        <StyledView className={`${visible ? 'flex' : 'hidden'}`} style={{ gap: 20 }}>
            <StyledView className='flex-row items-center justify-between'>
                <StyledText
                    style={{
                        fontFamily: 'Inter_600SemiBold',
                    }}
                    className='text-secondary text-base'>
                    Web3 Campus
                </StyledText>
                <Button
                    Icon={
                        <Image
                            source={require('@/assets/icons/times.png')}
                            style={{
                                height: 12,
                                width: 12
                            }}
                        />
                    }
                    onPress={() => setVisible(false)} />
            </StyledView>
            <WebCampus />
        </StyledView>
    )
}