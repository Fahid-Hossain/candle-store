import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

// Initialize Firebase
const firebaseInitialize = () => {
    return initializeApp(firebaseConfig);
}

export default firebaseInitialize;