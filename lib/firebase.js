// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Votre configuration Firebase (tu la trouves dans la console Firebase)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID",
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);

// Initialisation de Firestore et de l'authentification
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;