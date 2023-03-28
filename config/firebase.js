import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDiWJXNUFKD3daDHbOdxpHtFG69ta-KCjI",
  authDomain: "chat-app-6e957.firebaseapp.com",
  projectId: "chat-app-6e957",
  storageBucket: "chat-app-6e957.appspot.com",
  messagingSenderId: "460274830471",
  appId: "1:460274830471:web:6b8f1f765e9488394e3c22"
};

initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
