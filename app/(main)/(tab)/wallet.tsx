import React, { useState } from 'react'
import { StyledView } from '@/constants/imports'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyledComponent, useColorScheme } from 'nativewind';
import { Colors } from '@/constants/Colors';
import Overview from '@/components/wallet/Overview';
import Crypto from '@/components/wallet/crypto/Crypto';
import { LinearGradient } from 'expo-linear-gradient';
import { useIsFocused } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

export default function wallet() {
    const isFocused = useIsFocused();
    const { top } = useSafeAreaInsets()
    const { colorScheme } = useColorScheme()
    const [cryptoBackground, setCryptoBackground] = useState(false)

    return (
        <StyledView
            style={{ paddingTop: top }}
            className='flex-1 bg-white dark:bg-background'>
            <Tab.Navigator
                sceneContainerStyle={{
                    backgroundColor: 'transparent',
                }}

                screenOptions={{
                    tabBarContentContainerStyle: {
                        width: '100%',
                        justifyContent: 'space-between',
                        backgroundColor: 'transparent'
                    },
                    tabBarLabelStyle: {
                        fontFamily: 'Inter_700Bold',
                        textTransform: 'none',
                        fontSize: 14,
                    },
                    tabBarItemStyle: {
                        width: 'auto',
                        marginHorizontal: 'auto',
                    },
                    tabBarStyle: {
                        backgroundColor: '#00000000',
                        elevation: 0,
                        shadowOpacity: 0
                    },
                    tabBarIndicatorStyle: {
                        display: 'none'
                    },
                    tabBarScrollEnabled: true,
                    swipeEnabled: false,
                    tabBarActiveTintColor: Colors[colorScheme].tint,
                }}>
                <Tab.Screen name="overview" component={Overview}
                    options={{
                        tabBarLabel: 'Overview'
                    }}
                    listeners={{
                        focus: () => setCryptoBackground(false)
                    }}
                />
                <Tab.Screen name="crypto" component={Crypto}
                    options={{
                        tabBarLabel: 'Crypto'
                    }}
                    listeners={{
                        focus: () => setCryptoBackground(true)
                    }}
                />
                <Tab.Screen name="nft" component={Overview}
                    options={{
                        tabBarLabel: 'NFT'
                    }}
                    listeners={{
                        focus: () => setCryptoBackground(false)
                    }}
                />
                <Tab.Screen name="earn" component={Overview}
                    options={{
                        tabBarLabel: 'Earn'
                    }}
                    listeners={{
                        focus: () => setCryptoBackground(false)
                    }} />
                <Tab.Screen name="card" component={Overview}
                    options={{
                        tabBarLabel: 'Card'
                    }}
                    listeners={{
                        focus: () => setCryptoBackground(false)
                    }} />
            </Tab.Navigator>
            {
                cryptoBackground ?
                    <StyledComponent
                        colors={['rgba(12, 47, 51, 0.7)', Colors[colorScheme].background]}
                        className='w-screen h-[60vh] absolute -z-10 '
                        start={[0, 0]}
                        end={[0, 1]}
                        component={LinearGradient} /> : ''
            }
        </StyledView>
    )
}