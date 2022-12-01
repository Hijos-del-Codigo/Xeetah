// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqCoTSPQR7vcWrt2mh4U9SGwTJGNpTIsQ",
  authDomain: "xeetah-f1f0b.firebaseapp.com",
  projectId: "xeetah-f1f0b",
  storageBucket: "xeetah-f1f0b.appspot.com",
  messagingSenderId: "733569124179",
  appId: "1:733569124179:web:bffaf56ff5eb50b52cc3a6",
  measurementId: "G-DK1CMD4S6F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export  const auth = getAuth(app);
//const auth = firebase.auth();
const analytics = getAnalytics(app);