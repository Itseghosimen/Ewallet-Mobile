import { View, Text } from 'react-native'
import React from 'react'
import { StyledView } from '@/constants/imports'
import ProfileBoard from '@/components/home/Profile/ProfileBoard'
import NewWallet from '@/components/general/Buttons/NewWallet'
import Accounts from '@/components/home/Profile/Accounts'
import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'nativewind'

export default function switchAccount() {
    const { colorScheme } = useColorScheme()
    return (
        <StyledView className='flex-1 bg-white dark:bg-background pb-5'>
            <StatusBar
                style={colorScheme == 'dark' ? 'light' : 'dark'}
            />
            <ProfileBoard />
            <StyledView className='flex-1 px-3'>
                <Accounts />
            </StyledView>
            <StyledView className='px-3 '>
                <NewWallet
                    style={{
                        height: 45
                    }}
                />
            </StyledView>

        </StyledView>
    )
}