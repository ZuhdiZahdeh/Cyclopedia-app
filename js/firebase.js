// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBDQ8xTd9T_pdDGVeuG-XDFtl2TwwBkzyc",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "cyclopedia-edu",
  storageBucket: "encyclopedialphabet.appspot.com",
  messagingSenderId: "1060215261508",
  appId: "1:1060215261508:android:a5c82fbbcd341b137c08c2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
