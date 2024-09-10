import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';


export default function ScrollRefresh({ children, ...props }: any) {

    return (

        <ScrollView
            scrollEventThrottle={16}
            {...props} >
            {children}
        </ScrollView >


    )
}