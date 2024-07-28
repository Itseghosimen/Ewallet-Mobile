import { StyledView } from '@/constants/imports';
import React, { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyledComponent } from 'nativewind';
import { Pressable } from 'react-native';
import { router } from 'expo-router';
import { Image } from 'expo-image';
import { FlatList } from 'react-native-gesture-handler';
import Button from '@/components/general/Buttons/Button';


export default function tokenModal() {
    const { top } = useSafeAreaInsets()
    const [selected, setSelected] = useState(1)
    return (
        <StyledView
            style={{
                paddingTop: top
            }}
            className='flex-1 bg-black/80'>
            <StyledComponent className='flex-1' component={Pressable} onPress={router.back}>
                <StyledView className="pt-3 mt-auto bg-white dark:bg-black rounded-t-3xl">
                    <StyledView className='h-1 w-14 rounded bg-black dark:bg-primary mx-auto' />
                    <StyledView className='mt-3 rounded-t-3xl px-3 bg-[#f0f0f0] dark:bg-background max-h-[75vh]'>

                        <FlatList
                            data={MenuLinks}
                            numColumns={3}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{
                                gap: 25,
                                marginBottom: 20,
                                paddingVertical: 30,
                            }}
                            renderItem={({ item, index }) => {
                                return (
                                    <Button
                                        onPress={() => {
                                            item.onPress,
                                                setSelected(index)
                                        }}
                                        title={item.title}
                                        style={`flex-col gap-y-2 w-[33%] py-2  rounded-xl overflow-hidden ${selected == index && selected !== 0 && 'bg-secondary/30'}`}
                                        textStyle={'text-xs text-center text-secondary'}
                                        Icon={
                                            <Image source={item.icon}
                                                style={{
                                                    height: 26,
                                                    width: 26,
                                                }}
                                            />
                                        } />
                                )
                            }} />


                    </StyledView>

                </StyledView>
            </StyledComponent >
        </StyledView >
    )
}



const MenuLinks = [
    {
        icon: require('@/assets/icons/allAssets.png'),
        title: 'All network',
        onPress: undefined,
    },
    {
        icon: require('@/assets/icons/bnb.png'),
        title: 'Binance',
        onPress: undefined,
    }, {
        icon: require('@/assets/icons/bnb.png'),
        title: 'Binance',
        onPress: undefined,
    }, {
        icon: require('@/assets/icons/bnb.png'),
        title: 'Binance',
        onPress: undefined,
    }, {
        icon: require('@/assets/icons/bnb.png'),
        title: 'Binance',
        onPress: undefined,
    }, {
        icon: require('@/assets/icons/bnb.png'),
        title: 'Binance',
        onPress: undefined,
    }, {
        icon: require('@/assets/icons/bnb.png'),
        title: 'Binance',
        onPress: undefined,
    }, {
        icon: require('@/assets/icons/bnb.png'),
        title: 'Binance',
        onPress: undefined,
    }, {
        icon: require('@/assets/icons/bnb.png'),
        title: 'Binance',
        onPress: undefined,
    }, {
        icon: require('@/assets/icons/bnb.png'),
        title: 'Binance',
        onPress: undefined,
    }, {
        icon: require('@/assets/icons/bnb.png'),
        title: 'Binance',
        onPress: undefined,
    }, {
        icon: require('@/assets/icons/bnb.png'),
        title: 'Binance',
        onPress: undefined,
    }, {
        icon: require('@/assets/icons/bnb.png'),
        title: 'Binance',
        onPress: undefined,
    }, {
        icon: require('@/assets/icons/bnb.png'),
        title: 'Binance',
        onPress: undefined,
    }, {
        icon: require('@/assets/icons/bnb.png'),
        title: 'Binance',
        onPress: undefined,
    }, {
        icon: require('@/assets/icons/bnb.png'),
        title: 'Binance',
        onPress: undefined,
    }, {
        icon: require('@/assets/icons/bnb.png'),
        title: 'Binance',
        onPress: undefined,
    }, {
        icon: require('@/assets/icons/bnb.png'),
        title: 'Binance',
        onPress: undefined,
    }, {
        icon: require('@/assets/icons/bnb.png'),
        title: 'Binance',
        onPress: undefined,
    }, {
        icon: require('@/assets/icons/bnb.png'),
        title: 'Binance',
        onPress: undefined,
    }, {
        icon: require('@/assets/icons/bnb.png'),
        title: 'Binance',
        onPress: undefined,
    }, {
        icon: require('@/assets/icons/bnb.png'),
        title: 'Binance',
        onPress: undefined,
    }, {
        icon: require('@/assets/icons/bnb.png'),
        title: 'Binance',
        onPress: undefined,
    },
    {
        icon: require('@/assets/icons/bnb.png'),
        title: 'Binance',
        onPress: undefined,
    },
    {
        icon: require('@/assets/icons/bnb.png'),
        title: 'Binance',
        onPress: undefined,
    },
    {
        icon: require('@/assets/icons/bnb.png'),
        title: 'Binance',
        onPress: undefined,
    },
    {
        icon: require('@/assets/icons/bnb.png'),
        title: 'Binance',
        onPress: undefined,
    },
]
