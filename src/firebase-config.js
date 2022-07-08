import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAxg9UN2qnwOOKEmjSplCvPq8ViaXUQ_2g",
  authDomain: "blog-project-7e5ea.firebaseapp.com",
  projectId: "blog-project-7e5ea",
  storageBucket: "blog-project-7e5ea.appspot.com",
  messagingSenderId: "758826285946",
  appId: "1:758826285946:web:ce1cf620ee5078d83434c3"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()