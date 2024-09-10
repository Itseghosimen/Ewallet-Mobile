import React from 'react'
import { StyledText, StyledView } from '@/constants/imports'
import SettingBtn from '@/components/home/settings/SettingBtn'
import { router } from 'expo-router'
import { ScrollView } from 'react-native'
import { useColorScheme } from 'nativewind'
import SwitchBtn from '@/components/general/Switch'
import { Image } from 'expo-image'
import { Switch } from 'react-native-switch'
import { Colors } from '@/constants/Colors'
import { StatusBar } from 'expo-status-bar'

export default function settings() {

    const { colorScheme, toggleColorScheme } = useColorScheme()


    return (
        <StyledView className='flex-1 bg-white dark:bg-background'>
            <StatusBar
                style={colorScheme == 'dark' ? 'light' : 'dark'}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 12,
                    paddingBottom: 30,
                    gap: 40
                }}>


                <StyledView className='flex' style={{ gap: 30 }}>
                    <StyledText
                        className='text-secondary text-sm' style={{
                            fontFamily: 'Inter_500Medium',
                        }}>Security</StyledText>
                    <SettingBtn
                        frontIcon={require('@/assets/icons/setting.png')}
                        type='link'
                        title={'App setting'}
                        description='Phone & E-mail'
                        onPress={() => router.push('/appSettings')} />
                    <SettingBtn
                        frontIcon={require('@/assets/icons/security-user.png')}
                        type='switch'
                        title={'Notifications'}
                        description='Security alerts & potential threat alerts'
                        backIcon={<SwitchBtn />}
                        onPress={undefined} />
                    <SettingBtn
                        frontIcon={require('@/assets/icons/lock.png')}
                        type='switch'
                        title={'Login with biometrics'}
                        backIcon={<SwitchBtn />}
                        onPress={undefined} />
                    <SettingBtn
                        frontIcon={require('@/assets/icons/shield-tick.png')}
                        type='link'
                        title={'Wallet recovery'}
                        description='Recover & secure your account'
                        onPress={undefined} />
                    <SettingBtn
                        frontIcon={require('@/assets/icons/twitter.png')}
                        type='switch'
                        title={'Fanbase'}
                        description='Unlinked'
                        backIcon={<SwitchBtn />}
                        onPress={undefined} />
                    <SettingBtn
                        frontIcon={require('@/assets/icons/key-square.png')}
                        type='link'
                        title={'Security'}
                        description='Set Guardians,Trusted list, Spend limit'
                        onPress={() => router.push('/security')} />
                </StyledView>

                <StyledView className='flex' style={{ gap: 30 }}>
                    <StyledText
                        className='text-secondary  text-sm' style={{
                            fontFamily: 'Inter_500Medium',
                        }}>AVA AI settings</StyledText>
                    <SettingBtn
                        frontIcon={require('@/assets/icons/game.png')}
                        type='link'
                        settings={true}
                        title={'AVA'}
                        onPress={undefined} />
                </StyledView>
                <StyledView className='flex' style={{ gap: 30 }}>
                    <StyledText
                        className='text-secondary  text-sm' style={{
                            fontFamily: 'Inter_500Medium',
                        }}>
                        Language
                    </StyledText>
                    <SettingBtn
                        frontIcon={require('@/assets/icons/globaledit.png')}
                        type='link'
                        settings={true}
                        title={'English'}
                        onPress={undefined} />
                </StyledView>
                <StyledView className='flex' style={{ gap: 30 }}>
                    <StyledText
                        className='text-secondary  text-sm' style={{
                            fontFamily: 'Inter_500Medium',
                        }}>
                        Others
                    </StyledText>
                    <SettingBtn
                        frontIcon={require('@/assets/icons/chart.png')}
                        type='switch'
                        title={'Chart appearance'}
                        backIcon={
                            <Image
                                source={require('@/assets/icons/diagram.png')}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: Colors[colorScheme].primary
                                }}
                                contentFit='contain' />
                        }
                        onPress={undefined} />
                    <SettingBtn
                        frontIcon={require('@/assets/icons/alarm.png')}
                        type='switch'
                        title={colorScheme == 'dark' ? 'Light mode' : 'Dark mode'}
                        backIcon={
                            <Switch
                                value={colorScheme == 'dark'}
                                onValueChange={toggleColorScheme}
                                disabled={false}
                                activeText={'On'}
                                inActiveText={'Off'}
                                circleSize={20}
                                barHeight={23}
                                circleBorderWidth={0}
                                backgroundActive={
                                    colorScheme == 'dark' ? '#fff' : "#000"
                                }
                                backgroundInactive={Colors[colorScheme].tint}
                                circleActiveColor={Colors[colorScheme].background}
                                circleInActiveColor={
                                    colorScheme == 'dark' ? '#000' : "#fff"}
                                renderActiveText={false}
                                renderInActiveText={false}
                                switchLeftPx={2.5}
                                switchRightPx={2.5}
                                switchWidthMultiplier={2}
                                switchBorderRadius={30}
                            />
                        }
                        onPress={undefined} />
                    <SettingBtn
                        frontIcon={require('@/assets/icons/check.png')}
                        type='link'
                        settings={true}
                        title={'Clear cache'}
                        onPress={undefined} />
                    <SettingBtn
                        frontIcon={require('@/assets/icons/ship.png')}
                        type='link'
                        settings={true}
                        title={'Report a bug'}
                        onPress={undefined} />
                    <SettingBtn
                        frontIcon={require('@/assets/icons/call-calling.png')}
                        type='link'
                        settings={true}
                        title={'Help & Support'}
                        backIcon={<SwitchBtn />}
                        onPress={undefined} />
                    <SettingBtn
                        frontIcon={require('@/assets/icons/lock.png')}
                        type='link'
                        settings={true}
                        title={'Privacy'}
                        onPress={undefined} />
                    <SettingBtn
                        frontIcon={require('@/assets/icons/personalcard.png')}
                        type='link'
                        settings={true}
                        title={'About us'}
                        onPress={() => router.push('/about')} />
                </StyledView>
            </ScrollView>
        </StyledView>
    )
}