const age = document.getElementById("age");
if (age) {
  age.addEventListener("click", myFunction);
}

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
  fetch("/api/random_beer", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => {
    console.log("another beer!");
    console.log(response);
  });
}

document
  .getElementById("featuredBeer")
  .addEventListener("click", getFeaturedBeer);

function getFeaturedBeer() {
  fetch("/api/featured_beer", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    }
  }).then(response => {
    console.log(response);
  });
}
// document.getElementById("beerList").addEventListener("click", getBeerList);

// function getBeerList() {
//   window.location.href = "/list";
// }
