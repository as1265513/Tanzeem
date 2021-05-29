import 'react-native-gesture-handler';
import React, {Component,useEffect} from 'react';
import { StyleSheet} from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from "./Navigation/StackNavigation";
import Login from "./src/Login/Login";


  const App = () => {
                    return (
                   <NavigationContainer>
                    <MainStackNavigator/>  
                  </NavigationContainer> 
                  );
 } ;
                 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




export default App;