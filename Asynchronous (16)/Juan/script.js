'use strict';

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

const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

        return response.json();
    });
};

///////////////////////////////////////
// Asynchronous js, AJAX, and APIs

// Synchronous code is executed line-by-line 1 -> 2 -> 3
// Each line of code waits for previous line to finish

// synchronous issue: red colour is only set after alert window closed:
/* const p = document.querySelector('.p');
p.textContent = 'My name is Juan';
alert('Text set');
p.style.color = 'red'; */

// ex. Timer with callback
/*const p = document.querySelector('.p');
setTimeout(function () {
    p.textContent = 'My name is Juan';
    alert('Text set');
}, 5000);
p.style.color = 'red';*/

// Asynchronous code is executed after a task that runs in the 'Background' finishes
// Async code is non-blocking;
// Execution doesn't wait for asyn task to finish it's work
// Callback doesn't necessarily mean it's async

// 2nd example: Image could be huge
/* const img = document.querySelector('.dog');
img.src = 'dog.jpg';
img.addEventListener('load', function(){
img.classList.add('fadeIn');
});
p.style.width = '300px'; */

// addEventListener also don't automatically make code async

// API = Application Programming Interface
// Allows applications to talk to each other
// self-contained

// Own Class API
// - small simple
// - some methods available as a public interface
// - Objects created by class are self-contained, encapsulated pieces of software

// "Online" API
// - Application running on server, receives requests for data, sends data back as response
// normally called just "API"/"Web API"

// AJAX 
// ...X -> XML data format
// nowadays use JSON data format instead
// JSON is basically a js object converted to string

