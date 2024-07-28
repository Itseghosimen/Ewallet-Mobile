import React, { useState } from 'react'
import { StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { useColorScheme } from 'nativewind'
import { FlatList, GestureResponderEvent } from 'react-native'
import { NestableDraggableFlatList, NestableScrollContainer } from 'react-native-draggable-flatlist'
import { Image } from 'expo-image'
import { Colors } from '@/constants/Colors'
import SearchBar from '@/components/general/SearchBar'
import SwitchBtn from '@/components/general/Switch'
import ScrollRefresh from '@/components/general/ScrollRefresh'

export default function management() {
    const [data, setData] = useState(OverAssets)

    return (
        <StyledView className='flex-1 bg-white dark:bg-background px-3 '>
            <SearchBar />
            <ScrollRefresh
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 30
                }}>
                <NestableScrollContainer>
                    <StyledText
                        className='text-sm text-black dark:text-primary mb-3'
                        style={{
                            fontFamily: 'Inter_600SemiBold'
                        }}
                    >
                        Tokens
                    </StyledText>

                    <NestableDraggableFlatList
                        contentContainerStyle={{
                            gap: 8
                        }}
                        scrollEnabled={false}
                        data={data}
                        renderItem={({ item, drag }) => (
                            <TokenToggle title={item.title} type={item.type} drag={drag} />
                        )}
                        keyExtractor={(item) => item.idx}
                        onDragEnd={({ data }) => setData(data)}
                    />
                </NestableScrollContainer>

                <StyledView className='mt-8'>
                    <StyledText
                        className='text-sm text-black dark:text-white mb-3'
                        style={{
                            fontFamily: 'Inter_600SemiBold'
                        }}
                    >
                        Add Token
                    </StyledText>

                    <FlatList
                        scrollEnabled={false}
                        contentContainerStyle={{
                            gap: 8
                        }} data={OverAssets}
                        renderItem={({ item }) => (
                            <TokenToggle title={item.title} type={item.type} />
                        )} />
                </StyledView>
            </ScrollRefresh>
        </StyledView>
    )
}



const TokenToggle = (props:
    {
        title: string;
        type: string;
        drag?: ((event: GestureResponderEvent) => void) | undefined
    }) => {
    const { colorScheme } = useColorScheme()
    return (
        <StyledView
            className='flex-row items-center'
            style={{ gap: 10 }}>
            <StyledView
                className='flex-row grow items-center justify-between pr-3'
                style={{
                    backgroundColor: Colors[colorScheme].otpbg,
                    padding: 7,
                    borderRadius: 12
                }}>
                <StyledView className='flex-row items-center' style={[{ gap: 10 }]}>
                    <StyledView
                        className='flex items-center justify-center bg-[#F1F1F1] dark:bg-[#171925] rounded-md h-11 w-11'>
                        <Image
                            source={require('@/assets/icons/kucoin.png')}
                            style={{
                                height: 30,
                                width: 30
                            }}
                            contentFit='contain'
                        />
                    </StyledView>
                    <StyledView>
                        <StyledText
                            className='text-sm text-black dark:text-white'
                            style={{
                                fontFamily: 'Inter_600SemiBold'
                            }}>
                            {props.title}
                        </StyledText>
                        <StyledText className='text-secondary text-xs'
                            style={{
                                fontFamily: 'Inter_400Regular'
                            }}
                        >
                            {props.type}
                        </StyledText>
                    </StyledView>
                </StyledView>
                <SwitchBtn />
            </StyledView>
            {
                props.drag &&
                <StyledTouch
                    onLongPress={props.drag}>
                    <Image
                        source={require('@/assets/icons/rearrange.png')}
                        style={{
                            height: 18,
                            width: 18,
                            tintColor: Colors[colorScheme].tint
                        }}
                        contentFit='contain'
                    />
                </StyledTouch>
            }
        </StyledView>
    )
}

const OverAssets = [
    {
        idx: '1',
        title: 'Kucoin',
        type: 'KCC (ETH)'
    },
    {
        idx: '2',
        title: 'Kucoin',
        type: 'KCC (ETH)'
    },
    {
        idx: '3',
        title: 'Kucoin',
        type: 'KCC (ETH)'
    },
    {
        idx: '4',
        title: 'Kucoin',
        type: 'KCC (ETH)'
    }
]