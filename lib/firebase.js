import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8dnRIcLLYBKcZUFA9sLTYyaNncr__Msc",
  authDomain: "izem-64023.firebaseapp.com",
  projectId: "izem-64023",
  storageBucket: "izem-64023.firebasestorage.app",
  messagingSenderId: "715514367896",
  appId: "1:715514367896:web:32c72e095dac9dc7a365ed",
  measurementId: "G-JL6XP7CXBL"
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);

// Initialisation de Firestore et de l'authentification
const auth = getAuth(app);
const db = getFirestore(app);
 
export { auth, db };