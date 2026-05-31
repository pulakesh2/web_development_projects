// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4SAtg-AAxAXOIhJlYYWWxmzp8-hU5mOg",
  authDomain: "messageing-app-c5d05.firebaseapp.com",
  projectId: "messageing-app-c5d05",
  storageBucket: "messageing-app-c5d05.firebasestorage.app",
  messagingSenderId: "885559416042",
  appId: "1:885559416042:web:4587f2c309c411a264f393",
  measurementId: "G-J6X7DFY7C0",
};

// const app = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
