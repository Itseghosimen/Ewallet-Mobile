import { TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { StyledText, StyledView } from '@/constants/imports'
import { StyledComponent, useColorScheme } from 'nativewind'
import { Colors } from '@/constants/Colors'
import { Image } from 'expo-image'
import { Feather } from '@expo/vector-icons'
import { router } from 'expo-router'

export default function CoinSendSelector() {
    const { colorScheme } = useColorScheme()



    return (
        <StyledView className='absolute top-9 right-3 z-10 flex items-end overflow-hidden'>
            <StyledComponent

                component={TouchableWithoutFeedback}
                onPress={() => router.push('quickMainnet')}
            >
                <StyledView
                    style={{
                        backgroundColor: Colors[colorScheme].otpbg,
                        paddingHorizontal: 6,
                        paddingVertical: 4,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        gap: 7,
                        borderRadius: 20,
                        width: 'auto'
                    }}>
                    <Image
                        source={require("@/assets/icons/basechain.png")}
                        style={{
                            height: 17,
                            width: 17
                        }}
                        contentFit='contain'
                    />
                    <StyledText className='text-black dark:text-white text-xs'
                        style={{
                            fontFamily: 'Inter_500Medium',
                            textTransform: 'capitalize'
                        }}>
                        Basechain
                    </StyledText>
                    <Feather name="chevron-down" size={15} color={Colors[colorScheme].tint} />
                </StyledView>
            </StyledComponent>

        </StyledView>
    )
}
