// main.js
window.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("language") || "en";
  document.documentElement.lang = lang;
  document.body.setAttribute("dir", lang === "ar" || lang === "he" ? "rtl" : "ltr");
  loadLanguage(lang);
});


// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
