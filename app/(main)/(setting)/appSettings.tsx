import SwitchBtn from "@/components/general/Switch";
import SettingBtn from "@/components/home/settings/SettingBtn";
import { StyledText, StyledView } from "@/constants/imports";
import { useColorScheme } from "nativewind";
import AppLock from "../(modal)/autoLock";
import { StatusBar } from "react-native";

export default function appSettings() {
    const { colorScheme } = useColorScheme()

    return (
        <StyledView className="flex-1 bg-white dark:bg-background p-4" style={{ gap: 25 }}>
            <StatusBar
                barStyle={colorScheme == 'dark' ? 'light-content' : 'dark-content'}
            />
            <SettingBtn
                type='link'
                title='Set up 2-factor Authentication'
                frontIcon={undefined}
                onPress={undefined}
                textStyle={{
                    color: '#49515D',
                    fontSize: 15,
                }} />
            <SettingBtn
                type='link'
                title='Change password'
                frontIcon={undefined}
                onPress={undefined}
                textStyle={{
                    color: '#49515D',
                    fontSize: 15
                }} />
            <SettingBtn
                type='link'
                title='Email & Phone number'
                frontIcon={undefined}
                onPress={undefined}
                textStyle={{
                    color: '#49515D',
                    fontSize: 15
                }} />
            <SettingBtn
                type='link'
                title='Change passcode'
                frontIcon={undefined}
                onPress={undefined}
                textStyle={{
                    color: '#49515D',
                    fontSize: 15
                }} />
            <SettingBtn
                type='switch'
                title='Currency'
                frontIcon={undefined}
                onPress={undefined}
                backIcon={
                    <StyledText className="text-sm text-black dark:text-white "
                        style={{
                            fontFamily: 'Inter_500Medium'
                        }}>
                        USD
                    </StyledText>
                }
                textStyle={{
                    color: '#49515D',
                    fontSize: 15
                }} />
            <StyledView>
                <AppLock />
            </StyledView>
            <SettingBtn
                type='link'
                title='Change Email Address'
                frontIcon={undefined}
                onPress={undefined}
                textStyle={{
                    color: '#49515D',
                    fontSize: 15
                }} />
            <SettingBtn
                type='link'
                title='Change Phone number'
                frontIcon={undefined}
                onPress={undefined}
                textStyle={{
                    color: '#49515D',
                    fontSize: 15
                }} />
            <SettingBtn
                type='switch'
                title='Facial verification on all transactions'
                frontIcon={undefined}
                onPress={undefined}
                backIcon={
                    <SwitchBtn />
                }
                textStyle={{
                    color: '#49515D',
                    fontSize: 15
                }} />
            <SettingBtn
                type='switch'
                title='Biometrics payment'
                frontIcon={undefined}
                onPress={undefined}
                backIcon={
                    <SwitchBtn />
                }
                textStyle={{
                    color: '#49515D',
                    fontSize: 15
                }} />
        </StyledView>
    )
}