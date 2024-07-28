import { ViewStyle, RegisteredStyle, RecursiveArray, Falsy } from 'react-native'
import { Image } from 'expo-image';
import { Colors } from '@/constants/Colors';
import { StyledText, StyledTouch } from '@/constants/imports';
import { useColorScheme } from 'nativewind';
export default function NewWallet(props:
    {
        style?: ViewStyle | RegisteredStyle<ViewStyle> | RecursiveArray<ViewStyle | Falsy | RegisteredStyle<ViewStyle>> | readonly (ViewStyle | Falsy | RegisteredStyle<ViewStyle>)[] | null | undefined;
    }) {
    const { colorScheme } = useColorScheme()
    return (
        <StyledTouch
            className='flex-row items-center justify-center gap-x-1 bg-white dark:bg-background border border-black dark:border-primary rounded-lg px-2.5'
            style={[props.style]} onPress={undefined}>
            <Image
                source={require('@/assets/icons/add.png')}
                style={{
                    height: 14,
                    width: 14,
                    tintColor: Colors[colorScheme].primary
                }}
                contentFit='contain' />
            <StyledText className='text-sm   text-black dark:text-white'
                style={{
                    fontFamily: 'Inter_500Medium',
                }}>
                New wallet
            </StyledText>
        </StyledTouch>
    )
}

