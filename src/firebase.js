import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyAW8mG2updQzE409oX_ZwAiiwuFi6ocdMc",
	authDomain: "linkedin-clone-f4c26.firebaseapp.com",
	projectId: "linkedin-clone-f4c26",
	storageBucket: "linkedin-clone-f4c26.appspot.com",
	messagingSenderId: "139295384213",
	appId: "1:139295384213:web:abf89fe5bc93ee6c18719c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
