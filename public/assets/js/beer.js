document.getElementById("age").addEventListener("click", myFunction);
console.log("This is running");
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

document.getElementById("randomBeer").addEventListener("click", getRandomBeer);

function getRandomBeer() {
  fetch("/api/frandom_beer", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify()
  }).then(response => {});
}
