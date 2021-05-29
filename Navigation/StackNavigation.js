import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "../src/SplashScreen/SplashScreen";
import Login from "../src/Login/Login";
import Signup from "../src/Signup/Signup";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SplashScreen" component={SplashScreen} 
          options={{
                 headerShown:false,
          }}   
      />
      
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}

export default { MainStackNavigator };