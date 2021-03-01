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
  if (
    age > 21 ||
    (age === 21 &&
      (dirth.getMonth() < today.getMonth() ||
        (dirth.getMonth() === today.getMonth() &&
          dirth.getDay() <= today.getDay())))
  ) {
    window.location.href = "/login";
  } else {
    alert("Must be over 21 to access this site.");
  }
}

const underAge = document.getElementById("Notage");
if (underAge) {
  underAge.addEventListener("click", e => {
    e.preventDefault();
    alert("Please wait until legal drinking age");
  });
}
document.getElementById("randomBeer").addEventListener("click", getRandomBeer);

function getRandomBeer() {
  // e.preventDefault();
  fetch("/api/random_beer", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      const beerImg = document.getElementById("randomBeerIMG");
      const beerName = document.getElementById("rName");
      const brewery = document.getElementById("rBrewery");
      const flavor = document.getElementById("rFlavor");
      const abv = document.getElementById("rABV");

      beerImg.src = data.image;
      console.log(data.image);
      beerName.textContent = data.name;
      brewery.textContent = data.brewery;
      flavor.textContent = data.flavor;
      abv.textContent = data.abv;
    });
}

function getFeaturedBeer() {
  fetch("/api/random_beer", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      const beerImg = document.getElementById("featuredBeerIMG");
      const beerName = document.getElementById("fName");
      const brewery = document.getElementById("fBrewery");
      const flavor = document.getElementById("fFlavor");
      const abv = document.getElementById("fABV");

      beerImg.src = data.image;
      console.log(data.image);
      beerName.textContent = data.name;
      brewery.textContent = data.brewery;
      flavor.textContent = data.flavor;
      abv.textContent = data.abv;
    });
}

getFeaturedBeer();
getRandomBeer();
