'use strict';

// § Data 1: 
// Julia's data [3, 5, 2, 12, 7], 
// Kate's data [4, 1, 15, 8, 3]

// § Data 2: 
// Julia's data [9, 16, 6, 8, 3], 
// Kate's data [10, 5, 6, 1, 4]
//------------------------------------------------------------------------

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];

const checkDogs = function (arr1, arr2) {
    const dogsJuliaFixed = arr1.slice(1, 3);
    const dogsArrConcat = dogsJuliaFixed.concat(arr2);

    dogsArrConcat.forEach(function (age, i) {
        if (age >= 3) {
            console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
        } else {
            console.log(`Dog number ${i + 1} is still a puppy 🐶`);
        }
    });
};

console.log('-----TEST 1-----');
checkDogs(dogsJulia, dogsKate);

console.log('-----TEST 2-----');
checkDogs(dogsJulia2, dogsKate2);


