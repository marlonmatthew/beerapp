const logoutButton = document.getElementById("logout-button");

logoutButton.addEventListener("click", () => {
  fetch("/api/logout", {
    method: "POST"
  }).then(() => {
    window.location.href = "/login";
  });
});
