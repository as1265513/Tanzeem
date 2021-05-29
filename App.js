import 'react-native-gesture-handler';
import React, {Component,useEffect} from 'react';
import { StyleSheet} from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from "./Navigation/StackNavigation";
import Login from "./src/Login/Login";


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




export default App;