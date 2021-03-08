import firebase from 'firebase/app';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCbLnYltYuvCWBW7mSN3bGsuNAwCdwRncA",
    authDomain: "daily-moments-75d6c.firebaseapp.com",
    projectId: "daily-moments-75d6c",
    storageBucket: "daily-moments-75d6c.appspot.com",
    messagingSenderId: "682242322989",
    appId: "1:682242322989:web:47c0748908676ab3727ea4"
  };

  const app = firebase.initializeApp(firebaseConfig);
  export const auth = app.auth();