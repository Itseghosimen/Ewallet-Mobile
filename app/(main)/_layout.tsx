import { Stack } from 'expo-router'

export default function MainLayout() {
    return (
        <Stack screenOptions={{
            headerTitleStyle: {
                fontFamily: 'Inter_700Bold'
            }
        }}>
            <Stack.Screen name="(tab)"
                options={{ headerShown: false }}
            />
            <Stack.Screen name="(home)"
                options={{ headerShown: false }}
            />
            <Stack.Screen name="(profile)"
                options={{ headerShown: false }}
            />
            <Stack.Screen name="(setting)"
                options={{ headerShown: false }}
            />
            <Stack.Screen name="(receive)"
                options={{ headerShown: false }}
            />
            <Stack.Screen name="(send)"
                options={{ headerShown: false }}
            />
            <Stack.Screen name="(swap)"
                options={{ headerShown: false }}
            />
            <Stack.Screen name="(ecosystem)"
                options={{ headerShown: false }}
            />
            <Stack.Screen name="(wallet)"
                options={{ headerShown: false }}
            />
            <Stack.Screen name="(modal)/coinStatusModal"
                options={{
                    headerShown: false,
                    presentation: 'modal'
                }}
            />
            <Stack.Screen name="(modal)/tradeModal"
                options={{
                    headerShown: false,
                    presentation: 'transparentModal',

                }}
            />
            <Stack.Screen name="(modal)/menuModal"
                options={{
                    headerShown: false,
                    presentation: 'transparentModal',

                }}
            />
            <Stack.Screen name="(modal)/tokenModal"
                options={{
                    headerShown: false,
                    presentation: 'transparentModal',

                }}
            />
        </Stack>
    )
}