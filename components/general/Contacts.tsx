import React from 'react'
import { Image, ImageBackground } from 'expo-image';
import { StyledText, StyledView } from '@/constants/imports';
import { FlatList, TouchableWithoutFeedback } from 'react-native';
import { StyledComponent } from 'nativewind';
import { router } from 'expo-router';

export default function Contacts() {
    return (
        <FlatList
            horizontal
            ItemSeparatorComponent={() => <StyledView style={{ width: 10 }} />}
            contentContainerStyle={{
                paddingTop: 10,
                paddingHorizontal: 5,
                height: '100%',
            }}
            showsHorizontalScrollIndicator={false}
            data={contact} renderItem={({ item }) => (
                <StyledComponent component={TouchableWithoutFeedback} onPress={() => router.push('send')}>
                    <StyledView>
                        <ImageBackground source={item.image} style={{
                            height: 60,
                            width: 60,
                            borderRadius: 8,
                            overflow: 'hidden'
                        }} />
                        <Image source={require('@/assets/icons/enet.png')}
                            style={{
                                height: 13,
                                width: 13,
                                position: 'absolute',
                                top: 42,
                                left: 2
                            }}
                            contentFit='contain' />
                        <StyledText
                            className='text-xs  text-black dark:text-white text-center mt-1'>
                            {item.title}
                        </StyledText>
                    </StyledView>
                </StyledComponent>

            )} />
    )
}

const contact = [
    {
        image: require("@/assets/images/1.png"),
        title: "Adrian",
    },
    {
        image: require("@/assets/images/2.png"),
        title: "Sharon",
    },
    {
        image: require("@/assets/images/3.png"),
        title: "Ada",
    },
    {
        image: require("@/assets/images/4.png"),
        title: "Michael",
    },
    {
        image: require("@/assets/images/5.png"),
        title: "Roland",
    },
    {
        image: require("@/assets/images/6.png"),
        title: "Anastasia",
    },
    {
        image: require("@/assets/images/2.png"),
        title: "Sharon",
    },
    {
        image: require("@/assets/images/3.png"),
        title: "Ada",
    },
    {
        image: require("@/assets/images/4.png"),
        title: "Michael",
    },
    {
        image: require("@/assets/images/5.png"),
        title: "Roland",
    },
    {
        image: require("@/assets/images/6.png"),
        title: "Anastasia",
    },
];