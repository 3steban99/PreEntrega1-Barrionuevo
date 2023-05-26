import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyAETqyFMXEWoxZTrIjXAKKMbueMDLGO6ig",
    authDomain: "tuclub2023.firebaseapp.com",
    projectId: "tuclub2023",
    storageBucket: "tuclub2023.appspot.com",
    messagingSenderId: "333749042509",
    appId: "1:333749042509:web:b3266c3c99b256309d0b04",
    measurementId: "G-3SNL3M3W8T"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
