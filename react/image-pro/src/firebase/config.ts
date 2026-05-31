import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4_X3hRk_ABJDilZSLDoJIBzq1gqgEf2M",
  authDomain: "image-pro-ab392.firebaseapp.com",
  projectId: "image-pro-ab392",
  storageBucket: "image-pro-ab392.appspot.com",
  messagingSenderId: "221168124396",
  appId: "1:221168124396:web:3b7f561678bbb351efc0c9",
};

// Initialize Firebase-->
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { auth, storage, db };

// here we must do auth ( for user email authentication ) and storage to store the data in firebase
//  and db for use firebase database--> this thing no need to memorize Just copy and paste
