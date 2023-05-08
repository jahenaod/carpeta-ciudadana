import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2vK0WdfVPMmxW1P6ktH3N7l1YB--vZtE",
  authDomain: "playgreen-web.firebaseapp.com",
  projectId: "playgreen-web",
  storageBucket: "playgreen-web.appspot.com",
  messagingSenderId: "179567952227",
  appId: "1:179567952227:web:0e397349d8b509eae39356",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
