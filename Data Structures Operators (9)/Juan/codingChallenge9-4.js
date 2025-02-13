'use strict';

/*
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value;
    const inputArray = text.split('\n');
    // console.log(inputArray);

    for (const [i, string] of inputArray.entries()) {
        const cleanedString = string.toLowerCase().trim();
        // console.log('cleanedString ' + cleanedString);

        const firstHalf = cleanedString.slice(0, cleanedString.indexOf('_'));
        // console.log('firstHalf ' + firstHalf);

        const secondHalf = cleanedString.slice(cleanedString.indexOf('_') + 1, cleanedString.length);
        const upperSecondHalf = secondHalf[0].toUpperCase() + secondHalf.slice(1);

        const output = firstHalf + upperSecondHalf;

        // console.log(i, string);

        console.log(`${output.padEnd(20)} ${'✅'.repeat(i + 1)}`);

    }
});
