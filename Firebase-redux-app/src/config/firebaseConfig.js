// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3mKN6nttwm0r8zhrhSbxlMZbCuP8ASdE",
  authDomain: "employee-8ee0e.firebaseapp.com",
  projectId: "employee-8ee0e",
  storageBucket: "employee-8ee0e.firebasestorage.app",
  messagingSenderId: "363440130038",
  appId: "1:363440130038:web:66a239670b379451ec69d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);