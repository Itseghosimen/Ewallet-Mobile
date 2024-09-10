import React from 'react'
import { StyledText, StyledView } from '@/constants/imports'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from 'nativewind'

export default function Countdown(props: { time: number }) {
    const { colorScheme } = useColorScheme()
    const [counter, setCounter] = React.useState<number>(props.time)
    React.useEffect(() => {
        const timer: any =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000)
        return () => clearInterval(timer)
    }, [counter])
    var hrs = Math.floor(counter / (60 * 60))
    var mins = Math.floor((counter - (hrs * 60 * 60)) / 60);
    var secs = Math.floor(
        (counter - (hrs * 60 * 60) - (mins * 60)));


    return (
        <StyledView className='flex-row items-center justify-evenly'>
            <StyledView className='items-center gap-y-1.5'>
                <StyledView
                    className='items-center justify-center rounded-lg'
                    style={{
                        backgroundColor: Colors[colorScheme].otpbg,
                        marginHorizontal: 30,
                        width: 65,
                        height: 45,
                        borderWidth: 1,
                        borderColor: '#171925'
                    }}>
                    <StyledText style={{
                        color: Colors[colorScheme].primary,
                        fontSize: 20,
                        fontFamily: 'Inter_600SemiBold'
                    }}>
                        {hrs}
                    </StyledText>
                </StyledView>
                <StyledText style={{
                    color: Colors[colorScheme].tint,
                    fontSize: 12,
                    fontFamily: 'Inter_500Medium'
                }}>
                    hrs
                </StyledText>
            </StyledView>

            <StyledView className='items-center gap-y-1.5'>
                <StyledView
                    className='items-center justify-center rounded-lg'
                    style={{
                        backgroundColor: Colors[colorScheme].otpbg,
                        marginHorizontal: 30,
                        width: 65,
                        height: 45,
                        borderWidth: 1,
                        borderColor: '#171925'
                    }}>
                    <StyledText style={{
                        color: Colors[colorScheme].primary,
                        fontSize: 20,
                        fontFamily: 'Inter_600SemiBold'
                    }}>
                        {mins}
                    </StyledText>
                </StyledView>
                <StyledText style={{
                    color: Colors[colorScheme].tint,
                    fontSize: 12,
                    fontFamily: 'Inter_500Medium'
                }}>
                    mins
                </StyledText>
            </StyledView>

            <StyledView className='items-center gap-y-1.5'>
                <StyledView
                    className='items-center justify-center rounded-lg'
                    style={{
                        backgroundColor: Colors[colorScheme].otpbg,
                        marginHorizontal: 30,
                        width: 65,
                        height: 45,
                        borderWidth: 1,
                        borderColor: '#171925'
                    }}>
                    <StyledText style={{
                        color: Colors[colorScheme].primary,
                        fontSize: 20,
                        fontFamily: 'Inter_600SemiBold'
                    }}>
                        {secs}
                    </StyledText>
                </StyledView>
                <StyledText style={{
                    color: Colors[colorScheme].tint,
                    fontSize: 12,
                    fontFamily: 'Inter_500Medium'
                }}>
                    secs
                </StyledText>
            </StyledView>
        </StyledView >
    )
}