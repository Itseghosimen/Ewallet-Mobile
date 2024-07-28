import { StyledText, StyledView } from '@/constants/imports'
import { Image } from 'expo-image'
import React from 'react'
import { FlatList } from 'react-native'

export default function WebCampus() {
    function trimWords(inputText: string, wordLimit = 10) {
        const words = inputText.trim().split(/\s+/);
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ');
        }
        return inputText;
    }


    return (
        <FlatList
            showsHorizontalScrollIndicator={false}
            data={webProduct}
            contentContainerStyle={{
                gap: 10
            }}
            horizontal
            renderItem={({ item }: any) => {
                return (
                    <StyledView className='w-52 rounded-xl overflow-hidden bg-white dark:bg-background'>
                        <Image source={item.icon}
                            style={{
                                height: 110,
                                width: '100%',
                            }}
                            contentFit='contain'
                            contentPosition={'center'} />
                        <StyledView className='p-2.5'>
                            <StyledText className='text-sm  text-black dark:text-white ' style={{
                                fontFamily: 'Inter_500Medium',
                            }}>
                                {item.title}
                            </StyledText>
                            <StyledText
                                className='text-xs  text-secondary text-left' style={{
                                    fontFamily: 'Inter_500Medium',
                                }}>{trimWords(item.description)}...</StyledText>
                        </StyledView>
                    </StyledView>
                )
            }} />
    )
}


const webProduct = [
    {
        icon: require('@/assets/images/crypto.png'),
        title: 'What is a Crpto wallet?',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using '
    },
    {
        icon: require('@/assets/images/nft.png'),
        title: 'What are NFTs?',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using '
    },
    {
        icon: require('@/assets/images/crypto.png'),
        title: 'What is a Crpto wallet?',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using '
    },
    {
        icon: require('@/assets/images/nft.png'),
        title: 'What are NFTs?',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using '
    },
]