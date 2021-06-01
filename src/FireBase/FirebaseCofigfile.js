import * as Firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCmtnuTJfcytQFZ24GdZzMKrkzekkjDTmU",
    authDomain: "tanzeemapp.firebaseapp.com",
    projectId: "tanzeemapp",
    storageBucket: "tanzeemapp.appspot.com",
    messagingSenderId: "799318648334",
    appId: "1:799318648334:web:4778000730db0587cdfe5f",
    measurementId: "G-F8C8DH4BQW"
  };

  Firebase.initializeApp(firebaseConfig);

  export const db=Firebase.firestore()
  export const storage = Firebase.storage()

  export default Firebase;