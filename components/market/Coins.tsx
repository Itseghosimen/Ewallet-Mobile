import React from 'react'
import { Image, ImageSource } from 'expo-image';
import { StyledText, StyledView } from '@/constants/imports';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from 'nativewind';

export default function Coins(
    props:
        {
            icon?: string | number | ImageSource | ImageSource[] | string[] | null | undefined;
            name: string | number;
            vol?: string | number;
            hot?: boolean;
            multiplier?: string | number | boolean;
            up: { toLocaleString: () => string | number; };
            down: { toLocaleString: () => string | number; };
            signal: boolean;
            percent: number;
        }
) {
    const { colorScheme } = useColorScheme()



    return (
        <StyledView className='flex-row items-center justify-between bg-white dark:bg-background h-[60px]  py-2 px-1'>
            <StyledView className='flex-row items-center' style={{ gap: 10 }}>
                {
                    props.icon &&
                    <Image
                        source={props.icon}
                        style={{
                            height: 35,
                            width: 35
                        }}
                        contentFit='contain' />
                }
                <StyledView>
                    <StyledText
                        className='text-black dark:text-white text-sm mb-1.5'
                        style={{
                            fontFamily: 'Inter_600SemiBold'
                        }}
                    >
                        {props.name}
                    </StyledText>
                    <StyledText
                        className='text-secondary text-xs'
                        style={{
                            fontFamily: 'Inter_500Medium'
                        }}>
                        Vol ${props.vol}M
                    </StyledText>
                </StyledView>
                {props.hot &&
                    <Image
                        source={require('@/assets/icons/flame.png')}
                        style={{
                            height: 15,
                            width: 15
                        }}
                        contentFit='contain' />
                }
                {
                    props.multiplier &&
                    <StyledView
                        className='shrink-0 rounded-md px-2 py-1'
                        style={{
                            backgroundColor: Colors[colorScheme].otpbg,
                        }}>
                        <StyledText
                            className='text-black dark:text-white'
                            style={{
                                fontSize: 9,
                                fontFamily: 'Inter_500Medium'
                            }}>{props.multiplier}X</StyledText>
                    </StyledView>
                }
            </StyledView>
            <StyledView className='flex-row items-center w-[45vw] justify-between'>
                <StyledView className='flex items-end min-w-[20vw]'>
                    <StyledText
                        className='text-black  mb-1.5 dark:text-white text-sm text-end'
                        style={{
                            fontFamily: 'Inter_600SemiBold'
                        }}>
                        ${props.up.toLocaleString()}
                    </StyledText>
                    <StyledText
                        className='text-secondary text-xs text-end'
                        style={{
                            fontFamily: 'Inter_500Medium'
                        }}>
                        ${props.down.toLocaleString()}
                    </StyledText>
                </StyledView>
                <StyledView className={`rounded-md ${props.signal ? 'bg-[#15BDCF]' : 'bg-[#F80F0F]'} flex items-center justify-center px-3 h-8`}>
                    <StyledText className='text-white text-xs' style={{ fontFamily: 'Inter_500Medium' }}>
                        +{props.percent}%
                    </StyledText>
                </StyledView>
            </StyledView>
        </StyledView>
    )
}