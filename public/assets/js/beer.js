document.getElementById("age").addEventListener("click", myFunction);

function myFunction() {
  const bdayInput = document.getElementById("bday").value;
  const today = new Date();
  const thisYear = today.getFullYear();
  const dirth = new Date(bdayInput);
  const bdYear = dirth.getFullYear();

  const age = parseInt(thisYear) - parseInt(bdYear);
  console.log(`age ${age}`);
  if (age > 21) {
    window.location.href = "/login";
  }
  console.log("nope! not of age");
}
