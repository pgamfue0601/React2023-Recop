// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4Ah0gZz3NUxyV81_q1X_s1LMd1eiays8",
  authDomain: "api-luz-hora.firebaseapp.com",
  projectId: "api-luz-hora",
  storageBucket: "api-luz-hora.appspot.com",
  messagingSenderId: "12424434381",
  appId: "1:12424434381:web:e64eaa881085d6ad484f84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);