import { Stack } from 'expo-router'
import React from 'react'

export default function LoginLayout() {
    return (
        <Stack
            screenOptions={{
                headerTitleStyle: {
                    fontFamily: 'Inter_700Bold'
                }
            }}>
            <Stack.Screen name='login' options={{ headerShown: false }} />
            <Stack.Screen name='(recovery)' options={{ headerShown: false }} />
        </Stack>)
}