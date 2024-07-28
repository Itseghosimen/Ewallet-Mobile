import { View, Text, TouchableWithoutFeedback, GestureResponderEvent } from 'react-native'
import React from 'react'
import { StyledComponent } from 'nativewind'
import { StyledText, StyledView } from '@/constants/imports'

export default function SwapBtn(props: { onPress: ((event: GestureResponderEvent) => void) | undefined; active: any; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined }) {
    return (
        <StyledComponent
            onPress={props.onPress}
            component={TouchableWithoutFeedback}>
            <StyledView className='h-full flex items-center'>
                <StyledText
                    style={{
                        fontFamily: 'Inter_500Medium',
                    }} className={`text-sm  ${props.active == props.title ? 'text-black dark:text-primary' : 'text-secondary'}  ${props.title === 'nft' ? 'uppercase' : 'capitalize'} my-auto `}>{props.title}</StyledText>
                <StyledView className={`h-0.5 w-6 rounded ${props.active == props.title ? 'opacity-100' : 'opacity-0'} bg-black dark:bg-primary`} />
            </StyledView>
        </StyledComponent>
    )
}