// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX60dss64-PftDFk0yRo8sLgLGSej8MSc",
  authDomain: "na-project-391f9.firebaseapp.com",
  projectId: "na-project-391f9",
  storageBucket: "na-project-391f9.appspot.com",
  messagingSenderId: "693523772648",
  appId: "1:693523772648:web:d93135c9997b93f934855d",
  measurementId: "G-TTNTK4V9XP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);