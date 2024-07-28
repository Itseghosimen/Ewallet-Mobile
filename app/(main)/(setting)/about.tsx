import Button from '@/components/general/Buttons/Button'
import SettingBtn from '@/components/home/settings/SettingBtn'
import { Colors } from '@/constants/Colors'
import { StyledText, StyledView } from '@/constants/imports'
import { Image } from 'expo-image'
import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'nativewind'
import React from 'react'

export default function about() {
    const { colorScheme } = useColorScheme()
    const Version = 'V1.0'
    return (
        <StyledView className='flex-1 bg-white dark:bg-background py-4 px-3'>
            <StatusBar
                style={colorScheme == 'dark' ? 'light' : 'dark'}
            />
            <StyledView className='flex items-center'>
                <Image
                    source={require('@/assets/icons/logo.png')}
                    style={{
                        height: 70,
                        width: 90,
                        tintColor: Colors[colorScheme].tint
                    }}
                    contentFit='contain' />
                <StyledText
                    style={{
                        fontFamily: 'Inter_700Bold',
                    }} className='text-black dark:text-white   text-xl text-center'>Enetwallet</StyledText>
                <StyledText className='text-black dark:text-[#979797] text-sm  ' style={{
                    fontFamily: 'Inter_500Medium',
                }}>{Version}</StyledText>
            </StyledView>

            <StyledView className='pt-10 gap-y-5'>
                <SettingBtn
                    frontIcon={require('@/assets/icons/arrow-up.png')}
                    title={'Version Update'} type={'switch'}
                    backIcon={
                        <StyledText className='text-black dark:text-[#979797] text-xs  '>{Version}</StyledText>
                    }
                    onPress={undefined}
                />
                <SettingBtn
                    frontIcon={require('@/assets/icons/global.png')}
                    title={'Website'} type='link'
                    about={true}
                    onPress={undefined}
                />
                <SettingBtn
                    frontIcon={require('@/assets/icons/like-tag.png')}
                    title={'Feedback'} type='link'
                    about={true}
                    onPress={undefined}
                />
                <SettingBtn
                    frontIcon={require('@/assets/icons/smileys.png')}
                    title={' Community'} type='link'
                    about={true}
                    onPress={undefined}
                />
            </StyledView>

            <StyledView className='flex-1' />

            <StyledView className='flex items-center justify-center gap-y-3 pb-8'>
                <StyledText className='text-black dark:text-white text-base  ' style={{
                    fontFamily: 'Inter_500Medium',
                }}>Socials</StyledText>
                <StyledView className='h-0.5 w-[20vw] bg-black dark:bg-primary ' />
                <StyledView style={{ gap: 8 }} className='flex-row items-center justify-center'>
                    <Button
                        onPress={undefined}
                        Icon={
                            <Image
                                source={require('@/assets/icons/facebook.png')}
                                style={{
                                    height: 30,
                                    width: 30,
                                    tintColor: Colors[colorScheme].tint
                                }}
                                contentFit='contain' />
                        } />
                    <Button
                        onPress={undefined}
                        Icon={
                            <Image
                                source={require('@/assets/icons/instagram.png')}
                                style={{
                                    height: 30,
                                    width: 30,
                                    tintColor: Colors[colorScheme].tint
                                }}
                                contentFit='contain' />
                        } />
                </StyledView>

            </StyledView>
        </StyledView>
    )
}