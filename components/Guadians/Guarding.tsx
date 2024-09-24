import { StyledText, StyledTouch, StyledView, trendingCoin } from '@/constants/imports'
import React from 'react'
import { SwipeListView } from 'react-native-swipe-list-view'

import { Image } from 'expo-image'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from 'nativewind'
import { Entypo } from '@expo/vector-icons'
import { router } from 'expo-router'

export default function Guarding() {
    const { colorScheme } = useColorScheme()
    return (
        <StyledView className='flex-1 py-7 px-3'>
            <StyledText className='text-black dark:text-white text-sm mb-4' style={{ fontFamily: 'Inter_500Medium' }}>Guarding</StyledText>
            <StyledView>
                <SwipeListView
                    useFlatList
                    contentContainerStyle={{
                        paddingTop: 5,
                        gap: 12
                    }}
                    data={Save}
                    renderItem={({ item }) => (
                        <StyledView className='bg-releiveLight dark:bg-releive px-2 h-14 py-2 flex-row items-center justify-between rounded-xl overflow-hidden'>
                            <StyledView className='flex-row items-center'>
                                <Image
                                    source={item.image}
                                    style={{
                                        height: 40,
                                        width: 40,
                                        borderRadius: 4
                                    }}
                                    contentFit='contain'
                                />
                                <StyledView className='ml-3'>
                                    <StyledText className='text-black dark:text-white text-base' style={{ fontFamily: 'Inter_500Medium' }}>{item.name}</StyledText>
                                    <StyledText className='text-secondary text-xs' style={{ fontFamily: 'Inter_500Medium' }}>{item.time}</StyledText>
                                </StyledView>
                            </StyledView>
                            <Entypo name="chevron-small-right" size={24} color={Colors[colorScheme].tint} />
                        </StyledView>
                    )}
                    renderHiddenItem={() => (
                        <StyledView className='flex-row items-center px-3 justify-end h-14'>
                            <StyledView className='flex-row items-center justify-end pr-4 max-w-[70vw] w-full bg-[#5A0FF8] h-full'>
                                <StyledText className='text-white text-sm' style={{ fontFamily: 'Inter_500Medium' }}>Freeze wallet</StyledText>
                            </StyledView>
                        </StyledView>
                    )}
                    leftOpenValue={0}
                    rightOpenValue={-170}
                    stopLeftSwipe={1}
                    stopRightSwipe={-170}
                    closeOnRowPress={true}
                    previewRowKey={'0'}
                    previewOpenValue={-40}
                    previewOpenDelay={3000}
                    closeOnRowBeginSwipe={true}
                    closeOnScroll={true}
                    onRowOpen={
                        () => setTimeout(() => {
                            router.push('/guardianPin')
                        }, 500)
                    }
                />
            </StyledView>

            <StyledText className='text-black dark:text-white text-sm mt-10 mb-4' style={{ fontFamily: 'Inter_500Medium' }}>Pending request</StyledText>
            <StyledView>
                <SwipeListView
                    useFlatList
                    contentContainerStyle={{
                        paddingTop: 5,
                        gap: 12
                    }}
                    data={Save}
                    renderItem={({ item }) => (
                        <StyledView className='bg-releiveLight dark:bg-releive px-2 h-14 py-2 flex-row items-center justify-between rounded-xl overflow-hidden'>
                            <StyledView className='flex-row items-center'>
                                <Image
                                    source={item.image}
                                    style={{
                                        height: 40,
                                        width: 40,
                                        borderRadius: 4
                                    }}
                                    contentFit='contain'
                                />
                                <StyledView className='ml-3'>
                                    <StyledText className='text-black dark:text-white text-base' style={{ fontFamily: 'Inter_500Medium' }}>{item.name}</StyledText>
                                    <StyledText className='text-secondary text-xs' style={{ fontFamily: 'Inter_500Medium' }}>{item.time}</StyledText>
                                </StyledView>
                            </StyledView>
                            <Entypo name="chevron-small-right" size={24} color={Colors[colorScheme].tint} />
                        </StyledView>
                    )}
                    renderHiddenItem={() => (
                        <StyledView className='flex-row items-center px-3 justify-end h-14'>
                            <StyledView className='flex-row items-center justify-end pr-4 max-w-[70vw] w-full bg-[#F80F0F] h-full'>
                                <StyledText className='text-white text-sm' style={{ fontFamily: 'Inter_500Medium' }}>Freeze wallet</StyledText>
                            </StyledView>
                        </StyledView>
                    )}
                    leftOpenValue={0}
                    rightOpenValue={-170}
                    stopLeftSwipe={1}
                    stopRightSwipe={-170}
                    closeOnRowPress={true}
                    previewRowKey={'0'}
                    previewOpenValue={-40}
                    previewOpenDelay={3000}
                    closeOnRowBeginSwipe={true}
                    closeOnScroll={true}
                />
            </StyledView>
        </StyledView>
    )
}



const Save = [
    {
        image: require('@/assets/images/4.png'),
        name: 'Vincent',
        time: 'Added on 20.Jan.2023'
    },
    {
        image: require('@/assets/images/4.png'),
        name: 'Emma',
        time: 'Added on 20.Jan.2023'
    },
]