// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5IgzMVcIAAW3GnHmcMjp0_m1aUmuydDk",
  authDomain: "cat-news-b4079.firebaseapp.com",
  projectId: "cat-news-b4079",
  storageBucket: "cat-news-b4079.appspot.com",
  messagingSenderId: "497870631992",
  appId: "1:497870631992:web:aa42d735a4a30cc6efa2cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;