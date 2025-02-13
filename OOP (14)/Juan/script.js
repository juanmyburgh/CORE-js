'use strict';
/*
// -----------------------------------------------------------------------
// What is OOP
// Objects model features
// Objects contain properties/data and code/methods
// Objects are self-contained
// Objects are building blocks & interact with others
// Interactions happen using API methods

// Abstraction
// Ignore/hide details that don't matter, to get an overview

// Encapsulation
// Properties/methods are private inside the class
// Can be exposed as an API

// Inheritance
// 1 class inherit from other (parent-child)
// reuse commmon logic
// child still has own methods/properties

// Polymorphism
// Child class overwrites method it inherited from parent
// ex. write own login() func. which overwrites params from parent class

// Classical OOP Note: Behaviour/Methods are copied from Class to all Instances

// -----------------------------------------------------------------------
// OOP in JS

// Prototype <- Object
// Prototype contains methods
// Object can access methods from Prototype
// "Prototypal Inheritance" - prototype contains methods that are accessible to all objects linked to the prototype
// Methods/behaviour is delegated to the prototype object

// Ex: array
// const num = [1, 2, 3];
// num.map(v => v * 2);
// Array.prototype.map()
// Array.prototype is the prototype of all array objects we create in JS

// -----------------------------------------------------------------------
// Constructor functions and the new Operator

const Person = function (firstName, birthYear) {
    // console.log(this);
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never create method inside constructor func;
    // this.calcAge = function () {
    //     console.log(2037 - this.birthYear);

    // };
};

const juan = new Person('Juan', 1996);

console.log(juan);

// 1. New {} is created
// 2. Function is called, 'this' = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2005);
const jack = new Person('Jack', 1995);
console.log(matilda, jack);

console.log(juan instanceof Person);


// -----------------------------------------------------------------------
// Prototypes

console.log(Person.prototype);

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

juan.calcAge();
matilda.calcAge();

console.log(juan.__proto__);
console.log(juan.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(juan));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(jack));

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(juan.species, matilda.species);

console.log(juan.hasOwnProperty('firstname'));
console.log(juan.hasOwnProperty('species'));

// -----------------------------------------------------------------------
// Prototypal Inheritance & the Prototype Chain
// Continues previous section

// Prototype NOT of "Person", but objects created by "Person"
// Contructor function [Person()] <--> Prototype [calcAge: function]
// Prototype <-- Object (juan) [.__proto__]

// new operator;
// 1. New {} is created
// 2. Function is called, 'this' = new blank {}
// 3. {} linked ([__proto__] property) to constructor function's prototype property
// 4. function automatically returns the new {}

// tldr juan.calcage() isn't found in Object, so checks the Prototype & run
// All objects created from constructor can run prototype functions

// Full example below;
// Person = Constructor Function
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

// Constructor Function's Prototype property
Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

// New object creation from Constructor function
const juan = new Person('Juan', 1996);
const matilda = new Person('Matilda', 2005);

Person.prototype.species = 'Homo Sapiens';
console.log(juan.species, matilda.species);

// Prototypal inheritance/delegation
juan.calcAge(); // 41


// -----------------------------------------------------------------------
// Prototypal inheritance on Built-in Objects
// Continues previous section

console.log(juan.__proto__);
// Object.prototype (top of prototype chain)
console.log(juan.__proto__.__proto__);
console.log(juan.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 4, 4, 5, 5, 9, 9, 3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

// Fun, but don't do
Array.prototype.unique = function () {
    return [...new Set(this)];
};

console.log(arr.unique());


const h1 = document.querySelector('h1');
console.dir(h1);
console.dir(x => x + 1);


// -----------------------------------------------------------------------
// ES6 Classes
// Do same thing as prototypes, but nicer

// Class expression
// const PersonCl = class {}

// Class declaration
class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // Methods will be added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet = function () {
        console.log(`Hey ${this.firstName}`);
    };
};

const jessica = new PersonCl('Jessica', '1996');
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//     console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode


// -----------------------------------------------------------------------
// Setters and Getters

// Object examples
const account = {
    owner: 'Juan',
    movements: [200, 250, -75, 80, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    }
};
// Set
console.log(account.latest);
// Get
account.latest = 750;
console.log(account.movements);

// Class example
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    get age() {
        return 2037 - this.birthYear;
    }

    // Set a property that already exists
    set fullName(name) {
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullName;
    }
};

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// console.log(jessica.age);
// jessica.fullName = 'Jessica Davis';
// console.log(jessica);

const waltah = new PersonCl('Waltah', 1968);
waltah.fullName = 'Waltah White';
console.log(waltah);


// -----------------------------------------------------------------------
// Static Methods

// Instance Methods
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.hey = function () {
    // console.log(`Hey there 👋`);
};
const juan = new Person('Juan', 1996);

Person.hey();
// juan.hey();


class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Static method
    static hey() {
        console.log(`Hey there 👋`);
        console.log(this);
    }
}
const jonas = new PersonCl('Jonas', 1965);
PersonCl.hey();
// jonas.hey();


// -----------------------------------------------------------------------
// Object.create

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);

    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};

const steve = Object.create(PersonProto);
console.log(steve);
steve.name = 'Steve';
steve.birthYear = 1965;
steve.calcAge();

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();


// -----------------------------------------------------------------------
// Inheritance between 'Classes': Constructor Functions

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
    // this.firstName = firstName;
    // this.birthYear = birthYear;
    Person.call(this, firstName, birthYear);
    this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);


Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);


// -----------------------------------------------------------------------
// Inheritance between 'Classes': ES6 Functions

class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Methods will be added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet = function () {
        console.log(`Hey ${this.fullName}`);
    };

    get age() {
        return 2037 - this.birthYear;
    }

    // Set a property that already exists
    set fullName(name) {
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullName;
    }

    // Static method
    static hey() {
        console.log(`Hey there 👋`);
        console.log(this);
    }

};

class StudentCL extends PersonCl {
    constructor(fullName, birthYear, course) {
        // Needs to happen first!
        super(fullName, birthYear);
        this.course = course;
    }

    introduction() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }

    calcAge() {
        console.log(`I'm ${2037 - this.birthYear} years old, but as a student I feel ${2037 - this.birthYear + 10}`);

    }
};

const martha = new StudentCL('Martha Iliadis', 1990, 'Nursing');
martha.introduction();
martha.calcAge();


// -----------------------------------------------------------------------
// Inheritance between 'Classes': Object.create

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);

    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
};

StudentProto.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();


// -----------------------------------------------------------------------
// Another Class example

class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this.locale = navigator.language;
        this.movements = [];

        console.log(`Thanks for opening an account, ${owner}`);
    }

    // Public Interfact
    deposit(val) {
        this.movements.push(val)
    }

    withdraw(val) {
        this.deposit(-val)
    }

    approveLoan(val) {
        return true;
    }

    requestLoan(val) {
        if (this.approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved for ${val}`);
        };
    }
};

const acc1 = new Account('Jonas', 'EUR', 1111, []);
console.log(acc1);

acc1.deposit(250);
acc1.withdraw(75);
console.log(acc1);

acc1.requestLoan(500);
console.log(acc1);

// Note the following 2 functions shouldn't be publicly accessible
acc1.approveLoan(500);
console.log(acc1.pin);


// -----------------------------------------------------------------------
// Encapsulation: Private Class Fields and Methods

// 1. Public Methods
// 2. Private Fields
// 3. Public Methods
// 4. Private Methods
// 5. Static version of above

class Account {
    // Public fields:
    locale = navigator.language;
    bank = 'Bankist';

    // Private fields:
    #movements = [];
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;

        // this.locale = navigator.language;
        // this.movements = [];

        console.log(`Thanks for opening an account, ${owner}`);
    }

    // Public Interface (API) - 'Public Methods'
    getMovements() {
        return this.#movements;
        // Not chainable
    }

    deposit(val) {
        this.#movements.push(val);
        return this;
    }

    withdraw(val) {
        this.deposit(-val);
        return this;
    }

    // Private method
    #approveLoan(val) {
        // Fake method
        return true;
    }

    requestLoan(val) {
        if (this.#approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved for ${val}`);
        };
        return this;
    }

    static #test() {
        return console.log('TEST');
    }
};

const acc1 = new Account('Jonas', 'EUR', 1111, []);
// acc1.deposit(750);
// acc1.withdraw(300);
acc1.movements = [];

console.log(acc1);

// acc1.#approveLoan(350);
// Static used on Account class, not object created
// Account.test();
// Account.#test();



// -----------------------------------------------------------------------
// Chaining Methods
// note: use previous section's class

const movementChain = acc1.deposit(300).withdraw(100).withdraw(50).requestLoan(2500).withdraw(200).getMovements();
// need to add (return this;) to the functions we need to chain
// turns into an account object

console.log(movementChain);


*/
// -----------------------------------------------------------------------
// ES6 Classes Summary

