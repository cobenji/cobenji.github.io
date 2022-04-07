// Your web app's Firebase configuration
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbQ0zNQIkDxgeHbvFTR-ZVgXaBl6DzJ8o",
  authDomain: "m2-competition-df529.firebaseapp.com",
  projectId: "m2-competition-df529",
  storageBucket: "m2-competition-df529.appspot.com",
  messagingSenderId: "196347293509",
  appId: "1:196347293509:web:ddc26495fccec27935982c"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app,db}
