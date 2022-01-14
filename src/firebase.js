import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC37XVq7VdBPz3FNLMtxU42lsH8pofAN5s",
  authDomain: "ecommerce-grosso.firebaseapp.com",
  projectId: "ecommerce-grosso",
  storageBucket: "ecommerce-grosso.appspot.com",
  messagingSenderId: "880188274261",
  appId: "1:880188274261:web:8b777e8f4132cc66fb86dc",
  measurementId: "G-P16WKDL1Q6"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);