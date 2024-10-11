// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5JL2_WXNc_Mu9IahQLeFtZZaWyTftFOU",
  authDomain: "charity-f7332.firebaseapp.com",
  databaseURL: "https://charity-f7332-default-rtdb.firebaseio.com",
  projectId: "charity-f7332",
  storageBucket: "charity-f7332.appspot.com",
  messagingSenderId: "218708392973",
  appId: "1:218708392973:web:eeea669017cb117c752944",
  measurementId: "G-S1TESVBBX5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebase.firestore();