import { FlatList } from 'react-native'
import React from 'react'
import { trendingCoin } from '@/constants/imports'
import Coins from '@/components/market/Coins'
import CoinHeader from '@/components/headers/CoinHeader'

export default function New() {
    return (
        <FlatList
            data={trendingCoin}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                gap: 5,
                marginTop: 10,
                paddingBottom: 30,

            }}
            ListHeaderComponent={() => {
                return (
                    <CoinHeader />
                )
            }}
            renderItem={({ item }) => (
                <Coins
                    name={item.title}
                    icon={item.icon}
                    up={item.upPrice}
                    multiplier={14}
                    down={item.downPrice}
                    signal={item.signal}
                    percent={item.pecentage} />
            )} />
    )
}