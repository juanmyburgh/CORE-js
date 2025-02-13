'use strict';

const calcAverageHumanAge = function (ages) {
    // let humanAges = [];

    // Task 1:
    const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
    // ages.forEach(dogAge => dogAge <= 2 ? humanAges.push(2 * dogAge) : humanAges.push(16 + dogAge * 4));
    console.log(humanAges);

    // Task 2:
    const adultDogs = humanAges.filter(age => age >= 18);
    console.log(adultDogs);

    // Task 3:
    // [2, 3] = (2+3)/2 = 2.5 === 2/2+3/2 = 2.5
    // const averageHumanAge = adultDogs.reduce((total, current, _, array) => (total += current) / array.length, 0).toFixed(2);

    const averageHumanAge = adultDogs.reduce((total, current, _, array) => (total += current) / array.length, 0).toFixed(2);

    console.log(averageHumanAge);
};

console.log('-----Test Data 1-----');
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

console.log('-----Test Data 2----- ');
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
