import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDgBlPnPrgVZ7bIVgktNj00-Q80d1FCrcs",
    authDomain: "e-clone-d3d87.firebaseapp.com",
    projectId: "e-clone-d3d87",
    storageBucket: "e-clone-d3d87.appspot.com",
    messagingSenderId: "903918303881",
    appId: "1:903918303881:web:22f97bac71a16cbdc06458",
    measurementId: "G-6LB1BCBQQ7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };