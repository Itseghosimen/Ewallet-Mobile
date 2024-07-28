import React, { useState } from 'react'
import { useColorScheme } from 'nativewind';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyledText, StyledTouch, StyledView, trendingCoin } from '@/constants/imports';
import { TouchableWithoutFeedback } from 'react-native';
import { Image } from 'expo-image';
import { Colors } from '@/constants/Colors';
import SearchBar from '@/components/general/SearchBar';
import TopRanking from '@/components/market/TopRanking';
import TabSection from '@/components/market/TabSection';

export default function market() {
    const Tab = ['Spot', 'Futures', 'Swap', 'NFT']
    const [name, setName] = useState<number>(0);
    const [search, setSearch] = useState(false);
    const { colorScheme } = useColorScheme()
    const { top } = useSafeAreaInsets()

    return (
        <StyledView className='flex-1 bg-white dark:bg-background'
            style={{
                paddingTop: top + 10,
                gap: 15
            }}>
            <StyledView className='flex-row items-center justify-between px-3 pr-5'>
                <StyledView className='flex-row items-center' style={{ gap: 15 }}>
                    {
                        Tab.map((items, index) => {
                            return (
                                <TouchableWithoutFeedback key={index} onPress={() => setName(index)}>
                                    <StyledText
                                        style={{
                                            fontFamily: 'Inter_700Bold',
                                        }} className={`text-base ${name == index ? 'text-black dark:text-white' : 'text-secondary'} `}>{items}</StyledText>
                                </TouchableWithoutFeedback>
                            )
                        })
                    }
                </StyledView>
                <StyledTouch onPress={() => setSearch(!search)}>
                    <Image source={require('@/assets/icons/search-normal.png')}
                        style={{
                            height: 22,
                            width: 22
                        }} />
                </StyledTouch>
            </StyledView>

            <StyledView className='pl-3 flex-row items-center' style={{ gap: 7 }}>
                <Image source={require('@/assets/icons/flame.png')}
                    style={{
                        height: 18,
                        width: 14
                    }} />
                <StyledView className='dark:bg-[#171925] h-10 flex-grow flex-row items-center rounded-l-full pr-3'>
                    <StyledView className='h-full overflow-hidden rounded-full flex-grow justify-center' style={{ backgroundColor: Colors[colorScheme].otpbg }}>
                        {
                            search ?
                                <SearchBar />
                                : <TopRanking />
                        }
                    </StyledView>

                    <StyledView className='flex-row items-center ml-3'>
                        <Image source={trendingCoin[0].icon}
                            style={{
                                height: 25,
                                width: 25,
                                borderWidth: 3,
                                borderColor: '#03EED8',
                                borderRadius: 35,

                            }} />
                        <StyledText style={{
                            fontFamily: 'Inter_400Regular'
                        }} className='text-sm uppercase text-black dark:text-white ml-1.5'>{trendingCoin[0].title}</StyledText>
                    </StyledView>
                </StyledView>
            </StyledView>

            <StyledView className='px-3 flex-1'>
                <TouchableWithoutFeedback>
                    <StyledView className='flex-row items-center '>
                        <StyledText className='text-xs text-secondary mr-1.5'
                            style={{
                                fontFamily: 'Inter_500Medium'
                            }}>
                            Favorites
                        </StyledText>
                        <Image source={require('@/assets/icons/chervon-top-arrow.png')}
                            style={{
                                height: 10,
                                width: 10,
                                tintColor: Colors[colorScheme].tint,
                                opacity: 0.7
                            }} contentFit='contain' />
                    </StyledView>
                </TouchableWithoutFeedback>


                {
                    name === 0 ?
                        <TabSection />
                        : name === 1 ?
                            ''
                            : name === 2 ?
                                ''
                                :
                                ''
                }
            </StyledView>
        </StyledView>
    )
}