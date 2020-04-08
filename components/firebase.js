import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/analytics';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDy_Lt5LQgETr3VXpIgBDY1B3vVKKjjkjY",
    authDomain: "reminder-app-2fde8.firebaseapp.com",
    databaseURL: "https://reminder-app-2fde8.firebaseio.com",
    projectId: "reminder-app-2fde8",
    storageBucket: "reminder-app-2fde8.appspot.com",
    messagingSenderId: "564581288421",
    appId: "1:564581288421:web:f63b7a9bd86fef8427070c",
    measurementId: "G-RKCBXV9ES9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;