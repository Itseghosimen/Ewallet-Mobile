import { Colors } from '@/constants/Colors'
import { StyledView } from '@/constants/imports'
import { StyledComponent, useColorScheme } from 'nativewind'
import React, { useState } from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import WalletBalance from '../WalletBalance'
import Button from '@/components/general/Buttons/Button'
import { Image } from 'expo-image'
import SwapBtn from '@/components/home/SwapBtn'
import CryptoAssets from './CryptoAssets'
import CryptoNft from './CryptoNft'
import { router } from 'expo-router'
import ScrollRefresh from '@/components/general/ScrollRefresh'


export default function Crypto() {
    const { colorScheme } = useColorScheme()
    const [selected, setSelected] = useState('assets')


    return (
        <StyledView className='flex-1'>
            <ScrollRefresh
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 20
                }}>
                <StyledView className='h-[25vh] flex items-center justify-center'>
                    <WalletBalance balance={90438.00} increase={20500.65} percentIncrease={200.65} />
                </StyledView>

                <StyledView className='w-full px-3 flex-row items-center justify-between'>
                    <StyledView
                        style={{
                            backgroundColor: Colors[colorScheme].otpbg,
                            shadowColor: 'black',
                            elevation: 6,
                            borderRadius: 8
                        }}>
                        <Button
                            onPress={undefined}
                            title={'Send'}
                            textStyle={'text-sm ml-1 text-secondary'}
                            style={'bg-[#F3F4F8] dark:bg-[#12131B] px-2 w-[30vw] items-center justify-center h-12 rounded-lg'}
                            Icon={
                                <Image
                                    source={require('@/assets/icons/send.png')}
                                    style={{
                                        height: 24,
                                        width: 24,
                                        tintColor: Colors[colorScheme].tint
                                    }}
                                    contentFit='contain' />
                            }
                        />
                    </StyledView>
                    <StyledView
                        style={{
                            backgroundColor: Colors[colorScheme].otpbg,
                            shadowColor: 'black',
                            elevation: 6,
                            borderRadius: 8
                        }}>
                        <Button
                            onPress={undefined}
                            title={'Receive'}
                            textStyle={'text-sm ml-1 text-secondary'}
                            style={'bg-[#F3F4F8] dark:bg-[#12131B] px-2 w-[30vw] items-center justify-center h-12 rounded-lg'}
                            Icon={
                                <Image
                                    source={require('@/assets/icons/receive.png')}
                                    style={{
                                        height: 24,
                                        width: 24,
                                        tintColor: Colors[colorScheme].tint
                                    }}
                                    contentFit='contain' />
                            }
                        />
                    </StyledView>
                    <StyledView
                        style={{
                            backgroundColor: Colors[colorScheme].otpbg,
                            shadowColor: 'black',
                            elevation: 6,
                            borderRadius: 8
                        }}>
                        <Button
                            onPress={undefined}
                            title={'Swap'}
                            textStyle={'text-sm   ml-1 text-secondary'}
                            style={'bg-[#F3F4F8] dark:bg-[#12131B] px-2 w-[30vw] items-center justify-center h-12 rounded-lg'}
                            Icon={
                                <Image
                                    source={require('@/assets/icons/swap.png')}
                                    style={{
                                        height: 24,
                                        width: 24,
                                        tintColor: Colors[colorScheme].tint
                                    }}
                                    contentFit='contain' />
                            }
                        />
                    </StyledView>

                </StyledView>


                <StyledView className='flex-row items-center justify-between h-10 rounded-xl px-5 mt-8 mb-4'>
                    <StyledView className='flex-row items-center' style={{ gap: 20 }}>
                        <SwapBtn
                            title={'assets'}
                            active={selected}
                            onPress={() => setSelected('assets')} />
                        <SwapBtn
                            title={'nft'}
                            active={selected}
                            onPress={() => setSelected('nft')} />
                    </StyledView>
                    <StyledView className='flex-row items-center' style={{ gap: 16 }}>
                        <StyledComponent
                            onPress={() => router.push('management')}
                            component={TouchableWithoutFeedback}>
                            <Image
                                source={require('@/assets/icons/filter.png')}
                                style={{
                                    height: 18,
                                    width: 18,
                                    tintColor: Colors[colorScheme].tint
                                }} />
                        </StyledComponent>
                        <StyledComponent
                            onPress={() => router.push('management')}
                            component={TouchableWithoutFeedback}>
                            <Image
                                source={require('@/assets/icons/search-normal.png')}
                                style={{
                                    height: 18,
                                    width: 18,
                                    tintColor: Colors[colorScheme].tint
                                }} />
                        </StyledComponent>
                        <StyledComponent
                            onPress={() => router.push('customToken')}
                            component={TouchableWithoutFeedback}>
                            <Image
                                source={require('@/assets/icons/plus.png')}
                                style={{
                                    height: 24,
                                    width: 24,
                                    tintColor: Colors[colorScheme].tint
                                }} />
                        </StyledComponent>
                    </StyledView>
                </StyledView>

                <StyledView>
                    {
                        selected === 'assets' ?
                            <CryptoAssets />
                            : <CryptoNft />
                    }
                </StyledView>
            </ScrollRefresh>

        </StyledView>
    )
}