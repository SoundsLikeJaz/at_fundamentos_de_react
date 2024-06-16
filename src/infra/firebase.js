import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChb-N51nq6CYMsCfyO4GSTg3O08sRKTsg",
  authDomain: "react-2024-75afe.firebaseapp.com",
  projectId: "react-2024-75afe",
  storageBucket: "react-2024-75afe.appspot.com",
  messagingSenderId: "995617695203",
  appId: "1:995617695203:web:f9c679ea7d380f7d892cd6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;