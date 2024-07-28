import React from 'react'
import { StyledView } from '@/constants/imports'
import { useHeaderHeight } from '@react-navigation/elements';
import { StatusBar } from 'react-native'
import Accoridion from '@/components/Ecosystem/Accoridion'
import { useColorScheme } from 'nativewind';
import ScrollRefresh from '@/components/general/ScrollRefresh';

export default function ecosys() {
    const headerHeight = useHeaderHeight();
    const { colorScheme } = useColorScheme()
    return (
        <StyledView className='flex-1 bg-white dark:bg-background px-3 pb-5'
            style={{ paddingTop: headerHeight }}>
            <StatusBar
                barStyle={colorScheme == 'dark' ? 'light-content' : 'dark-content'}
            />
            <ScrollRefresh
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    gap: 15,
                    paddingTop: 20
                }}>
                <Accoridion
                    title="DApp"
                    option="More"
                    optionUrl="moreApps"
                    content={dApp} />
                <Accoridion
                    title="Upcoming Events"
                    content={dApp} />
                <Accoridion
                    title="Partners"
                    option="Partner with us"
                    content={dApp} />
                <Accoridion
                    title="Web3 Knowledge"
                    scrollHorizontal={true} />
                <Accoridion
                    title="Giftcards/Topups/Cash voucher"
                    content={dApp} />
            </ScrollRefresh>
        </StyledView>
    )
}

const dApp = [
    {
        icon: require('@/assets/images/globe.png'),
        title: 'Browser'

    },
    {
        icon: require('@/assets/images/coinmarket.png'),
        title: 'Coinmarketcap'
    },
    {
        icon: require('@/assets/images/unicorp.png'),
        title: 'UniSwap V3'
    },
    {
        icon: require('@/assets/images/globe.png'),
        title: 'Browser'

    },
    {
        icon: require('@/assets/images/coinmarket.png'),
        title: 'Coinmarketcap'
    },
    {
        icon: require('@/assets/images/unicorp.png'),
        title: 'UniSwap V3'

    },
    {
        icon: require('@/assets/images/globe.png'),
        title: 'Browser'

    },
    {
        icon: require('@/assets/images/coinmarket.png'),
        title: 'Coinmarketcap'
    },
    {
        icon: require('@/assets/images/unicorp.png'),
        title: 'UniSwap V3'
    },
    {
        icon: require('@/assets/images/globe.png'),
        title: 'Browser'

    },
    {
        icon: require('@/assets/images/coinmarket.png'),
        title: 'Coinmarketcap'
    },
    {
        icon: require('@/assets/images/unicorp.png'),
        title: 'UniSwap V3'
    }
]

