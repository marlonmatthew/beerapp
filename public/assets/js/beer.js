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
  if (
    age > 21 ||
    (age === 21 &&
      (dirth.getMonth() < today.getMonth() ||
        (dirth.getMonth() === today.getMonth() &&
          dirth.getDay() <= today.getDay())))
  ) {
    window.location.href = "/login";
  }
  console.log("nope! not of age");
}

document.getElementById("randomBeer").addEventListener("click", getRandomBeer);

function getRandomBeer() {
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
      beerName.textContent = data.name;
      brewery.textContent = data.brewery;
      flavor.textContent = data.flavor;
      abv.textContent = data.abv;
    });
}

document
  .getElementById("featuredBeer")
  .addEventListener("click", getFeaturedBeer);

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
      beerName.textContent = data.name;
      brewery.textContent = data.brewery;
      flavor.textContent = data.flavor;
      abv.textContent = data.abv;
    });
}

const filterBeerList = document.getElementById("filterBeers");

if (filterBeerList) {
  filterBeerList.addEventListener("submit", e => {
    e.preventDefault();

    const abvList = document.getElementsByName("abvPerc");
    const flavorList = document.getElementsByName("flavorRadio");
    let abv = "";
    let flavor = "";
    for (let i = 0, length = abvList.length; i < length; i++) {
      if (abvList[i].checked) {
        abv = abvList[i].value;
        break;
      }
    }
    for (let i = 0, length = flavorList.length; i < length; i++) {
      if (flavorList[i].checked) {
        flavor = flavorList[i].value;
        break;
      }
    }

    // const filterBeer = {
    //   avb: abv,
    //   flavor: flavor
    // };
    // console.log(filterBeer);
    fetch(`/api/filterBeers/${abv}/${flavor}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }); /*.then would go here*/
  });
}

getFeaturedBeer();
getRandomBeer();
