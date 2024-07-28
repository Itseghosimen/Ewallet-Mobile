import React from 'react'
import * as Clipboard from 'expo-clipboard';
import { StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { useColorScheme } from 'nativewind';
import { Dimensions } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Image } from 'expo-image';
import { Feather } from '@expo/vector-icons';

export default function MoreInfo(props: { account: string; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; tokenFull: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; token: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; confirmed: any; fee: { toLocaleString: (arg0: string, arg1: { minimumFractionDigits: number; maximumFractionDigits: number; style: string; currency: string; }) => string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }; whoPaid: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) {
    const { colorScheme } = useColorScheme()
    const layout = Dimensions.get('window')
    const currentdate = new Date();
    const datetime = currentdate.getFullYear() + "-"
        + currentdate.getDate() + "-"
        + (currentdate.getMonth() + 1) + "  "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();

    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(props.account);
    };

    return (
        <StyledView className='px-4 py-7'
            style={{
                backgroundColor: Colors[colorScheme].otpbg,
                gap: 30
            }}>

            <StyledView className='flex-row items-center justify-between'>
                <StyledView className='flex-row items-center gap-x-2'>
                    <Image
                        source={require('@/assets/icons/contact.png')}
                        style={{
                            height: 18,
                            width: 18,
                            tintColor: Colors[colorScheme].tint,
                            opacity: 0.6
                        }}
                        contentFit='contain'
                    />
                    <StyledText
                        style={{
                            fontFamily: 'Inter_500Medium',
                        }} className='text-sm  text-secondary '>
                        Contact
                    </StyledText>
                </StyledView>
                <StyledText
                    style={{
                        fontFamily: 'Inter_500Medium',
                    }} className='text-sm   text-black dark:text-white'>
                    {props.name}
                </StyledText>
            </StyledView>

            <StyledView className='flex-row items-center justify-between'>
                <StyledView className='flex-row items-center gap-x-2'>
                    <Image
                        source={require('@/assets/icons/arct.png')}
                        style={{
                            height: 18,
                            width: 18,
                            tintColor: Colors[colorScheme].tint,
                            opacity: 0.6
                        }}
                        contentFit='contain'
                    />
                    <StyledText
                        style={{
                            fontFamily: 'Inter_500Medium',
                        }} className='text-sm  text-secondary '>
                        Art
                    </StyledText>
                </StyledView>
                <StyledText
                    style={{
                        fontFamily: 'Inter_500Medium',
                    }} className='text-sm   text-black dark:text-white'>
                    Send (Email)
                </StyledText>
            </StyledView>

            <StyledView className='flex-row items-center justify-between'>
                <StyledView className='flex-row items-center gap-x-2'>
                    <Image
                        source={require('@/assets/icons/network.png')}
                        style={{
                            height: 18,
                            width: 18,
                            tintColor: Colors[colorScheme].tint,
                            opacity: 0.6
                        }}
                        contentFit='contain'
                    />
                    <StyledText
                        style={{
                            fontFamily: 'Inter_500Medium',
                        }} className='text-sm  text-secondary '>
                        Network
                    </StyledText>
                </StyledView>
                <StyledText
                    style={{
                        fontFamily: 'Inter_500Medium',
                    }} className='text-sm   text-black dark:text-white'>
                    {props.tokenFull} ({props.token})
                </StyledText>
            </StyledView>

            {
                props.confirmed &&
                <StyledView className='flex-row items-center justify-between'>
                    <StyledView className='flex-row items-center gap-x-2'>
                        <Image
                            source={require('@/assets/icons/txid.png')}
                            style={{
                                height: 18,
                                width: 18,
                                tintColor: Colors[colorScheme].tint,
                                opacity: 0.6
                            }}
                            contentFit='contain'
                        />
                        <StyledText
                            style={{
                                fontFamily: 'Inter_500Medium',
                            }} className='text-sm  text-secondary '>
                            Txid
                        </StyledText>
                    </StyledView>
                    <StyledView className='flex-row items-baseline gap-x-2'>
                        <StyledTouch onPress={copyToClipboard} >
                            <Feather name="copy" size={15} color={Colors[colorScheme ?? 'light'].tint} />
                        </StyledTouch>
                        <StyledText
                            style={{
                                fontFamily: 'Inter_500Medium',
                            }} className='max-w-[30vw]  underline text-xs text-right text-secondary'>
                            {props.account}
                        </StyledText>
                    </StyledView>
                </StyledView>
            }

            <StyledView className='flex-row items-center justify-between'>
                <StyledView className='flex-row items-center gap-x-2'>
                    <Image
                        source={require('@/assets/icons/gas.png')}
                        style={{
                            height: 18,
                            width: 18,
                            tintColor: Colors[colorScheme].tint,
                            opacity: 0.6
                        }}
                        contentFit='contain'
                    />
                    <StyledText style={{
                        fontFamily: 'Inter_500Medium',
                    }}
                        className='text-sm  text-secondary '>
                        Fee
                    </StyledText>
                </StyledView>
                <StyledText
                    style={{
                        fontFamily: 'Inter_500Medium',
                    }} className='text-sm   text-black dark:text-white'>
                    ~{props.fee?.toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                        style: 'currency',
                        currency: 'USD'
                    })}
                </StyledText>
            </StyledView>

            <StyledView className='flex-row items-center justify-between'>
                <StyledView className='flex-row items-center gap-x-2'>
                    <Image
                        source={require('@/assets/icons/gasfee.png')}
                        style={{
                            height: 18,
                            width: 18,
                            tintColor: Colors[colorScheme].tint,
                            opacity: 0.6
                        }}
                        contentFit='contain'
                    />
                    <StyledText
                        style={{
                            fontFamily: 'Inter_500Medium',
                        }} className='text-sm  text-secondary '>
                        Gas fee paid by
                    </StyledText>
                </StyledView>
                <StyledText
                    style={{
                        fontFamily: 'Inter_500Medium',
                    }} className='text-sm   text-black dark:text-white'>
                    {props.whoPaid}
                </StyledText>
            </StyledView>

            {
                props.confirmed &&
                <StyledView className='flex-row items-center justify-between'>
                    <StyledView className='flex-row items-center gap-x-2'>
                        <Image
                            source={require('@/assets/icons/clk.png')}
                            style={{
                                height: 18,
                                width: 18,
                                tintColor: Colors[colorScheme].tint,
                                opacity: 0.6
                            }}
                            contentFit='contain'
                        />
                        <StyledText
                            style={{
                                fontFamily: 'Inter_500Medium',
                            }} className='text-sm  text-secondary '>
                            Date & Time
                        </StyledText>
                    </StyledView>
                    <StyledText
                        style={{
                            fontFamily: 'Inter_500Medium',
                        }} className='text-sm   text-black dark:text-white'>
                        {datetime}
                    </StyledText>
                </StyledView>
            }
        </StyledView>
    )
}