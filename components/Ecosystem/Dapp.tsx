import React from 'react'
import { Listing, StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { FlatList, ScrollView } from 'react-native'
import Choice from './Choice'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from 'nativewind'
import { Image } from 'expo-image'

export default function Dapp() {
    const { colorScheme } = useColorScheme()

    return (
        <StyledView>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    paddingTop: 15,
                    paddingBottom: 30
                }}>
                <Choice />

                <StyledView className='mt-5'>
                    <StyledText
                        style={{
                            fontFamily: 'Inter_600SemiBold',
                        }}
                        className='text-sm px-3 text-black dark:text-white mb-5'
                    >
                        New listing
                    </StyledText>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        directionalLockEnabled={true}
                        alwaysBounceVertical={false}
                        style={{
                            paddingLeft: 12,
                            paddingBottom: 20,
                            borderBottomColor: Colors[colorScheme].otpbg,
                            borderBottomWidth: 1,
                        }}>
                        <FlatList
                            data={Listing}
                            columnWrapperStyle={{ gap: 20 }}
                            contentContainerStyle={{ gap: 20 }}
                            numColumns={Math.ceil(Listing.length / 3)} renderItem={({ item }) => {
                                return (
                                    <StyledTouch className='flex-row w-[70vw]'>
                                        <Image
                                            source={item.icon}
                                            style={{
                                                height: 35,
                                                width: 35,
                                                borderRadius: 8
                                            }}
                                            contentFit='contain'
                                        />
                                        <StyledView className='ml-3'>
                                            <StyledText
                                                style={{
                                                    fontFamily: 'Inter_500Medium',
                                                }}
                                                className='text-xs text-black dark:text-white'
                                            >
                                                {item.title}
                                            </StyledText>
                                            <StyledText
                                                style={{
                                                    fontFamily: 'Inter_500Medium',
                                                }}
                                                className='text-[9px] text-secondary'>
                                                {item.description}
                                            </StyledText>
                                        </StyledView>
                                    </StyledTouch>
                                )
                            }} />
                    </ScrollView>
                </StyledView>

                <StyledView className='mt-5'>
                    <StyledText
                        style={{
                            fontFamily: 'Inter_600SemiBold',
                        }}
                        className='text-sm px-3 text-black dark:text-white mb-5'
                    >
                        DeFi
                    </StyledText>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        directionalLockEnabled={true}
                        alwaysBounceVertical={false}
                        style={{
                            paddingLeft: 12,
                            paddingBottom: 20,
                            borderBottomColor: Colors[colorScheme].otpbg,
                            borderBottomWidth: 1,
                        }}>
                        <FlatList
                            data={Listing}
                            columnWrapperStyle={{ gap: 20 }}
                            contentContainerStyle={{ gap: 20 }}
                            numColumns={Math.ceil(Listing.length / 3)} renderItem={({ item }) => {
                                return (
                                    <StyledTouch className='flex-row w-[70vw]'>
                                        <Image
                                            source={item.icon}
                                            style={{
                                                height: 35,
                                                width: 35,
                                                borderRadius: 8
                                            }}
                                            contentFit='contain'
                                        />
                                        <StyledView className='ml-3'>
                                            <StyledText
                                                style={{
                                                    fontFamily: 'Inter_500Medium',
                                                }}
                                                className='text-xs text-black dark:text-white'
                                            >
                                                {item.title}
                                            </StyledText>
                                            <StyledText
                                                style={{
                                                    fontFamily: 'Inter_500Medium',
                                                }}
                                                className='text-[9px] text-secondary'>
                                                {item.description}
                                            </StyledText>
                                        </StyledView>
                                    </StyledTouch>
                                )
                            }} />
                    </ScrollView>
                </StyledView>

                <StyledView className='mt-5'>
                    <StyledText
                        style={{
                            fontFamily: 'Inter_600SemiBold',
                        }}
                        className='text-sm px-3 text-black dark:text-white mb-5'
                    >
                        Tools
                    </StyledText>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        directionalLockEnabled={true}
                        alwaysBounceVertical={false}
                        style={{
                            paddingLeft: 12,
                            paddingBottom: 20,
                            borderBottomColor: Colors[colorScheme].otpbg,
                            borderBottomWidth: 1,
                        }}>
                        <FlatList
                            data={Listing}
                            columnWrapperStyle={{ gap: 20 }}
                            contentContainerStyle={{ gap: 20 }}
                            numColumns={Math.ceil(Listing.length / 3)} renderItem={({ item }) => {
                                return (
                                    <StyledTouch className='flex-row w-[70vw]'>
                                        <Image
                                            source={item.icon}
                                            style={{
                                                height: 35,
                                                width: 35,
                                                borderRadius: 8
                                            }}
                                            contentFit='contain'
                                        />
                                        <StyledView className='ml-3'>
                                            <StyledText
                                                style={{
                                                    fontFamily: 'Inter_500Medium',
                                                }}
                                                className='text-xs text-black dark:text-white'
                                            >
                                                {item.title}
                                            </StyledText>
                                            <StyledText
                                                style={{
                                                    fontFamily: 'Inter_500Medium',
                                                }}
                                                className='text-[9px] text-secondary'>
                                                {item.description}
                                            </StyledText>
                                        </StyledView>
                                    </StyledTouch>
                                )
                            }} />
                    </ScrollView>
                </StyledView>

                <StyledView className='h-10' />
            </ScrollView>
        </StyledView>
    )
}