const { initializeApp } = require("firebase/app");
const { getFirestore } = require('firebase/firestore');

// Suas credenciais do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD01wc3t1ZpIlONAhMaqEibyBkGXcIk3cU",
    authDomain: "driveads-159f6.firebaseapp.com",
    projectId: "driveads-159f6",
    storageBucket: "driveads-159f6.appspot.com",
    messagingSenderId: "76929182598",
    appId: "1:76929182598:web:1b25f8a9d89fabcf465a07",
    measurementId: "G-15QY3L9LLR"
}

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


module.exports = db;