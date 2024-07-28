import { StyledText, StyledTouch, StyledView, trendingCoin } from '@/constants/imports'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'
import Coins from './Coins'
import { Image } from 'expo-image'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from 'nativewind'

export default function Assets() {
    const { colorScheme } = useColorScheme()
    return (
        <StyledView className='flex-1'>
            <SwipeListView
                useFlatList
                contentContainerStyle={{
                    paddingTop: 5,
                    gap: 5,
                }}
                ListHeaderComponent={() => {
                    return (
                        <StyledView className='h-7 flex-row items-center justify-between px-2'>
                            <StyledView className='flex-row items-center'>
                                <StyledView className='flex-row items-center '>
                                    <StyledText className='text-xs text-secondary mr-1.5'
                                        style={{
                                            fontFamily: 'Inter_500Medium'
                                        }}>
                                        Name
                                    </StyledText>
                                    <StyledView className='flex items-center gap-y-0.5 justify-center'>
                                        <Image source={require('@/assets/icons/uparrow.png')}
                                            style={{
                                                height: 4.35,
                                                width: 6.49,
                                                marginRight: 1.5
                                            }} contentFit='contain' />
                                        <Image source={require('@/assets/icons/uparrow.png')}
                                            style={{
                                                height: 4.35,
                                                width: 6.49,
                                                transform: [{ rotate: '180deg' }]
                                            }} contentFit='contain' />
                                    </StyledView>
                                </StyledView>
                                <StyledView className='flex-row items-center'>
                                    <StyledText className='text-xs text-secondary mr-1.5'
                                        style={{
                                            fontFamily: 'Inter_500Medium'
                                        }}>
                                        / 24h Vol
                                    </StyledText>
                                    <StyledView className='flex items-center gap-y-0.5 justify-center'>
                                        <Image source={require('@/assets/icons/uparrow.png')}
                                            style={{
                                                height: 4.35,
                                                width: 6.49,
                                                marginRight: 1.5
                                            }} contentFit='contain' />
                                        <Image source={require('@/assets/icons/uparrow.png')}
                                            style={{
                                                height: 4.35,
                                                width: 6.49,
                                                transform: [{ rotate: '180deg' }]
                                            }} contentFit='contain' />
                                    </StyledView>
                                </StyledView>
                            </StyledView>
                            <StyledView className='flex-row items-center' style={{ gap: 40 }}>
                                <StyledView className='flex-row items-center'>
                                    <StyledText className='text-xs text-secondary mr-1.5'
                                        style={{
                                            fontFamily: 'Inter_500Medium'
                                        }}>
                                        Last price
                                    </StyledText>
                                    <StyledView className='flex items-center gap-y-0.5 justify-center'>
                                        <Image source={require('@/assets/icons/uparrow.png')}
                                            style={{
                                                height: 4.35,
                                                width: 6.49,
                                                marginRight: 1.5
                                            }} contentFit='contain' />
                                        <Image source={require('@/assets/icons/uparrow.png')}
                                            style={{
                                                height: 4.35,
                                                width: 6.49,
                                                transform: [{ rotate: '180deg' }]
                                            }} contentFit='contain' />
                                    </StyledView>
                                </StyledView>
                                <StyledView className='flex-row items-center'>
                                    <StyledText className='text-xs text-secondary mr-1.5'
                                        style={{
                                            fontFamily: 'Inter_500Medium'
                                        }}>
                                        Chg%
                                    </StyledText>
                                    <StyledView className='flex items-center gap-y-0.5 justify-center'>
                                        <Image source={require('@/assets/icons/uparrow.png')}
                                            style={{
                                                height: 4.35,
                                                width: 6.49,
                                                marginRight: 1.5
                                            }} contentFit='contain' />
                                        <Image source={require('@/assets/icons/uparrow.png')}
                                            style={{
                                                height: 4.35,
                                                width: 6.49,
                                                transform: [{ rotate: '180deg' }]
                                            }} contentFit='contain' />
                                    </StyledView>
                                </StyledView>
                            </StyledView>
                        </StyledView>
                    )
                }}
                data={trendingCoin}
                renderItem={({ item }) => (
                    <Coins
                        icon={item.icon}
                        name={item.title}
                        vol={item.vol}
                        up={item.upPrice}
                        down={item.downPrice}
                        signal={item.signal}
                        percent={item.pecentage} />
                )}
                renderHiddenItem={() => (
                    <StyledView className='flex-row items-center px-3 justify-between flex-1'>
                        <StyledView className='flex-row items-center' style={{ gap: 15 }}>
                            <StyledTouch className='flex items-center gap-y-1'>
                                <Image source={require('@/assets/icons/trading.png')}
                                    style={{
                                        height: 17,
                                        width: 17,
                                        tintColor: Colors[colorScheme].primary
                                    }} />
                                <StyledText className='text-black dark:text-primary text-[10px]' style={{ fontFamily: 'Inter_500Medium' }}>Buy</StyledText>
                            </StyledTouch>
                            <StyledTouch className='flex items-center gap-y-1'>
                                <Image source={require('@/assets/icons/receive-square.png')}
                                    style={{
                                        height: 17,
                                        width: 17,
                                        tintColor: Colors[colorScheme].primary
                                    }} />
                                <StyledText className='text-black dark:text-primary text-[10px]' style={{ fontFamily: 'Inter_500Medium' }}>Receive</StyledText>
                            </StyledTouch>
                            <StyledTouch className='flex items-center gap-y-1'>
                                <Image source={require('@/assets/icons/swap.png')}
                                    style={{
                                        height: 17,
                                        width: 17,
                                        tintColor: Colors[colorScheme].primary
                                    }} />
                                <StyledText className='text-black dark:text-primary text-[10px]' style={{ fontFamily: 'Inter_500Medium' }}>Swap</StyledText>
                            </StyledTouch>
                            <StyledTouch className='flex items-center gap-y-1'>
                                <Image source={require('@/assets/icons/candles.png')}
                                    style={{
                                        height: 17,
                                        width: 17,
                                        tintColor: Colors[colorScheme].primary
                                    }} />
                                <StyledText className='text-black dark:text-primary text-[10px]' style={{ fontFamily: 'Inter_500Medium' }}>Trade</StyledText>
                            </StyledTouch>
                        </StyledView>

                        <StyledView className='flex-row items-center' style={{ gap: 15 }}>
                            <StyledTouch className='flex items-center gap-y-1'>
                                <Image source={require('@/assets/icons/archive-add.png')}
                                    style={{
                                        height: 17,
                                        width: 17
                                    }} />
                                <StyledText className='text-[#F3BA2F] text-[10px]' style={{ fontFamily: 'Inter_500Medium' }}>Favorites</StyledText>
                            </StyledTouch>
                            <StyledTouch className='flex items-center gap-y-1'>
                                <Image source={require('@/assets/icons/loss.png')}
                                    style={{
                                        height: 17,
                                        width: 17
                                    }} />
                                <StyledText className='text-[#F80F0F] text-[10px]' style={{ fontFamily: 'Inter_500Medium' }}>Stop-loss</StyledText>
                            </StyledTouch>
                            <StyledTouch className='flex items-center gap-y-1'>
                                <Image source={require('@/assets/icons/more.png')}
                                    style={{
                                        height: 17,
                                        width: 17
                                    }} />
                                <StyledText className='text-secondary text-[10px]' style={{ fontFamily: 'Inter_500Medium' }}>Details</StyledText>
                            </StyledTouch>
                        </StyledView>
                    </StyledView>
                )}
                leftOpenValue={180}
                rightOpenValue={-170}
                stopLeftSwipe={180}
                stopRightSwipe={-170}
                closeOnRowPress={true}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                closeOnRowBeginSwipe={true}
            />
        </StyledView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    backTextWhite: {
        color: '#FFF',
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnLeft: {
        backgroundColor: 'blue',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
    },
    trash: {
        height: 25,
        width: 25,
    },
});