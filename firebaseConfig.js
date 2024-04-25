// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSxhTk8GY1nGPBP7_gU3nZfF_ciy7cPhM",
  authDomain: "file-sharing-72bdb.firebaseapp.com",
  projectId: "file-sharing-72bdb",
  storageBucket: "file-sharing-72bdb.appspot.com",
  messagingSenderId: "1056450838627",
  appId: "1:1056450838627:web:6263b01487612070257856",
  measurementId: "G-HBYM106B5N",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
