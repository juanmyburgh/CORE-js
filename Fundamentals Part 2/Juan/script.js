'use strict';

/*
// -------------------------------------------------------------------------
// Strict mode

// needs text above as very first thing in the document
// strict avoids some typical errors
// forbids certain things
// creates visible errrors where js would normally be silent


let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; // ex. hasDriverLicense would error in strict
if (hasDriversLicense) console.log(`I can drive`);

// Some reserved words:
// const interface = 'Audio';
// const private = 543;
// const if = true;

// -------------------------------------------------------------------------
// Functions

// Declare function
function logName() {
    console.log(`My name is Juan`);
}

// // calling / running / invoking function
logName();
logName();

// passing through parameters
function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

// note the value is Return from function
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const morningJuice = fruitProcessor(2, 4);
console.log(morningJuice);


// ex. generic console.log function;
function logger(text) {
    console.log(text);
}


// -------------------------------------------------------------------------
// Function Declaration vs Expressions
console.log(`---------<Function Declaration vs Expressions>---------`);

// Function declaration - can be called before definition/initialisation
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1996);

// Function expression - can't  be called before definition/initialisation
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1996);

console.log(age1, age2);


// -------------------------------------------------------------------------
// Arrow Functions
console.log(`---------<Arrow Functions>---------`);

// Arrow function
// const calcAge3 = birthYear => 2027 - birthYear; // Return is implicit
// const age3 = calcAge3(1996);

// console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1996, 'Jean'));
console.log(yearsUntilRetirement(1969, 'Poppy'));


// -------------------------------------------------------------------------
// Functions calling other Functions (i.e. recursive functions)
console.log(`---------<Recursive Functions>---------`);


// function cutFruit(fruit) {
//     return fruit * 4;
// }

const cutFruit = fruit => fruit * 4; // this works too as shorthand

function fruitProcessor(apples, oranges) {
    let applePieces = cutFruit(apples);
    let orangePieces = cutFruit(oranges);

    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;

    return juice
}
console.log(fruitProcessor(2, 3));


// -------------------------------------------------------------------------
// Reviewing Functions
console.log(`---------<Reviewing Functions>---------`);


const calcAge = function (birthYear) {
    return 2024 - birthYear;
}
// const calcAge = birthYear => 2024 - birthYear; // shofthand arrow function

// this is same as previous except as a regular function instead of Arrow
const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement
    } else {
        console.log(`${firstName} has already retired 🕺`);
        return -1;
    }
    // return retirement > 0 ? retirement : -1;

    // return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1996, 'Juan'))
console.log(yearsUntilRetirement(1950, 'Mike'))

// In summary, there are 3 main types of function formats;
// Function Declaration - function can be declared after being called
function calcAge(birthYear) {
    return 2037 - birthYear;
}
// Function Expression - essentially function value stored in a variable
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
// Arrow Function - quick one-line functions, note there is no 'this' keyword
const calcAge = birthYear => 2037 - birthYear


// -------------------------------------------------------------------------
// Intro to Arrays

const friend1 = 'Jayden';
const friend2 = 'Ryan';
const friend3 = 'Theo';

// 'literal' array syntax
const friends = ['Jayden', 'Ryan', 'Theo'];

console.log(friends);

// alt method to declare arrays
const y = new Array(1993, 1936, 1969, 2027);

// note arrays start at index 0
console.log(friends[0]);
console.log(friends[2]);

// get len of array - note it's a property
console.log(friends.length);

// retrieve last item in array
console.log(friends[friends.length - 1]);

friends[2] = 'James';
console.log(friends);

// note only primitive values are restricted from updates in const format

// friends = ['ophy', 'ellys']; - this wouldn't work

const firstName = 'Juan';
const juan = [firstName, 'Myburgh', 2024 - 1996, 'Programmer', friends];

console.log(juan);
console.log(juan.length);

// Exercise
const calcAge = function (birthYear) {
    return 2024 - birthYear;
}
const years = [1990, 1968, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

// calculating functions inside an array
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

console.log(ages);


// -------------------------------------------------------------------------
// Basic Array Operations (Methods)

// add elements
const friends = ['Jayden', 'Ryan', 'Theo'];
const newLength = friends.push('Adam'); // add to last index of array, also returns new length of array
console.log(friends);
console.log(newLength);

friends.unshift('Ophelia'); // add to first index of array, also returns new length of array
console.log(friends);

// remove elements
const popped = friends.pop(); // opposite of push, removes last index of array, returns removed element
console.log(popped);
console.log(friends);

friends.shift(); // remove first index of array, returns removed element
console.log(friends);

console.log(friends.indexOf('Ryan')); // returns index of value in array
console.log(friends.indexOf('Jebediah')); // returns -1 if not in array

console.log(friends.includes('Jayden')); // returns true if exists
console.log(friends.includes('Jebediah')); // returns false if not in array
// note includes uses Strict Equality, so uses type conversion

if (friends.includes('Ryan')) {
    console.log('You have a friend named Ryan');
}

// -------------------------------------------------------------------------
// Intro to Objects

const juanArray = [
    'Juan',
    'Myburgh',
    2024 - 1996,
    'programmer',
    ['Jayden', 'Ryan', 'Theo']
];

// return the array
console.log(juanArray);

// Object setup
const juan = {
    firstName: 'Juan',
    lastName: 'Myburgh',
    age: 2024 - 1996,
    job: 'programmer',
    friends: ['Jayden', 'Ryan', 'Theo']
}

// return the Object details
console.log(juan);

// return specific item from Object
console.log(juan.job);

// note: arrays are used for structed lists where order matters
// note: similar to Hashes, objects can be used for unordered lists where position doesn't matter too much, but object tag can be used


// -------------------------------------------------------------------------
// Dot vs Bracket notation

const juan = {
    firstName: 'Juan',
    lastName: 'Myburgh',
    age: 2024 - 1996,
    job: 'programmer',
    friends: ['Jayden', 'Ryan', 'Theo']
}

// dot notation - doesn't allow construction
console.log(juan.lastName);
console.log(juan['lastName']);

// bracket notation - allows construction
const nameKey = 'Name';
console.log(juan['first' + nameKey]);
console.log(juan['last' + nameKey]);

// console.log(juan.'last' + nameKey); - ex. this DOES NOT WORK

const interestedIn = prompt(`What do you want to know about Juan? Choose between; firstName, lastName, age, job, or friends.`);

if (juan[interestedIn]) {
    console.log(juan[interestedIn]);
} else {
    console.log(`That value doesn't exist!
    Choose between; firstName, lastName, age, job, or friends.`);
}

// console.log(juan.interestedIn); - this won't work as [juan] does not have a value called 'interestedIn'
console.log(juan[interestedIn]);

juan.location = 'Melbourne';
juan['coffee'] = 'Required';

console.log(juan);



// Mini Challenge
// "Juan has 3 friends, and his best friend is called Jayden"
console.log(`${juan.firstName} has ${juan.friends.length} friends, and his best friend is called ${juan.friends[0]}`);


// -------------------------------------------------------------------------
// Object Methods

// we can add key/value pairs as part of objects

const juan = {
    firstName: 'Juan',
    lastName: 'Myburgh',
    birthYear: 1996,
    job: 'programmer',
    friends: ['Jayden', 'Ryan', 'Theo'],
    hasDriversLicense: true,

    // hard coded example that still requires a value passed through
    // calcAge: function (birthYear) {
    //     return 2024 - birthYear;
    // }

    // dynamic function using this.value to calculate based on object properties
    // calcAge: function () {
    //     console.log(this);
    //     return 2024 - this.birthYear;
    // },

    // to reduce calling function multiple times;
    calcAge: function () {
        this.age = 2024 - this.birthYear
        return this.age
    },

    validLicense: function () {
        return this.hasDriversLicense === true ? "has a valid Driver's License" : "does not have a valid Driver's License"
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he ${this.hasDriversLicense ? "has" : "does not have"} a valid Driver's License.`
    }
};

// const calcAge = function (birthYear) {
//     return 2024 - birthYear;
// }

// hardcoded example
// console.log(juan.calcAge(1996));    //dot not.
// console.log(juan['calcAge'](1996)); //bracket not.

// js has 'this' - updated function in object above
// note the lack of needing a value passthrough, and ignoring value entered
// 'this' ensures we don't need to change things pointing to the name of object

// console.log(juan.calcAge());
// console.log(juan['calcAge']());

// mini Challenge
// "juan is a 28  year old programmer, and {he has a driver's license || he does not have a driver's license}"

console.log(juan.getSummary());

// note arrays are special objects



// -------------------------------------------------------------------------
// The For loop

// console.log('Lifting weights rep 1 🏋️‍♂️');
// console.log('Lifting weights rep 2 🏋️‍♂️');
// console.log('Lifting weights rep 3 🏋️‍♂️');

// for loop runs while condition = true
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights rep ${rep} 🏋️‍♂️`);
}


// -------------------------------------------------------------------------
// Looping arrays, breaking, continuing

// declaring sample array
const juanArray = [
    'Juan',
    'Myburgh',
    2024 - 1996,
    'programmer',
    ['Jayden', 'Ryan', 'Theo'],
    true
];

// declaring an empty arry
const types = [];

// looping across array, checking typeof
for (let i = 0; i < juanArray.length; i++) {
    console.log(i, juanArray[i], typeof juanArray[i]);

    // assigning type to related index in new array 'types'
    // types[i] = typeof juanArray[i];

    // can also use push
    types.push(typeof juanArray[i]);
}

console.log(types);


// dynamic calculation based on array values
console.log('-----<Dynamic calculations based on arrays>-----');
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    // console.log(2024 - years[i]);
    ages.push(2024 - years[i]);
}
console.log(ages);

// continue & break
console.log('-----<Return only strings>-----');
for (let i = 0; i < juanArray.length; i++) {
    if (typeof juanArray[i] !== 'string') continue;
    console.log(i, juanArray[i], typeof juanArray[i]);
}

console.log('-----<Break with number>-----');
for (let i = 0; i < juanArray.length; i++) {
    if (typeof juanArray[i] === 'number') break;
    console.log(i, juanArray[i], typeof juanArray[i]);
}


// -------------------------------------------------------------------------
// Looping backwards, recursive loops (i.e. loops in loops)

const juan = [
    'Juan',
    'Myburgh',
    2024 - 1996,
    'programmer',
    ['Jayden', 'Ryan', 'Theo']
];

for (let i = juan.length - 1; i >= 0; i--) {
    console.log(i, juan[i], typeof juan[i]);
}


for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---<Starting Exercise ${exercise}>---`);

    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Exercise ${exercise}: Lifting weights rep ${rep} 🏋️‍♂️`);
    }
}



// -------------------------------------------------------------------------
// While loop

console.log('----- For Loop -----');

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights rep ${rep} 🏋️‍♂️`);
}


console.log('----- While Loop -----');

// note it needs the value declared outside of the loop
let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights rep ${rep} 🏋️‍♂️`);
    rep++; // must increase the index to loop
}

*/


console.log('----- Random Roll Loop -----');

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop is about to end...`);
}