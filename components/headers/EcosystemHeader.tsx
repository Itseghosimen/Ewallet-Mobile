import React from 'react'
import { BlurView } from 'expo-blur'
import { useColorScheme } from 'nativewind'
import { Colors } from '@/constants/Colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { Image } from 'expo-image'
import { router } from 'expo-router'

export default function EcosystemHeader() {
    const { top } = useSafeAreaInsets()
    const { colorScheme } = useColorScheme()
    return (
        <BlurView
            intensity={0.3}
            tint='default'
            style={{
                backgroundColor: Colors[colorScheme].background,
                paddingTop: top,
            }}>

            <StyledView className='h-14 flex-row items-center justify-between px-3'>
                <StyledView className='flex-row items-center' style={{ gap: 7 }}>
                    <Image
                        source={require('@/assets/icons/Icon.png')}
                        style={{
                            height: 25,
                            width: 25,
                            tintColor: Colors[colorScheme].primary
                        }}
                    />
                    <StyledText style={{
                        fontFamily: 'Inter_700Bold',
                    }} className='text-base   text-black dark:text-primary'>Ecosystem</StyledText>
                </StyledView>

                <StyledTouch onPress={() => router.push('/customWidget')}>
                    <Image
                        source={require('@/assets/icons/category.png')}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: '#49515D',
                            marginRight: 10
                        }}
                        contentFit='contain'
                    />
                </StyledTouch>
            </StyledView>
        </BlurView >
    )
}