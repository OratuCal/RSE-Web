// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "rse-web-e1c25.firebaseapp.com",
  projectId: "rse-web-e1c25",
  storageBucket: "rse-web-e1c25.appspot.com",
  messagingSenderId: "332597949477",
  appId: "1:332597949477:web:82ae00a83e54eaa1883bcc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);