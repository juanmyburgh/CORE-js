'use strict';

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

// Your tasks:
1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)

2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method

3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"


Test data:
Mark masss 78 kg and is 1.69 m tall.
John masss 92 kg and is 1.95 m tall.


*/
// ----------------------------------------------------------------------

// Task 1
// const Mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69
// };

// const John = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95
// };

// Task 2
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        // this.bmi = (this.mass / (this.height ** 2)).toFixed(2);
        this.bmi = (this.mass / (this.height * this.height)).toFixed(2);
        return this.bmi
    }
};

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        // this.bmi = (this.mass / (this.height ** 2)).toFixed(2);
        this.bmi = (this.mass / (this.height * this.height)).toFixed(2);
        return this.bmi
    }
};

// to instantiate the values as temp variables of each object
mark.calcBMI();
john.calcBMI();

// Task 3
let higherBMI;

if (mark.bmi > john.bmi) {
    higherBMI = `${mark.fullName}'s bmi (${mark.bmi}) is higher than ${john.fullName}'s bmi (${john.bmi}).`
} else if (john.bmi > mark.bmi) {
    higherBMI = `${john.fullName}'s bmi (${john.bmi}) is higher than ${mark.fullName}'s bmi (${mark.bmi}).`
} else {
    higherBMI = `${mark.fullName}'s bmi (${mark.bmi}) is equal to ${john.nafullNameme}'s bmi (${john.bmi}).`
}

console.log(higherBMI);

// note the john/mark.bmi directly references the temp variable this.bmi foreach object, and ignores the Return value of the functions
// wryyyyyyyyyy