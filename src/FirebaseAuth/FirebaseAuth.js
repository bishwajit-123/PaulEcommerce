
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkuDMfr2blLX3f2_cVQPb7EPbVGW6gfSg",
  authDomain: "paulecomm-c77fa.firebaseapp.com",
  projectId: "paulecomm-c77fa",
  storageBucket: "paulecomm-c77fa.appspot.com",
  messagingSenderId: "632901131594",
  appId: "1:632901131594:web:8de07e9bf9d87830f5f5b3"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {app, auth, db};