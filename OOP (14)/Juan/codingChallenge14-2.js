'use strict';

// Your tasks:
// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')

// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6)

// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6)

// 4. Create a new car and experiment with the 'accelerate' and 'brake' methods, and with the getter and setter.

// Test data:
// § Data car 1: 'Ford' going at 120 km/h


// Task 1
const print = (make, speed) => console.log(`${make}: ${speed}km/h`);

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        print(this.make, this.speed);
    }

    brake() {
        this.speed -= 5;
        print(this.make, this.speed);
    }

    // Task 2
    get speedUS() {
        console.log(`GET ${this.speed}km/h = ${this.speed / 1.6}mi/h`);
    }

    // Task 3
    set speedUS(speed) {
        this.speed = speed * 1.6;
        console.log(`SET ${speed}mi/h = ${this.speed}km/h`);
    }
};


// Task 4
// create new object
const honda = new CarCl('Honda', 60);
const ford = new CarCl('Ford', 120);
console.log(honda, ford);

// test old functions
honda.accelerate();
honda.brake();
ford.accelerate();
ford.brake();

// test getter/setter
honda.speedUS;
honda.speedUS = 70;

ford.speedUS;
ford.speedUS = 90;

console.log(honda, ford);




