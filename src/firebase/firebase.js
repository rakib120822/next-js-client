// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1YOPwLHn8vyY3KtkvE-3H7V886p_rcz8",
  authDomain: "next-js-project-2b0b7.firebaseapp.com",
  projectId: "next-js-project-2b0b7",
  storageBucket: "next-js-project-2b0b7.firebasestorage.app",
  messagingSenderId: "167296144726",
  appId: "1:167296144726:web:2e9b5e920a82b0b66632f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
