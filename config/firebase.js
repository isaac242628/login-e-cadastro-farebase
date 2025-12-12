import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCAfOQ2rdU0ufX2uVTl4DgfoSNRKWDgvzM",
  authDomain: "apploginsenha-131ad.firebaseapp.com",
  projectId: "apploginsenha-131ad",
  storageBucket: "apploginsenha-131ad.appspot.com",
  messagingSenderId: "189417148417",
  appId: "1:189417148417:web:a7b5471e1748cefb047000",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Auth COM PERSISTÊNCIA usando AsyncStorage
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
