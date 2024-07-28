import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react'
import { ViewStyle, RegisteredStyle, RecursiveArray, Falsy, TextStyle, GestureResponderEvent } from 'react-native'
import { Image, ImageSource } from 'expo-image'
import { Entypo } from '@expo/vector-icons'
import { StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { useColorScheme } from 'nativewind'
import { Colors } from '@/constants/Colors'

export default function SettingBtn(props:
    {
        style?: ViewStyle | RegisteredStyle<ViewStyle> | RecursiveArray<ViewStyle | Falsy | RegisteredStyle<ViewStyle>> | readonly (ViewStyle | Falsy | RegisteredStyle<ViewStyle>)[] | null | undefined;
        textStyle?: TextStyle | RegisteredStyle<TextStyle> | RecursiveArray<TextStyle | Falsy | RegisteredStyle<TextStyle>> | null | undefined;
        frontIcon: string | number | string[] | ImageSource | ImageSource[] | null | undefined;
        title: string;
        description?: string;
        backIcon?: ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined;
        type: string;
        about?: boolean | undefined;
        settings?: boolean | undefined;
        onPress?: (((event: GestureResponderEvent) => void) & (() => void)) | undefined;
    }) {

    const { colorScheme } = useColorScheme()

    if (props.type == 'switch') {
        return (
            <StyledView
                className='flex-row items-center justify-between'
                style={[props.style]}>
                <StyledView className='flex-row items-center gap-x-3'>
                    {
                        props.frontIcon &&
                        <Image
                            source={props.frontIcon}
                            style={{
                                height: 23,
                                width: 23,
                                tintColor: colorScheme === 'light' ? '#000' : '#E9E9FE'
                            }}
                            contentFit='contain' />
                    }
                    <StyledView>
                        <StyledText
                            className='text-black dark:text-white text-sm  '
                            style={[props.textStyle,
                            {
                                fontFamily: 'Inter_500Medium',
                            }
                            ]}>
                            {props.title}
                        </StyledText>
                        {
                            props.description &&
                            <StyledText className='text-secondary max-w-[75vw] text-xs'
                                style={{
                                    fontFamily: 'Inter_400Regular',
                                }}>
                                {props.description}
                            </StyledText>
                        }
                    </StyledView>
                </StyledView>
                {props.backIcon}
            </StyledView>
        )
    } else if (props.type == 'link') {
        return (
            <StyledTouch
                className='flex-row items-center justify-between'
                style={[props.style,]} onPress={props.onPress}>
                <StyledView className='flex-row items-center gap-x-3'>
                    {
                        props.frontIcon &&
                        <Image
                            source={props.frontIcon}
                            style={{
                                height: 23,
                                width: 23,
                                tintColor: colorScheme === 'light' ? '#000' : '#E9E9FE'
                            }}
                            contentFit='contain' />
                    }
                    <StyledView>
                        <StyledText className='text-black dark:text-white text-sm  '
                            style={[props.textStyle,
                            {
                                fontFamily: 'Inter_500Medium',
                            }
                            ]}>
                            {props.title}
                        </StyledText>
                        {
                            props.description &&
                            <StyledText className='text-secondary max-w-[75vw] text-xs'
                                style={{
                                    fontFamily: 'Inter_400Regular',
                                }}>
                                {props.description}
                            </StyledText>
                        }
                    </StyledView>
                </StyledView>
                {
                    !props.settings && <Entypo name="chevron-small-right" size={24} color={props.about ? Colors[colorScheme].primary : '#49515D'} />
                }
            </StyledTouch>
        )
    }

}

