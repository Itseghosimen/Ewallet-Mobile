import { Animated, Pressable, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useColorScheme } from 'nativewind'
import { StyledText, StyledView } from '@/constants/imports'
import { Colors } from '@/constants/Colors'
import { Entypo } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { Image } from 'expo-image'
import WebCampus from '../home/WebCampus'

export default function Accoridion({
    title, option, optionUrl, content, scrollHorizontal
}: {
    title: string,
    option?: string,
    optionUrl?: string
    content?: any
    scrollHorizontal?: boolean
}) {
    const [accord, setAccord] = useState(false)
    const [animation] = useState(new Animated.Value(0))
    const { colorScheme } = useColorScheme()
    const accordionHeight = scrollHorizontal ? 200 : 220


    function toggleAccoridion() {
        if (accord) {
            Animated.timing(animation, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false
            }).start()
        } else {
            Animated.timing(animation, {
                toValue: 1,
                duration: 300,
                useNativeDriver: false
            }).start()
        }
        setAccord(!accord)
    }

    const heightInterpolation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [accordionHeight, 0],
    })
    return (
        <StyledView className='rounded-lg p-2'
            style={{
                backgroundColor: Colors[colorScheme].otpbg
            }}>
            <Pressable onPress={toggleAccoridion}>
                <StyledView className='flex-row items-center justify-between px-1'>
                    <StyledText style={{
                        fontFamily: 'Inter_700Bold',
                    }} className='  text-secondary text-sm'>{title}</StyledText>
                    <StyledView className='flex-row items-center' style={{ gap: 10 }}>
                        {
                            option ?
                                <Link href={optionUrl ? optionUrl : ''}>
                                    <StyledText className='text-sm  text-black dark:text-[#D1D1D6] ' style={{
                                        fontFamily: 'Inter_500Medium',
                                    }}>
                                        {option + ' ' + '>>'}
                                    </StyledText>
                                </Link>
                                : null
                        }
                        <Entypo
                            style={{
                                transform: [{ rotate: !accord ? '180deg' : '0deg' }]
                            }} name="chevron-down" size={20} color={'#49515D'} />
                    </StyledView>
                </StyledView>
            </Pressable>
            <Animated.View
                style={{
                    height: heightInterpolation,
                    overflow: 'hidden',
                    paddingTop: 20
                }}>
                <StyledView>
                    {
                        scrollHorizontal ?
                            <WebCampus />
                            :
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                directionalLockEnabled={true}
                                alwaysBounceVertical={false}
                                style={{
                                    paddingBottom: 20,
                                    width: '100%'
                                }}>
                                <FlatList
                                    scrollEnabled={false}
                                    data={content}
                                    numColumns={Math.ceil(content.length / 2)}
                                    columnWrapperStyle={{
                                        flex: 1,
                                    }}
                                    contentContainerStyle={{
                                        gap: 20
                                    }}
                                    renderItem={({ item, index }: any) => {
                                        return (
                                            <StyledView className='overflow-hidden items-center flex justify-end w-[30vw]'
                                                style={[, index % (content.length / 2) !== 0 && { borderLeftWidth: 1, borderLeftColor: colorScheme === 'light' ? '#e0e0e0' : '#20222D' }]}>
                                                <Image source={item.icon}
                                                    style={{
                                                        height: 48,
                                                        width: 48,
                                                    }}
                                                    contentFit='contain'
                                                    contentPosition={'center'} />
                                                <StyledView className='p-2.5'>
                                                    <StyledText
                                                        style={{
                                                            fontFamily: 'Inter_400Regular',
                                                        }}
                                                        className='text-secondary text-xs text-center'>
                                                        {item.title}
                                                    </StyledText>

                                                </StyledView>
                                            </StyledView>
                                        )
                                    }} />
                            </ScrollView>
                    }
                </StyledView>
            </Animated.View>
        </StyledView>
    )
}