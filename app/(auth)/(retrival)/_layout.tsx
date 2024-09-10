import { Colors } from "@/constants/Colors";
import { StyledText, StyledTouch } from "@/constants/imports";
import { Image } from "expo-image";
import { router, Stack } from "expo-router";
import { useColorScheme } from "nativewind";


export default function RetrivalLayout() {
    const { colorScheme } = useColorScheme()
    return (
        <Stack
            screenOptions={{
                headerTitleStyle: {
                    fontFamily: 'Inter_700Bold',
                    fontSize: 16,
                    color: Colors[colorScheme].tint
                }
            }}>
            <Stack.Screen
                name='recoverAccount'
                options={{
                    title: 'Recover an Account',
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
                name='guadianRecovery'
                options={{
                    title: 'Guardian Recovery',
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
                name='recoveryNotification'
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='request'
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='recoverySuccess'
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name='recoveryProgress'
                options={{
                    title: '',
                    headerBackTitle: 'Verification code',
                    headerShadowVisible: false,
                    headerStyle: { backgroundColor: Colors[colorScheme].background },
                    headerLeft: () => (
                        <StyledText
                            style={{
                                fontFamily: 'Inter_700Bold',
                                fontSize: 15,
                                color: Colors[colorScheme].tint,
                            }}
                        >
                            Recovery in Progress
                        </StyledText>
                    ),
                    headerRight: () => (
                        <StyledTouch onPress={() => router.push('/home')} className="mr-2">
                            <StyledText
                                style={{
                                    fontFamily: 'Inter_700Bold',
                                    fontSize: 14,
                                    color: Colors[colorScheme].primary,
                                }}
                            >
                                Home
                            </StyledText>
                        </StyledTouch>
                    ),
                }}
            />

        </Stack>
    )
}