import firebase from 'firebase'

import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyCvqoRs_n9vu_FsTVFi3MXqopm5MCinqxk",
    authDomain: "react-native-am.firebaseapp.com",
    databaseURL: "https://react-native-am.firebaseio.com",
    projectId: "react-native-am",
    storageBucket: "react-native-am.appspot.com",
    messagingSenderId: "981794147281",
    appId: "1:981794147281:web:46088c62d701b848f92ef0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export default {
      firebase,
      db,
  };
