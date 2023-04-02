//firebase/authentication/firebase.auth.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

// Your web app's Firebase configuration

// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9M9VDPe5pMu9N7l5JWINVEJCBSZxzJXE",
  authDomain: "mui-jatique.firebaseapp.com",
  projectId: "mui-jatique",
  storageBucket: "mui-jatique.appspot.com",
  messagingSenderId: "491848089461",
  appId: "1:491848089461:web:59e5233b153be09fb55d3c",
  measurementId: "G-GRBNL2Z6DC"
};

// Initialize Firebase

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
console.log(analytics);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

const facebookProvider = new FacebookAuthProvider();
facebookProvider.addScope("email");

//authentication chamber
const auth = getAuth(firebaseApp);

//with Google
const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//with email and password
const createNewUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

//with Facebook
const signInWithFacebookPopup = () => signInWithPopup(auth, facebookProvider);

//to sign out a user
const signOutUser = () => signOut(auth);

const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};

export {
  auth,
  signInWithGooglePopup,
  signInWithFacebookPopup,
  createNewUserWithEmailAndPassword,
  signOutUser,
  onAuthStateChangedListener
};
