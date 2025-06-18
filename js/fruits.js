// fruits.js
import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { playAudio } from "./audio-handler.js";

const lang = localStorage.getItem("language") || "en";
const category = "fruits";
const contentRef = document.getElementById("content-display");
const keyboard = document.getElementById("keyboard");

async function loadFruits() {
  const itemsRef = collection(db, `categories/${category}/items`);
  const snapshot = await getDocs(itemsRef);
  const data = snapshot.docs.map(doc => doc.data());

  const letters = [...new Set(data.map(item => item.letter[lang]))].sort();
  keyboard.innerHTML = letters.map(letter => `<button class="key-btn">${letter}</button>`).join("");

  keyboard.querySelectorAll(".key-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const match = data.find(item => item.letter[lang] === btn.textContent);
      if (match) displayItem(match);
    });
  });
}
