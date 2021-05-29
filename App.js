
import React, {useState,useEffect} from 'react';
import { StyleSheet,View} from 'react-native';


import Login from "./src/Login/Login";
import RootStackNavigation from './src/Navigation/RootStackNavigation';
import Signup from './src/Signup';
import SplashScreen from './src/SplashScreen'


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
    return <View style={{flex:1}}><RootStackNavigation /></View>
}
         
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




