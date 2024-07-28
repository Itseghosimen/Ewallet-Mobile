import { Stack } from 'expo-router'
import React from 'react'

export default function _layout() {
    return (
        <Stack>
            <Stack.Screen name='generate' options={{ headerShown: false }} />
            <Stack.Screen name='created' options={{ headerShown: false }} />
            <Stack.Screen name='turnNotification' options={{ headerShown: false }} />
            <Stack.Screen name='faceId' options={{ headerShown: false }} />
        </Stack>
    )
}