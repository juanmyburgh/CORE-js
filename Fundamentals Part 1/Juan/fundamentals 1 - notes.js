
// const country = 'Australia';
// const continent = 'Australia';
// const isIsland = true;
// let population = 7;
// let language = 'English';


/*
if (population > 33) {
    console.log(`${country}'s population is ${population - 33} million above average`)
} else {
    console.log(`${country}'s population is ${33 - population} million below average`)
}

// this needs to be converted to a number result
const numNeighbours = Number(
    prompt('How many neighbour countries does your country have?')
);
//note: can combine requesting a prompt from user and type setting

//note the (condition) {result} pattern
if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No neighbours');
}



//Sarah;
//English lang
// < 50mil pop
// not island

// note: should use '='x3 for strict checks, && instead of comments, !isIsland for 'NOT'
//language == 'English', population < 50, isIsland == false)
if (language === 'English' && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country}'s not right 4 u`);
};

// -------------------------------------------------------------------------------------
// data types:
// object or primitive
// primitive;
//      number - decimals/integers - 1234.56
//      string - single/double quotes for text - 'hello'/"hello"
//      boolean - true/false
//      undefined - value taken by variable not yet defined
//      null - empty value
//      symbol - unique value cannot be changed
//      bigint - larger integers than number can hold
// note: js has dynamic typing, do not need to declare type, type determined automatically (value has type, not the variable)
// first declaration use 'let', after that don't

// ctrl+shift+v to paste without formatting
// ctrl+/ to comment/uncomment



// let jsIsFun = true;
// console.log(jsIsFun);

// console.log(typeof jsIsFun);

// jsIsFun = 'hello';
// console.log(jsIsFun);
// console.log(typeof jsIsFun);

let year;
console.log(year);
console.log(typeof year);
year = 1996;
console.log(year);
console.log(typeof year);



// <let/const/var>
let age = 27;
age = 28;

const birthYear = 1996;
//birthYear = 1990; - doesn't work as is constant

// const job; - must be initialised
var job = 'programmer';
job = 'legend';

console.log(job);

lastName = 'Myburgh'; // this is bad
console.log(lastName);

// -------------------------------------------------------------------------------------
// <Basic Operations>

// +-* /
// note: can log multiple values using comma
// math operators
const now = 2039;
const ageJuan = now - 1996;
const ageCharie = now - 2025;
console.log(ageJuan, ageCharie);

console.log(ageJuan * 2, ageJuan / 10, 2 ** 3)
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Juan';
const lastName = 'Myburgh';
console.log(firstName + ' ' + lastName);

// -------------------------------------------------------------------------------------
// Assignment operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x /= 5; // x = x / 5 = 20
x++; // x = x + 1 = 21
x--; // x = x - 1 = 20
console.log(x);


// -------------------------------------------------------------------------------------
// Comparison operators
console.log(ageJuan > ageCharie); // >, <, >=, <=
console.log(ageCharie >= 18);

const isFullAge = ageCharie >= 18;

console.log(now - 1996 > now - 2025);
// js is smort, and so will only do comparison after calculation

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const now = 2040;
const ageJuan = now - 1996;
const ageCharie = now - 2025;

const averageAge = (ageJuan + ageCharie) / 2;
console.log(ageJuan, ageCharie, averageAge);


// -------------------------------------------------------------------------------------
// Strings & Template Literals

const firstName = 'Juan';
const job = 'Programmer';
const birthYear = 1996;
const currentYear = 2024;

const juan = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' year old ' + job + '!';

console.log(juan);

const juanNew = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job}!`;

console.log(juanNew);

console.log(`any old string..`);

// old multi-line string;
console.log('String with \n\
multiple \n\
lines');

// new multi-line strings are easy;
console.log(`Here is a new line
hello
there`);

// -------------------------------------------------------------------------------------
// Taking decisions; if-else statements

const age = 12;
if (age >= 16) {
    console.log(`Can get a Driver's license `);
} else {
    const yearsLeft = 16 - age;
    console.log(`Not old enough to get a Driver's license. Wait another ${yearsLeft} years`);
}


// can retrieve variables declared in code blocks{} by first declaring outside ex. century below
const birthYear = 2002;

let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century)



// -------------------------------------------------------------------------------------
// Type Conversion & Coercion
// type conversion
const inputYear = '1991';

// inputs pre/post conversion
console.log(inputYear, Number(inputYear));

// results pre/post conversion
console.log(inputYear + 18, Number(inputYear) + 18);

console.log(String(23), typeof String(23));


// type coercion
console.log('I am ' + 23 + ' years old');

console.log('23' + '10' + 3);

console.log('23' - '10' - 3);

console.log('23' * '2');

console.log('23' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);


// -------------------------------------------------------------------------------------
// Truthy/Falsy statements

// Falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Juan'));
console.log(Boolean({}));
console.log(Boolean());

const money = 1;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log("you didn't win the lotto");
}


let height;
if (height) {
    console.log(`Height is defined`);
} else {
    console.log(`Height not defined`);
}

// Equality Operators - == vs ===

const age = '18';

if (age == 18) {
    console.log(`Person is adult (loose)`);
}

if (age === 18) {
    console.log(`Person is adult (strict)`);
}


const favourite = Number(prompt(`What's your favourite Number?`));

console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log(`23 is gud`);
} else if (favourite === 18) {
    console.log(`18 is OK`);
} else if (favourite === 7) {
    console.log(`7 is nice`);
} else {
    console.log(`Input is not a valid number`);
}


if (favourite !== 23) {
    console.log(`input is not 23`);
}



// Boolean Logic - AND NOT OR

// ex. A; Person has a driver's license
// ex. B; Person has good vision

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // AND
console.log(hasDriversLicense || hasGoodVision); // OR
console.log(!hasDriversLicense); // NOT

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired); // AND

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log(`ye sure`);
} else {
    console.log(`nah`);
}

// -------------------------------------------------------------------------------------
// Switch statement

const day = 'Monday';

switch (day) {
    case 'Monday': // day === 'Monday'
        console.log(`Plan course struc`);
        console.log(`Do training`);
        break;
    case 'Tuesday':
        console.log(`Go to office`);
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log('Write sample code');
        break;
    case 'Friday':
        console.log('Party');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Existential dread');
        break;
    default:
        console.log('Invalid Day');
}

// example of the above Switch statement in if/else if/else format
if (day === 'Monday') {
    console.log('Plan course struc');
    console.log('Do training');
} else if (day === 'Tuesday') {
    console.log('Go to office');
} else if (day === 'Wednesday' || day === 'Thursday') {
    console.log('Write sample code');
} else if (day === 'Friday') {
    console.log('Party');
} else if (day === 'Saturday' || day === 'Sunday') {
    console.log('Existential dread');
} else {
    console.log('Invalid Day');
}

// -------------------------------------------------------------------------------------
// Expression vs statement

3 + 4 // Expression
1996 // Expression
true && false && !false // Expression

//statement
if (23 > 10) {
    const str = '23 is larger'; // this string is an Expression in a statement - ending in ; is a statment
}

const me = 'Juan';
console.log(`I'm ${2037 - 1991} years old ${me}`);


// -------------------------------------------------------------------------------------
// Conditional Operator

const age = 28;
// age >= 18 ? console.log(`I like to drink wine 🍷`) : console.log(`I like to drink water 💧`);

// condition ? true result : false result // this is an if statement on 1 line, also known as 'Ternary operator'

const drink = age >= 18 ? `wine 🍷` : `water 💧`;
console.log(drink);

// i.e. this can be used instead of all of the below;
/*
let drink2;
if (age >= 18) {
    drink2 = `wine 🍷`
} else {
    drink2 = `water 💧`
}
console.log(drink2);


// can use ternary operator in template literal
console.log(`I like to drink ${age >= 18 ? `wine 🍷` : `water 💧`}`)

    // ternary useful when need a quick expression


*/

// -------------------------------------------------------------------------------------
// 