/*
// -----------------------------------------------------------------------
// Our first AJAX Call: XML HttpRequest

// Note: use https://countries-api-836d.onrender.com/countries/

// Old school style
const getCountryData = function (country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://countries-api-836d.onrender.com/countries/name/${country}`);
    request.send();

    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        const html = `
    <article class="country">
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
        countriesContainer.style.opacity = 1;
    });
};

getCountryData('Australia');
getCountryData('Nepal');
// Note: they may be displayed in different orders, this is due to async nature of which request returns first


// -----------------------------------------------------------------------
// [Optional] How Web works: Requests/Responses

// Request-Response model

// 1. Browser makes request to DNS to match web address to server real IP
// 2. TCP/IP socket connection b/w browser & server
// 3. HTTP Request to server
// 4. HTTP Response back to Client

/*
// -----------------------------------------------------------------------
// Welcome to Callback Hell

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
    countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
    // AJAX call country 1
    const request = new XMLHttpRequest();
    request.open('GET', `https://countries-api-836d.onrender.com/countries/name/${country}`);
    request.send();

    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);

        // Render country 1
        renderCountry(data);

        // Get neighbour country (2)
        const neighbour = data.borders?.[0];
        if (!neighbour) return;
        console.log(neighbour);

        // AJAX call country 2
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`);
        request2.send();

        request2.addEventListener('load', function () {
            const data2 = JSON.parse(this.responseText);
            console.log(data2);

            renderCountry(data2, 'neighbour');
        })

    });
};

// getCountryAndNeighbour('Australia');
getCountryAndNeighbour('Nepal');
// getCountryAndNeighbour('USA');

setTimeout(() => {
    console.log('1 second passed');
    setTimeout(() => {
        console.log('2 seconds passed');
        setTimeout(() => {
            console.log('3 seconds passed');
            setTimeout(() => {
                console.log('4 seconds passed');
                setTimeout(() => {
                    console.log('5 seconds passed');
                    //......
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000);

// This structure of callbacks in callbacks (nested callbacks) is called CALLBACK HELL
// This structure is difficult to understand or work out what it's doing



// -----------------------------------------------------------------------
// Promises & the Fetch API
// i.e. how to escape CALLBACK HELL

// OLD
// const request = new XMLHttpRequest();
// request.open('GET', `https://countries-api-836d.onrender.com/countries/name/${country}`);
// request.send();

// NEW
const request = fetch(`https://countries-api-836d.onrender.com/countries/name/Australia`);
console.log(request);

// Promise:
// An object placehold for future result of async operation
// Container for an async delivered value
// Contained for a future value (i.e. response)

// Pros: No longer need to rely on events/callbacks passed into async functions to handle async results
// Instead of nesting callbacks, we can chain promises for a sequence of async operations: escaping CALLBACK HELL 🥳

// Pending --(async task)-> Settled/Fulfilled -> Resolved
//                                  -> Rejected
// We can handle fulfilled/rejected in code

// Build Promise -> Consume Promise
// Note: Fetch API returns promise


// -----------------------------------------------------------------------
// Consuming Promises

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
    countriesContainer.style.opacity = 1;
};

// const getCountryData = function (country) {
//     fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
//         .then(function (response) {
//             // console.log(response);
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//         });
// };

const getCountryData = function (country) {
    fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
        .then(response => response.json())
        .then(data => renderCountry(data[0]));
};

getCountryData('Australia');

// -----------------------------------------------------------------------
// Chaining Promises

const getCountryAndNeighbour = function (country) {
    fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
        .then(response => response.json())
        .then(data => {
            renderCountry(data[0]);
            const neighbour = data[0].borders?.[0];

            if (!neighbour) return;

            // Country 2
            return fetch(`https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`);
        })
        .then(response => response.json())
        .then(data =>
            renderCountry(data, 'neighbour')
        );
};

getCountryAndNeighbour('Nepal');



// -----------------------------------------------------------------------
// Handling Rejected Promises

const getCountryAndNeighbour = function (country) {
    fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
        .then(response => response.json())
        .then(data => {
            renderCountry(data[0]);
            const neighbour = data[0].borders?.[0];

            if (!neighbour) return;

            // Country 2
            return fetch(`https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`);
        })
        .then(response => response.json())
        .then(data =>
            renderCountry(data, 'neighbour')
        ).catch(err => { // <-- unified error handling
            console.error(`${err} 💩`);
            renderError(`Something went wrong 💩 ${err.message} (${response.status})`);
        }).finally(() => {
            countriesContainer.style.opacity = 1;
        })
};


btn.addEventListener('click', function () {
    getCountryAndNeighbour('Australia');
});


// -----------------------------------------------------------------------
// Throwing Errors Manually

const getJSON = function (url, errorMSG = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`${errorMSG} (${response.status})`);

        return response.json();
    })
};

const getCountryAndNeighbour = function (country) {
    getJSON(`https://countries-api-836d.onrender.com/countries/name/${country}`, 'Country not found')
        .then(data => {
            renderCountry(data[0]);
            const neighbour = data[0].borders?.[0];

            // if (!neighbour) return; // 'data is undefined'
            if (!neighbour) throw new Error('No Neighbour found');

            // Country 2
            return getJSON(`https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`, 'Neighbour not found');
        })
        .then(data =>
            renderCountry(data, 'neighbour')
        )
        .catch(err => { // <-- unified error handling
            console.error(`${err} 💩`);
            renderError(`Something went wrong 💩 ${err.message} Try again!`);
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        })
};


btn.addEventListener('click', function () {
    getCountryAndNeighbour('Australia');
});


// -----------------------------------------------------------------------
// CHALLENGE 1 //
// -----------------------------------------------------------------------

// Async behind the scenes: the Event Loop

// -----------------------------------------------------------------------
// The Event Loop in practice

console.log('Test Start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('Resolved promise 2')
    .then(res => {
        for (let i = 0; i < 10000000000; i++) { };
        console.log(res);
    });

console.log('Test End');


// -----------------------------------------------------------------------
// Building a simple Promise

const lotteryPromise = new Promise(function (resolve, reject) {

    console.log('Lottery running 🎟️');

    setTimeout(function () {
        if
            (Math.random() >= 0.5) {
            resolve('You win!');
        } else {
            reject(new Error('You lose!'));
        }
    }, 2000);
});

lotteryPromise
    .then(res => console.log(res))
    .catch(err => console.error(err));


// Promisifying setTimeout (real-world example)
// const wait = function (seconds) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, seconds * 1000);
//     });
// };

// challenge; arrow version of above
const wait = (seconds) => new Promise(
    (resolve) => setTimeout(resolve, seconds * 1000)
);

wait(2)
    .then(() => {
        console.log('I waited 2 secs');
        return wait(1);
    })
    .then(() => {
        console.log('I waited 3 secs');
        return wait(1);
    })
    .then(() => {
        console.log('I waited 4 secs');
        return wait(1);
    })
    .then(() => {
        console.log('I waited 5 secs');
        return wait(1);
    });

Promise.resolve('Immediately').then(x => console.log(x));
Promise.reject(new Error('Problem')).catch(x => console.error(x));


// -----------------------------------------------------------------------
// Promisifying the Geolocation API


// console.log('Getting position');
const getPosition = function () {
    return new Promise(function (resolve, reject) {
        // navigator.geolocation.getCurrentPosition(
        //     position => resolve(position),
        //     err => reject(err)
        // );
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
};

// getPosition()
//     .then(pos => console.log(pos));

const apiKey = '68759004565474928600x101077';

const whereAmI = function () {
    getPosition()
        .then(pos => {
            const { latitude: lat, longitude: lng } = pos.coords;

            return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=${apiKey}`)
        })
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

btn.addEventListener('click', whereAmI());


// -----------------------------------------------------------------------
// CHALLENGE 2 //
// -----------------------------------------------------------------------

// Consuming Promises with Async/Await

const apiKey = '68759004565474928600x101077';

const getPosition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
};

// fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`).then(res => console.log(res));

const whereAmI = async function () {
    // Geolocating
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse Geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=${apiKey}`);
    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    // Country data
    const res = await fetch(`https://countries-api-836d.onrender.com/countries/name/${dataGeo.country}`);
    const data = await res.json();

    // Display results
    renderCountry(data[0]);
    countriesContainer.style.opacity = 1;
};

whereAmI();


// -----------------------------------------------------------------------
// Error handling with try...catch

const apiKey = '68759004565474928600x101077';

const getPosition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
};

const whereAmI = async function () {
    try {
        // Geolocating
        const pos = await getPosition();
        const { latitude: lat, longitude: lng } = pos.coords;

        // Reverse Geocoding
        const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=${apiKey}`);
        if (!resGeo.ok) throw new Error(`Problem getting Geocoding data`);
        const dataGeo = await resGeo.json();

        // Country data
        const res = await fetch(`https://countries-api-836d.onrender.com/countries/name/${dataGeo.country}`);
        if (!res.ok) throw new Error(`Problem getting Country data`);
        const data = await res.json();

        // Display results
        renderCountry(data[0]);
        countriesContainer.style.opacity = 1;

    } catch (err) {
        console.error(err.message);
        renderError(`Something went wrong (${err.message})`);
    }
};

whereAmI();


// try {
//     let y = 1;
//     const x = 2;
//     x = 3;
// } catch (err) {
//     alert(err.message)
// }


// -----------------------------------------------------------------------
// Returning Values from Async functions

const apiKey = '68759004565474928600x101077';

const getPosition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
};

const whereAmI = async function () {
    try {
        // Geolocating
        const pos = await getPosition();
        const { latitude: lat, longitude: lng } = pos.coords;

        // Reverse Geocoding
        const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=${apiKey}`);
        if (!resGeo.ok) throw new Error(`Problem getting Geocoding data`);
        const dataGeo = await resGeo.json();

        // Country data
        const res = await fetch(`https://countries-api-836d.onrender.com/countries/name/${dataGeo.country}`);
        if (!res.ok) throw new Error(`Problem getting Country data`);
        const data = await res.json();

        // Display results
        renderCountry(data[0]);
        countriesContainer.style.opacity = 1;

        return `You are in ${dataGeo.city}, ${dataGeo.country}`;

    } catch (err) {
        console.error(err.message);
        renderError(`Something went wrong (${err.message})`);

        // Reject promise returned from async function
        throw err;
    }
};

console.log('1: Getting location');
// const city = whereAmI();
// console.log(city);
// whereAmI()
//     .then(city => console.log(`2: ${city}`))
//     .catch(err => console.error(`2: ${err}`))
//     .finally(() => console.log('3: Finished getting location'));

(async function () {
    try {
        const city = await whereAmI();
        console.log(`2: ${city}`);
    } catch (err) {
        console.log(`2: ${err}`);
    }
    console.log('3: Finished getting location');
})();



// -----------------------------------------------------------------------
// Running Promises in Parallel

const get3Countries = async function (c1, c2, c3) {
    try {
        // const [data1] = await getJSON(`https://countries-api-836d.onrender.com/countries/name/${c1}`);
        // const [data2] = await getJSON(`https://countries-api-836d.onrender.com/countries/name/${c2}`);
        // const [data3] = await getJSON(`https://countries-api-836d.onrender.com/countries/name/${c3}`);

        const data = await Promise.all([
            getJSON(`https://countries-api-836d.onrender.com/countries/name/${c1}`), getJSON(`https://countries-api-836d.onrender.com/countries/name/${c2}`), getJSON(`https://countries-api-836d.onrender.com/countries/name/${c3}`)
        ]);

        console.log(data.map(d => d[0].capital));

    } catch (err) {
        console.error(err);
    }
};

get3Countries('Australia', 'Nepal', 'South Africa');


*/
// -----------------------------------------------------------------------
// Other Promise Combinators: race, allSettled, and any

