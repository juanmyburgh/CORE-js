'use strict';

// Data needed for a later exercise
// const flights =
// '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {// thu
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {// fri
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {// sat, could also do maths in property name ex. [`day-${2 + 4}`]
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  // ES6 can also remove ": function" from functions
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}!`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    const cleanedOthers = otherIngredients.join(', ');
    // console.log(cleanedOthers);
    return console.log(`Here is your delicious pizza with ${mainIngredient}, ${cleanedOthers}!`);
  }
};

/*
// -----------------------------------------------------------------------
// Destructuring Arrays

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;

// console.log(x, y, z);
// console.log(arr);


let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);


[main, secondary] = [secondary, main];
// console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// Nested Destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
// console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8];
// console.log(p, q, r);


// -----------------------------------------------------------------------
// Destructuring Objects

const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags
} = restaurant;
console.log(restaurantName, hours, tags);

// Default Values
const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Mutating Variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
// console.log(obj);

({ a, b } = obj);
// console.log(a, b);

// Nested objects
const { fri: { open: o, close: c } } = openingHours;
console.log(o, c);



restaurant.orderDelivery({
  time: '18:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});


restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});


// -----------------------------------------------------------------------
// Spread Operator (=...)

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(1, 2, 7, 8, 9);
// console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays or more
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Juan';
const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);
// console.log(`${ ...str } Myburgh`); - note this doesn't work

// Real World Example
// const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'), prompt('Ingredient 2?'), prompt('Last Ingredient?')];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// Objects
const newRestaraunt = { foundedIn: 1967, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaraunt);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);


// -----------------------------------------------------------------------
// Rest Pattern and Parameters (...=)

// 1) Destructuring

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu
];

// console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  return console.log(sum);
};

add(2, 3);
add(5, 7, 3, 2);
add(8, 2, 5, 1, 3, 4, 7, 8);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'salami');


// -----------------------------------------------------------------------
// Short Circuiting (&& and ||)

console.log('----- OR -----');
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Juan');   //if 1 TRUE, return first TRUE result
console.log('' || 'Juan');  //if 1 FALSE, return first TRUE result
console.log(true || 0);
console.log(undefined || null); // if FALSE, return last FALSE result
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);


console.log('----- AND -----');
console.log(0 && 'Juan');   // if 1 FALSE, return first FALSE result
console.log(7 && 'Juan');   // if all TRUE, return LAST TRUE result

console.log('Hello' && 23 && null && 'Juan'); // null


// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
// above can be written as below - i.e if first operant true then trigger second
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');


// -----------------------------------------------------------------------
// Nullish Coalescing operator (??)

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);


// -----------------------------------------------------------------------
// Logical Assignment Operators

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rose'
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<Anonymous>';
// rest2.owner = rest2.owner && '<Anonymous>';
rest1.owner &&= '<Anonymous>';
rest2.owner &&= '<Anonymous>';

console.log(rest1, rest2);

// note; can also do this:
// team1 < team2 && console.log('Team 1 is more likely to win');


// -----------------------------------------------------------------------
// Looping Arrays: The for-of loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// default
// for (const item of menu.entries()) console.log(`${item[0] + 1}: ${item[1]}`);
// destructured option
for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);

// console.log([...menu.entries()]);

// -----------------------------------------------------------------------
// Enhanced object literals
// made ES6 updates to Restaraunt obj + weekdays obj + opening hours obj


// -----------------------------------------------------------------------
// Optional Chaining (?.)

// console.log(restaurant.openingHours.mon);
// console.log(restaurant.openingHours.mon.open);

// if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`${day}: ${open}`);
};

// Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Juan', email: 'test@test.com' }];
// const users = [];
console.log(users[0]?.name ?? 'User array empty');



// -----------------------------------------------------------------------
// Looping Objects: Object Keys, Values & Entries

const properties = Object.keys(openingHours);
// console.log(properties);

let openStr = `We are open ${properties.length} days:`;
for (const day of properties) {
  openStr += ` ${day}, `;
};
// console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
// console.log(values);

// Entire Object
const entries = Object.entries(openingHours);
// console.log(entries);

// [key, value]
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
};


// -----------------------------------------------------------------------
// Sets
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza'
]);
console.log(ordersSet);

console.log(new Set('Juan'));

console.log(new Set());

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
console.log(ordersSet);
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)]; // note the spread operator in the array
console.log(staffUnique);
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size); // returns unique count of values

console.log(new Set('JuanMyburgh').size);


// -----------------------------------------------------------------------
// Maps: Fundamentals

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
console.log(rest);

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2)

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
// rest.clear();
console.log(rest);
console.log(rest.size);

console.log(rest.get([1, 2])); // note this does not work due to pointing to different point in heap, need to specify the arr and use as key
console.log(rest.get(arr));


// -----------------------------------------------------------------------
// Maps: Iteration

const question = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'js'],
  ['correct', 3],
  [true, 'Correct 🥳'],
  [false, 'Try again 💩']
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
};
const answer = 3; //Number(prompt('Your answer'));
// console.log(answer);
console.log(answer + `: ` + question.get(answer === question.get('correct')));

// Convert map to array
console.log([...question]);
// console.log([question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);


// -----------------------------------------------------------------------
// Summary: Which Data Structure to Use?

// Array, Set = simple list
// vs  Object, Map = key/value pairs

// Arrays vs Sets and Objects vs Maps

// Arrays
tasks = ['Code', 'Eat', 'Code']; // ["Code", "Eat", "Code"]
// Use when need ordered list of values, maybe duplicates
// Use when need to manipulate data

// Sets
tasks = new Set(['Code', 'Eat', 'Code']); // {"Code", "Eat"}
// Use when need to work with unique values
// Use for high-performance required
// Use for non-duplicated values

// Objects
task = {
  task: 'Code',
  date: 'today',
  repeat: true
};
// Easier to write and access with . and []
// Use when need to include functions (methods)
// Use when working with JSON (can convert to map)

// Maps
task = new Map([
  ['task', 'Code'],
  ['date', 'today'],
  [false, 'Start coding']
]);
// Better performance
// Keys can have any data type
// Easy to iterate & compute size
// Use when simply need to map key/values
// Use when you need keys that aren't strings


// -----------------------------------------------------------------------
// Working with Strings - pt 1

const airline = 'QANTAS Airline';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('S'));
console.log(airline.lastIndexOf('A'));
console.log(airline.indexOf('NTA'));

console.log(airline.slice(3, 5));

console.log(airline.slice(0,airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function(seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if(s === 'B' || s === 'E') console.log('You got a middle seat 🪑');
  else console.log('You did not get a middle seat');


};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Juan'));
console.log(typeof new String('Juan'));
console.log(typeof new String('Juan').slice(1));


// -----------------------------------------------------------------------
// Working with Strings - pt 2

const airline = 'Virgin Australia';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalisation in name
const passenger = 'jUaN'; // Juan
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// BONUS) function version
const passengerCorrect = function (passenger) {
  let passengerLower = passenger.toLowerCase();
  return passengerLower[0].toUpperCase() + passengerLower.slice(1);
};
console.log(passengerCorrect('sTeeViN'));

// Compare email
const email = 'hello@test.com';
const loginEmail = 'Hello@Test.Com \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalisedEmail = loginEmail.toLowerCase().trim();
console.log(normalisedEmail);
console.log(email === normalisedEmail);

// BONUS) function version
const checkEmail = function (email) {
  return email.toLowerCase().trim();
}
console.log(email, email === checkEmail(email), checkEmail(email));

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate')); // convert to reg expression, set global flag using 'g'

// Booleans - includes, startswith, endswith
// const plane = 'Airbus A320neo';
const plane = 'Beoing B730Ja';

console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));

console.log(plane.startsWith('Airb'));
console.log(plane.startsWith('B730'));

console.log(plane.endsWith('neo'));
console.log(plane.endsWith('Jazz'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the new Airbus family');
} else console.log('Not a new plane')

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board.');
  } else {
    console.log('Welcome aboard!');
  }
}
checkBaggage('I have a Laptop, some Food, and a Pocket Knife');
checkBaggage('I have some Socks and a Camera');
checkBaggage('I have a gun and some snacks');



// -----------------------------------------------------------------------
// Working with Strings - pt 3

// Split and Join
console.log('a+very+nice+string'.split('+'));
console.log('Juan Myburgh'.split(' '));

const [firstName, lastName] = 'Juan Myburgh'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitaliseName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
  }

  console.log(namesUpper.join(' '));

};

capitaliseName('jessica anne smith davis');
capitaliseName('juan henk myburgh');


// Padding
const message = 'Go to gate 23';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Juan'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + ''; //String(number);
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}
console.log(maskCreditCard(6712343476298));


// Repeat
const message2 = 'Bad Weather... All Departures Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
}
planesInLine(5);
planesInLine(3);
planesInLine(12);


*/
// -----------------------------------------------------------------------
// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

for (const flight of flights.split('+')) {
  // const [type, from, to, time] = flight.split(';');
  const flightData = flight.split(';');

  const cleanedType = flightData[0].replaceAll('_', ' ').trim();
  const warningType = cleanedType.startsWith('Delayed') ? '🔴 ' + cleanedType : cleanedType;

  const cleanLoc = function (loc) { return loc.slice(0, 3).toUpperCase() };
  const cleanedOrigin = cleanLoc(flightData[1]);
  const cleanedDestination = cleanLoc(flightData[2]);

  const str = `${warningType} from ${cleanedOrigin} to ${cleanedDestination} (${flightData[3].replaceAll(':', 'h')})`;

  console.log(str.padStart(50, ' '));
};



const newThing = new Set([1, 2]);
console.log(newThing);

newThing.