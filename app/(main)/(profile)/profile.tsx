import React from 'react'
import { StyledView } from '@/constants/imports'

import ProfileBoard from '@/components/home/Profile/ProfileBoard'
import Button from '@/components/general/Buttons/Button'
import { Image } from 'expo-image'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from 'nativewind'
import ProfileAccoridion from '@/components/home/Profile/ProfileAccoridion'
import Logout from '@/components/general/Buttons/Logout'
import { StatusBar } from 'expo-status-bar'
import ScrollRefresh from '@/components/general/ScrollRefresh'

export default function profile() {
    const { colorScheme } = useColorScheme()

    return (
        <StyledView className='flex-1 bg-white dark:bg-background'>
            <StatusBar
                style={colorScheme == 'dark' ? 'light' : 'dark'}
            />
            <ScrollRefresh contentContainerStyle={{ paddingBottom: 30 }}>
                <ProfileBoard />

                <StyledView className='w-full px-3 flex-row items-center justify-between'>
                    <Button
                        onPress={undefined}
                        title={'Freeze wallet'}
                        textStyle={'text-sm   ml-1 text-black dark:text-white'}
                        style={'bg-[#F3F4F8] dark:bg-[#12131B] px-2 w-[30vw] items-center justify-center h-12 rounded-lg'}
                        Icon={
                            <Image
                                source={require('@/assets/icons/strongbox.png')}
                                style={{
                                    height: 17,
                                    width: 17,
                                    tintColor: Colors[colorScheme].primary
                                }}
                                contentFit='contain' />
                        }
                    />
                    <Button
                        onPress={undefined}
                        title={'My wallets'}
                        textStyle={'text-sm   ml-1 text-black dark:text-white'}
                        style={'bg-[#F3F4F8] dark:bg-[#12131B] px-2 w-[30vw] items-center justify-center h-12 rounded-lg'}
                        Icon={
                            <Image
                                source={require('@/assets/icons/cards.png')}
                                style={{
                                    height: 17,
                                    width: 17,
                                    tintColor: Colors[colorScheme].primary
                                }}
                                contentFit='contain' />
                        }
                    />
                    <Button
                        onPress={undefined}
                        title={'Fanbase'}
                        textStyle={'text-sm   ml-1 text-black dark:text-white'}
                        style={'bg-[#F3F4F8] dark:bg-[#12131B] px-2 w-[30vw] items-center justify-center h-12 rounded-lg'}
                        Icon={
                            <Image
                                source={require('@/assets/icons/crown.png')}
                                style={{
                                    height: 17,
                                    width: 17,
                                    tintColor: Colors[colorScheme].primary
                                }}
                                contentFit='contain' />
                        }
                    />
                </StyledView>

                <ProfileAccoridion
                    title="Terminal"
                    content={Terminal}
                    break={false}
                />

                <ProfileAccoridion
                    title="Product"
                    content={Products}
                    break={true}
                />

                <ProfileAccoridion
                    title="Security/Help"
                    content={Security}
                    break={true}
                />

                <ProfileAccoridion
                    title="Others"
                    content={Others}
                    break={false}
                />
                <StyledView className='px-3 mt-16'>
                    <Logout />
                </StyledView>
            </ScrollRefresh>
        </StyledView>
    )
}

const Terminal = [
    {
        icon: require('@/assets/icons/people.png'),
        title: 'P2P'
    },
    {
        icon: require('@/assets/icons/convert.png'),
        title: 'Escrow Payment'
    },
    {
        icon: require('@/assets/icons/coin.png'),
        title: 'Transaction'
    },
    {
        icon: require('@/assets/icons/airdrop.png'),
        title: 'Referral'
    },
    {
        icon: require('@/assets/icons/flash-circle.png'),
        title: 'Events'
    },
    {
        icon: require('@/assets/icons/forward-item.png'),
        title: 'Rewards'
    },
    {
        icon: require('@/assets/icons/security-user.png'),
        title: 'Contact'
    },
    {
        icon: require('@/assets/icons/story.png'),
        title: 'AVA'
    },
    {
        icon: require('@/assets/icons/chrome.png'),
        title: 'Airdrop'
    },
    {
        icon: require('@/assets/icons/crown.png'),
        title: 'Quest'
    },
    {
        icon: require('@/assets/icons/note.png'),
        title: 'Watchlist'
    },
    {
        icon: '',
        title: ''
    },
]

const Products = [
    {
        icon: require('@/assets/icons/Icon.png'),
        title: 'Enetlab'
    },
    {
        icon: require('@/assets/icons/3dcube.png'),
        title: 'Staking'
    },
    {
        icon: require('@/assets/icons/bitcoin-convert.png'),
        title: 'Smart swap'
    },
    {
        icon: require('@/assets/icons/main-component.png'),
        title: 'Limit order'
    },
    {
        icon: require('@/assets/icons/tag-right.png'),
        title: 'Metaverse'
    },
    {
        icon: require('@/assets/icons/sticker.png'),
        title: 'Resort'
    },
    {
        icon: require('@/assets/icons/autobrightness.png'),
        title: 'Fanbase Platform'
    },
    {
        icon: require('@/assets/icons/blend-2.png'),
        title: 'Next of \n kin'
    },
    {
        icon: require('@/assets/icons/discover.png'),
        title: 'NFT’s'
    },
    {
        icon: require('@/assets/icons/status.png'),
        title: 'NFT Marketplace'
    },
    {
        icon: require('@/assets/icons/clipboard-export.png'),
        title: `Recurring \n transfer`
    },
    {
        icon: require('@/assets/icons/format-circle.png'),
        title: `Batch \n Transfer`
    },
]

const Security = [
    {
        icon: require('@/assets/icons/book-fill.png'),
        title: 'Guardian',
        link: '/mailVerification'
    },
    {
        icon: require('@/assets/icons/note-2.png'),
        title: 'Withdrawal limit'
    },
    {
        icon: require('@/assets/icons/colorfilter.png'),
        title: 'Partnership'
    },
    {
        icon: require('@/assets/icons/setting.png'),
        title: 'Settings',
        link: 'settings'
    },
    {
        icon: require('@/assets/icons/strongbox.png'),
        title: `Freeze \n Account`
    },
    {
        icon: require('@/assets/icons/book.png'),
        title: 'Allow list'
    },
    {
        icon: require('@/assets/icons/callcenter.png'),
        title: 'Support'
    },
    {
        icon: '',
        title: ''
    },
]

const Others = [
    {
        icon: require('@/assets/icons/book-fill.png'),
        title: 'Api'
    },
    {
        icon: require('@/assets/icons/note-2.png'),
        title: 'List your Token/DApp'
    },
    {
        icon: require('@/assets/icons/colorfilter.png'),
        title: 'Partnership'
    },
    {
        icon: undefined,
        title: undefined
    }
]
