'use strict';

// OK = -10% > Recommended > 10%

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

// Task 1
dogs.forEach(dog => dog.recommendedFood = Math.floor((dog.weight ** 0.75 * 28)));
console.log(dogs);

// Task 2
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
// console.log(sarahDog);
console.log(`Sarah's dog eats too ${sarahDog.curFood > sarahDog.recommendedFood ? 'much' : 'little'}`);

// Task 3
// const ownersEatTooMuch = [];
// const ownersEatTooLittle = [];

// dogs.forEach(dog => {
//     if (dog.curFood < (dog.recommendedFood * 1.1)) {
//         ownersEatTooLittle.push(dog.owners)
//     } else if (dog.curFood > (dog.recommendedFood * 0.9)) {
//         ownersEatTooMuch.push(dog.owners)
//     }
// });
// console.log(ownersEatTooMuch.flat());
// console.log(ownersEatTooLittle.flat());

const ownersEatTooMuch = dogs
    .filter(dog => dog.curFood > dog.recommendedFood)
    .flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs
    .filter(dog => dog.curFood < dog.recommendedFood)
    .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// Task 4
console.log(`${ownersEatTooMuch.flat().join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.flat().join(' and ')}'s dogs eat too little!`);

// Task 5
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood) ?? false);

// Task 6
const checkEatingOkay = dog => dog.curFood < dog.recommendedFood * 1.1 && dog.curFood > dog.recommendedFood * 0.90;
console.log(dogs.every(checkEatingOkay));

// Task 7
// const ownersEatingEnough = [];
// dogs.forEach(dog => {
//     if (dog.curFood > dog.recommendedFood) {
//         ownersEatingEnough.push(dog.owners);
//     }
// });
// console.log(ownersEatingEnough.flat());
const dogsEatingOkay = dogs.filter(checkEatingOkay);
console.log(dogsEatingOkay);



// Task 8
const dogsGroupedbyPortion = Object.groupBy(dogs, dog => {
    if (dog.curFood > dog.recommendedFood) {
        return 'too-much'
    } else if (dog.curFood < dog.recommendedFood) {
        return 'too-little'
    } else {
        return 'exact'
    }
});
