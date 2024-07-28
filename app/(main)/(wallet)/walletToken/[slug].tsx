import { useHeaderHeight } from '@react-navigation/elements';
import React from 'react'
import { StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { useColorScheme } from 'nativewind'
import { Colors } from '@/constants/Colors'
import { Image } from 'expo-image';
import { Entypo } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Dimensions } from 'react-native';
import Activity from '@/components/wallet/Activity';
import Info from '@/components/wallet/Info';
const Tab = createMaterialTopTabNavigator();

export default function walletToken() {
    const { colorScheme } = useColorScheme()
    const headerHeight = useHeaderHeight();



    return (
        <StyledView className='flex-1 bg-white dark:bg-background'
            style={{ paddingTop: headerHeight }}>
            <StyledView
                className='h-[31vh] rounded-b-2xl'
                style={{
                    backgroundColor: Colors[colorScheme].otpbg
                }}>
                <StyledView className='h-[30vh] bg-white dark:bg-background rounded-b-3xl px-4 py-3 pt-[6vh] justify-between'>
                    <StyledView className='flex-row items-center justify-between'>
                        <StyledView>
                            <StyledView className='flex-row gap-x-1 items-center'>
                                <StyledText
                                    style={{
                                        fontFamily: 'Inter_400Regular',
                                    }} className='text-secondary text-xs'>Balance</StyledText>
                                <StyledTouch>
                                    <Entypo name="chevron-small-down" size={20} color="#49515D" />
                                </StyledTouch>
                            </StyledView>
                            <StyledView className='flex-row items-baseline'>
                                <StyledText style={{
                                    fontFamily: 'Inter_700Bold',
                                }} className='text-2xl   text-black dark:text-white'>
                                    5,000.90
                                </StyledText>
                                <StyledText
                                    style={{
                                        fontFamily: 'Inter_500Medium',
                                    }} className='text-secondary ml-3 text-xs'>
                                    ~ 1.100.000,89 €
                                </StyledText>
                            </StyledView>
                        </StyledView>

                        <StyledView>
                            <StyledText
                                className='text-secondary text-xs'
                                style={{
                                    fontFamily: 'Inter_500Medium'
                                }}>
                                Daily PNL
                            </StyledText>
                            <StyledText
                                className='text-black dark:text-primary text-xs'
                                style={{
                                    fontFamily: 'Inter_500Medium'
                                }}>
                                +1.001,65 €
                            </StyledText>
                        </StyledView>
                    </StyledView>
                    <StyledView
                        className='flex-row items-center justify-between'>
                        <StyledText
                            className='text-black dark:text-white text-xs'
                            style={{
                                fontFamily: 'Inter_500Medium'
                            }}>
                            BNB
                        </StyledText>
                        <StyledText
                            className='text-black dark:text-white text-xs'
                            style={{
                                fontFamily: 'Inter_500Medium'
                            }}>
                            $206.56
                        </StyledText>
                        <StyledView className='flex-row items-center'>
                            <StyledText
                                className='text-black dark:text-primary text-xs mr-2'
                                style={{
                                    fontFamily: 'Inter_500Medium'
                                }}>
                                -6.2%
                            </StyledText>
                            <Image
                                source={require('@/assets/icons/diagram-chart.png')}
                                style={{
                                    height: 13,
                                    width: 13,
                                    tintColor: '#49515D'
                                }} />
                        </StyledView>
                    </StyledView>
                </StyledView>
            </StyledView>

            <Tab.Navigator
                initialRouteName="activity"
                sceneContainerStyle={{
                    backgroundColor: Colors[colorScheme].background,
                }}
                screenOptions={{
                    tabBarStyle: {
                        backgroundColor: Colors[colorScheme].background,
                        elevation: 0,
                        shadowOpacity: 0
                    },
                    tabBarIndicatorStyle: {
                        top: 0,
                        width: 30,
                        height: 3,
                        borderRadius: 5,
                        backgroundColor: Colors[colorScheme].primary,
                        marginLeft: (Dimensions.get('window').width * 0.25) - 16
                    },
                    tabBarLabelStyle: {
                        fontSize: 14,
                        fontWeight: '600',
                        textTransform: 'capitalize',
                        textAlign: 'center',
                        marginHorizontal: 'auto'
                    },
                    tabBarActiveTintColor: Colors[colorScheme].tint,
                }}
            >
                <Tab.Screen name="activity"
                    component={Activity}
                    options={{
                        tabBarLabel: 'Activity'
                    }} />
                <Tab.Screen name="info"
                    component={Info}
                    options={{
                        tabBarLabel: 'Info'
                    }} />
            </Tab.Navigator>
        </StyledView>
    )
}