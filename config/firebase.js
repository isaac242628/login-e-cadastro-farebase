import { initializeApp, getApps, getApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCAfOQ2rdU0ufX2uVTl4DgfoSNRKWDgvzM",
  authDomain: "apploginsenha-131ad.firebaseapp.com",
  projectId: "apploginsenha-131ad",
  storageBucket: "apploginsenha-131ad.appspot.com",
  messagingSenderId: "189417148417",
  appId: "1:189417148417:web:a7b5471e1748cefb047000",
};

// 🔒 garante que o app só inicializa uma vez
const app = getApps().length === 0
  ? initializeApp(firebaseConfig)
  : getApp();

// 🔒 garante que o auth só inicializa uma vez
let auth;
try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
} catch (error) {
  // se já estiver inicializado, apenas recupera
  const { getAuth } = require("firebase/auth");
  auth = getAuth(app);
}

export { auth };
