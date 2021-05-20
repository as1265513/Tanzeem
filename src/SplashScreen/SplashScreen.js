import React,{useEffect,useState} from 'react'
import { View, Text , StyleSheet,SafeAreaView,Platform } from 'react-native'

export default function SplashScreen() {
    
    return (
        <View style={styles.Container}>
            <View style={styles.UpperContainer} />

            <View style={styles.middleContainer}>

            </View>

            <View style={styles.LowerContainer} />
            
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        ...Platform.select({
            android:{
                marginTop:30
            }
        })
    },
    UpperContainer:{
        
    }
})