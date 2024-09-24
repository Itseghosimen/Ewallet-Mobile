import { View, Text } from 'react-native'
import React, { ReactNode, useState } from 'react'
import { StyledInput, StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useColorScheme } from 'nativewind';
import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';

const Tab = createMaterialTopTabNavigator();


interface Placeholder {
    title: string,
    place: string,
    value: string,
    onValueChange: (value: string) => void
}

const PageOne = () => {
    const [name, setName] = useState('Jochee')

    return (
        <NftName onValueChange={setName} place='Jochee' value={name} title='Rename your wallet' />
    )
}

const PageTwo = () => {
    const [domain, setDomain] = useState('')
    return (
        <NftName onValueChange={setDomain} place='Domain name' value={domain} title='Upload your NFT Domain name' />
    )
}





const NftName = (props: Placeholder) => {
    return (
        <StyledView className='flex-1'>
            <StyledView className='flex-1 justify-center items-start'>
                <StyledText className='text-xs mb-2 text-secondary'
                    style={{
                        fontFamily: 'Inter_500Medium'
                    }}>
                    {props.title}
                </StyledText>
                <StyledView className='items-center justify-center bg-releiveLight dark:bg-releive h-14 rounded-xl w-full'>
                    <StyledInput
                        className='w-full h-full text-base px-3 text-black dark:text-white'
                        style={{
                            fontFamily: 'Inter_500Medium'
                        }}
                        placeholder={props.place}
                        value={props.value}
                        onChangeText={props.onValueChange}
                    />
                </StyledView>
            </StyledView>
        </StyledView>
    )
}



export default function renameWallet() {
    const { colorScheme } = useColorScheme()

    return (
        <StyledView className='flex-1 bg-black/70 '>
            <StyledView className='flex-1 ' />
            <StyledView className='h-[380px] px-3 rounded-t-3xl pb-7 bg-white dark:bg-background'>
                <StyledText className='text-base text-center my-4 text-black dark:text-white'
                    style={{
                        fontFamily: 'Inter_700Bold'
                    }}>
                    Rename wallet
                </StyledText>
                <Tab.Navigator
                    sceneContainerStyle={{
                        backgroundColor: 'transparent',
                    }}
                    screenOptions={{
                        tabBarContentContainerStyle: {
                            width: '100%',
                            justifyContent: 'space-between',
                            paddingHorizontal: 12
                        },
                        tabBarLabelStyle: {
                            fontFamily: 'Inter_700Bold',
                            textTransform: 'none',
                            color: Colors[colorScheme].tint,
                            fontSize: 14,
                            textAlign: 'center',
                        },
                        tabBarStyle: {
                            padding: 4,
                            borderRadius: 50,
                            backgroundColor: Colors[colorScheme].default,
                            borderWidth: 2,
                            borderColor: Colors[colorScheme].otpbg
                        },
                        tabBarItemStyle: {
                            alignItems: 'center',
                            justifyContent: 'center'
                        },
                        tabBarIndicatorStyle: {
                            backgroundColor: Colors[colorScheme].otpbg,
                            height: '90%',
                            borderRadius: 40,
                            top: '5%',
                            left: '1%',
                            right: '1%',
                            width: '47%',
                            zIndex: 50,
                            position: 'absolute'
                        },
                        swipeEnabled: false,
                    }}>
                    <Tab.Screen name="NFT Name" component={PageOne} />
                    <Tab.Screen name="Custom name" component={PageTwo} />
                </Tab.Navigator>
                <StyledView className='flex-row items-center justify-between' style={{ gap: 15 }}>
                    <StyledTouch onPress={router.back} className='bg-slate-200 dark:bg-black h-14 rounded-xl border-2 border-black justify-center items-center dark:border-primary flex-grow'>
                        <StyledText className='text-sm text-black dark:text-white'
                            style={{
                                fontFamily: 'Inter_500Medium'
                            }}>
                            Cancel
                        </StyledText>
                    </StyledTouch>
                    <StyledTouch onPress={() => router.push('/upload')} className='bg-black justify-center items-center dark:bg-primary h-14 rounded-xl  flex-grow'>
                        <StyledText className='text-sm text-white dark:text-black'
                            style={{
                                fontFamily: 'Inter_500Medium'
                            }}>
                            Confirm
                        </StyledText>
                    </StyledTouch>
                </StyledView>
            </StyledView>
        </StyledView>
    )
}