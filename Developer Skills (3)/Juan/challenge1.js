'use strict';

/*
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures.
Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

// Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.

2. Use the problem - solving framework: Understand the problem and break it up
into sub - problems!

// Test data:
    Data 1: [17, 21, 23]
    Data 2: [12, 5, -5, 0, 4]

*/
// -----------------------------------------------------------------------------

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

// TASK 1
const printForecast = function (arr) {
    let text = '';
    for (let i = 0; i < arr.length; i++) {
        let degrees = arr[i];
        text = text + ` ... ${degrees}ºC in ${i + 1} day${i > 0 ? 's' : ''}`;
    }
    console.log(text + ' ...');
};

// printForecast(data1);
// printForecast(data2);
printForecast(data1.concat(data2));