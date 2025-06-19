// js/login.js
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const language = document.getElementById("language").value;
  const avatar = document.querySelector('input[name="avatar"]:checked').value;

  const user = {
    uid: Date.now().toString(),
    name: username,
    language,
    avatar,
    points: 0,
    level: "Beginner",
  };

  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("language", language);

  window.location.href = "../index.html";
});
