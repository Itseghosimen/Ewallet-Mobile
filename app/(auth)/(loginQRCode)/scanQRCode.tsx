import React from 'react'
import { StyledView } from '@/constants/imports'
import { useColorScheme } from 'nativewind'
import { Colors } from '@/constants/Colors'
import { Image } from 'expo-image'
import { CameraView, useCameraPermissions } from 'expo-camera';
import { AppState, Dimensions, Pressable } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { router } from 'expo-router'
import QRCodeImporter from '@/components/general/Buttons/QRCodeImporter'


export default function scanQRCode() {
    const { colorScheme } = useColorScheme()
    const [permission, requestPermission] = useCameraPermissions();
    const qrLock = React.useRef(false);
    const appState = React.useRef(AppState.currentState);
    const layout = Dimensions.get('window')

    // Ask for Camera Permission
    const askForCameraPermission = () => {
        (async () => {
            requestPermission
        })()
    }

    React.useEffect(() => {
        // Request Permission Automatically
        if (!permission?.granted) {
            askForCameraPermission
        }

        // Locking Camera after Scanning
        const subscription = AppState.addEventListener("change", (nextAppState) => {
            if (
                appState.current.match(/inactive|background/) &&
                nextAppState === "active"
            ) {
                qrLock.current = false;
            }
            appState.current = nextAppState;
        });

        return () => {
            subscription.remove();
        };
    }, [])

    const onScanned = ({ data }: any) => {

        // Working with scanned Data
        if (data && !qrLock.current) {
            qrLock.current = true;
            setTimeout(async () => {
                // await Linking.openURL(data);
                router.push('/decryptingKey')
            }, 500);
        }
    }

    return (
        <StyledView className='flex-1 bg-white dark:bg-background px-4 pb-14'>
            <StatusBar style='auto' />
            <StyledView className='mt-[10vh] items-center justify-center'>

                {
                    !permission ? (
                        <Image
                            source={require('@/assets/icons/scanLogin.png')}
                            style={{
                                height: layout.width * 0.8,
                                width: layout.width * 0.8,
                                tintColor: Colors[colorScheme].primary
                            }}
                            contentFit='contain'
                        />
                    ) : (
                        <Pressable onPress={() => {
                            if (!permission?.granted) {
                                askForCameraPermission
                            }
                        }}>
                            <CameraView
                                style={{
                                    width: layout.width * 0.9,
                                    height: layout.height * 0.55,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 30,
                                    overflow: 'hidden',
                                    backgroundColor: Colors[colorScheme].background
                                }}
                                facing={'back'}
                                onBarcodeScanned={onScanned}
                            >

                                <Image
                                    source={require('@/assets/icons/scanLogin.png')}
                                    style={{
                                        height: layout.width * 0.8,
                                        width: layout.width * 0.8,
                                        tintColor: Colors[colorScheme].primary
                                    }}
                                    contentFit='contain'

                                />

                            </CameraView>
                        </Pressable>
                    )
                }
            </StyledView>

            <QRCodeImporter
                background={Colors[colorScheme].primary}
                labelColor={Colors[colorScheme].background}
            />
        </StyledView>
    )
}