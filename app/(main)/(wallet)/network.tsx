import React, { useState } from 'react'
import { StyledView, trendingCoin } from '@/constants/imports'
import { Dimensions, FlatList } from 'react-native'
import { Image } from 'expo-image'
import { useColorScheme } from 'nativewind'
import { Colors } from '@/constants/Colors'
import Button from '@/components/general/Buttons/Button'

export default function network() {
    const [net, setNet] = useState(0)
    const { colorScheme } = useColorScheme()
    const layout = Dimensions.get('window').width
    return (
        <StyledView className='flex-1 relative bg-white dark:bg-background px-3 pt-3 overflow-hidden'>
            <StyledView
                className='absolute h-full w-full right-3 bottom-0 rounded-t-md'
                style={{
                    backgroundColor: Colors[colorScheme].otpbg,
                    width: layout - 61
                }}
            />
            <FlatList
                data={trendingCoin}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    gap: 22,
                    paddingBottom: 30,
                    paddingTop: 10
                }}
                renderItem={
                    ({ item, index }) => {
                        return (
                            <StyledView className='flex-row items-center justify-between pr-4'>
                                <Button
                                    onPress={() => setNet(index)}
                                    Icon={
                                        <Image source={item.icon}
                                            style={{
                                                height: 27,
                                                width: 27
                                            }} />
                                    }
                                    style={'grow '}
                                    textStyle={'ml-6 text-black dark:text-white'}
                                    title={item.title}

                                />
                                <StyledView>
                                    {net == index &&
                                        <Image source={require('@/assets/icons/checked-good.png')}
                                            style={{
                                                height: 10,
                                                width: 13,
                                                tintColor: Colors[colorScheme].primary
                                            }} />}
                                </StyledView>
                            </StyledView>
                        )
                    }
                }
            />
        </StyledView>
    )
}