import React from 'react'
import { StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { Image, ImageBackground } from 'expo-image'
import { Dimensions } from 'react-native'
import { router } from 'expo-router'

const notice = [
    'Never share your QR code  with anyone', 'Anybody with this info, can have full access to your funds', 'You are responsible for the safety of your funds'
]

export default function encryptcode() {
    const layout = Dimensions.get('window')
    return (
        <StyledView className='flex-1 bg-white dark:bg-background pb-3 px-4'>
            <StyledView
                style={{
                    maxHeight: layout.height * 0.5
                }}>
                <ImageBackground source={require('@/assets/images/personalCode.png')}
                    style={{
                        width: layout.width * 0.9,
                        height: '100%',
                        marginHorizontal: 'auto'
                    }}
                    contentFit="contain"
                />
            </StyledView>
            <StyledView className='flex-1 items-center justify-center gap-y-1.5'>
                <Image
                    source={require('@/assets/icons/shield-outline.png')}
                    style={{
                        height: 28,
                        width: 28,
                        tintColor: '#FE0A0A'
                    }}
                    contentFit='contain' />
                <StyledView className='gap-y-1'>
                    {
                        notice.map((item, idx) => (
                            <StyledView key={idx}
                                className='flex-row items-center justify-center gap-1'
                            >
                                <StyledView style={{
                                    height: 3,
                                    width: 3,
                                    borderRadius: 20,
                                    backgroundColor: '#CB5050'
                                }} />
                                <StyledText
                                    className=' text-[#CB5050] text-xs'>{item}</StyledText>
                            </StyledView>
                        ))
                    }
                </StyledView>
            </StyledView>
            <StyledTouch
                onPress={() => router.replace('home')}
                className='h-14 bg-black dark:bg-primary/80 rounded-full flex items-center justify-center'>
                <StyledText className='text-white dark:text-black text-base ' style={{
                    fontFamily: 'Inter_500Medium',
                }}>Continue</StyledText>
            </StyledTouch>
        </StyledView>
    )
}