import { Stack } from "expo-router";

export default function OnboardingLayout() {

    return (
        <Stack>
            <Stack.Screen name='generateKeys' options={{ headerShown: false }} />
            <Stack.Screen name='walletGenerated' options={{ headerShown: false }} />
            <Stack.Screen name='createUserName'
                options={{
                    headerShown: false,
                    presentation: 'transparentModal',
                    animation: 'fade'
                }} />
            <Stack.Screen name='notificationSetup' options={{ headerShown: false }} />
            <Stack.Screen name='securitySetup' options={{ headerShown: false }} />
        </Stack>
    )
}