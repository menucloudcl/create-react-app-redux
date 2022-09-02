// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKSZfjVwh7sPLRirsAhLeB1yOya0n0PUg",
  authDomain: "create-react-app-redux-d110b.firebaseapp.com",
  projectId: "create-react-app-redux-d110b",
  storageBucket: "create-react-app-redux-d110b.appspot.com",
  messagingSenderId: "755017344595",
  appId: "1:755017344595:web:ef4fd018f074ddf85048a6",
  measurementId: "G-6TZ280LCLS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
