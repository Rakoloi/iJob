// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmK-nzDZArLok-jICypl1Grfiy6Zf0v-o",
  authDomain: "ijob-b6948.firebaseapp.com",
  projectId: "ijob-b6948",
  storageBucket: "ijob-b6948.appspot.com",
  messagingSenderId: "431595290912",
  appId: "1:431595290912:web:1465fa009d432392a3d745",
  measurementId: "G-73BP5F8NS2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
