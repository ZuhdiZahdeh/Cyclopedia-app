// main.js
// main.js

window.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("language") || "en";
  document.documentElement.lang = lang;
  document.body.setAttribute("dir", lang === "ar" || lang === "he" ? "rtl" : "ltr");

  // 🚫 تم تعليق هذا السطر لتجنّب الخطأ في الوقت الحالي
  // loadLanguage(lang);

  handleAuthUI(); // لإظهار أزرار الدخول والخروج
});

// ✅ هذه الدالة لإدارة واجهة الدخول والخروج
function handleAuthUI() {
  const isLoggedIn = localStorage.getItem("user");

  const loginBtn = document.getElementById("loginBtn");
  const registerBtn = document.getElementById("registerBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  if (!loginBtn || !registerBtn || !logoutBtn) return;

  if (isLoggedIn) {
    loginBtn.style.display = "none";
    registerBtn.style.display = "none";
    logoutBtn.style.display = "inline";
  } else {
    loginBtn.style.display = "inline";
    registerBtn.style.display = "inline";
    logoutBtn.style.display = "none";
  }

  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("user");
    location.reload();
  });
}


