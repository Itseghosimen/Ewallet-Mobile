import Button from '@/components/general/Buttons/Button'
import { Colors } from '@/constants/Colors'
import { StyledText, StyledTouch, StyledView } from '@/constants/imports'
import { Ionicons } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { StyledComponent, useColorScheme } from 'nativewind'
import React, { useState } from 'react'
import { GestureResponderEvent, Modal, Pressable, StyleSheet } from 'react-native'


function MyCheckbox(props: { onChange: ((event: GestureResponderEvent) => void) | null | undefined; checked: any }) {
    const { colorScheme } = useColorScheme()
    return (
        <Pressable
            style={[styles.checkboxBase, props.checked && styles.checkboxChecked]}
            onPress={props.onChange}>
            {props.checked && <Ionicons name="checkmark" size={14} color={Colors[colorScheme].tint} />}
        </Pressable>
    );
}

export default function RecurringTransfer() {
    const [visible, setVisible] = useState(false)
    const [checked, setChecked] = useState(false);
    const { colorScheme } = useColorScheme()
    return (
        <>
            <Button
                onPress={() => setVisible(true)}
                title="Recurring transfer"
                textStyle={'text-secondary text-xs '}
                style={'flex-row-reverse'}
                Icon={
                    <Image source={require('@/assets/icons/clipboard.png')}
                        style={{
                            height: 20,
                            width: 20
                        }}
                        contentFit='contain' />
                }
            />

            <Modal
                animationType="slide"
                visible={visible}
                transparent={true}>
                <StyledComponent component={Pressable} className='flex-1 bg-black/80 rounded-t-3xl'>
                    <StyledView className='flex-1' />

                    <StyledView className="pb-6 bg-white dark:bg-background rounded-t-3xl pt-4 px-4">
                        <StyledView className='h-1 w-14 rounded bg-black dark:bg-primary mx-auto' />
                        <StyledText className="text-base  text-center text-black dark:text-white mt-4">
                            Recurring transfer
                        </StyledText>
                        <StyledText className='text-secondary max-w-[92vw] mx-auto text-center my-6 text-sm'>
                            Recurring transfer allows you to transfer a fixed amount of currency from your account to a designated account/s on a set schedule
                        </StyledText>
                        <StyledView className='flex-row items-center'>
                            <MyCheckbox onChange={() => setChecked(!checked)} checked={checked} />
                            <StyledText className='text-secondary  text-sm ml-2'>Don´t show next time</StyledText>
                        </StyledView>
                        <StyledTouch>
                            <StyledText className='text-black dark:text-primary  my-5 text-center text-sm'>
                                Would you like to set up a recurring transfer
                            </StyledText>
                        </StyledTouch>
                        <StyledView className='flex-row items-center' style={{ gap: 13 }}>
                            <Button title={"Cancel"} onPress={() => setVisible(false)}
                                style={'flex-grow h-12 border border-black dark:border-primary rounded-full justify-center'}
                                textStyle={'text-black dark:text-white'}
                            />
                            <Button title={"Yes"} onPress={() => setVisible(false)}
                                style={'flex-grow h-12 bg-black dark:bg-primary rounded-full justify-center'}
                                textStyle={'text-white dark:text-black'}
                            />
                        </StyledView>
                    </StyledView>
                </StyledComponent>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    checkboxBase: {
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#49515D',
        backgroundColor: 'transparent',
    },
    checkboxChecked: {
        backgroundColor: '#49515D',
    },
})