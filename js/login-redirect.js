import { auth, db } from './firebase-config.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;

      const userDocRef = doc(db, "users", uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("language", userData.language);

        alert("✅ تم تسجيل الدخول بنجاح");
        window.location.href = "../users/welcome-redirect.html";
      } else {
        alert("❌ لم يتم العثور على بيانات المستخدم في Firestore.");
      }
    } catch (error) {
      console.error("❌ خطأ في تسجيل الدخول:", error);
      alert("خطأ: " + error.message);
    }
  });
});