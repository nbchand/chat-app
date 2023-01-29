import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMo3BL107Y1cRxMTCyNu4w3hrp25TXSNg",
  authDomain: "chat-app-7aea7.firebaseapp.com",
  projectId: "chat-app-7aea7",
  storageBucket: "chat-app-7aea7.appspot.com",
  messagingSenderId: "1076997580807",
  appId: "1:1076997580807:web:b6b3ed1e1c3845791662a2",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();
