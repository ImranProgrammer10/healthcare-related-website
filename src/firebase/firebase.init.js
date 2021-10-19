

import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseinitialization = () => {
    return initializeApp(firebaseConfig);
}

export default firebaseinitialization;