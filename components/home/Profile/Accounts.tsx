import { ScrollView, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { Image, ImageBackground } from 'expo-image'
import * as Clipboard from 'expo-clipboard';
import { Colors } from '@/constants/Colors'
import { useColorScheme } from 'nativewind';
import { StyledText, StyledTouch, StyledView } from '@/constants/imports';

export default function Accounts() {
    const [user, setUser] = useState(AccountDetails[0].userName)
    const { colorScheme } = useColorScheme()
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}>

            {AccountDetails.map((item, idx) => (
                <TouchableWithoutFeedback
                    key={idx}
                    onPress={() => {
                        setUser(item.userName)
                    }}>
                    <StyledView className='flex-row justify-between items-center p-3 rounded-xl relative mb-3 border-black dark:border-primary'
                        style={{
                            backgroundColor: colorScheme === 'light' ? '#F9f9f9' : '#12131B',
                            borderWidth: item.userName === user ? 1 : 0,
                        }}
                    >
                        <StyledView className='flex-row gap-x-3.5 items-center'>
                            <ImageBackground
                                source={item.userIcon}
                                style={{
                                    height: 45,
                                    width: 45
                                }}
                                contentFit='contain'
                                contentPosition={'top center'}
                            />
                            <StyledView>
                                <StyledText
                                    style={{
                                        fontFamily: 'Inter_600SemiBold',
                                    }} className='text-base  text-black dark:text-white'>
                                    {item.userName}
                                </StyledText>

                                <StyledView className='flex-row gap-x-1.5 items-center justify-center'>
                                    <StyledText
                                        style={{
                                            fontFamily: 'Inter_500Medium',
                                        }} className='text-xs   text-secondary'>
                                        EVM: {item.userWallet}
                                    </StyledText>
                                    <StyledTouch onPress={async () => {
                                        await Clipboard.setStringAsync(item.userWallet);
                                    }}>
                                        <Image
                                            source={require('@/assets/icons/document-copy.png')}
                                            style={{
                                                height: 15,
                                                width: 15,
                                            }}
                                            contentFit='contain' />
                                    </StyledTouch>
                                </StyledView>
                            </StyledView>
                        </StyledView>
                        <StyledText
                            style={{
                                fontFamily: 'Inter_500Medium',
                            }} className='text-sm   text-secondary'>
                            ${item.userBalance.toLocaleString()}
                        </StyledText>
                        <StyledView className={`-top-0.5 right-0 ${user === item.userName ? 'flex' : 'hidden'} absolute`}>
                            <Image
                                source={require('@/assets/icons/checked.png')}
                                style={{
                                    height: 18,
                                    width: 24
                                }}
                                contentFit='contain' />
                        </StyledView>
                    </StyledView>
                </TouchableWithoutFeedback>
            ))}

        </ScrollView>
    )
}


const AccountDetails = [
    {
        userIcon: require('@/assets/images/1.png'),
        userName: 'Crystabel',
        userWallet: '0x06A4....67t7Db',
        userBalance: 5600067,
    },
    {
        userIcon: require('@/assets/images/3.png'),
        userName: 'Itseghosime',
        userWallet: '0x06A4....67t7Tt',
        userBalance: 0.0,
    },
]