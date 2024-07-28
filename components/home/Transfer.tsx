import React, { useState } from 'react'
import { StyledText, StyledView } from '@/constants/imports'
import Button from '../general/Buttons/Button'
import { Image } from 'expo-image'
import Contacts from '../general/Contacts'

export default function Transfer() {
    const [showContact, setShowContact] = useState(true)
    return (
        <StyledView className='flex' style={{
            gap: 5
        }}>
            <StyledView className='flex-row items-center justify-between'>
                <StyledText
                    style={{
                        fontFamily: 'Inter_600SemiBold',
                    }}
                    className='text-black dark:text-white text-base'>
                    Quick Transfer
                </StyledText>
                <Button
                    Icon={
                        <Image
                            source={showContact ? require('@/assets/icons/add.png') : require('@/assets/icons/minus.png')}
                            style={{
                                height: 20,
                                width: 20
                            }}
                        />
                    }
                    onPress={() => setShowContact(!showContact)} />
            </StyledView>
            {
                !showContact ?
                    <Contacts />
                    : null

            }
        </StyledView>
    )
}