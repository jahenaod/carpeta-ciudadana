import { initializeApp, getApps } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfy9NoCd-Ia_ydretZ6dOPOE-As8pwsjE",
  authDomain: "carpeta-ciudadana-9ff85.firebaseapp.com",
  projectId: "carpeta-ciudadana-9ff85",
  storageBucket: "carpeta-ciudadana-9ff85.appspot.com",
  messagingSenderId: "136204855758",
  appId: "1:136204855758:web:1d3f64ea9a165679e0239f",
  measurementId: "G-B4K3JBMJRT"
};

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export const uploadFile = async (file: File): Promise<string> => {
  const storageRef = ref(storage, file.name);
  await uploadBytesResumable(storageRef, file);
  return getDownloadURL(storageRef);
};

export { app, auth, db, storage };
