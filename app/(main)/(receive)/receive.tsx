import React from 'react'
import { StyledText, StyledView, TokenPron, availableToken } from '@/constants/imports'
import { FlatList, StatusBar } from 'react-native'
import SearchBar from '@/components/general/SearchBar'
import { useColorScheme } from 'nativewind'
import { router } from 'expo-router'
import Button from '@/components/general/Buttons/Button'
import { Image } from 'expo-image'
import ScrollRefresh from '@/components/general/ScrollRefresh'

export default function receive() {
    const { colorScheme } = useColorScheme()
    return (
        <StyledView className='flex-1 bg-white dark:bg-background px-3 pt-5 gap-y-4'>
            <StatusBar
                barStyle={colorScheme == 'dark' ? 'light-content' : 'dark-content'}
            />
            <SearchBar />
            <ScrollRefresh
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 25
                }}>
                <FlatList
                    scrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingVertical: 10,
                        gap: 15
                    }}
                    data={availableToken} renderItem={({ item }) => (
                        <TokenPron
                            icon={item.icon}
                            abbreviation={item.abbreviation}
                            fullName={item.fullName}
                            rate={item.rate}
                            dollar={item.dollar}
                        />
                    )} />
                <StyledView className='mt-8 items-center flex'>
                    <StyledText className='text-xs text-center text-secondary mb-2.5'>Can`t find a token?</StyledText>
                    <Button title='Add Token'
                        onPress={() => router.push('/mainnet')}
                        style={'px-5 h-12 rounded-full border-2 border-secondary'}
                        textStyle={'ml-2.5 text-black dark:text-white'}
                        Icon={
                            <Image
                                source={require('@/assets/icons/add.png')}
                                style={{
                                    height: 20,
                                    width: 20
                                }}
                                contentFit='contain' />
                        } />
                </StyledView>
            </ScrollRefresh>
        </StyledView>
    )
}
