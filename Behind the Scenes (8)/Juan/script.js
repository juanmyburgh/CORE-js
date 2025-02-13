'use strict';

// var is function-scoped
// let/const are block-scoped
/*
function calcAge(birthYear) {
    const age = 2024 - birthYear;

    function printAge() {
        let output = `${firstname} you are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;

            // const firstname = 'Steven';
            output = 'New Output!';

            const str = `Oh, and you're a millenial, ${firstname}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
        }
        // console.log(str);
        console.log(millenial);
        // add(2, 3);
        console.log(output);
    }
    printAge();

    return age;
};

const firstname = 'Juan';
calcAge(1996);


// --------------------------------------------------------------------------------
// Hoisting

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Juan';
let job = 'Programmer';
const year = 1996;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
    return a + b;
};

// const addExpr = function (a, b) {
//     return a + b;
// };

// var addArrow = (a, b) => a + b;

// Example

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);



// --------------------------------------------------------------------------------
// 'this' keyword

// special keyword/variable created for every function, takes the value of the 'owner' of the function
// 'this' is not static

// Method this = Object that is calling the method
// Function call this = undefined
// Arr func this = this of surrounding function (lexical this)
// Event listener this = DOM element that handler is attached to

// new, call, apply, bind = laaaater in course


// --------------------------------------------------------------------------------
// 'this' keyword in practice


console.log(this);

const calcAge = function (birthYear) {
    console.log(2024 - birthYear);
    console.log(this);
}
calcAge(1996);

const calcAgeArrow = birthYear => {
    console.log(2024 - birthYear);
    console.log(this);
}
calcAgeArrow(1996);


const juan = {
    year: 1996,
    calcAge: function () {
        console.log(this);
        console.log(2024 - this.year);
    }
};
juan.calcAge();

const tilly = {
    year: 2017,
};

// method borrowing;
tilly.calcAge = juan.calcAge;
tilly.calcAge();

const f = juan.calcAge;
f();    // note this is now a regular function call, and 'this' doesn't have a target

// --------------------------------------------------------------------------------
// 'this' - Regular functions vs Arrow functions

const juan = {
    firstName: 'Juan',
    year: 1996,
    calcAge: function () {
        console.log(2024 - this.year);

        // Solution 1
        // const self = this;  // self or that
        // const isMillenial = function () {
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996);
        //     // console.log(this.year >= 1981 && this.year <= 1996);
        // }

        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };

        isMillenial();
    },

    greet: () => console.log(`Hey ${this.firstName}`), // window.firstName
};
juan.greet();
juan.calcAge();

const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
};
addArrow(2, 5, 8);  // i.e. this will not work as no. args does not match


// --------------------------------------------------------------------------------
// Primitives vs Objects (primitives vs reference types)

// Primitives - i.e. primitive types
let age = 30;
let oldAge = age;
age = 31;
console.log(age, oldAge);


// Objects - i.e. reference types
const me = {
    name: 'Juan',
    age: 28,
};
const friend = me;
friend.age = 27;
console.log('Me: ', me);
console.log('Friend: ', friend);


// --------------------------------------------------------------------------------
// Primitives vs Objects (primitives vs reference types)

// primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// reference types
const ophelia = {
    firstName: 'Ophelia',
    lastName: 'Ng',
    age: 27
};
const marriedOphelia = ophelia;
marriedOphelia.lastName = 'Davis';
console.log('Before marriage:', ophelia);
console.log('After marriage:', marriedOphelia);
*/
// copying objects
const ophelia2 = {
    firstName: 'Ophelia',
    lastName: 'Ng',
    age: 27,
    family: ['Nick', 'Dad', 'Gramma']
};

// note the assign() is a 'Shallow' copy - i.e. doesn't affect array
const opheliaCopy = Object.assign({}, ophelia2);
opheliaCopy.lastName = 'Davis';

// objects in objects are still referencing same memory id in heap
opheliaCopy.family.push('Mum');

console.log('Before marriage:', ophelia2);
console.log('After marriage:', opheliaCopy);

