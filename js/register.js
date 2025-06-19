// js/register.js
document.addEventListener("DOMContentLoaded", () => {
  loadAvatars();

  document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const fullname = document.getElementById("fullname").value;
    const password = document.getElementById("password").value;
    const language = document.getElementById("language").value;
    const avatar = document.querySelector('input[name="avatar"]:checked').value;

    const user = {
      uid: Date.now().toString(),
      name: fullname,
      password,
      language,
      avatar,
      points: 0,
      level: "Beginner"
    };

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("language", language);

    window.location.href = "../index.html";
  });
});

function loadAvatars() {
  fetch('../data/avatars.json')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("avatarContainer");
      data.avatars.forEach(avatar => {
        const label = document.createElement("label");
        label.innerHTML = `
          <input type="radio" name="avatar" value="${avatar.filename}" />
          <img src="../images/avatars/${avatar.filename}" alt="${avatar.label}" width="40" />
        `;
        container.appendChild(label);
      });
    });
}
