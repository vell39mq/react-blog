import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyACF8MlfrS1uI8mN6d2-_Q1KwBQJMbZ7VM",
    authDomain: "nd-blog-project-2ef01.firebaseapp.com",
    projectId: "nd-blog-project-2ef01",
    storageBucket: "nd-blog-project-2ef01.appspot.com",
    messagingSenderId: "181300878249",
    appId: "1:181300878249:web:3f4b4000a2819707c6c2b8"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()