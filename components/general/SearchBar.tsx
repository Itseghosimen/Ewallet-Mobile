import React from 'react'
import { StyledInput, StyledView } from '@/constants/imports'
import { useColorScheme } from 'nativewind'
import { Colors } from '@/constants/Colors'
import { Image } from 'expo-image'

export default function SearchBar() {
    const { colorScheme } = useColorScheme()
    return (
        <StyledView className='flex-row items-center border border-secondary px-3 h-10 rounded-full'
            style={{
                backgroundColor: Colors[colorScheme].otpbg,
                gap: 10
            }}>
            <Image
                source={require('@/assets/icons/search-normal.png')}
                style={{
                    height: 18,
                    width: 18
                }}
                contentFit='contain'
            />
            <StyledInput
                placeholder='Search Token'
                placeholderTextColor={'#49515D'}
                className='flex-grow text-sm  text-black dark:text-white'
            />
        </StyledView>
    )
}