
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBH6STqTcQUigTK2D6zi1NAsXazm0WudHg",
  authDomain: "espresso-22302.firebaseapp.com",
  projectId: "espresso-22302",
  storageBucket: "espresso-22302.firebasestorage.app",
  messagingSenderId: "843788083833",
  appId: "1:843788083833:web:815afd4bfe79bc6c76aaa8"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)