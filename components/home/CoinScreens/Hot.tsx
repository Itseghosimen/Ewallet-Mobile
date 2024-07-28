import { FlatList } from 'react-native'
import React from 'react'
import { trendingCoin } from '@/constants/imports'
import Coins from '@/components/market/Coins'
import CoinHeader from '@/components/headers/CoinHeader'

export default function Hot() {
    return (
        <FlatList
            scrollEnabled={false}
            data={trendingCoin.slice(0, 5)}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                gap: 5,
                marginTop: 10
            }}
            ListHeaderComponent={() => {
                return (
                    <CoinHeader />
                )
            }}
            renderItem={({ item }) => (
                <Coins
                    icon={item.icon}
                    name={item.title}
                    hot={true}
                    up={item.upPrice}
                    down={item.downPrice}
                    signal={item.signal}
                    percent={item.pecentage} />
            )} />
    )
}