import Button from '@/components/general/Buttons/Button';
import { Colors } from '@/constants/Colors';
import { StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { Image } from 'expo-image';
import { StyledComponent, useColorScheme } from 'nativewind';
import React, { useEffect, useState } from 'react'
import { Modal, Pressable } from 'react-native';

export default function EncryptModal() {
  const [visible, setVisible] = useState(false)
  const { colorScheme } = useColorScheme()
  useEffect(() => {
    setTimeout(() => {
      setVisible(true)
    }, 1000);
  }, [])
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
    >
      <StyledComponent component={Pressable} className='flex-1 items-center justify-center bg-black/80 rounded-t-3xl px-3'>
        <StyledView className='h-[70vh] w-full bg-white dark:bg-background rounded-xl px-3 py-5'>
          <StyledText className='text-base text-black dark:text-white text-center max-w-[70vw] mx-auto'
            style={{
              fontFamily: 'Inter_500Medium'
            }}
          >
            Would you like to encrypt your  key
            details in a QR Code?
          </StyledText>
          <StyledView className='h-[20vh] items-center justify-center flex'>
            <Image
              source={require('@/assets/images/encrypt.png')}
              contentFit='contain'
              style={{
                height: '80%',
                width: '100%'
              }}
            />
          </StyledView>
          <StyledText className='text-sm text-black dark:text-white text-center max-w-[70vw] mx-auto'
            style={{
              fontFamily: 'Inter_500Medium'
            }}>
            Never share your encrypted QR code with anyone,
            Anyone can have access to your wallet with this QR code
          </StyledText>

          <StyledTouch className='rounded-lg h-14 flex-row px-4 my-4 justify-between items-center bg-black dark:bg-primary'>
            <StyledText className='text-sm  text-white dark:text-black'
              style={{
                fontFamily: 'Inter_500Medium'
              }}
            >
              Encrypt key details in a QR code
            </StyledText>
            <StyledView className='h-10 w-10 rounded-full border border-black bg-white flex items-center justify-center'>
              <Image
                source={require('@/assets/icons/scantone.png')}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: '#000',
                }}
                contentFit='contain' />
            </StyledView>
          </StyledTouch>

          <StyledView className='flex-1 items-center justify-center'>
            <Button
              onPress={() => setVisible(false)}
              title={'Skip'}
              style={'bg-black dark:bg-primary max-w-[60vw] mx-auto w-full justify-center h-[50px] rounded-2xl'}
              textStyle={'text-white dark:text-black'}
            />
          </StyledView>

          <StyledText className='text-xs text-black/70 dark:text-primary/70 text-center max-w-[70vw] mx-auto'
            style={{
              fontFamily: 'Inter_500Medium'
            }}>
            We recommend encrypting your login details, as it is
            necessary for the Next of kin information
          </StyledText>
        </StyledView>
      </StyledComponent>
    </Modal>
  )
}