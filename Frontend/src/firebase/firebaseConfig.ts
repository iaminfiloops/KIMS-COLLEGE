import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdoWx29IlaPuPVvtEHIucaMz2F2e9HjOc",
  authDomain: "sanakamedical.firebaseapp.com",
  projectId: "sanakamedical",
  storageBucket: "sanakamedical.appspot.com",
  messagingSenderId: "35656806182",
  appId: "1:35656806182:web:9df628143acc8a85f49be7",
  measurementId: "G-Y5GHZGJWST"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, RecaptchaVerifier };
