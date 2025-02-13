'use strict';

// Render data
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
    const html = `
    <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}m people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    // countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    // countriesContainer.style.opacity = 1;
};

// --------------------------------------------------------------------------------------

/*
In this challenge you will build a function 'whereAmI' which renders a country
only based on GPS coordinates.For that, you will use a second API to geocode
coordinates.So in this challenge, you’ll use an API on your own for the first time 😁

Your tasks:
PART 1
5. This API allows you to make only 3 requests per second.If you reload fast, you
will get this error with code 403. This is an error with the request.Remember,
    fetch() does not reject the promise in this case. So create an error to reject
the promise yourself, with a meaningful error message

PART 2
6. Now it's time to use the received data to render a country. So take the relevant
attribute from the geocoding API result, and plug it into the countries API that
we have been using.
7. Render the country and catch any errors, just like we have done in the last
lecture(you can even copy this code, no need to type the same code)
The Complete JavaScript Course 31
Test data:
§ Coordinates 1: 52.508, 13.381(Latitude, Longitude)
§ Coordinates 2: 19.037, 72.873
§ Coordinates 3: -33.933, 18.474
*/

// --------------------------------------------------------------------------------------


const apiKey = '68759004565474928600x101077';

const whereAmI = function (lat, lng) {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=${apiKey}`)
        .then(response => {
            if (!response.ok) throw new Error(`Problem with geocoding (${response.status}`);

            return response.json();
        })
        .then(data => {
            console.log(data);
            console.log(`You are in ${data.city}, ${data.country}`);

            return fetch(`https://countries-api-836d.onrender.com/countries/name/${data.country}`);
        })
        .then(response => {
            if (!response.ok) throw new Error(`Country not found (${response.status}`);

            return response.json();
        })
        .then(data => {
            renderCountry(data[0]);
        })
        .catch(err => {
            // console.log(`${err} stuff broke`);
            renderError(`Something went wrong: ${err.message}`);
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        })
};

btn.addEventListener('click', function () {
    whereAmI(52.508, 13.381); // Berlin, Germany
    whereAmI(19.037, 72.873); // Mumbai, India
    whereAmI(-33.933, 18.474); // Cape Town, South Africa
});

/*
Learnings:
fetches should be chained
fetch()
    .then((response) => return response.json)
    .then((data) => data handling / return another fetch)
    .catch((err) => stuff messed up)
    .?finally(() => wrap up)

*/