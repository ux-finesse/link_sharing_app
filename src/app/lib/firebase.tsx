import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCGO4VKVkmPy3hTVvVYlTGsl9T7WIPZAnQ",
  authDomain: "link-sharing-app-ec327.firebaseapp.com",
  projectId: "link-sharing-app-ec327",
  storageBucket: "link-sharing-app-ec327.appspot.com",
  messagingSenderId: "469168442942",
  appId: "1:469168442942:web:3b22146740d1a924280b6f",
  measurementId: "G-894TYKZFS7",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);

const db = getDatabase(app);

export { auth, app, db };
