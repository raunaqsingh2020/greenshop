// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXseqiehGAyhV3HVtV8iZkkX6_mmwD4zY",
  authDomain: "greenshop-334d1.firebaseapp.com",
  databaseURL: "https://greenshop-334d1-default-rtdb.firebaseio.com",
  projectId: "greenshop-334d1",
  storageBucket: "greenshop-334d1.appspot.com",
  messagingSenderId: "237268212648",
  appId: "1:237268212648:web:97b6ea17b9f805f8515b9d",
  measurementId: "G-6WBZ72V5TS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;