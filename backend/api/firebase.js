import { config } from 'dotenv';
config();
import {initializeApp} from "firebase/app";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


export function firebaseSetup(){
    const firebaseApp = initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
    });
    const auth = getAuth(firebaseApp);
    const db = getFirestore(firebaseApp);

    //Delete auth state
    onAuthStateChanged(auth, user => {
        if(user != null) {
            console.log("logged in!");
        } else {
            console.log("no user!");
        }
    });
};

export default firebaseSetup;