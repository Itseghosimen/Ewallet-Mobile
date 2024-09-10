import { Colors } from "@/constants/Colors";
import { StyledTouch } from "@/constants/imports";
import { Image } from "expo-image";
import { router, Stack } from "expo-router";
import { useColorScheme } from "nativewind";

export default function PinLayout() {
    const { colorScheme } = useColorScheme()
    return (
        <Stack
            screenOptions={{
                headerTitleAlign: 'center',
            }}>
            <Stack.Screen name="createPin"
                options={{
                    title: 'Create Pin',
                    headerBackTitle: '',
                    headerTitleStyle: {
                        fontSize: 20,
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
            <Stack.Screen name="confirmPin"
                options={{
                    title: 'Confirm Pin',
                    headerBackTitle: '',
                    headerTitleStyle: {
                        fontSize: 20,
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

            <Stack.Screen
                name='createNewPin'
                options={{
                    title: 'Create Pin',
                    headerBackTitle: '',
                    headerShadowVisible: false,
                    headerStyle: { backgroundColor: Colors[colorScheme].background },
                    headerTitleStyle: {
                        fontFamily: 'Inter_700Bold',
                        color: Colors[colorScheme].tint,
                        fontSize: 16,

                    },
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
                name='loginConfirmPin'
                options={{
                    title: 'Nice to see you again',
                    headerBackTitle: '',
                    headerShadowVisible: false,
                    headerStyle: { backgroundColor: Colors[colorScheme].background },
                    headerTitleStyle: {
                        fontFamily: 'Inter_700Bold',
                        color: Colors[colorScheme].tint,
                        fontSize: 15,

                    },
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
        </Stack>
    )
}