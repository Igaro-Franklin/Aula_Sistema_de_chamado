import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyA6nLtHc6ueiJ1OTZX3P1R_nEcokCQWsuA",
    authDomain: "tickets-6149a.firebaseapp.com",
    projectId: "tickets-6149a",
    storageBucket: "tickets-6149a.appspot.com",
    messagingSenderId: "815123500428",
    appId: "1:815123500428:web:57752f96aa75534e3f9aa9",
    measurementId: "G-6D7QRCB4E9"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp)
const storage = getStorage(firebaseApp);

export {auth, db, storage};