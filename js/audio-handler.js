// audio-handler.js
function playAudio(filePath) {
  const audio = document.getElementById("itemAudio");
  audio.src = filePath;
  audio.play().catch(err => console.warn("Audio playback error:", err));
}
