import { View, Text } from 'react-native'
import React from 'react'
import { StyledText, StyledTouch, StyledView } from '@/constants/imports'
import * as ImagePicker from 'expo-image-picker';
import { Colors } from '@/constants/Colors'
import { useColorScheme } from 'nativewind'
import { Image } from 'expo-image'
import { router } from 'expo-router'

export default function QRCodeImporter(props: { background: string, labelColor: string }) {
    const { colorScheme } = useColorScheme()

    const pickImageAsync = async () => {
        // Importing Image from Device
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        // Working with imported image
        if (!result.canceled) {
            router.push({
                pathname: 'importedAsset',
                params: {
                    qrCode: result.assets[0].uri
                }
            })
        }
    };

    return (
        <StyledTouch
            onPress={pickImageAsync}
            className='rounded-lg h-14 flex-row px-4 justify-between items-center mt-auto'
            style={{
                backgroundColor: props.background
            }}>
            <StyledText
                style={{
                    fontFamily: 'Inter_500Medium',
                    fontSize: 12,
                    color: props.labelColor
                }}>
                Import log in details using QR code
            </StyledText>
            <StyledView className='h-10 w-10 rounded-full bg-black dark:bg-white flex items-center justify-center'>
                <Image
                    source={require('@/assets/icons/scantone.png')}
                    style={{
                        height: 25,
                        width: 25,
                        tintColor: Colors[colorScheme].background
                    }}
                    contentFit='contain' />
            </StyledView>
        </StyledTouch>
    )
}