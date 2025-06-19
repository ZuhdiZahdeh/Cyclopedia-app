import { auth, db } from './firebase-config.js';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';

document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.getElementById("userTableBody");

  onAuthStateChanged(auth, async (user) => {
    if (!user) return window.location.href = "login.html";

    const snapshot = await getDocs(collection(db, "users"));
    snapshot.forEach((doc) => {
      const data = doc.data();
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${data.username || "—"}</td>
        <td>${data.email || "—"}</td>
        <td>${data.level || "—"}</td>
        <td>${data.language || "—"}</td>
        <td>${data.points ?? 0}</td>
      `;

      tbody.appendChild(row);
    });
  });
});