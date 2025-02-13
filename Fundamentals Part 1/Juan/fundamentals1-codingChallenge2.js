/* 
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

*/

let markMass, markHeight, johnMass, johnHeight;
let markBMI, johnBMI;

markMass = 95;
markHeight = 1.88;
markBMI = (markMass / markHeight ** 2).toFixed(2);

johnMass = 85;
johnHeight = 1.76;
johnBMI = (johnMass / johnHeight ** 2).toFixed(2);

console.log(markBMI, johnBMI, markHigherBMI);

if (markBMI > johnBMI) {
    console.log(`Mark has higher BMI (${markBMI}) than John (${johnBMI})`);
} else {
    console.log(`John has higher BMI (${johnBMI}) than Mark (${markBMI})`);
};