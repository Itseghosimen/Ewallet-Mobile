import { Modal, Pressable } from 'react-native'
import React from 'react'
import { StyledComponent, useColorScheme } from 'nativewind'
import { StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { Image } from 'expo-image'
import { Colors } from '@/constants/Colors'
import { Shadow } from 'react-native-shadow-2'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

type SecurityProps = {
    isVisible: boolean,
    close: () => void
}

export default function AccountRecovery(props: SecurityProps) {
    const { colorScheme } = useColorScheme()


    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={props.isVisible}
            onRequestClose={props.close}
        >
            <StatusBar style='auto' />
            <StyledComponent component={Pressable} className='flex-1 bg-black/60' onPress={props.close}>
                <StyledView className='flex-1' />
                <StyledView className='min-h-[50vh] pb-5 bg-releiveLight dark:bg-releive rounded-t-3xl pt-2 px-5'>
                    <StyledView className='h-1 w-10 rounded bg-black dark:bg-primary mx-auto' />

                    <Shadow
                        distance={4}
                        startColor={Colors[colorScheme].innerShadow}
                        offset={[0, 1]}
                        paintInside={true}
                        containerStyle={{
                            marginTop: 20
                        }}
                        style={{
                            borderRadius: 18,
                        }}
                    >
                        <StyledView className='h-16 w-16 rounded-2xl flex items-center justify-center bg-keyChain dark:bg-keyChainDark'>
                            <Image
                                source={require('@/assets/icons/reecoveryIcon.png')}
                                style={{
                                    height: 27,
                                    width: 27,
                                    tintColor: Colors[colorScheme].primary
                                }}
                                contentFit='contain'
                            />
                        </StyledView>
                    </Shadow>

                    <StyledText
                        style={{
                            fontFamily: 'Inter_600SemiBold',
                            fontSize: 30,
                            marginTop: 30,
                            marginBottom: 25,
                            color: Colors[colorScheme].tint
                        }}>Account Recovery
                    </StyledText>

                    <StyledText
                        style={{
                            fontFamily: 'Inter_500Medium',
                            fontSize: 14,
                            color: Colors[colorScheme].tint
                        }}
                    >
                        Recover your Account with one of the simple
                        methods below.
                    </StyledText>
                    <StyledView className='flex-1' />
                    <StyledTouch
                        onPress={() => {
                            props.close()
                            router.push('/loginUserName')
                        }}
                        className='h-14 w-full mt-12 bg-black dark:bg-primary rounded-full flex items-center justify-center'>
                        <StyledText className='text-white dark:text-black' style={{
                            fontFamily: 'Inter_600SemiBold',
                            fontSize: 14
                        }}>
                            Recover with encrypted QR-Code
                        </StyledText>
                    </StyledTouch>
                    <StyledTouch
                        onPress={() => {
                            props.close()
                            router.push('/recoverAccount')
                        }}
                        className='h-14 mt-3 w-full bg-disabledLight dark:bg-disabled rounded-full flex items-center justify-center'>
                        <StyledText className='text-white' style={{
                            fontFamily: 'Inter_500Medium',
                            fontSize: 15
                        }}>
                            Recover with Guardians
                        </StyledText>
                    </StyledTouch>
                </StyledView>
            </StyledComponent>
        </Modal>
    )
}