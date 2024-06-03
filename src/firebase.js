import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCz96SXDcGnzih_XBCWqom-5zGFcDkfyIw",
  authDomain: "ekart-fb8d9.firebaseapp.com",
  projectId: "ekart-fb8d9",
  storageBucket: "ekart-fb8d9.appspot.com",
  messagingSenderId: "40981326022",
  appId: "1:40981326022:web:124af3e0ec63ebadee8fc7",
  measurementId: "G-3WN198X402"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

  export { db, auth };