// category-template.js
import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { playAudio } from "./audio-handler.js";

export async function loadCategoryItems(category, lang) {
  const itemsRef = collection(db, `categories/${category}/items`);
  const snapshot = await getDocs(itemsRef);
  return snapshot.docs.map(doc => doc.data());
}

export function renderKeyboard(data, lang, onClick) {
  const keyboard = document.getElementById("keyboard");
  const letters = [...new Set(data.map(item => item.letter[lang]))].sort();
  keyboard.innerHTML = letters.map(letter => `<button class="key-btn">${letter}</button>`).join("");

  keyboard.querySelectorAll(".key-btn").forEach(btn => {
    btn.addEventListener("click", () => onClick(btn.textContent));
  });
}

export function showItem(item, lang, category) {
  document.getElementById("itemImage").src = `images/${category}/${item.image}`;
  document.getElementById("itemName").textContent = item.name[lang];
  playAudio(`audio/${lang}/${category}/${item.voices.teacher}`);
}
