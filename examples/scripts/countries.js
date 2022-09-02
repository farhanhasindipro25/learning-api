const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  const countriesContainer = document.getElementById("countries-container");
  countries.forEach((country) => {
    const countryDiv = document.createElement("div");
    countryDiv.classList.add("country");
    countryDiv.innerHTML = `
        <h3> Name: ${country.name.common}</h3>
        <p> Capital: ${country.capital ? country.capital[0] : "No Capital"}</p>
        <button onclick="loadCountryDetail('${
          country.cca2
        }')"> Get Details </button>
        `;
    countriesContainer.appendChild(countryDiv);
  });
};

const loadCountryDetail = (code) => {
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountryDetail(data[0]));
};

const displayCountryDetail = (country) => {
  const countryDetail = document.getElementById("country-detail");
  console.log(country);
  countryDetail.innerHTML = `
        <h2> Country Name: ${country.name.common}</h2>
        <img src="${
          country.flags.png ? country.flags.png : "No Flags Found"
        }"> </img>
    `;
};

loadCountries();
