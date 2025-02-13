'use strict';

const calcAverageHumanAge = ages => console.log(
    ages
        .map(age => age <= 2 ? 2 * age : 16 + age * 4)
        .filter(age => age >= 18)
        .reduce((total, current, _, array) => total + current / array.length, 0)
);

console.log('-----Test Data 1-----');
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

console.log('-----Test Data 2----- ');
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
