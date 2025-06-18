// score-tracker.js
import { db } from "./firebase.js";
import { doc, updateDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

async function addPoints(userId, amount) {
  const userRef = doc(db, "users", userId);
  const snap = await getDoc(userRef);
  if (snap.exists()) {
    const currentPoints = snap.data().points || 0;
    await updateDoc(userRef, { points: currentPoints + amount });
  }
}

export { loadLanguage, playAudio, addPoints };
