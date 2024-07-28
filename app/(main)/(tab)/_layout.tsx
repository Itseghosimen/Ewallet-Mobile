import React from 'react'
import { Tabs } from 'expo-router'
import { BlurView } from 'expo-blur'
import { Colors } from '@/constants/Colors'
import { Platform } from 'react-native'
import HomeHeader from '@/components/headers/HomeHeader'
import { Image, ImageBackground } from 'expo-image'
import { StyledText, StyledView } from '@/constants/imports'
import { useColorScheme } from 'nativewind'
import EcosystemHeader from '@/components/headers/EcosystemHeader'
import LottieView from 'lottie-react-native'
import TradeHeader from '@/components/headers/TradeHeader'

export default function TabsLayout() {
    const { colorScheme } = useColorScheme()
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].primary,
                tabBarStyle: {
                    paddingTop: 15,
                    maxHeight: 70,
                    height: '100%',
                    paddingBottom: 15,
                    backgroundColor: Colors[colorScheme].background,
                    borderTopWidth: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 47,
                },
                tabBarBackground: () => (
                    <BlurView
                        intensity={0.4}
                        tint={'systemChromeMaterial'}
                        style={{
                            flex: 1,
                            backgroundColor: Colors[colorScheme].background,
                            opacity: 0.8
                        }}
                    />
                )
            }}>
            <Tabs.Screen name='home'
                options={{
                    headerShown: true,
                    headerTransparent: true,
                    header: () => <HomeHeader />,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('@/assets/icons/home.png')}
                            style={{
                                height: 20,
                                width: 20,
                                tintColor: focused
                                    ? Colors[colorScheme].primary : '#49515D'
                            }}
                            contentFit='contain'
                        />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <StyledText className={` ${focused ? 'text-black dark:text-primary' : 'text-transparent'}  text-xs`} style={{
                            fontFamily: 'Inter_500Medium',
                        }}>
                            Home
                        </StyledText>
                    )
                }} />
            <Tabs.Screen name='market'
                options={{
                    headerShown: false,
                    headerTransparent: true,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('@/assets/icons/market.png')}
                            style={{
                                height: 20,
                                width: 20,
                                tintColor: focused
                                    ? Colors[colorScheme].primary : '#49515D'
                            }}
                            contentFit='contain'
                        />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <StyledText className={` ${focused ? 'text-black dark:text-primary' : 'text-transparent'}  text-xs`} style={{
                            fontFamily: 'Inter_500Medium',
                        }}>
                            Market
                        </StyledText>
                    )
                }} />
            <Tabs.Screen name='ecosys'
                options={{
                    headerShown: true,
                    headerTransparent: true,
                    title: '',
                    header: () => <EcosystemHeader />,
                    tabBarIcon: ({ focused }) => (
                        <StyledView
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: Platform.OS == "ios" ? 70 : 80,
                                height: Platform.OS == "ios" ? 70 : 80,
                                top: Platform.OS == "ios" ? 0 : 0,
                            }}>
                            <Image
                                source={require('@/assets/icons/Icon.png')}
                                contentFit='contain'
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: focused
                                        ? Colors[colorScheme].primary : '#49515D'
                                }}
                            />
                            <LottieView
                                duration={3000}
                                speed={5}
                                style={{
                                    height: '100%',
                                    width: '100%',
                                    top: 0,
                                    left: 0,
                                    position: 'absolute'
                                }}
                                source={require('@/assets/blob.json')}
                                autoPlay loop />
                        </StyledView>
                    )
                }} />
            <Tabs.Screen name='trade'
                options={{
                    headerShown: true,
                    headerTransparent: true,
                    header: () => <TradeHeader />,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('@/assets/icons/trade.png')}
                            style={{
                                height: 20,
                                width: 20,
                                tintColor: focused
                                    ? Colors[colorScheme].primary : '#49515D'
                            }}
                            contentFit='contain'
                        />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <StyledText className={` ${focused ? 'text-black dark:text-primary' : 'text-transparent'}  text-xs`} style={{
                            fontFamily: 'Inter_500Medium',
                        }}>
                            Trade
                        </StyledText>
                    )
                }} />
            <Tabs.Screen name='wallet'
                options={{
                    headerShown: false,
                    headerTransparent: true,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('@/assets/icons/wallet.png')}
                            style={{
                                height: 20,
                                width: 20,
                                tintColor: focused
                                    ? Colors[colorScheme].primary : '#49515D'
                            }}
                            contentFit='contain'
                        />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <StyledText className={` ${focused ? 'text-black dark:text-primary' : 'text-transparent'}  text-xs`} style={{
                            fontFamily: 'Inter_500Medium',
                        }}>
                            Wallet
                        </StyledText>
                    )
                }} />
        </Tabs>
    )
}