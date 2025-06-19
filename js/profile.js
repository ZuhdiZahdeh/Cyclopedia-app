import { auth, db } from './firebase-config.js';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("profileForm");

  onAuthStateChanged(auth, async (user) => {
    if (!user) return window.location.href = "login.html";

    const uid = user.uid;
    const userDocRef = doc(db, "users", uid);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      const data = userDoc.data();
      document.getElementById("name").value = data.username || "";
      document.getElementById("email").value = data.email || "";
      document.getElementById("birthdate").value = data.birthdate || "";
      document.getElementById("level").value = data.level || "Beginner";
      document.getElementById("language").value = data.language || "en";
      document.getElementById("studentNO").value = data.studentNO || "";
      document.getElementById("avatar").value = data.avatar || "";
    }

    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      await updateDoc(userDocRef, {
        username: document.getElementById("name").value,
        language: document.getElementById("language").value,
        level: document.getElementById("level").value,
        avatar: document.getElementById("avatar").value,
        birthdate: document.getElementById("birthdate").value,
        studentNO: document.getElementById("studentNO").value
      });

      localStorage.setItem("language", document.getElementById("language").value);
      alert("✅ تم حفظ التعديلات");
      window.location.href = "../index.html";
    });
  });
});