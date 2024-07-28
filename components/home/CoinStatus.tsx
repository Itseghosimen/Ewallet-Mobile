import { Colors } from '@/constants/Colors';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useColorScheme } from 'nativewind';
import React from 'react'
import Trending from './CoinScreens/Trending';
import Favourite from './CoinScreens/Favourite';
import New from './CoinScreens/New';
import Hot from './CoinScreens/Hot';
import Gainers from './CoinScreens/Gainers';
import Losers from './CoinScreens/Losers';
const Tab = createMaterialTopTabNavigator();

export default function CoinStatus() {
    const { colorScheme } = useColorScheme()
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: Colors[colorScheme].background,
            }}
            screenOptions={{
                tabBarContentContainerStyle: {
                    justifyContent: 'space-between',
                    backgroundColor: 'transparent'
                },
                tabBarLabelStyle: {
                    fontFamily: 'Inter_700Bold',
                    textTransform: 'capitalize',
                    fontSize: 13,
                },
                tabBarItemStyle: {
                    width: 'auto',
                    marginHorizontal: 'auto',
                    paddingHorizontal: 3
                },
                tabBarStyle: {
                    backgroundColor: '#00000000',
                    elevation: 0,
                    shadowOpacity: 0,
                    width: '100%',
                },
                tabBarIndicatorStyle: {
                    backgroundColor: Colors[colorScheme].primary,
                    width: 0.5,
                    borderRadius: 10,
                    height: 3,
                },
                tabBarIndicatorContainerStyle: {
                    width: '100%'
                },
                tabBarGap: 10,
                tabBarScrollEnabled: true,
                swipeEnabled: false,
                tabBarActiveTintColor: Colors[colorScheme].tint,
            }}>
            <Tab.Screen
                name="trending"
                component={Trending}
                options={{
                    tabBarLabel: 'Trending',
                }}
            />
            <Tab.Screen
                name="favorites"
                component={Favourite}
                options={{ tabBarLabel: 'Favorites' }}
            />
            <Tab.Screen
                name="new"
                component={New}
                options={{ tabBarLabel: 'New' }}
            />
            <Tab.Screen
                name="hot"
                component={Hot}
                options={{ tabBarLabel: 'Hot' }}
            />
            <Tab.Screen
                name="gainers"
                component={Gainers}
                options={{ tabBarLabel: 'Gainers' }}
            />
            <Tab.Screen
                name="losers"
                component={Losers}
                options={{ tabBarLabel: 'Losers' }}
            />
        </Tab.Navigator>
    )
}