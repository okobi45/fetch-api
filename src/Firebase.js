// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCcu_QFwluuR68A8ycpzCVSREveUPJ-RU",
  authDomain: "flipstack-52410.firebaseapp.com",
  projectId: "flipstack-52410",
  storageBucket: "flipstack-52410.appspot.com",
  messagingSenderId: "607784127025",
  appId: "1:607784127025:web:adb1f940b239fce415a310"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};

//Auth will be used the manage the authentication state of the user