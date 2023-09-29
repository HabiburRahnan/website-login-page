// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQj2wtfNfQYY-G4bfIWIzxm4zgp4XyFaI",
  authDomain: "website-login-page.firebaseapp.com",
  projectId: "website-login-page",
  storageBucket: "website-login-page.appspot.com",
  messagingSenderId: "488740041106",
  appId: "1:488740041106:web:246e5eeb18de78c235d14b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
