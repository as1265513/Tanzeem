import React from 'react'
import { View, Text,StatusBar, Button,LogBox } from 'react-native'
import { loggingOut } from '../FireBase/AuthProvider'


export default function TabNavigation() {
    return (
        <View>
        <StatusBar  />
            <Button title="Logout" onPress={()=>loggingOut()} />
        </View>
    )
}
