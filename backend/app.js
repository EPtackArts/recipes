import { config } from 'dotenv';

config();

import firebaseSetup from "./api/firebase.js";
firebaseSetup();
console.log("Firebase initialized!");