// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const cl = function (text) { console.log(text); };

// -----------------------------------------------------------------------------
/*

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

/*
// 1) Understanding the problem;
// - what is amplitude? Answer: max difference between 2 points ex. highest & lowest values
// - How to find highest & lowest value of temps?
// - What is the error? and what to do?

// 2) Break into sub-problems;
// - how to handle error values - just ignore them lol
// - How do we find highest value
// - how do we find lowest value



// 3) Just try it
const calcTempAmplitude = function (arr) {
    let max = 0, min = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        let currentTemp = arr[i];

        if (typeof currentTemp !== 'number') continue;

        if (currentTemp > max) max = currentTemp;
        if (currentTemp < min) min = currentTemp;
    }
    return max - min;
};

let amplitude = calcTempAmplitude(temperatures);

console.log(`Single array Amplitude: ${amplitude}`);


/*
// PROBLEM 2:
// Function should now receive 2 arrays of temps


// 1) Understanding the problem;
// - With 2 arrays, should we implement the same functionality twice? No, needs to be dynamic in case more than 2 are required

// 2) Break into sub-problems;
// - Merge 2+ arrays



const temperatures2 = [52, -9];

const calcMultiTempAmplitude = function (arr1, arr2) {
    let temps = arr1.concat(arr2);    
    let max = temps[0], min = temps[0];
    
    for (let i = 0; i < temps.length - 1; i++) {
        let currentTemp = temps[i];

        if (typeof currentTemp !== 'number') continue;

        if (currentTemp > max) max = currentTemp;
        if (currentTemp < min) min = currentTemp;
    }
    return max - min;
};

amplitude = calcMultiTempAmplitude(temperatures, temperatures2);

console.log(`Multi array Amplitude: ${amplitude}`);

*/

// -----------------------------------------------------------------------------
// Debugging
// Identify => Find => Fix => Prevent

// -----------------------------------------------------------------------------
// Debugging with Consoles & Breakpoints

const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celsius',

        // C) FIX
        value: Number(prompt('Degrees celsius'))
    };

    // console.log(measurement);

    // B) FIND
    console.table(measurement);
    // debugger; - automatically opens debug tool at this point

    // console.log(measurement.value);
    // console.warn(measurement.value);
    // console.error(measurement.value);

    const kelvin = measurement.value + 273;
    return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin())



/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [52, -9];
const calcMultiTempAmplitude = function (arr1, arr2) {
    let temps = arr1.concat(arr2);    
    let max = temps[0], min = temps[0];
    for (let i = 0; i < temps.length - 1; i++) {
        let currentTemp = temps[i];

        if (typeof currentTemp !== 'number') continue;

        if (currentTemp > max) max = currentTemp;
        if (currentTemp < min) min = currentTemp;
    }
    return max - min;
};

const amplitude = calcMultiTempAmplitude(temperatures, temperatures2);
console.log(`Multi-array Amplitude: ${amplitude}`);
*/

