import { Text, StyleSheet, StatusBar } from 'react-native'
import React, { useState } from 'react'
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


export default function verify() {
    const { colorScheme } = useColorScheme()
    const [code, setCode] = useState('');
    const ref = useBlurOnFulfill({ value: code, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value: code,
        setValue: setCode,
    });

    const fetchCopiedText = async () => {
        const text = await Clipboard.getStringAsync();
        setCode(text);
    };

    return (
        <StyledView className='flex-1 bg-white dark:bg-background px-3 pb-5 gap-14'>
            <StatusBar
                barStyle={colorScheme == 'dark' ? 'light-content' : 'dark-content'}
            />
            <StyledView className='flex-row flex-wrap'>
                <StyledText style={{
                    fontFamily: 'Inter_400Regular',
                }}
                    className='text-sm text-light-text dark:text-[#CDBEBE]'>
                    Enter verification code sent to{' '}
                </StyledText>
                <StyledText className='text-black dark:text-white text-sm  ' style={{
                    fontFamily: 'Inter_500Medium',
                }}>
                    ceomal20@gmail.com
                </StyledText>
            </StyledView>
            <StyledView>
                <StyledView className='flex-row justify-between items-center'>
                    <StyledText className='text-secondary   test-sm' style={{
                        fontFamily: 'Inter_500Medium',
                    }}>Input code</StyledText>
                    <StyledText className='text-[#F80F0F]'>Resend code in 00 : 60s</StyledText>
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
                    renderCell={({ index, symbol, isFocused }) => (
                        <Text
                            key={index}
                            style={[styles.cell,
                            {
                                color: Colors[colorScheme].primary,
                                borderColor: colorScheme == 'dark' ? '#171925' : '#ECECEE',
                                backgroundColor: Colors[colorScheme].otpbg
                            },
                            isFocused && styles.focusCell]}
                            onLayout={getCellOnLayoutHandler(index)}>
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                    )}
                />
                <Button
                    title={'Paste code'}
                    onPress={fetchCopiedText}
                    textStyle={'text-black dark:text-primary text-sm   text-center'}
                    style={'mt-5 mx-auto'}
                />
            </StyledView>
            <StyledView className='flex-1' />
            <StyledView>
                <StyledTouch className='flex items-center justify-center'>
                    <StyledText className='text-black dark:text-primary text-base ' style={{
                        fontFamily: 'Inter_500Medium',
                    }}>Resend</StyledText>
                </StyledTouch>
                <StyledTouch
                    onPress={() => router.push('password')}
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