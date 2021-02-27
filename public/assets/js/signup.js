$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = document.querySelector(".signup");
  const emailInput = document.querySelector("#email-input");
  const passwordInput = document.querySelector("#password-input");
  const nameInput = document.querySelector("#name-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.addEventListener("submit", event => {
    event.preventDefault();
    const userData = {
      email: emailInput.value,
      password: passwordInput.value,
      name: nameInput.value
    };

    if (!userData.email || !userData.password || !userData.name) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password, userData.name);
    emailInput.value = "";
    passwordInput.value = "";
    nameInput.value = "";
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password, name) {
    fetch("/api/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name
      })
    })
      .then(data => {
        if (data.status < 400) {
          window.location.replace("/members");
        }

        // console.log (data)
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    document.querySelector("#alert.msg").textContent = err.responseJSON;
    document.querySelector("#alert").fadeIn(500);
  }
});

// //handlebars connecting the name
// handlebars.registerHelper('name', function(greetings, person){
//   return [person.firstName].join ("");
// });

// function name {
// var source= document.querySelector("#members")
// var template =Handlebars.compile(source);
// var person = {
//   firstName: "john",
// }

// var html =template(person);
// document.querySelector(document.body).html(html)
// }
