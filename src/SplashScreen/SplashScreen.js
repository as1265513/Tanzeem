import React , { Component} from 'react';
import { 
View,
Text , 
StyleSheet,
Platform,Image,
ActivityIndicator
} from 'react-native';

import Login from "../Login/Login";
import {Theme} from '../../Theme/Theme';


export default class SplashScreen extends Component {

      constructor(props)  
      {
           super(props);
           setTimeout(()=>
           {
               this.props.navigation.navigate("Login");
           },5000); 

      }
                render(){

                    
                    return  (
                        <View style={styles.Container}>
                            <View style={styles.UpperContainer} />

                            <View style={styles.middleContainer}>
                                <Image source={require("./../../assets/Tanzeem.png")} style={styles.logoStyle} />
                        <ActivityIndicator
                        animating={animating}
                        color="#FFFFFF"
                        size="large"
                        style={styles.activityIndicator}
                        />  
            </View>

            <View style={styles.FooterContainer} />
            
        </View>
    );
   }
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
        flex:1,
        backgroundColor:Theme.colors.primaryColor,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30
    },
    middleContainer:{
        flex:3,
        justifyContent:'center',
        alignItems:'center'
    },
    FooterContainer:{
        flex:1,
        backgroundColor:Theme.colors.black,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    logoStyle:{
        height:250,
        width:250,
        backgroundColor:Theme.colors.White
    }

})

