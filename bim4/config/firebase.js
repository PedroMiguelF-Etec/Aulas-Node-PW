import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB3nNBLtRsVppWiHjf1cya4IEm49dWLkRk",
  authDomain: "jquery-aula01.firebaseapp.com",
  databaseURL: "https://jquery-aula01-default-rtdb.firebaseio.com",
  projectId: "jquery-aula01",
  storageBucket: "jquery-aula01.firebasestorage.app",
  messagingSenderId: "739698657724",
  appId: "1:739698657724:web:8d9471cc2e688f15a543b9",
  measurementId: "G-NRDJPW35R3"
};

// Evita reinicialização em hot-reload (nodemon)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getDatabase(app);
