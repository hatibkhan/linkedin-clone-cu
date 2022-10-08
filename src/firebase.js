import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAmCoREFUgvo-Rrp-2LrjHVjKqXdYazW70",
  authDomain: "linkedin-database-6eb4f.firebaseapp.com",
  projectId: "linkedin-database-6eb4f",
  storageBucket: "linkedin-database-6eb4f.appspot.com",
  messagingSenderId: "397895145205",
  appId: "1:397895145205:web:d7abbe0271ace1a06d97bc",
  measurementId: "G-3YNFEJZHM1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
