import { StyledText, StyledView } from '@/constants/imports'
import { Image, ImageBackground, ImageSource } from 'expo-image'
import React from 'react'

export default function ReceiverInfo(props: { person: string | number | ImageSource | ImageSource[] | string[] | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; Amount: { toLocaleString: (arg0: string, arg1: { minimumFractionDigits: number; maximumFractionDigits: number; style: string; currency: string }) => string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined }; token: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; icon: string | number | ImageSource | ImageSource[] | string[] | null | undefined; minusGas: { toLocaleString: (arg0: string, arg1: { minimumFractionDigits: number; maximumFractionDigits: number; style: string; currency: string }) => string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined } }) {

    return (
        <StyledView className='flex-row justify-between items-center'>
            <StyledView className='flex-row items-center ' style={{ gap: 15 }}>
                <StyledView className='relative'>
                    <ImageBackground source={props.person} style={{
                        height: 50,
                        width: 50,
                        borderRadius: 8,
                        overflow: 'hidden'
                    }} />
                    <Image source={require('@/assets/icons/enet.png')}
                        style={{
                            height: 11,
                            width: 11,
                            position: 'absolute',
                            top: 32,
                            left: 2
                        }}
                        contentFit='contain' />
                </StyledView>
                <StyledView>
                    <StyledText
                        style={{
                            fontFamily: 'Inter_500Medium',
                        }} className='text-sm text-black dark:text-white  '>{props.name}</StyledText>
                    <StyledText className='text-xs  text-secondary'>To Receive</StyledText>
                </StyledView>
            </StyledView>
            <StyledView>
                <StyledView className='flex-row items-center' style={{ gap: 5 }}>
                    <StyledView className='flex-row items-baseline'>
                        <StyledText
                            style={{
                                fontFamily: 'Inter_500Medium',
                            }} className='text-sm   text-black dark:text-white'>
                            {props.Amount.toLocaleString('en-US', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                                style: 'currency',
                                currency: 'USD'
                            })}
                        </StyledText>
                        <StyledText
                            style={{
                                fontFamily: 'Inter_500Medium',
                            }} className='text-xs  text-secondary '>
                            {' '}{props.token}
                        </StyledText>
                    </StyledView>
                    <Image
                        source={props.icon}
                        style={{
                            height: 15,
                            width: 15
                        }}
                        contentFit='contain' />
                </StyledView>
                <StyledText className='text-xs  text-secondary'>
                    ~{props.minusGas.toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                        style: 'currency',
                        currency: 'USD'
                    })}
                </StyledText>
            </StyledView>
        </StyledView>
    )
}