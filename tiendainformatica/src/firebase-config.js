// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOYq3y45ggeRMJ2_2_kUX3tzfRXHNGsak",
  authDomain: "venta-componentes-d6c05.firebaseapp.com",
  projectId: "venta-componentes-d6c05",
  storageBucket: "venta-componentes-d6c05.appspot.com",
  messagingSenderId: "551947197987",
  appId: "1:551947197987:web:7a0a9a590b79387d469b96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);