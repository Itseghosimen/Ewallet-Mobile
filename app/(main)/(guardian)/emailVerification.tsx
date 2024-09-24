import { Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { StyledText, StyledTouch, StyledView } from '@/constants/imports'
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import * as Clipboard from 'expo-clipboard';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from 'nativewind';
import Button from '@/components/general/Buttons/Button';
import { router } from 'expo-router';
const CELL_COUNT = 6;





export default function emailVerification() {
    const { colorScheme } = useColorScheme()
    const [code, setCode] = React.useState('');
    const ref = useBlurOnFulfill({ value: code, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value: code,
        setValue: setCode,
    });

    const fetchCopiedText = async () => {
        const text = await Clipboard.getStringAsync();
        setCode(text);
    };

    // Fetch Email from backend
    const email = 'ceomal20@gmail.com'



    // Resending Otp 
    const [counter, setCounter] = React.useState<number>(60)
    const [resent, setResent] = React.useState<string>('')
    React.useEffect(() => {
        const timer: any =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000)
        return () => clearInterval(timer)
    }, [counter])

    function resendOtp() {
        setResent('OTP Resent')
        setTimeout(() => {
            setResent('')
            setCounter(120)
        }, 5000)


        //Perform Resending OTP Action
        console.log('resend')
    }


    // Verifying Otp
    const verifyOtp = () => {
        if (code.length === CELL_COUNT) {
            router.push('/addGuadian')
        }
    }

    return (
        <StyledView className='flex-1 bg-white dark:bg-background px-3 gap-14 pb-5'>
            <StatusBar
                barStyle={colorScheme == 'dark' ? 'light-content' : 'dark-content'}
            />
            <StyledView className='flex-row flex-wrap'>
                <StyledText style={{
                    fontFamily: 'Inter_400Regular',
                }}
                    className='text-xs text-light-text dark:text-[#CDBEBE]'>
                    Enter verification code sent to{' '}
                </StyledText>
                <StyledText className='text-black dark:text-white text-xs' style={{
                    fontFamily: 'Inter_500Medium',
                }}>
                    {email}
                </StyledText>
            </StyledView>
            <StyledView>
                <StyledView className='flex-row justify-between items-center'>
                    <StyledText className='text-secondary test-sm' style={{
                        fontFamily: 'Inter_500Medium',
                    }}>Input code</StyledText>

                    {counter === 0 ? (
                        <StyledText className='text-black dark:text-primary'>{resent}</StyledText>
                    )
                        : (
                            <StyledText className='text-[#F80F0F]'>Resend code in {new Date(counter * 60 * 1000).toISOString().substr(11, 5)}s</StyledText>
                        )
                    }

                </StyledView>
                <CodeField
                    ref={ref}
                    {...props}
                    value={code}
                    onChangeText={setCode}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    autoFocus
                    autoComplete='one-time-code'
                    renderCell={({ index, symbol, isFocused }) => (
                        <Text
                            key={index}
                            style={[
                                styles.cell,
                                {
                                    color: Colors[colorScheme].primary,
                                    borderColor: colorScheme == 'dark' ? '#171925' : '#ECECEE',
                                    backgroundColor: Colors[colorScheme].otpbg
                                },
                                isFocused && styles.focusCell,
                            ]}
                            onLayout={getCellOnLayoutHandler(index)}>
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                    )}
                />
                <Button
                    title={'Paste code'}
                    onPress={fetchCopiedText}
                    textStyle={'text-black dark:text-primary text-sm text-center'}
                    style={'mt-10 mx-auto'}
                />
            </StyledView>
            <StyledView className='flex-1' />
            <StyledView>
                <StyledTouch
                    onPress={resendOtp}
                    disabled={counter > 0}
                    className={`flex items-center ${counter > 0 && 'opacity-50'} justify-center`}>
                    <StyledText className='text-black dark:text-primary text-base ' style={{
                        fontFamily: 'Inter_500Medium',
                    }}>Resend</StyledText>
                </StyledTouch>
                <StyledTouch
                    onPress={verifyOtp}
                    className='h-14 mt-5 w-full bg-black dark:bg-primary/80 rounded-full flex items-center justify-center'>
                    <StyledText className='text-white dark:text-black text-base ' style={{
                        fontFamily: 'Inter_500Medium',
                    }}>Verify code</StyledText>
                </StyledTouch>
            </StyledView>
        </StyledView>
    )
}

const styles = StyleSheet.create({
    codeFieldRoot: {
        marginTop: 20,
        width: '100%',
    },
    cell: {
        width: 52,
        height: 57,
        paddingTop: 7,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 2,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        overflow: 'hidden',
    },
    focusCell: {
        borderColor: '#18EAFF',

    },
});