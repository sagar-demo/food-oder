import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCZu4r6LZKA_vKQ9TRlwSgYsJvpXOlV5XM",
  authDomain: "foododer-bf2a9.firebaseapp.com",
  databaseURL: "https://foododer-bf2a9-default-rtdb.firebaseio.com",
  projectId: "foododer-bf2a9",
  storageBucket: "foododer-bf2a9.appspot.com",
  messagingSenderId: "737718349181",
  appId: "1:737718349181:web:ef4c4406fa0ac3f09e3014",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
