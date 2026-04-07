// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
  getAuth, createUserWithEmailAndPassword,
  signInWithEmailAndPassword, onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

import { 
  getFirestore, collection, addDoc, onSnapshot, query, orderBy 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Your config
const firebaseConfig = {
  apiKey: "AIzaSyDFwDA9cINLTZ7d0wtmx8n1u0uLVMBv9-k",
  authDomain: "ourlove-eef67.firebaseapp.com",
  projectId: "ourlove-eef67",
  storageBucket: "ourlove-eef67.firebasestorage.app", 
  messagingSenderId: "395491007333",
  appId: "1:395491007333:web:301bf02e794e8815c85f8c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  collection, addDoc, onSnapshot, query, orderBy
};
