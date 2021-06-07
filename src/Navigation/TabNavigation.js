import React from 'react'
import { View, Text,StatusBar, Button,LogBox } from 'react-native'
import { loggingOut } from '../FireBase/AuthProvider'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Feeds from '../Tabs/feeds/Feeds'
import Discover from '../Tabs/Discover/Discover'
import Notification from '../Tabs/Notifcation/Notification'
import Settings from '../Tabs/Setting/Settings'


export default function TabNavigation() {
    const Tab=createBottomTabNavigator()
    return (
        <Tab.Navigator>
            <Tab.Screen name="Feeds" component={Feeds}  />
            <Tab.Screen name="Discover" component={Discover}  />

            <Tab.Screen name="Notification" component={Notification}  />

            <Tab.Screen name="Settings" component={Settings}  />


        </Tab.Navigator>
    )
}
