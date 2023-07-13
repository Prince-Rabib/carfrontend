// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUZxkMV6GH9bydn-9_Qa3ao2NI6dP0SVM",
  authDomain: "carreselling.firebaseapp.com",
  projectId: "carreselling",
  storageBucket: "carreselling.appspot.com",
  messagingSenderId: "568582939130",
  appId: "1:568582939130:web:f7c4f65e666bb4159e0443"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const storage = getStorage(app);

