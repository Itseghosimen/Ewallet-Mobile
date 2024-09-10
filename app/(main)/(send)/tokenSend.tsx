import { FlatList, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import { StyledText, StyledView, TokenSelect, availableToken } from '@/constants/imports'
import { useColorScheme } from 'nativewind'
import SearchBar from '@/components/general/SearchBar'
import { router } from 'expo-router'
import Button from '@/components/general/Buttons/Button'
import { Image } from 'expo-image'

export default function tokenSend() {
    const { colorScheme } = useColorScheme()
    return (
        <StyledView className='flex-1 bg-white dark:bg-background pt-3 gap-y-4'>
            <StatusBar
                barStyle={colorScheme == 'dark' ? 'light-content' : 'dark-content'}
            />
            <StyledView className='border-b border-[#F3F4F8] dark:border-[#12131B] gap-y-3 pb-3 px-3'>
                <SearchBar />

                <FlatList
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        gap: 10
                    }}
                    horizontal
                    ListHeaderComponent={() =>
                        <Button
                            onPress={router.back}
                            title='All'
                            style={'px-3 h-10 rounded-lg bg-[#F3F4F8] dark:bg-[#12131B]'}
                            textStyle={'text-secondary text-xs  '}
                            Icon={
                                <Image
                                    source={require('@/assets/icons/appst.png')}
                                    style={{
                                        height: 18,
                                        width: 18,
                                        marginRight: 8
                                    }}
                                    contentFit='contain'
                                />
                            } />
                    }
                    data={availableToken}
                    renderItem={({ item }) => (
                        <Button
                            onPress={undefined}
                            title={item.fullName}
                            style={'px-3 h-10 rounded-lg bg-[#F3F4F8] dark:bg-[#12131B]'}
                            textStyle={'text-secondary text-xs  '}
                            Icon={
                                <Image
                                    source={item.icon}
                                    style={{
                                        height: 18,
                                        width: 18,
                                        marginRight: 8
                                    }}
                                    contentFit='contain'
                                />
                            } />
                    )} />
            </StyledView>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 25,
                    paddingHorizontal: 12
                }}>
                <FlatList
                    scrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingVertical: 10,
                        gap: 15
                    }}
                    data={availableToken} renderItem={({ item }) => (
                        <TokenSelect
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
            </ScrollView>
        </StyledView>
    )
}