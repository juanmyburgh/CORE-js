'use strict';

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};
// Task 1
const EV = function (make, speed, battery) {
    Car.call(this, make, speed);
    this.battery = battery;
};

EV.prototype = Object.create(Car.prototype);

// Task 2
EV.prototype.chargeBattery = function (chargeTo) {
    console.log(`Battery charged from ${this.battery}% to ${chargeTo}%`);
    this.battery = chargeTo;
};

// Task 3
EV.prototype.accelerate = function () {
    this.speed += 20;
    this.battery -= 1;

    console.log(`${this.make} going at ${this.speed}km/h, with a charge of ${this.battery}%`);
};

// Task 4
const tesla = new EV('Tesla', 120, 23);
console.log('New Car:', tesla);

tesla.chargeBattery(90);
tesla.accelerate();
tesla.accelerate();

console.log('Update:', tesla);
