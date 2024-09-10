import { Dimensions } from 'react-native'
import React, { useState } from 'react'
import { StyledText, StyledView } from '@/constants/imports'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from 'nativewind'
import { Image } from 'expo-image'
import DialPad from '@/components/general/DialPad'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import RecoveryDialPad from '@/components/general/RecoveryDialPad'
const CELL_COUNT = 6;

export default function loginConfirmPin() {
    const layout = Dimensions.get('window')
    const { colorScheme } = useColorScheme()
    const [code, setCode] = useState<string | number[]>([]);

    // fetch Username
    const username = 'Johcee'

    const confirmCreatedPin = () => {
        if (code.length == 6) {
            router.push('/restoreWallet')
        }
    }

    return (
        <StyledView className='flex-1 bg-white dark:bg-background'>
            <StatusBar
                style={colorScheme == 'dark' ? 'light' : 'dark'}
            />
            <StyledView
                className='drop-shadow-xl'
                style={{
                    height: layout.height * 0.35,
                    backgroundColor: Colors[colorScheme].otpbg,
                    borderBottomLeftRadius: 25,
                    borderBottomRightRadius: 25,
                }}>
                <StyledView
                    className='flex flex-1 items-center justify-center'
                    style={{
                        maxHeight: (layout.height * 0.35) - 24,
                        backgroundColor: Colors[colorScheme].background,
                        borderBottomLeftRadius: 25,
                        borderBottomRightRadius: 25,
                        gap: 24

                    }}>
                    <Image
                        source={require('@/assets/images/pinImage.png')}
                        style={{
                            height: 60,
                            width: 60,
                            borderRadius: 60,
                            borderColor: Colors[colorScheme].primary,
                            borderWidth: 2
                        }}
                        contentFit='contain' />
                    <StyledText
                        style={{
                            maxWidth: layout.width * 0.85,
                            fontFamily: 'Inter_400Regular'
                        }}
                        className='text-base text-center text-black dark:text-white mx-auto'>
                        @{username}
                    </StyledText>
                </StyledView>
                <StyledView className='my-auto flex-row items-center justify-center' style={{ gap: 12 }}>
                    {
                        [...Array(CELL_COUNT).keys()].map((i) => {
                            const isSelected = !!code[i]
                            return (
                                <StyledView
                                    className={`h-3 w-3 rounded-full border ${isSelected ? 'border-[#18eaff]' : 'border-[#3A4452]'} justify-center items-center`}
                                    key={i}
                                >
                                    {isSelected && <Image
                                        source={require('@/assets/icons/pinEnclosed.png')}
                                        style={{
                                            height: 10,
                                            width: 10
                                        }} />}
                                </StyledView>
                            )
                        })
                    }
                </StyledView>
            </StyledView>
            <StyledView className='flex-1 items-center justify-center'>
                <StyledText className='my-5 text-center text-black dark:text-white   text-sm' style={{
                    fontFamily: 'Inter_500Medium',
                }}>Use face ID or Enter PIN code</StyledText>
            </StyledView>
            <RecoveryDialPad
                onPress={(item) => {
                    if (item == 'del') {
                        setCode((prev) => prev?.slice(0, prev.length - 1))
                    } else if (item == 'faceID') {

                    } else {
                        if (code.length <= CELL_COUNT - 1) {
                            setCode((prev: any) => [...prev, item])
                        }
                    }
                }}
                forget={(item) => undefined}
                confirm={confirmCreatedPin}
                confirmBtn={code.length} />
        </StyledView>
    )
}