// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    updateDoc,
    collection,
    getDocs,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Deine Firebase-Konfiguration
const firebaseConfig = {
    apiKey: "AIzaSyCvfXxyVaiOUmDd1lkdVBltW_g3VSKc4YI",
    authDomain: "freibier-spezialisten.firebaseapp.com",
    projectId: "freibier-spezialisten",
    storageBucket: "freibier-spezialisten.firebasestorage.app",
    messagingSenderId: "819824899630",
    appId: "1:819824899630:web:1b1a2de8d96d70b48e11bf",
    measurementId: "G-K9FL63YCBX"
};

// Firebase starten
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Für die anderen Dateien verfügbar machen
export {
    db,
    doc,
    getDoc,
    setDoc,
    updateDoc,
    collection,
    getDocs,
    serverTimestamp
};
