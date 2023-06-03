import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrdez7ldzf8lik3eAVyBDScQHdtdamuJk",
  authDomain: "snapconnect-b9610.firebaseapp.com",
  projectId: "snapconnect-b9610",
  storageBucket: "snapconnect-b9610.appspot.com",
  messagingSenderId: "964376194628",
  appId: "1:964376194628:web:2fa8e2bf39959f0f9ed611",
  measurementId: "G-29CBMSMY2L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, onAuthStateChanged };