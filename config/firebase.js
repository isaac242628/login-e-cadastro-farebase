import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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

// ✅ FUNCIONA EM TODAS AS PLATAFORMAS
export const auth = getAuth(app);
