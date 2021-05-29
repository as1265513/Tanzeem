import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './src/SplashScreen/SplashScreen'
import Login from './src/Login/Login'
import Signup from './src/Signup/Signup';


export default function App() {
  const [active,setActive] = useState(false)
    useEffect(() => {

        setTimeout(() => {
            setActive(true)
        }, 5000);
    }, [])
    if(!active)
    return <View style={{flex:1}}><SplashScreen /></View>
    else 
    return <View style={{flex:1}}><Signup /></View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
