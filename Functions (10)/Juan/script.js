'use strict';

/*
// -----------------------------------------------------------------------
// Default Parameters

const bookings = [];

const createBooking = function (
    flightNum,
    numPassengers = 1,
    price = 199 * numPassengers
) {

    const booking = {
        flightNum,
        numPassengers,
        price
    };

    console.log(booking);
    bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2);
createBooking('LH123', undefined, 500); // skip default param, leave default


// -----------------------------------------------------------------------
// Passing Args: Value vs Reference

const flight = 'LH234';
const juan = {
    name: 'Juan Myburgh',
    passport: 2439769708
};

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';    // this gets reassigned block scope
    passenger = 'Mr. ' + passenger.name; // this points to same reference & changes

    console.log(passenger);
    if (passenger.passport === 2439769708) {
        alert('Checked in')
    } else {
        alert('Wrong Passport Num!')
        console.log(passenger.passport);
    };
};

// checkIn(flight, juan);
// console.log(flight);
// console.log(juan);


const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 100000000);

}

newPassport(juan)
checkIn(flight, juan);



// -----------------------------------------------------------------------
// First-Class & Higher-Order functions

// First-Class
// First-Class; Store functions in variables/properties
const add = (a, b) => a + b;
const counter = {
    value: 23,
    inc: function () { this.value++; }
}
// First-Class; Pass functions as args to other functions
const greet = () => console.log('Hey Juan');
btnClose.addEventListener('click', greet);

// First-Class; Return functions from functions, call methods on functions
counter.inc.bind(someOtherObject);

// Higher-Order
// Higher-Order; function that recieves another function
const greet = () => console.log('Hey Juan');

// addEventListener is a higher-order function
btnClose.addEventListener('click', greet); // greet is a Callback function

// Higher-Order; function that returns a new function - ex. count()
function count() {  // this is a Higher-order function
    let counter = 0;
    return function () { // this is a Returned function
        counter++;
    }
}



// -----------------------------------------------------------------------
// Functions accepting callback functions

const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);

    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}

transformer('Javascript is fun', upperFirstWord);
console.log('-----------------');
transformer('Javascript is fun', oneWord);

// JS uses callbacks all the time
const high5 = function () {
    console.log('👋');

};
document.body.addEventListener('click', high5);
['Juan', 'Martha', 'Adam'].forEach(high5);


// -----------------------------------------------------------------------
// Functions returning functions

const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}
// Arrow function vers Challenge
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey = greet('Hey');
greeterHey('Juan');
greeterHey('Charie');
greet('Hello')('Juan');
greetArrow('Hi')('Juan');


// -----------------------------------------------------------------------
// The Call and Apply methods

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],

    // book: function(); <- old method
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })
    }
};

// lufthansa.book(239, 'Juan Myburgh');
// lufthansa.book(698, 'Charie Burger');
// console.log(lufthansa);


const eurowings = {
    airline: 'EuroWings',
    iataCode: 'EW',
    bookings: []
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sujith Dude');

// Call method
// Use Call method to repoint 'this.' to relevant object
// book.call(eurowings, 23, 'Sujith Dude');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Marie Cape');
// console.log(lufthansa);

const swissflight = {
    airline: 'SwissFlight',
    iataCode: 'SF',
    bookings: []
};

// book.call(swissflight, 962, 'Marie Cape');


// Apply method - not that used in modern js
const flightData = [583, 'George Cape'];

book.apply(swissflight, flightData);

// or just use instead:
book.call(swissflight, ...flightData);
// console.log(swissflight);

// Bind Method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookSF = book.bind(swissflight);
// bookEW(96, 'Steven W');
// bookSF(26, 'Steven W');

// some values are set by default
const bookEW96 = book.bind(eurowings, 96); // this sets the first param to 96
// bookEW96('Marie Cape');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);

    this.planes++;
    console.log(this.planes);

}
// lufthansa.buyPlane();

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); // the Bind here is used to set the this keyword in the function

// Partial Application
const addTax = (rate, value) => value + (value * rate);
console.log(addTax(0.2, 200));

// note the null param required to spec the 'this' keyword
const addGST = addTax.bind(null, 0.1);
// addGST = value => value + value * 0.1
// console.log(addGST(200));
// console.log(addGST(100));


// Challenge: function in function to do same as bind
// const addVAT = rate => value => console.log(value + value * rate);
const addVAT = function (rate) {
    return function (value) {
        console.log(value + value * rate);
    }
};
const addVAT2 = addVAT(0.2);
// addVAT2(1000);


// -----------------------------------------------------------------------
// Immediately Invoked Function Expressions

const runOnce = function () {
    console.log('This won\'t run again');
}
runOnce(); // this could be called again in future

// IIFE
(function () {
    console.log('This won\'t run again');
    const isPrivate = 23;
})();
// console.log(isPrivate);


(() => console.log('This arrow won\'t run again'))();
// note the functions aren't declared, and are wrapped in brackets ()

{
    const isPrivate = 23;
    var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);



// -----------------------------------------------------------------------
// Closures

const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
};
const booker = secureBooking();

booker(); // 1 passengers
booker(); // 2 passengers
booker(); // 3 passengers
// function has access to the variable environment (VE) of the execution context in which it was created
// Closure: VE attached to the function, exactly as it was at the time and place the function was created

// to view closures in console
console.dir(booker);


// -----------------------------------------------------------------------
// More Closure Examples

// Example 1
let f;

const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2);
    };
};

const h = function () {
    const b = 777;
    f = function () {
        console.log(b * 2);
    };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);
*/
// Example 2
const boardPassengers = function (n, wait) {
    const perGroup = n / 3;

    setTimeout(function () {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`)
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} secconds`);

}

const perGroup = 1000; // if it wasn't for closure, the function would use this value
boardPassengers(180, 3);

// setTimeout(function () {
//     console.log('TIMER');
// }, 1000);

