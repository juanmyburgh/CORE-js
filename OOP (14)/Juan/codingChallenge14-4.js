'use strict';
/*
1. Use a constructor function to implement an Electric Car(called 'EV') as a child "class" of 'Car'.Besides a make and current speed, the 'EV' also has the current battery charge in % ('charge' property)

2. Implement a 'chargeBattery' method which takes an argument
'chargeTo' and sets the battery charge to 'chargeTo'

3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1 %.Then log a message like this: 'Tesla going at 140km / h, with a charge of 22 % '

4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery'(charge to 90 %).Notice what happens when you 'accelerate'! Hint: Review the definiton of polymorphism 

Test data:
§ Data car 1: 'Tesla' going at 120 km / h, with a charge of 23 %
*/


class CarCL {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} speeds up to ${this.speed}km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} slows to ${this.speed}km/h`);
        return this;
    }
};

class EVCL extends CarCL {
    #charge;

    constructor(make, speed, charge) {
        super(make, speed)
        this.#charge = charge;
    }

    accelerate() {
        this.speed += 20;
        this.#charge -= 1;

        console.log(`${this.make} going at ${this.speed}km/h, with a charge of ${this.#charge}%`);

        return this;
    }

    chargeBattery(chargeTo) {
        console.log(`Battery charged from ${this.#charge}% to ${chargeTo}%`);
        this.#charge = chargeTo;
        return this;
    }
}

const rivian = new EVCL('Rivian', 120, 23);
// console.log(rivian.#charge);

// rivian.accelerate();
// rivian.accelerate();
// rivian.accelerate();
// rivian.accelerate();
// rivian.accelerate();
// rivian.brake();
// rivian.brake();
// rivian.brake();
rivian.accelerate().accelerate().brake().chargeBattery(30).accelerate().accelerate().accelerate().chargeBattery(50);