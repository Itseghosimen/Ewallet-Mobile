import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Button from '@/components/general/Buttons/Button'
import SearchBar from '@/components/general/SearchBar'
import { Colors } from '@/constants/Colors'
import { StyledText, StyledView, availableToken } from '@/constants/imports'
import { Image } from 'expo-image'
import { router } from 'expo-router'
import { useColorScheme } from 'nativewind'
import React from 'react'
import { FlatList, StatusBar } from 'react-native'
const Tab = createMaterialTopTabNavigator();


export default function quickMainnet() {
    const { colorScheme } = useColorScheme()
    return (
        <StyledView className='flex-1 bg-white dark:bg-background pt-2 px-3'>
            <StatusBar
                barStyle={colorScheme == 'dark' ? 'light-content' : 'dark-content'}
            />
            <SearchBar />
            <StyledView className='flex-1'>
                <Tab.Navigator
                    initialRouteName="Hot"
                    sceneContainerStyle={{
                        backgroundColor: Colors[colorScheme].background,
                    }}
                    screenOptions={{
                        tabBarActiveTintColor: Colors[colorScheme].tint,
                        tabBarLabelStyle: {
                            fontSize: 12,
                            fontWeight: '700',
                            flexWrap: 'nowrap',
                        },
                        tabBarIndicatorStyle: {
                            width: 0.6,
                            padding: 0,
                            backgroundColor: Colors[colorScheme].tint
                        },
                        tabBarItemStyle: {
                            marginHorizontal: 'auto',
                            paddingHorizontal: 2,
                            paddingBottom: 9,
                            width: 'auto',
                        },
                        tabBarStyle: {
                            backgroundColor: Colors[colorScheme].background,
                            elevation: 0,
                            shadowOpacity: 0
                        },
                    }}
                >
                    <Tab.Screen
                        name="Hot"
                        component={HotToken}
                        options={{
                            tabBarLabel: 'Hot',
                        }}
                    />
                    <Tab.Screen
                        name="EVM"
                        component={HotToken}
                        options={{ tabBarLabel: 'EVM' }}
                    />

                </Tab.Navigator>
            </StyledView>
        </StyledView>
    )
}






const HotToken = () => {
    const { colorScheme } = useColorScheme()
    return (
        <StyledView
            style={{
                flex: 1,
                paddingTop: 10,
                borderTopWidth: 2,
                borderTopColor: Colors[colorScheme].otpbg
            }}>
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    gap: 20,
                    paddingTop: 10,
                    paddingBottom: 30
                }}
                ListHeaderComponent={() => (
                    <StyledView style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 13,
                    }}>
                        <Image
                            source={require('@/assets/icons/appst.png')}
                            style={{
                                height: 30,
                                width: 30
                            }}
                            contentFit='contain'
                        />
                        <StyledText
                            className='text-black dark:text-white text-sm'
                            style={{
                                fontFamily: 'Inter_500Medium'
                            }}>
                            All Mainnet
                        </StyledText>
                    </StyledView>
                )}

                data={availableToken} renderItem={({ item }) =>
                (<Button
                    Icon={
                        <Image
                            source={item.icon}
                            style={{
                                height: 30,
                                width: 30
                            }}
                            contentFit='contain'
                        />
                    }
                    style={''}
                    title={item.fullName}
                    textStyle={'ml-3 text-black dark:text-white '}
                    onPress={router.back} />)} />

        </StyledView>
    )
}