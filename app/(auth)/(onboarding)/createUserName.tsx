import React from 'react'
import { router } from 'expo-router'
import { useColorScheme } from 'nativewind'
import { Image } from 'expo-image'
import { StyledInput, StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { Colors } from '@/constants/Colors'
import { Pressable } from 'react-native'




export default function createUserName() {
    const { colorScheme } = useColorScheme()
    const [username, setUsername] = React.useState<string>('')


    const [notAvaible, setNotAvailable] = React.useState<boolean>(false)
    // Check if username exists in database and return a true or false on the Not Available usestate above.

    // Dommy

    React.useEffect(() => {
        function onChangeHandler() {
            if (username.length <= 3 && username.length > 0) {
                setNotAvailable(true)
            } else {
                setNotAvailable(false)
            }
        }
        onChangeHandler()
    })

    const submitUsername = () => {
        setTimeout(() => {
            router.replace('/notificationSetup')
        }, 500)
    }

    return (
        <Pressable style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.6)'
        }}>
            <StyledView className='flex-1' />
            <StyledView className='bg-white dark:bg-background px-3 pt-2 h-[80vh] rounded-t-3xl'>
                <StyledView className='h-1 w-10 rounded bg-black dark:bg-primary mx-auto' />
                <StyledView className='flex-1 pt-6 pb-10'>
                    <StyledText
                        className='text-2xl text-black dark:text-white'
                        style={{
                            fontFamily: 'Inter_500Medium'
                        }}
                    >
                        Choose Username
                    </StyledText>
                    <StyledText
                        className='text-secondary text-xs mt-3'
                        style={{
                            fontFamily: 'Inter_500Medium'
                        }}>
                        Usernames can be used to send and Receive currencies, Recover wallet and find friends on Enetwallet.
                    </StyledText>

                    <StyledView className='pt-8 flex gap-y-2'>
                        <StyledText style={{
                            fontFamily: 'Inter_500Medium'
                        }} className='text-black dark:text-white text-base'>Username</StyledText>

                        <StyledView className='flex flex-row bg-white dark:bg-black items-center px-3 h-14 rounded-xl'
                            style={{
                                borderWidth: 2,
                                borderColor: Colors[colorScheme].otpbg
                            }}>
                            <Image source={require('@/assets/icons/username.png')}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: notAvaible ? 'rgb(239 68 68)' : Colors[colorScheme].primary
                                }}
                            />
                            <StyledInput
                                placeholder='Johcee'
                                onChangeText={setUsername}
                                autoCorrect={false}
                                autoComplete='name'
                                value={username}
                                placeholderTextColor={Colors[colorScheme].primary}
                                className={`flex-grow ${notAvaible ? 'text-red-500 dark:text-red-500' : 'text-black dark:text-primary'} h-full text-base mb-1 px-3`} style={{
                                    fontFamily: 'Inter_500Medium',
                                }} />
                        </StyledView>
                        <StyledView>
                            {
                                notAvaible &&
                                <StyledText className='text-xs text-red-500 dark:text-red-500'
                                    style={{
                                        fontFamily: 'Inter_500Medium'
                                    }}>Username Taken</StyledText>
                            }
                        </StyledView>
                    </StyledView>


                    <StyledView className='flex-1' />

                    <StyledTouch
                        disabled={username ? notAvaible : true}
                        onPress={submitUsername}
                        className='h-14 mb-5 w-full bg-black dark:bg-primary rounded-full flex items-center justify-center'>
                        <StyledText className='text-white dark:text-black text-base' style={{
                            fontFamily: 'Inter_600SemiBold',
                        }}>Continue</StyledText>
                    </StyledTouch>
                </StyledView>
            </StyledView>
        </Pressable >
    )
}
