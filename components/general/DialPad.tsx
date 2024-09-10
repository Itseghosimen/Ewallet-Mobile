import { FlatList, Dimensions } from 'react-native'
import React from 'react'
import { StyledText, StyledTouch, StyledView } from '@/constants/imports';
import { useColorScheme } from 'nativewind';
import { Image } from 'expo-image';
import { Colors } from '@/constants/Colors';

const dialPad = [1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 'zero', 'space']


export default function DialPad({ onPress, del, confirm, confirmBtn }: {
    onPress: (value: typeof dialPad[number]) => void;
    del: (value: typeof dialPad[number]) => void;
    confirm: (value: typeof dialPad[number]) => void;
    confirmBtn: number;
}) {

    const layout = Dimensions.get('window')
    const { colorScheme } = useColorScheme()


    return (
        <StyledView className='pb-5 px-3'>
            <StyledView className='flex-row items-end justify-center mx-auto'
                style={{
                    width: (layout.width * 0.9) + 10,
                }}>
                <FlatList
                    data={dialPad}
                    keyExtractor={(_, index) => index.toString()}
                    numColumns={3}
                    scrollEnabled={false}
                    contentContainerStyle={{
                        width: ((layout.width * 0.23) * 3) + 10,
                        padding: 0,
                        margin: 0,
                        gap: 5
                    }}
                    renderItem={({ item }) => {
                        if (item == 'space') {
                            return null;
                        } else {
                            return (
                                <StyledView className='w-[23vw] flex items-center justify-center'>
                                    <StyledTouch
                                        onPress={() => onPress(item)}
                                        className='flex items-center justify-center rounded-full bg-white dark:bg-background'
                                        style={{
                                            height: layout.width * 0.2,
                                            width: layout.width * 0.2
                                        }}>
                                        <StyledText className={`text-xl ${colorScheme == 'dark' ? 'text-[#ADB5BF]' : 'text-black'}`}
                                            style={{
                                                fontFamily: 'Inter_600SemiBold',
                                            }}
                                        >
                                            {item == 'zero' ? 0 : item}
                                        </StyledText>
                                    </StyledTouch>
                                </StyledView>
                            )
                        }
                    }}
                />

                <StyledView className='pb-7 justify-between' style={{
                    gap: layout.width * 0.07,
                    height: layout.width * 0.835,
                }}>
                    <StyledTouch
                        onPress={() => del('del')}
                        className='flex items-center justify-center rounded-full bg-white dark:bg-background'
                        style={{
                            height: layout.width * 0.2,
                            width: layout.width * 0.2
                        }}>
                        <Image
                            source={require('@/assets/icons/times.png')}
                            style={{
                                height: 15,
                                width: 15,
                                tintColor: colorScheme == 'dark' ? '#ADB5BF' : '#000'
                            }} />
                    </StyledTouch>
                    <StyledTouch
                        onPress={() => confirm('process')}
                        className='flex items-center justify-center rounded-lg bg-background'
                        style={{
                            height: layout.width * 0.5,
                            width: layout.width * 0.23,
                            backgroundColor: confirmBtn <= 5 ? Colors[colorScheme].otpbg : Colors[colorScheme].primary,
                        }}>
                        <StyledText
                            className={` ${confirmBtn <= 5 ? 'text-black dark:text-white' : 'text-white dark:text-black'} `} style={{
                                fontFamily: 'Inter_600SemiBold',
                            }}>
                            Confirm
                        </StyledText>
                    </StyledTouch>
                </StyledView>
            </StyledView>
        </StyledView>
    )
}