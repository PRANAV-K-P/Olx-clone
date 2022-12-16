import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyB-glec_opkc6_xyLHTbnBtnGrmENDCraY",
    authDomain: "olxdemo-959d7.firebaseapp.com",
    projectId: "olxdemo-959d7",
    storageBucket: "olxdemo-959d7.appspot.com",
    messagingSenderId: "71088876004",
    appId: "1:71088876004:web:f15eb934c1cd58b7097ff1",
    measurementId: "G-3PK3MRT5LK"
  };

  export default firebase.initializeApp(firebaseConfig)