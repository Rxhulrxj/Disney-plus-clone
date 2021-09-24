import firebase from "firebase/compat/app";
import { initializeApp } from 'firebase/app';
import  'firebase/compat/auth';
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyC_AIk6n3CNAsXc37aL49RPueozRE9GIpU",
  authDomain: "disneyplusclone0.firebaseapp.com",
  databaseURL: "https://disneyplusclone0-default-rtdb.firebaseio.com",
  projectId: "disneyplusclone0",
  storageBucket: "disneyplusclone0.appspot.com",
  messagingSenderId: "486713035287",
  appId: "1:486713035287:web:88c5205eedd29a76a3ea52",
  measurementId: "G-FJ3WLDN1FM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;