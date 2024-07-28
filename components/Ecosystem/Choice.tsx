import React, { useState } from 'react'
import { Favour, History, StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { useColorScheme } from 'nativewind'
import { FlatList } from 'react-native'
import { Image } from 'expo-image'
import Button from '../general/Buttons/Button'

export default function Choice() {
    const [choice, setChoice] = useState(0)
    const { colorScheme } = useColorScheme()
    return (
        <StyledView className='px-3'>
            <StyledView className='flex-row items-center' style={{ gap: 10 }}>
                <StyledTouch onPress={
                    () => setChoice(0)
                }>
                    <StyledText
                        className={`text-xs ${choice === 0 ? 'text-black dark:text-primary' : 'text-secondary'}`}
                        style={{
                            fontFamily: 'Inter_600SemiBold',
                        }}
                    >
                        History
                    </StyledText>
                </StyledTouch>
                <StyledView className='w-0.5 h-full bg-secondary' />
                <StyledTouch onPress={
                    () => setChoice(1)
                }>
                    <StyledText
                        className={`text-xs ${choice === 1 ? 'text-black dark:text-primary' : 'text-secondary'}`}
                        style={{
                            fontFamily: 'Inter_600SemiBold',
                        }}
                    >
                        Favorite
                    </StyledText>
                </StyledTouch>
            </StyledView>

            <StyledView className='mt-5'>
                {
                    choice === 0 ?
                        <FlatList
                            data={History}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ gap: 20 }}
                            horizontal={true}
                            renderItem={({ item }) => <Button
                                onPress={undefined}
                                title={item.title}
                                Icon={
                                    <Image
                                        source={item.icon}
                                        style={{
                                            height: 35,
                                            width: 35,
                                            borderRadius: 8
                                        }}
                                        contentFit='contain'
                                    />
                                }
                                textStyle={'text-[10px] text-black dark:text-white'}
                                style={'flex-col'}
                            />} />
                        : <FlatList
                            data={Favour}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ gap: 20 }}
                            horizontal={true}
                            renderItem={({ item }) => <Button
                                onPress={undefined}
                                title={item.title}
                                Icon={
                                    <Image
                                        source={item.icon}
                                        style={{
                                            height: 35,
                                            width: 35,
                                            borderRadius: 8
                                        }}
                                        contentFit='contain'
                                    />
                                }
                                textStyle={'text-[10px] text-black dark:text-white'}
                                style={'flex-col'}
                            />} />
                }
            </StyledView>
        </StyledView>
    )
}