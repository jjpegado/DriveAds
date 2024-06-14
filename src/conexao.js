const { initializeApp } = require("firebase/app");
const { getFirestore } = require('firebase/firestore');
const admin = require('firebase-admin');
const apiKey = require('./apiKey');

admin.initializeApp({
    credential: admin.credential.cert(apiKey)
});

// Suas credenciais do Firebase
const firebaseConfig = {
    apiKey: process.env.FB_APIKEY,
    authDomain: process.env.FB_AUTHDOMAIN ,
    projectId: process.env.FB_PROJECTID ,
    storageBucket: process.env.FB_STORAGEBUCKET ,
    messagingSenderId: process.env.FB_MESSAGINGSENDERID,
    appId: process.env.FB_APPID ,
    measurementId: process.env.FB_MEASUREMENTID 
}

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


module.exports = db;