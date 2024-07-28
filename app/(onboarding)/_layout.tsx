import { Stack } from "expo-router";

export default function OnboardingLayout() {
    return (
        <Stack
            screenOptions={{
                headerTitleStyle: {
                    fontFamily: 'Inter_700Bold'
                }
            }}>
            <Stack.Screen name="(signup)" options={{ headerShown: false }} />
            <Stack.Screen name="(backup)" options={{ headerShown: false }} />
            <Stack.Screen name="(login)" options={{ headerShown: false }} />
            <Stack.Screen name="(generateWallet)" options={{ headerShown: false }} />
        </Stack>
    )
}