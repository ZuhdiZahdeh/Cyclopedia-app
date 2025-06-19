// js/my-report.js
document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return location.href = "login.html";

  const reportDiv = document.getElementById("reportContent");
  reportDiv.innerHTML = `
    <p><strong>👤 Name:</strong> ${user.name}</p>
    <p><strong>🌐 Language:</strong> ${user.language}</p>
    <p><strong>⭐ Points:</strong> ${user.points}</p>
    <p><strong>🎯 Level:</strong> ${user.level}</p>
    <p><strong>🧸 Avatar:</strong> <img src="../images/avatars/${user.avatar}" width="50"/></p>
  `;
});
