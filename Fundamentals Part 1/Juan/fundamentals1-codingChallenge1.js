/* 
BMI = mass / height ** 2 
    = mass / (height * height)
(mass in kg and height in meter)

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.


Test data:
 Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.

 Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.

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