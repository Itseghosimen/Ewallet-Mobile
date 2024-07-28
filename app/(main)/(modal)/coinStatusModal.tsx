import Gainers from '@/components/home/ModalScreens/Gainers';
import Hot from '@/components/home/ModalScreens/Hot';
import Losers from '@/components/home/ModalScreens/Losers';
import New from '@/components/home/ModalScreens/New';
import Trending from '@/components/home/ModalScreens/Trending';
import Favourite from '@/components/home/ModalScreens/Favourite';
import { Colors } from '@/constants/Colors';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useColorScheme } from 'nativewind';
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyledView } from '@/constants/imports';
import { router } from 'expo-router';
import Button from '@/components/general/Buttons/Button';
import { Platform } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function coinStatusModal() {
    const { colorScheme } = useColorScheme()
    const { top } = useSafeAreaInsets();
    return (
        <StyledView className='flex-1 pb-3 bg-white dark:bg-background px-3' style={{ paddingTop: Platform.OS == 'android' ? top : 10 }}>
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
                        width: 0.6,
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
            <StyledView className='pt-6'>
                <Button
                    onPress={router.back}
                    title='Close'
                    style={'px-6 bg-black/50 max-w-[50vw] mx-auto dark:bg-white/50 h-12 rounded-lg'}
                    textStyle={'text-white dark:text-white text-sm'}
                />
            </StyledView>
        </StyledView>
    )
}