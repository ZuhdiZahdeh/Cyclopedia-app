// js/profile.js
document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return location.href = "login.html";

  document.getElementById("name").value = user.name;
  document.getElementById("language").value = user.language;

  loadAvatars(user.avatar);

  document.getElementById("profileForm").addEventListener("submit", function (e) {
    e.preventDefault();

    user.name = document.getElementById("name").value;
    user.language = document.getElementById("language").value;
    user.avatar = document.querySelector('input[name="avatar"]:checked').value;

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("language", user.language);

    alert("✅ Profile updated!");
    location.href = "../index.html";
  });
});

function loadAvatars(selectedAvatar) {
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

      const selected = document.querySelector(`input[name="avatar"][value="${selectedAvatar}"]`);
      if (selected) selected.checked = true;
    });
}
