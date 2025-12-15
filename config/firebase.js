import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAfOQ2rdU0ufX2uVTl4DgfoSNRKWDgvzM",
  authDomain: "apploginsenha-131ad.firebaseapp.com",
  projectId: "apploginsenha-131ad",
  storageBucket: "apploginsenha-131ad.appspot.com",
  messagingSenderId: "189417148417",
  appId: "1:189417148417:web:a7b5471e1748cefb047000",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