class Person {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Methods will be added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet = function () {
        console.log(`Hey ${this.fullName}`);
    };

    get age() {
        return 2037 - this.birthYear;
    }

    // Set a property that already exists
    set fullName(name) {
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullName;
    }

    // Static method
    static hey() {
        console.log(`Hey there 👋`);
        console.log(this);
    }

};

// explanation example extension below;
class Student extends Person {
    university = 'University of Lisbon';
    #studyHours = 0;
    #course;
    static numSubjects = 10;

    constructor(fullName, birthYear, startYear, course) {
        super(fullName, birthYear);

        this.startYear = startYear;

        this.#course = course;
    }

    introduce() {
        console.log(`I study ${this.#course} at ${this.university}`);

    }

    study(h) {
        this.#makeCoffee()
        this.#studyHours += h;
    }

    #makeCoffee() {
        return 'Here is a coffee for you ☕'
    }

    get testScore() {
        return this._testScore;
    }

    set testScore(score) {
        this._testScore = score <= 20 ? score : 0;
    }

    static printCurriculum() {
        console.log(`There are ${this.numSubjects} subjects`);
    }
}

const jonas = new Student('Jonas S', 2020, 2037, 'Medicine');
console.log(jonas);

jonas.study(3);
console.log(jonas);

console.log(jonas._testScore);
jonas._testScore = 65;
console.log(jonas.testScore);
console.log(jonas._testScore);