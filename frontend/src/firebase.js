// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB42tzTFrRPEkn3-2PGSR8YmaSUK2ulbro",
  authDomain: "research-synthesizer-8cd9d.firebaseapp.com",
  projectId: "research-synthesizer-8cd9d",
  storageBucket: "research-synthesizer-8cd9d.firebasestorage.app",
  messagingSenderId: "566548184264",
  appId: "1:566548184264:web:36948074a1c42b340d39fd",
  measurementId: "G-34Q2H4Z8WJ",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);