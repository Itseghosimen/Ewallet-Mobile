import { StyledText, StyledView, trendingCoin } from '@/constants/imports'
import { Image } from 'expo-image'
import React from 'react'
import { Easing } from 'react-native-reanimated'
import Carousel from 'react-native-reanimated-carousel'

export default function TopRanking() {

    return (
        <Carousel
            loop
            width={110}
            height={37}
            style={[
                {
                    width: '100%',
                },
            ]}
            snapEnabled={false}
            pagingEnabled={false}
            autoPlay
            withAnimation={{
                type: "timing",
                config: {
                    duration: 5000,
                    easing: Easing.linear,
                },
            }}
            autoPlayInterval={0}
            enabled={false}
            data={trendingCoin}
            renderItem={({ item, index }) => (
                <StyledView className='flex-row justify-center w-full items-center my-auto'>
                    <StyledText className='text-secondary text-xs mr-1'
                        style={{
                            fontFamily: 'Inter_500Medium'
                        }}>#{index + 1}</StyledText>
                    <Image source={item.signal ? require('@/assets/icons/arrow-up2.png') : require('@/assets/icons/arrow-down.png')}
                        style={{
                            height: 10,
                            width: 10
                        }} />
                    <StyledText
                        style={{
                            fontFamily: 'Inter_500Medium'
                        }} className='text-xs uppercase text-black dark:text-white mx-1.5'
                    >
                        {item.title}
                    </StyledText>

                    <Image source={item.icon}
                        style={{
                            height: 14,
                            width: 14,
                        }} />
                </StyledView>
            )}
        />
    )
}