// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv2JOeny5rJzTuybHdHp_czcC_Re6tU44",
  authDomain: "movie-recomend-26cff.firebaseapp.com",
  projectId: "movie-recomend-26cff",
  storageBucket: "movie-recomend-26cff.appspot.com",
  messagingSenderId: "821331810074",
  appId: "1:821331810074:web:369d9d1b68a7c2ba73fea3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
