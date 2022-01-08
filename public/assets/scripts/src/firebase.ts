// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDGMLfrvuU2A7X9bkYaRuEUFx8ZKgLSDc8",
    authDomain: "lab-ferrari-ms2.firebaseapp.com",
    projectId: "lab-ferrari-ms2",
    storageBucket: "lab-ferrari-ms2.appspot.com",
    messagingSenderId: "764004282734",
    appId: "1:764004282734:web:c232468df8afc68deb517f",
    measurementId: "G-YK54QYFGL2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);