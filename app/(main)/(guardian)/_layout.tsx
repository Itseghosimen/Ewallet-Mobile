import { Colors } from "@/constants/Colors";
import { StyledText, StyledTouch } from "@/constants/imports";
import { Image } from "expo-image";
import { Stack, router } from "expo-router";
import { useColorScheme } from "nativewind";

export default function SignUpLayout() {
    const { colorScheme } = useColorScheme()
    return (
        <Stack
            screenOptions={{
                headerTitleStyle: {
                    fontFamily: 'Inter_700Bold',
                    color: Colors[colorScheme].tint,
                }
            }}>
            <Stack.Screen name="mailVerification"
                options={{
                    title: '',
                    headerBackTitle: '',
                    headerShadowVisible: false,
                    headerStyle: { backgroundColor: Colors[colorScheme].background },
                    headerLeft: () => (
                        <StyledTouch onPress={router.back}>
                            <Image source={require('@/assets/icons/back-arrow.png')}
                                style={{
                                    height: 25,
                                    width: 25,
                                    tintColor: Colors[colorScheme].tint
                                }}
                            />
                        </StyledTouch>
                    ),

                }} />
            <Stack.Screen name="emailVerification"
                options={{
                    title: '',
                    headerTitleStyle: {
                        color: Colors[colorScheme].tint,
                        fontSize: 20
                    },
                    headerTitleAlign: 'left',
                    headerBackVisible: false,
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <StyledText className="text-black dark:text-white text-xl" style={{ fontFamily: 'Inter_700Bold' }}>Verification code</StyledText>
                    ),
                    headerStyle: { backgroundColor: Colors[colorScheme].background },
                    headerRight: () => (
                        <StyledTouch onPress={router.back} className="mr-2">
                            <Image source={require('@/assets/icons/times.png')}
                                style={{
                                    height: 15,
                                    width: 15,
                                    tintColor: Colors[colorScheme].tint
                                }}
                            />
                        </StyledTouch>
                    ),

                }} />
            <Stack.Screen
                name='addGuadian'
                options={{
                    title: 'Add Guardian',
                    headerBackTitle: '',
                    headerShadowVisible: false,
                    headerStyle: { backgroundColor: Colors[colorScheme].background },
                    headerLeft: () => (
                        <StyledTouch onPress={router.back} >
                            <Image source={require('@/assets/icons/back-arrow.png')}
                                style={{
                                    height: 25,
                                    width: 25,
                                    tintColor: Colors[colorScheme].tint
                                }}
                            />
                        </StyledTouch>
                    ),
                }}
            />
            <Stack.Screen
                name='addedSus'
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='setGuardian'
                options={{
                    title: 'Set Guardian',
                    headerBackTitle: '',
                    headerShadowVisible: false,
                    headerStyle: { backgroundColor: Colors[colorScheme].background },
                    headerLeft: () => (
                        <StyledTouch onPress={router.back} >
                            <Image source={require('@/assets/icons/back-arrow.png')}
                                style={{
                                    height: 25,
                                    width: 25,
                                    tintColor: Colors[colorScheme].tint
                                }}
                            />
                        </StyledTouch>
                    ),
                }}
            />
            <Stack.Screen name="guardianPin"
                options={{
                    title: 'Enter Guardian Passcode',
                    headerBackTitle: '',
                    headerTitleStyle: {
                        fontSize: 16,
                        color: Colors[colorScheme].tint
                    },
                    headerTitleAlign: 'center',
                    headerShadowVisible: false,
                    headerStyle: { backgroundColor: Colors[colorScheme].background },
                    headerLeft: () => (
                        <StyledTouch onPress={router.back}>
                            <Image source={require('@/assets/icons/back-arrow.png')}
                                style={{
                                    height: 25,
                                    width: 25,
                                    tintColor: Colors[colorScheme].tint
                                }}
                            />
                        </StyledTouch>
                    ),

                }} />
        </Stack>
    )
}