'use strict';

const print = (make, speed) => console.log(`${make}: ${speed}km/h`);

// Task 1
const car = function (make, speed) {
    print(make, speed);

    this.make = make;
    this.speed = speed;
};

// Task 2
car.prototype.accelerate = function () {
    this.speed += 10;
    print(this.make, this.speed);;
};

// Task 3
car.prototype.brake = function () {
    this.speed -= 5;
    print(this.make, this.speed);
};

// Task 4
const BMW = new car('BMW', 120);
const Mercedes = new car('Mercedes', 95);

BMW.accelerate();
Mercedes.accelerate();
BMW.brake();
BMW.accelerate();
Mercedes.brake();
Mercedes.accelerate();
BMW.brake();

