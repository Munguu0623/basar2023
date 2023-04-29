// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDG0jvDHavDaFgEyWoCZedvDitH_Q6fiwA",
  authDomain: "hackaton-dev-8459f.firebaseapp.com",
  projectId: "hackaton-dev-8459f",
  storageBucket: "hackaton-dev-8459f.appspot.com",
  messagingSenderId: "99916855524",
  appId: "1:99916855524:web:5b6ed04264b8ad59ec14f1",
  measurementId: "G-S9Z6CF99N2"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);