// Promise.race();
// Resolve/reject when any promise resolved/rejected
// short-circuits whenever a promise is settled
(async function () {
    const res = await Promise.race([
        getJSON(`https://countries-api-836d.onrender.com/countries/name/Australia`),
        getJSON(`https://countries-api-836d.onrender.com/countries/name/Nepal`),
        getJSON(`https://countries-api-836d.onrender.com/countries/name/South Africa`)
    ]);
    console.log(res[0]);
})();

const timeout = function (sec) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error('Request took too long'));
        }, sec * 1000);
    });
};
Promise.race([
    getJSON(`https://countries-api-836d.onrender.com/countries/name/South Africa`), timeout(1)
])
    .then(data => console.log(data[0]))
    .catch(err => console.error(err));


// Promise.allSettled();
// Resolve when all promises resolved/rejected
Promise.allSettled([
    Promise.resolve('Success'),
    Promise.resolve('Success'),
    Promise.reject('ERROR')
]).then(res => console.log(res));

Promise.all([
    Promise.resolve('Success'),
    Promise.resolve('Success'),
    Promise.reject('ERROR')
])
    .then(res => console.log(res))
    .catch(err => console.error(err));


// Promise.any();
// Resolve when any promise resolved/rejected
Promise.any([
    Promise.reject('ERROR'),
    Promise.resolve('Success'),
    Promise.resolve('Success2')
])
    .then(res => console.log(res))
    .catch(err => console.error(err));

// -----------------------------------------------------------------------
// CHALLENGE 3 //
// -----------------------------------------------------------------------