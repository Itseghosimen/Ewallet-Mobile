import { Stack } from 'expo-router'
import React from 'react'

export default function modalLayout() {
    return (
        <Stack>
            <Stack.Screen
                name='androidLogin'
                options={{
                    headerShown: false,
                    presentation: 'transparentModal'
                }}
            />
            <Stack.Screen
                name='accountRecovery'
                options={{
                    headerShown: false,
                    presentation: 'transparentModal'
                }}
            />
        </Stack>
    )
}