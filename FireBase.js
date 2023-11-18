
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn4JGvXhw7dCXTj4VUcaHDHOSzF5rQ4XQ",
  authDomain: "limitlessconnect-auth.firebaseapp.com",
  projectId: "limitlessconnect-auth",
  storageBucket: "limitlessconnect-auth.appspot.com",
  messagingSenderId: "871833818051",
  appId: "1:871833818051:web:4eddf83180c4b1ccac6376"
};

// Initialize Firebase
let app;
if (initializeApp.length) {
  app = initializeApp(firebaseConfig);
}
else {
    app = getApps()[0];
    } 

const auth = getAuth();
export {auth,createUserWithEmailAndPassword, signInWithEmailAndPassword};
