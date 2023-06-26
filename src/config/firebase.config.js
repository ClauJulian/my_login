import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDIkhjrqPh3TrulXnFD81tjRE2-T1eKE0E",
  authDomain: "prueba-feltre.firebaseapp.com",
  projectId: "prueba-feltre",
  storageBucket: "prueba-feltre.appspot.com",
  messagingSenderId: "431889098362",
  appId: "1:431889098362:web:b935cffc2d8d7317ae7dc3",
  measurementId: "G-Q8661827JX"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);