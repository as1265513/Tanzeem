import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

<<<<<<< Updated upstream
import SplashScreen from "../src/SplashScreen/SplashScreen";
=======
>>>>>>> Stashed changes
import Login from "../src/Login/Login";
import Signup from "../src/Signup/Signup";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
<<<<<<< Updated upstream
    <Stack.Navigator>
      <Stack.Screen name="SplashScreen" component={SplashScreen} 
          options={{
                 headerShown:false,
          }}   
      />
      
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
=======
     <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>

>>>>>>> Stashed changes
  );
}

export default { MainStackNavigator };