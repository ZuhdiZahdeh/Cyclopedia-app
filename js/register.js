import { auth, db } from './firebase-config.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const username = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const language = document.getElementById("language").value;
    const avatar = document.querySelector('input[name="avatar"]:checked')?.value || "";
    const birthdate = document.getElementById("birthdate")?.value || "";
    const level = document.getElementById("level")?.value || "Beginner";
    const studentNO = document.getElementById("studentNO")?.value || "";

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;

      await setDoc(doc(db, "users", uid), {
        uid,
        username,
        email,
        birthdate,
        level,
        avatar,
        studentNO,
        language,
        points: 0,
        createdAt: serverTimestamp()
      });

      alert("🎉 تم التسجيل بنجاح!");
      window.location.href = "../users/welcome-redirect.html";
    } catch (error) {
      console.error("❌ خطأ أثناء التسجيل:", error);
      alert("حدث خطأ أثناء التسجيل: " + error.message);
    }
  });
});