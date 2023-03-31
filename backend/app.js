import {initializeApp} from "firebase/app";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBtkS_ajPgo6FzsUlvgWiv3_-_hKyRfils",
    authDomain: "recipes-fd3f9.firebaseapp.com",
    projectId: "recipes-fd3f9",
    storageBucket: "recipes-fd3f9.appspot.com",
    messagingSenderId: "1016825570140",
    appId: "1:1016825570140:web:58db148c554680e8be5799",
    measurementId: "G-R52YQMTHGE"
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