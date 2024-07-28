
import { Colors } from '@/constants/Colors'
import { StyledText, StyledView } from '@/constants/imports'
import { Image } from 'expo-image'
import { StyledComponent, useColorScheme } from 'nativewind'
import React, { useState } from 'react'
import { GestureResponderEvent, Modal, Pressable, TouchableWithoutFeedback } from 'react-native'

export default function SwapSettings() {
    const { colorScheme } = useColorScheme()
    const [visible, setVisible] = useState(false)
    const [selected, setSelected] = useState('auto')
    const [percent, setPercent] = useState(0)
    const percentile = ['0.1%', '0.3%', '0.6%', '0.9%', '1%', '2%']

    return (
        <>
            <StyledComponent
                onPress={() => setVisible(true)}
                component={TouchableWithoutFeedback}>
                <Image source={require('@/assets/icons/setting-2.png')}
                    style={{
                        height: 22,
                        width: 22
                    }}
                    contentFit='contain' />
            </StyledComponent>

            <Modal
                animationType="slide"
                visible={visible}
                transparent={true}>
                <StyledComponent component={Pressable}
                    onPress={() => setVisible(false)}
                    className='flex-1 bg-black/80 rounded-t-3xl'>
                    <StyledView className='flex-1' />

                    <StyledView className="pb-6 bg-white dark:bg-background rounded-t-3xl pt-4 px-3">
                        <StyledView className='h-1 w-14 rounded bg-black dark:bg-primary mx-auto' />
                        <StyledText className="text-base   text-center text-black dark:text-white mt-2" style={{
                            fontFamily: 'Inter_500Medium',
                        }}>
                            Settings
                        </StyledText>
                        <StyledView className='border rounded-lg p-3 mt-3'
                            style={{
                                borderColor: Colors[colorScheme].otpbg
                            }}>
                            <StyledText className='text-sm   text-black dark:text-white' style={{
                                fontFamily: 'Inter_500Medium',
                            }}>
                                Slippage settings
                            </StyledText>
                            <StyledText className='text-xs  text-secondary my-3'>
                                Setting a higher slippage tolerance may help the transactions, but you might not get a good deal. Please proceed with caution
                            </StyledText>
                            <StyledView className='flex-row items-center justify-between my-3'>
                                {
                                    percentile.map((items, idx) => {
                                        return (
                                            <TouchableWithoutFeedback key={idx}
                                                onPress={() => setPercent(idx)}>
                                                <StyledView
                                                    className='w-[12vw] flex items-center justify-center'
                                                    style={[idx == percentile.length - 1 ? {
                                                        borderColor: '#F80F0F'
                                                    } : {
                                                        borderColor: percent == idx ?
                                                            Colors[colorScheme].primary :
                                                            colorScheme == 'dark' ? '#292D32' : '#333'
                                                    }, {
                                                        paddingHorizontal: 8,
                                                        paddingVertical: 3,
                                                        borderRadius: 6,
                                                        borderWidth: 1,
                                                    }]}>
                                                    <StyledText
                                                        style={[idx == percentile.length - 1 ? {
                                                            color: '#F80F0F'
                                                        } : {
                                                            color: percent == idx ?
                                                                Colors[colorScheme].primary : '#3A4452',
                                                        },
                                                        {
                                                            fontSize: 10,
                                                        }]}>
                                                        {items}
                                                    </StyledText>
                                                </StyledView>
                                            </TouchableWithoutFeedback>
                                        )
                                    })
                                }
                            </StyledView>

                            <StyledText className='text-black mt-3 dark:text-white text-xs ' style={{
                                fontFamily: 'Inter_500Medium',
                            }}>Gas Price</StyledText>
                            <StyledView

                                style={{
                                    backgroundColor: Colors[colorScheme].otpbg,
                                    borderRadius: 11,
                                    elevation: 3,
                                    shadowOffset: {
                                        width: 2,
                                        height: 2
                                    },
                                    shadowColor: 'rgba(0,0,0,0.4)',
                                    shadowRadius: 5,
                                    marginTop: 15
                                }}>
                                <StyledView className='flex-row items-center justify-evenly'>
                                    <NavTitle title={'auto'}
                                        active={selected}
                                        onPress={() => setSelected('auto')} />
                                    <NavTitle title={'slow'}
                                        onPress={() => setSelected('slow')}
                                        value={'$' + 0.6}
                                        active={selected} />
                                    <NavTitle title={'normal'}
                                        value={'$' + 1.6}
                                        onPress={() => setSelected('normal')}
                                        active={selected} />
                                    <NavTitle title={'fast'}
                                        value={'$' + 2.6}
                                        onPress={() => setSelected('fast')}
                                        active={selected} />
                                </StyledView>
                            </StyledView>
                        </StyledView>
                    </StyledView>
                </StyledComponent>
            </Modal>
        </>
    )
}






const NavTitle = (props: {
    title: string | number;
    value?: string | number;
    onPress?: (((event: GestureResponderEvent) => void) & (() => void)) | undefined;
    active?: string | number;
}) => {
    const { colorScheme } = useColorScheme()
    return (
        <TouchableWithoutFeedback onPress={props.onPress}>
            <StyledView style={{
                alignItems: "center",
                height: 50
            }}>
                <StyledView style={{ alignItems: 'center', marginVertical: 'auto', height: 35, justifyContent: 'center' }}>
                    <StyledText className='capitalize ' style={{
                        fontSize: 12,
                        color: props.active == props.title ?
                            Colors[colorScheme].primary : '#3A4452',
                        fontFamily: 'Inter_600SemiBold',
                        paddingBottom: props.active !== props.title ? 3 : 0
                    }}>
                        {props.title}
                    </StyledText>
                    {props.value &&
                        <StyledText
                            style={{
                                lineHeight: 10,
                                fontSize: 10,
                                fontFamily: 'Inter_400Regular',
                                color: props.active == props.title ?
                                    Colors[colorScheme].primary : '#3A4452',

                            }}>{props.value}</StyledText>}
                </StyledView>
                {
                    props.active == props.title &&
                    <StyledView style={{
                        height: 3,
                        width: 25,
                        borderRadius: 5,
                        backgroundColor: Colors[colorScheme].primary
                    }} />
                }
            </StyledView>
        </TouchableWithoutFeedback>
    )
}