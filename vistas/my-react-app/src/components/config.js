import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBwoLl-J17dbyg397b50Nz-ENdYGNN-YTY",
  authDomain: "asesora-urp.firebaseapp.com",
  databaseURL: "https://asesora-urp-default-rtdb.firebaseio.com",
  projectId: "asesora-urp",
  storageBucket: "asesora-urp.firebasestorage.app",
  messagingSenderId: "857511126260",
  appId: "1:857511126260:web:5e33b90a62c580e2202aa1",
  measurementId: "G-NXYQPXR0XR"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);


