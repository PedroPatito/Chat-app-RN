import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "project key",
  authDomain: "project domain",
  projectId: "project id",
  storageBucket: "project bucket",
  messagingSenderId: "project messagingsenderid",
  appId: "project appid"
};

initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
