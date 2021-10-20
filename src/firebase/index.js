// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZIwUqxsgMg-9TBpWi1mp6FS9gC7U7NiA",
    authDomain: "rhinoseller-ecmm.firebaseapp.com",
    projectId: "rhinoseller-ecmm",
    storageBucket: "rhinoseller-ecmm.appspot.com",
    messagingSenderId: "893781553143",
    appId: "1:893781553143:web:5d3bd9ccede78ccf8e88f2",
    measurementId: "G-EBYV0FWC3T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db;