$(document).ready(() => {
  // Getting references to our form and input
  let signUpForm = document.querySelector(".signup");
  var emailInput = document.querySelector("#email-input");
  let passwordInput = document.querySelector("#password-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.addEventListener("submit", (event) => {
      event.preventDefault();
      var userData = {
        email: emailInput.value,
        password: passwordInput.value,
      };
  
      if (!userData.email || !userData.password) {
        return;
      }
      // If we have an email and password, run the signUpUser function
      signUpUser(userData.email, userData.password);
      emailInput.value="";
      passwordInput.value="";
    });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password) {
    fetch("/api/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
      })
    } 
  .then((data) => {
            if(data.status < 400){
                window.location.replace("/members")
            }
        //   window.location.replace("/members");
        console.log (data)
          // If there's an error, handle it by throwing up a bootstrap alert
        })
      .catch(handleLoginErr);
// }

  function handleLoginErr(err) {
    document.querySelector("#alert.msg").textContent=err.responseJSON;
    document.querySelector("#alert").fadeIn(500);
  }

});
