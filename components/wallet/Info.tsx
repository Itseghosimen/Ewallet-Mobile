import { StyledView } from '@/constants/imports'
import { router } from 'expo-router'
import React from 'react'
import { ScrollView } from 'react-native'
import Button from '../general/Buttons/Button'
import InfoContent from './InfoContent'

export default function Info(props: { header?: boolean }) {
    return (
        <StyledView>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 12,
                    paddingBottom: 90
                }}>
                <InfoContent />
            </ScrollView>
            <StyledView className={`w-full px-3 flex-row ${props.header && 'hidden'} items-center justify-between py-4 absolute bottom-0 bg-white dark:bg-background`}>
                <Button
                    onPress={() => router.push('/send')}
                    title={'Send'}
                    textStyle={'text-sm ml-1 text-black dark:text-white'}
                    style={'bg-[#F3F4F8] dark:bg-[#12131B] px-2 w-[20vw] items-center justify-center h-12 rounded-full'}
                />
                <Button
                    onPress={() => router.push('/receive')}
                    title={'Receive'}
                    textStyle={'text-sm ml-1 text-black dark:text-white'}
                    style={'bg-[#F3F4F8] dark:bg-[#12131B] px-2 w-[20vw] items-center justify-center h-12 rounded-full'}
                />
                <Button
                    onPress={() => router.push('/swap')}
                    title={'Swap'}
                    textStyle={'text-sm ml-1 text-black dark:text-white'}
                    style={'bg-[#F3F4F8] dark:bg-[#12131B] px-2 w-[20vw] items-center justify-center h-12 rounded-full'}
                />
                <Button
                    onPress={undefined}
                    title={'Trade'}
                    textStyle={'text-sm ml-1 text-black dark:text-white'}
                    style={'bg-[#F3F4F8] dark:bg-[#12131B] px-2 w-[20vw] items-center justify-center h-12 rounded-full'}
                />
            </StyledView>
        </StyledView>
    )
}

