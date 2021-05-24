import React,{useState,useEffect} from "react";

import {
  View,
  Text,
  StyleSheet,
  Platform,
  SafeAreaView,
  Image,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import Input from "../../Component/Input";
import { Theme } from "../../Theme/Theme";

export default function Signup() {
    const [fullName,setFullName] =useState("")
 
    const [Password,setPassword] =useState("")
    const [Cpass,setCpass] =useState("")
    const [FatherName,setFatherName] =useState("")
    const [Cnic,setCnic] =useState("")
    const [Email,setEmail] = useState("")
    const [Phone,setPhone] = useState("")


    const [Address,setAddress] =useState("")
    const [secureTextEntry,setsScureTextEntry] =useState(true)
    const [secureTextEntry1,setsScureTextEntry1] =useState(true)

    

  return (
      
    <SafeAreaView style={styles.container}>
      <View style={styles.UpperContainer}>
        <Text style={styles.crtStyle}>Create Account</Text>
        <Image
          source={require("./../../assets/Tanzeem.png")}
          style={styles.imgLogo}
        />
      </View>
      <KeyboardAvoidingView
       behavior={Platform.OS === "ios" ? "padding" : "position"} 
            style={styles.formContainer}>
        
        <Input 
        firstIconName="person-outline" 
        placeholder="First Name"
        margintop={20}
        value={fullName}
        onChange={(text)=>setFullName(text)}
         />


        <Input 
        firstIconName="person-outline" 
        placeholder="Father Name"
        margintop={10}
        value={FatherName}
        onChange={(text)=>setFatherName(text)}
         />

        <Input 
        firstIconName="mail-outline" 
        placeholder="Enter your Email"
        margintop={10}
        value={Email}
        onChange={(text)=>setEmail(text)}
         />

        <Input 
        firstIconName="md-home-outline" 
        placeholder="Enter your City"
        margintop={10}
        value={Address}
        onChange={(text)=>setAddress(text)}
         />
         <Input 
        firstIconName="ios-card-outline" 
        placeholder="Cnic without dashes"
        margintop={10}
        value={Cnic}
        onChange={(text)=>setCnic(text)}
         />

        <Input 
        firstIconName="call-outline" 
        placeholder="Enter you Phone Number"
        margintop={10}
        value={Phone}
        secureTextEntry={secureTextEntry1}
        onChange={(text)=>setPhone(text)}
        ndIcon={secureTextEntry1?"eye-outline":"eye-off-outline"}
        secure={secureTextEntry1}
        setSecure={setsScureTextEntry1}
         />

         <Input 
        firstIconName="lock-closed-outline" 
        placeholder="Password"
        margintop={10}
        value={Password}
        secureTextEntry={secureTextEntry}
        onChange={(text)=>setPassword(text)}
        ndIcon={secureTextEntry?"eye-outline":"eye-off-outline"}
        secure={secureTextEntry}
        setSecure={setsScureTextEntry}
         />



        <Input 
        firstIconName="lock-closed-outline" 
        placeholder="Confirm Password"
        margintop={10}
        value={Cpass}
        secureTextEntry={secureTextEntry1}
        onChange={(text)=>setCpass(text)}
        ndIcon={secureTextEntry1?"eye-outline":"eye-off-outline"}
        secure={secureTextEntry1}
        setSecure={setsScureTextEntry1}
         />
        
        
      </KeyboardAvoidingView>
      <View style={styles.footerContainer}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.lightgray,
    ...Platform.select({
      android: {
        marginTop: 30,
      },
    }),
  },
  UpperContainer: {
    flex: 3,
    backgroundColor: Theme.colors.primaryColor,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    flexDirection: "row",
  },
  formContainer: {
    paddingVertical:10,
 
  
    backgroundColor: Theme.colors.windowBackground,
    // position: "absolute",
    width: Theme.sizes.width - 40,
    borderRadius: 20,
    marginHorizontal: 20,
    top: -120,
    elevation:1,
    
  },
  footerContainer: {
 
  },
  crtStyle: {
    fontSize: 30,
    marginLeft: 10,
    marginTop: 30,
  },
  imgLogo: {
    height: 100,
    width: 100,
    backgroundColor: Theme.colors.primaryColor,
    paddingHorizontal: 10,
    padding: 10,
    marginLeft: 30,
  },
});
