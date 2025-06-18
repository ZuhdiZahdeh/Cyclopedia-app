// main.js
window.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("language") || "en";
  document.documentElement.lang = lang;
  document.body.setAttribute("dir", lang === "ar" || lang === "he" ? "rtl" : "ltr");
  loadLanguage(lang);
});

