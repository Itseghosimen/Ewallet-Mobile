import { Colors } from '@/constants/Colors'
import { StyledInput, StyledTouch, StyledView } from '@/constants/imports'
import { BlurView } from 'expo-blur'
import { Image } from 'expo-image'
import { router } from 'expo-router'
import { useColorScheme } from 'nativewind'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function MoreAppsHeader() {
    const { colorScheme } = useColorScheme()
    const { top } = useSafeAreaInsets();
    return (
        <BlurView
            intensity={0.3}
            tint='default'
            style={{
                backgroundColor: Colors[colorScheme].background,
                paddingTop: top,
            }}>
            <StyledView className='h-14 flex-row items-center justify-between pl-3 pr-5'>
                <StyledTouch onPress={router.back}>
                    <Image source={require('@/assets/icons/back-arrow.png')}
                        style={{
                            height: 25,
                            width: 25,
                            tintColor: Colors[colorScheme].tint,
                            marginRight: 10
                        }}
                    />
                </StyledTouch>
                <StyledView className='max-w-[70vw] w-full flex-row items-center border border-secondary px-3 h-10 rounded-full'
                    style={{
                        backgroundColor: Colors[colorScheme].otpbg,
                        gap: 10
                    }}>
                    <Image
                        source={require('@/assets/icons/search-normal.png')}
                        style={{
                            height: 18,
                            width: 18
                        }}
                        contentFit='contain'
                    />
                    <StyledInput
                        placeholder='Search DApp or Paste a link'
                        placeholderTextColor={'#49515D'}
                        className='flex-grow text-sm  text-black dark:text-white'
                    />
                </StyledView>


                <StyledTouch>
                    <Image
                        source={require('@/assets/icons/scanplain.png')}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: '#49515D'
                        }}
                        contentFit='contain'
                    />
                </StyledTouch>


            </StyledView>
        </BlurView>
    )
}