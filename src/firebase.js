// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgRUvBGbs-2wwDE4o7hrVGptu6Pa8zXP0",
  authDomain: "sara-wed.firebaseapp.com",
  projectId: "sara-wed",
  storageBucket: "sara-wed.firebasestorage.app",
  messagingSenderId: "321214583625",
  appId: "1:321214583625:web:31a7b39bbd3d309b3e8098"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);