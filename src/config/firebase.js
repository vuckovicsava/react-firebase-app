import firebase from 'firebase';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyAzOm-TNybXP1wvA4DKuCqbw_se8lIOtgY",
  authDomain: "react-firebase-tutorials.firebaseapp.com",
  databaseURL: "https://react-firebase-tutorials.firebaseio.com",
  projectId: "react-firebase-tutorials",
  storageBucket: "react-firebase-tutorials.appspot.com",
  messagingSenderId: "726749153692"
};

firebase.initializeApp(config);

const firestore = firebase.firestore();

export default firestore;