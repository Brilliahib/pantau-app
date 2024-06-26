// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWcC5pKQEulac00edYg4i4TJa66ZCg4qM",
  authDomain: "pantau-app-1c7d9.firebaseapp.com",
  projectId: "pantau-app-1c7d9",
  storageBucket: "pantau-app-1c7d9.appspot.com",
  messagingSenderId: "554398918192",
  appId: "1:554398918192:web:682e3cb4be55663c90aff5",
  measurementId: "G-BX9QM5ZE7Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
