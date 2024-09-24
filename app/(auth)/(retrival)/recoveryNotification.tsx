import React, { useState } from 'react'
import { StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ActivityIndicator, Pressable, StyleSheet } from 'react-native'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from 'nativewind'
import ConfirmRecovery from '@/app/(auth)/(modals)/confirmRecovery'

export default function Template() {
    const { colorScheme } = useColorScheme()
    const [loading, setLoading] = useState(false)
    const [confirm, setConfirm] = useState(false)
    const generateNum = [36, 14, 56, 6]

    // return if code is correct
    const [correct, setCorrect] = useState<boolean>(true)
    const [correctCode, setCorrectCode] = useState<number>(56)
    const [codePicked, setCodePicked] = useState<number>()

    // Resending codes 
    const [counter, setCounter] = React.useState<number>(60)
    const [resent, setResent] = React.useState<boolean>(false)

    React.useEffect(() => {
        const timer: any =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000)
        return () => clearInterval(timer)
    }, [counter])

    function resendCodes() {
        setResent(true)
        setTimeout(() => {
            setResent(false)
            setCounter(120)
        }, 5000)


        //Perform Resending OTP Action
        console.log('resend')
    }

    const verifyCode = () => {
        if (codePicked) {
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                if (codePicked === correctCode) {
                    setCorrect(true)
                    setConfirm(true)
                } else {
                    setCorrect(false)
                }
            }, 1000)
        } else {
            setCorrect(false)
        }
    }


    return (
        <StyledView className='flex-1 bg-white dark:bg-background'>
            <SafeAreaView style={{
                flex: 1,
                paddingHorizontal: 15,
                paddingTop: 15
            }}>
                <StyledText
                    className='text-black dark:text-primary text-center'
                    style={{
                        fontFamily: 'Inter_700Bold',
                        fontSize: 20,
                    }}>
                    We sent a recovery notification to your guardian
                </StyledText>

                <StyledView className='flex-1 justify-center' >
                    <StyledView className='items-center'>
                        <StyledText className='text-black dark:text-white text-center'
                            style={{
                                fontFamily: 'Inter_500Medium',
                                fontSize: 13,
                            }}>
                            Confirm the number on the screen of your guardian to recover your wallet
                        </StyledText>

                        <StyledView className='flex-row gap-x-2.5 mt-12'>
                            {generateNum.map((items, index) => {
                                return (
                                    <StyledTouch key={index}
                                        className='bg-releiveLight dark:bg-releive h-12 w-12 items-center justify-center rounded-lg'
                                        style={[
                                            codePicked === items && correct && {
                                                borderWidth: 1,
                                                borderColor: Colors[colorScheme].primary
                                            },
                                            codePicked === items && correct == false && {
                                                borderWidth: 1,
                                                borderColor: '#F80F0F'
                                            },
                                        ]}
                                        onPress={() => {
                                            setCodePicked(items)
                                            setCorrect(true)
                                        }}>

                                        <StyledText
                                            className={`text-black ${codePicked == items ?
                                                correct ?
                                                    'dark:text-primary'
                                                    : 'text-[#F80F0F]'
                                                : ' dark:text-white'}`}
                                            style={{
                                                fontFamily: 'Inter_500Medium',
                                                fontSize: 20
                                            }}>
                                            {items}
                                        </StyledText>
                                    </StyledTouch>
                                )
                            })}

                        </StyledView>

                        <StyledView className='mt-10'>
                            {counter === 0 ? (
                                <Pressable
                                    disabled={resent}
                                    onPress={resendCodes}>
                                    <StyledText className={resent ? 'text-black dark:text-primary' : 'text-light-text dark:text-white'}>
                                        {resent ? 'Code Refreshed' : 'Resend Code'}
                                    </StyledText>
                                </Pressable>
                            )
                                : (
                                    <StyledText className='text-[#F80F0F]'>
                                        Refresh code in {new Date(counter * 60 * 1000).toISOString().substr(11, 5)}s
                                    </StyledText>
                                )
                            }
                        </StyledView>

                    </StyledView>
                </StyledView>
                <StyledTouch
                    onPress={verifyCode}
                    className='h-14 w-full mt-12 bg-black dark:bg-primary rounded-full flex items-center justify-center'>
                    <StyledText className='text-white dark:text-black' style={{
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: 14
                    }}>
                        Verify code
                    </StyledText>
                </StyledTouch>
            </SafeAreaView>

            <StyledView
                className={`bg-black/70 flex-1 z-10 ${loading ? 'block' : 'hidden '} items-center justify-center`}
                style={StyleSheet.absoluteFill}>
                <ActivityIndicator size={'large'} />
            </StyledView>

            <ConfirmRecovery to={'/recoveryProgress'} type='Wallet Recovery' isVisible={confirm} close={() => setConfirm(false)} />
        </StyledView >

    )
}