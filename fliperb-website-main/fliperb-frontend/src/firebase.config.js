// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVeDoqrkmkdI6T7M3qQ9_6fvvr_ndATvE",
  authDomain: "fliperb-90f3e.firebaseapp.com",
  projectId: "fliperb-90f3e",
  storageBucket: "fliperb-90f3e.appspot.com",
  messagingSenderId: "745694603877",
  appId: "1:745694603877:web:cce73b0497ede6dcdd348c",
  measurementId: "G-6F4PBNJGQB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
