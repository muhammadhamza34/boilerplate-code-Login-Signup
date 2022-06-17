import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9IOxgWHTtlvrN-dW4hzP9daRhejIiBd8",
  authDomain: "boiler-code.firebaseapp.com",
  projectId: "boiler-code",
  storageBucket: "boiler-code.appspot.com",
  messagingSenderId: "911073220576",
  appId: "1:911073220576:web:b1b0513aeba83eb3fefd85",
  measurementId: "G-5RN57F2HV5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
