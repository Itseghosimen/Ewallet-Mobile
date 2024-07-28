import { StyledText, StyledView } from '@/constants/imports';
import { StyledComponent } from 'nativewind';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react'
import { GestureResponderEvent, TouchableWithoutFeedback } from 'react-native'


export default function Button(props:
    {
        style?: string | null | undefined;
        textStyle?: string | null | undefined;
        Icon?: ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined;
        title?: string | number | undefined;
        onPress: (((event: GestureResponderEvent) => void) & (() => void)) | undefined;
    }) {
    return (
        <StyledComponent component={TouchableWithoutFeedback}
            onPress={props.onPress}>
            <StyledView className={`flex-row items-center ${props.style}`}>
                {props.Icon && props.Icon}
                <StyledText className={`text-base   ${props.textStyle}`}
                    style={{
                        fontFamily: 'Inter_500Medium',
                    }}>
                    {props.title}
                </StyledText>
            </StyledView>
        </StyledComponent>
    )
}

