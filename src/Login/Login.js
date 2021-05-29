
import React, {useState,useEffect} from 'react';
import { View, Text,StyleSheet,Image, TextInput} from 'react-native';
import { TouchableOpacity , Button , Dimensions } from 'react-native';

import { Theme } from '../../Theme/Theme';

import { Zocial } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';



export default function Login() {
    return (
      <View style={styles.Container}>

            <View style={styles.UpperContainer} >

               <View style={styles.HeadingView}> 
                <Text style={styles.firstHeading}>Sign in to your Account</Text>
               </View>
               
            </View>  

            <View style={styles.middleContainer}>

               <View style={styles.logoView}> 
                     <Image source={require("./../../assets/Tanzeem.png")} style={styles.logoStyle} />
               </View>

               <View style={styles.Form_part}>

                    <Text style={styles.Email_Text}>E-mail:</Text>
                        <View styles={styles.Email_action}>
                            <Zocial name="email" size={24} color="black" />
                            <TextInput
                            placeholder="Enter Your E-mail"
                            style={styles.Text_Input} 
                            autoCapitalize="none"    
                            /> 
                        </View>

                     <Text style={styles.Pass_Text}>Password:</Text>
                        <View styles={styles.Pass_action}>
                        <FontAwesome name="lock" size={24} color="black" />
                        <TextInput
                        placeholder="Enter Your Password"
                        style={styles.Pass_Input} 
                        autoCapitalize="none"    
                        /> 
                        </View>

               </View>

             </View>

                 <View style={styles.footerContainer} >
                    
                    <View style={styles.forgot_View}>
                           <Text style={styles.forgot_text}>
                               Forgot your Password?
                           </Text>
                    </View>
                  
                    <View style={styles.SignBtnText_View}>
                           <Text  style={styles.SignIn_text}> Sign in</Text>
                          
                               <View style={styles.SignButton_View}>
                             
                                    <TouchableOpacity style={styles.Button} >
                                         <FontAwesome style={styles.buttonText} name="arrow-right" size={28} color="white" />
                                    </TouchableOpacity>           
                               </View>
                    </View>
                
                    <View style={styles.Bottom_Create}>
                        <Text style={styles.Bottom_Text}>
                                Don't have an account? 
                                <Text style={styles.create}>Create</Text> 
                        </Text>
                    </View>

                 </View>


        </View>
    )   
}

const styles = StyleSheet.create({
    Container:{
      flex: 1,
      backgroundColor:Theme.colors.black,
       ...Platform.select({
            android:{
                marginTop:30
            }
        })
    },

     UpperContainer:{
        flex:2.1,
        backgroundColor:Theme.colors.primaryColor,
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,

    },

    HeadingView:{
       width:'90%',
       height:'15%',
       marginLeft:40,
       marginTop:50,
    
    },

    firstHeading:{
        color:Theme.colors.black,
        fontSize:25,
        fontStyle:'italic',
        fontWeight:'bold'
    },
    logoView:{
         position:'absolute' ,
         justifyContent:'flex-start',
         right:-16,
         top: -20   
    },
    logoStyle:{
        height:90,
        width:90,
        borderRadius:30,     
    },
    
    Form_part:{
        height:'70%',
        width:'70%',
      
    },

    Email_Text:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10,
        borderRadius:5,

    },
     Text_Input:{
         
        height:40,
        width:'100%',
        paddingLeft:20,
        paddingTop:5,
        paddingBottom:3,
        borderColor:Theme.colors.lightgray,
        marginLeft:5,
        marginTop:5,
        borderWidth:1,
        borderRadius:15

     },

     Pass_Text:{
        fontSize:20,
        marginTop:15,
        fontWeight:'bold',
        marginBottom:10
    },
    
    Pass_action:{
        flexDirection:'row',
        marginTop:5,
        borderRadius:5,
        borderColor:Theme.colors.black,
        paddingBottom:3   
    },
    
    Pass_Input:{
        height:40,
        width:'100%',
        paddingLeft:20,
        paddingTop:5,
        paddingBottom:3,
        borderColor:Theme.colors.lightgray,
        marginLeft:10,
        marginTop:5,
        borderWidth:1,
        borderRadius:15

     },


    middleContainer:{
    
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: 'white',
        position:'absolute',
        width: '80%',
        height: '50%',
        marginLeft:40,
        marginTop:120,
        borderRadius:35,
        zIndex:25
    }, 

    footerContainer:{
        flex: 2
    },
    
    forgot_View:{
       height:50,
       width:'90%',
       paddingTop: 10,
       marginTop:'30%',
       justifyContent:'flex-end',
       marginBottom:10,
       flexDirection:'row'
    },

    forgot_text:{
       color:Theme.colors.White,
       fontSize:15

    },

    SignBtnText_View:{
        flex:2,
        flexDirection:'row',
         marginLeft:'50%',
         marginTop:10,
         height:90,
         width:90,
         paddingTop:10,
         marginBottom:'25%'
    },
    
    SignButton_View:{
       height:60,
       width:60,
       marginLeft:'10%',
       justifyContent:'center',
       backgroundColor:Theme.colors.green,
       marginTop:'5%',
       marginBottom:'25%',
       borderRadius:60/2,
       marginRight:12
    },

    buttonText:{
      justifyContent:'center',
      alignItems:'center',
      fontWeight:'bold',
      fontSize:27,
      padding:15,
      paddingLeft:20,
    },

    SignIn_text:{
       fontWeight:'bold',
       fontSize:25,
       height:60,
       width:90,
       marginTop:15,
       color:Theme.colors.White
    },

   Bottom_Create:{
       flex:2,
      marginBottom:5,
      paddingLeft:90,
   },
   Bottom_Text:{
       color:Theme.colors.White
   },
   create:{
       color:Theme.colors.green,
    
   }
});