// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHbhamwi0fQ0eJ1gA8F4FagCgAJp2ie9E",
  authDomain: "anurag-portfolio-a3136.firebaseapp.com",
  projectId: "anurag-portfolio-a3136",
  storageBucket: "anurag-portfolio-a3136.firebasestorage.app",
  messagingSenderId: "114752445896",
  appId: "1:114752445896:web:4069fb490b852a6d37b4fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);