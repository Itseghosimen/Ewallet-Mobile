import SwitchBtn from '@/components/general/Switch'
import SettingBtn from '@/components/home/settings/SettingBtn'
import { Colors } from '@/constants/Colors'
import { StyledText, StyledView } from '@/constants/imports'
import { Image, ImageSource } from 'expo-image'
import { useColorScheme } from 'nativewind'
import React, { useState } from 'react'
import { FlatList, TouchableWithoutFeedback } from 'react-native'

export default function customWidget() {
    const { colorScheme } = useColorScheme()
    return (
        <StyledView className='flex-1 bg-white dark:bg-background gap-y-5 px-3'>

            <StyledView className='h-14 px-3 rounded-lg flex items-center justify-center'
                style={{
                    backgroundColor: Colors[colorScheme].otpbg
                }}
            >
                <SettingBtn
                    frontIcon={undefined}
                    textStyle={{
                        fontSize: 14,
                        fontWeight: '600'
                    }}
                    title={'Turn Off Ads on Location'}
                    type={'switch'}
                    style={{ width: '100%' }}
                    backIcon={<SwitchBtn />}
                />
            </StyledView>

            <StyledView>
                <StyledText className='text-secondary  text-sm'
                    style={{
                        fontFamily: 'Inter_600SemiBold'
                    }}>Customize Ecosystem page</StyledText>

                <StyledView className='py-5 rounded-lg mt-4'
                    style={{
                        backgroundColor: Colors[colorScheme].otpbg
                    }}>
                    <FlatList
                        scrollEnabled={false}
                        data={Terminal}
                        numColumns={4}
                        columnWrapperStyle={{
                            flex: 1,
                            justifyContent: 'space-between'
                        }}
                        contentContainerStyle={{
                            gap: 20
                        }}
                        renderItem={({ item }: any) => {
                            return (
                                <ProfileApp
                                    title={item.title}
                                    icon={item.icon}
                                />
                            )
                        }} />
                </StyledView>
            </StyledView>
        </StyledView>
    )
}

const Terminal = [
    {
        icon: require('@/assets/icons/people.png'),
        title: 'DApp'
    },
    {
        icon: require('@/assets/icons/convert.png'),
        title: 'Partners'
    },
    {
        icon: require('@/assets/icons/coin.png'),
        title: "Nft's"
    },
    {
        icon: require('@/assets/icons/airdrop.png'),
        title: "Startup's"
    },
    {
        icon: require('@/assets/icons/flash-circle.png'),
        title: 'Metaverse'
    },
    {
        icon: require('@/assets/icons/forward-item.png'),
        title: 'Resort'
    },
    {
        icon: require('@/assets/icons/security-user.png'),
        title: 'Fanbase Platform'
    },
    {
        icon: '',
        title: ''
    },
]


const ProfileApp = ({ icon, title }: { icon: ImageSource | ImageSource[], title: string, }) => {
    const [add, setAdd] = useState(false)
    const { colorScheme } = useColorScheme()
    return (
        <StyledView className='w-[25%] flex justify-center'>
            <TouchableWithoutFeedback
                onPress={() => setAdd(!add)}>
                <StyledView className='flex gap-y-2 items-center justify-center'>
                    <Image source={icon}
                        style={{
                            height: 25,
                            width: '100%',
                            tintColor: add ? Colors[colorScheme].primary : '#49515D'
                        }}
                        contentFit='contain'
                        contentPosition={'center'} />
                    <StyledText className='text-xs  text-black dark:text-white text-center'>{title}</StyledText>
                </StyledView>
            </TouchableWithoutFeedback>
        </StyledView >
    )
}