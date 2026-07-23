const firebaseConfig = {
  apiKey: "AIzaSyCvfXxyVaiOUmDd1lkdVBltW_g3VSKc4YI",
  authDomain: "freibier-spezialisten.firebaseapp.com",
  projectId: "freibier-spezialisten",
  storageBucket: "freibier-spezialisten.firebasestorage.app",
  messagingSenderId: "819824899630",
  appId: "1:819824899630:web:1b1a2de8d96d70b48e11bf",
  measurementId: "G-K9FL63YCBX"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
