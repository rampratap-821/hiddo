// firebaseConfig.js (React JS)

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"; 

const firebaseConfig = {
  apiKey: "AIzaSyCwLzjuu1_Pt3x0EMEHlyXD0W245FKGFFA",
  authDomain: "clickcash-1326f.firebaseapp.com",
  projectId: "clickcash-1326f",
  storageBucket: "clickcash-1326f.appspot.com",
  messagingSenderId: "356375679879",
  appId: "1:356375679879:web:a73dbf9a8ec0a366943922",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth + database
export const auth = getAuth(app);
export const database = getDatabase(app);

export default app;
