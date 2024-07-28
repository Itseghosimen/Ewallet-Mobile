import { Image, ImageBackground } from "expo-image";
import { useColorScheme } from 'nativewind';
import Button from '@/components/general/Buttons/Button';
import { StyledText, StyledTouch, StyledView } from '@/constants/imports';
import { router } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { Dimensions, StatusBar } from "react-native";

export default function index() {
    const { colorScheme } = useColorScheme();
    const layout = Dimensions.get('window')
    return (
        <StyledView className='px-3 pb-5 flex-1 gap-6 bg-white dark:bg-background'>
            <StatusBar
                barStyle={colorScheme == 'dark' ? 'light-content' : 'dark-content'}
            />
            <StyledView>
                {
                    colorScheme == 'light' ?
                        <ImageBackground
                            source={require('@/assets/images/handfull-light.png')}
                            transition={500}
                            style={{
                                height: layout.height * 0.35,
                                width: layout.width
                            }}
                            contentFit='contain'
                        /> :
                        <ImageBackground
                            source={require('@/assets/images/handfull.png')}
                            transition={500}
                            style={{
                                height: layout.height * 0.35,
                                width: layout.width
                            }}
                            contentFit='contain' />
                }
            </StyledView>
            <StyledView>
                {
                    colorScheme == 'light' ?
                        <Image
                            source={
                                require('@/assets/images/cryptoTextLight.png')
                            }
                            style={{
                                height: layout.height * 0.2,
                                width: layout.width
                            }}
                            contentFit='contain' /> :
                        <Image
                            source={
                                require('@/assets/images/cryptoText.png')
                            }
                            style={{
                                height: layout.height * 0.2,
                                width: layout.width
                            }}
                            contentFit='contain' />

                }
            </StyledView>
            <StyledView>
                <StyledText
                    className='text-center text-light-text dark:text-dark-text text-[15px] leading-6'
                    style={{
                        fontFamily: 'Inter_400Regular',
                    }}>
                    Over 10,000+ Coins in your pocket{'\n'}
                    Send, Receive, Pay, Exchange different currencies {'\n'} Anytime, Anywhere
                </StyledText>
            </StyledView>
            <StyledView className="flex-1 justify-evenly">
                <StyledView
                    className='flex-row items-center justify-between'>
                    <Button onPress={undefined}
                        textStyle={'text-black dark:text-white'}
                        Icon={
                            <Image source={require('@/assets/icons/back-arrow.png')}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: Colors[colorScheme].primary
                                }}
                            />
                        }
                        title={'Passkey Sign Up'} />
                    <Button onPress={() => router.push('signup')}
                        textStyle={'text-black dark:text-primary'}
                        style={'flex-row-reverse'}
                        Icon={
                            <Image source={require('@/assets/icons/forward-arrow.png')}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: Colors[colorScheme].primary
                                }}
                            />
                        }
                        title={'Get Started'} />
                </StyledView>

                <StyledView className='gap-1 xjustify-center pt-5 items-center'>
                    <StyledText className='text-center   text-[#6A6A6A] text-sm' style={{
                        fontFamily: 'Inter_500Medium',
                    }}>Or continue with</StyledText>
                    <StyledView
                        className='flex-row items-center justify-center gap-3'>
                        <StyledTouch
                            onPress={() => router.push('home')}
                            className='border border-black dark:border-primary/40 h-11 w-11 flex items-center justify-center rounded-xl'>
                            <Image source={require('@/assets/icons/google.png')}
                                style={{
                                    height: 30,
                                    width: 30,
                                }}
                            />
                        </StyledTouch>
                        <StyledTouch
                            onPress={() => router.push('home')}
                            className='border border-black dark:border-primary/40 h-11 w-11 flex items-center justify-center rounded-xl'>
                            <Image source={require('@/assets/icons/apple.png')}
                                style={{
                                    height: 25,
                                    width: 25,
                                    tintColor: Colors[colorScheme].tint
                                }}
                            />
                        </StyledTouch>
                    </StyledView>
                </StyledView>
            </StyledView>
            <StyledView className='flex-row items-center justify-center'>
                <StyledText className='text-base text-black/80  dark:text-white ' style={{
                    fontFamily: 'Inter_500Medium',
                }}>I have an account?{' '}</StyledText>
                <Button title={'Login'} textStyle={'text-base text-black dark:text-primary '} onPress={() => router.push('login')} />
            </StyledView>
        </StyledView >
    )
}

