const loginButton = document.getElementById("login-button");

const errorToString = e => {
  e.name = "";
  return e.toString();
};

loginButton.addEventListener("click", e => {
  e.preventDefault();
  const emailInput = document.getElementById("email-input").value.trim();
  const passwordInput = document.getElementById("password-input").value.trim();

  loginButton.classList.add("is-loading");

  fetch("/api/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: emailInput,
      password: passwordInput
    })
  })
    .then(response => {
      console.log(response);

      if (!response.ok) {
        loginButton.classList.remove("is-loading");

        throw new Error(response.status);
      }

      return response.json();
    })
    .then(() => {
      loginButton.classList.remove("is-loading");

      window.location.replace("/members");
    })
    .catch(error => {
      if (errorToString(error) === "401") {
        console.log("401 error");
      }
    });
});
// //signup
// signUpuser(userData.email, userData.password);
// emailInput.val();
