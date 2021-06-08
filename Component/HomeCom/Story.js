import React from 'react';
import {StyleSheet,Text, View, Image, ScrollView, ImageBackground} from "react-native";

import Icon from 'react-native-vector-icons/Feather';

const Story = () => {

   return(
       <> 
          <View style={styles.container}>
              
              <ScrollView horizontal showsHorizontalScrollIndicator={false} 
                          style={{paddingLeft:11}}>

                          <View style={styles.card}>
                              
                              <Image  style={styles.cardStory}    
                              source={require('../../assets/green.jpg')}
                              />

                          </View>

                          <View style={styles.cardUser}>

                                <Icon name="plus" size={30} color="black" /> 
                               
                          </View>

                          <View style={styles.cardFooter}>
                                 
                                 <Text>Add To Story</Text>
                            
                          </View>
                          
                          
                          <View style={styles.card}>
                              
                              <Image  style={styles.cardStory}    
                              source={require('../../assets/new1.jpg')}
                              />

                          </View>

                          <View style={styles.cardUser}>

                                <Icon name="plus" size={30} color="black" /> 
                               
                          </View>


                            <View style={styles.card}>
                              
                              <Image  style={styles.cardStory}    
                              source={require('../../assets/new.jpg')}
                              />

                          </View>

                          <View style={styles.cardUser}>

                                <Icon name="plus" size={30} color="black" /> 
                               
                          </View>

                            <View style={styles.card}>
                              
                              <Image  style={styles.cardStory}    
                              source={require('../../assets/green.jpg')}
                              />

                          </View>

                        

                            <View style={styles.card}>
                              
                              <Image  style={styles.cardStory}    
                              source={require('../../assets/code.jpg')}
                              />

                          </View>

                          

                            <View style={styles.card}>
                              
                              <Image  style={styles.cardStory}    
                              source={require('../../assets/code2.jpg')}
                              />

                          </View>




              </ScrollView>
 


          </View>
                    
             <View style={styles.bottom} />

       </>
   );

}


const styles = StyleSheet.create({
       
       container:{
              width: "100%",
	       height: 162,
	       flexDirection: "row",
	       alignItems: "center",
              //backgroundColor:'orange'
              
       },

       card:{
             
              width:106,
              height: 140,
             // backgroundColor:'red',
              marginRight:8,
              position:'relative'
       },

       cardStory:{

              width:'100%',
              height:140,
              borderRadius:12

       },

       cardUser:{

              position:'absolute',
              top:3,
              left:3,
              backgroundColor:'#ffffff',
              borderRadius:20,
              width:35,
              height:35,
              alignItems:'center',
              justifyContent:'center'

       },

       cardFooter:{

              width:'100%',
              position:'absolute',
              bottom:12,
              //marginLeft:,
              backgroundColor:'white'
       },

       text1:{

              fontSize:15,
              fontWeight:'bold',
              color:'black',
              marginLeft:10
       },

        bottom:{

          width: "100%",
	   height: 9,
	   backgroundColor: "#f0f2f5",

              }

});



export default Story;