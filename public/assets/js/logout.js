const logoutButton = document.getElementById("logout-button");

logoutButton.addEventListener("click", () => {
  fetch("/api/logout", {
    method: "post"
  }).then(() => {
    window.location.href = "/";
  });
  console.log("click")
});
