import React, { useState, createContext } from "react";




import Firebase,{ storage, db } from "./FirebaseCofigfile";

export const AuthContext= createContext()

export const AuthProvider=({Childeren})=>{
  const [user, setUser] = useState(null);

  return(
      <AuthContext.Provider
      value={{
          user,
          setUser,
          login:async (email,password)=>{
              try{
                await Firebase.auth().signInWithEmailAndPassword(emai,password);
              }catch(e)
              {
                if (Firebase.auth.AuthCredential) {
              alert("Please Enter correct Email and Password");
            } else {
              alert(e);
            }
              }
          },
          register:async (email,password)=>{
              try{
                  await Firebase.auth().createUserWithEmailAndPassword()
              }catch(e)
              {
                  console.log(e)
              }

          }
      }}


      >
          {Childeren}
      </AuthContext.Provider>
  )
}