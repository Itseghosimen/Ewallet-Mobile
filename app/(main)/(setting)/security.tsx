import { View, FlatList } from 'react-native'
import React from 'react'
import { StyledView } from '@/constants/imports'
import { useColorScheme } from 'nativewind'
import { Colors } from '@/constants/Colors'
import SettingBtn from '@/components/home/settings/SettingBtn'

export default function security() {
    const { colorScheme } = useColorScheme()
    return (
        <StyledView className='flex-1 bg-white dark:bg-background'>
            <StyledView
                className='px-3 py-5 rounded-xl'
                style={{
                    backgroundColor: Colors[colorScheme].otpbg
                }}>
                <FlatList
                    data={securityInfo}
                    ItemSeparatorComponent={() => {
                        return (
                            <StyledView className='w-[85vw] ml-auto h-0.5 bg-black dark:bg-white opacity-10 my-5' />
                        )
                    }}
                    renderItem={({ item }) => {
                        return (
                            <SettingBtn
                                frontIcon={item.icon}
                                title={item.title}
                                description={item.description}
                                type={'link'}
                                onPress={item.onpress} />
                        )
                    }} />
            </StyledView>
        </StyledView>
    )
}

const securityInfo = [
    {
        icon: require('@/assets/icons/shield.png'),
        title: 'Guardians',
        description: 'Guardians are people you trust that will help you recover your  account and approve transactions',
        onpress: undefined
    },
    {
        icon: require('@/assets/icons/time.png'),
        title: 'Set withdrawal limit',
        description: 'Set a withdrawal limit daily,weekly or monthly',
        onpress: undefined
    },
    {
        icon: require('@/assets/icons/strongbox.png'),
        title: 'Set up account freezing password',
        description: 'Your guardian locks your wallet, this will limit access to your wallet',
        onpress: undefined
    },
    {
        icon: require('@/assets/icons/book.png'),
        title: 'Allow list',
        description: 'Transfer funds ONLY to contacts in youy allow list',
        onpress: undefined
    },
    {
        icon: require('@/assets/icons/screen-lock.png'),
        title: 'Backup & Secure keys as QR-code',
        onpress: undefined
    },
]