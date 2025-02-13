/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// TASK 1
let scoreDolphins = ((97 + 112 + 101) / 3).toFixed(2);
let scoreKoalas = ((109 + 95 + 106) / 3).toFixed(2);


// TASK 2
// if (scoreDolphins > scoreKoalas) {
//     console.log(`Dolphins scored a higher average ${scoreDolphins} than Koalas ${scoreKoalas}`);
// } else if (scoreKoalas > scoreDolphins) {
//     console.log(`Koalas scored a higher average ${scoreKoalas} than Dolphins ${scoreDolphins}`);
// } else {
//     console.log('Both teams draw');
// }
*/

// BONUS 1 & 2
// min score of 100 req. - means team only wins if score is higher than opp
// min score of 100 req. for a draw as well


/* OVERENGINEERED solution BELOW
// data
let dolphinArray = Array(97, 112, 101);
let koalaArray = Array(109, 95, 106);

// filter on valid > 100 scores
function checkScores(score) {
    return score >= 100;
}

// get list of valid Doplhin scores, add all valid scores together, get average
let validDolphinScores = dolphinArray.filter(checkScores);
let dolphinValidSum = validDolphinScores.reduce((score, currentValue) => {
    return score + currentValue
}, 0);
let scoreDolphins = (dolphinValidSum / validDolphinScores.length);

// get list of valid Koala scores, add all valid scores together, get average
let validKoalaScores = koalaArray.filter(checkScores);
let koalaValidSum = validKoalaScores.reduce((score, currentValue) => {
    return score + currentValue
}, 0);
let scoreKoalas = (koalaValidSum / validKoalaScores.length);


// BONUS 1 - return log 
if (scoreDolphins > scoreKoalas) {
    console.log(`Dolphins scored a higher average (${scoreDolphins}) than Koalas (${scoreKoalas})`);
} else if (scoreKoalas > scoreDolphins) {
    console.log(`Koalas scored a higher average (${scoreKoalas}) than Dolphins (${scoreDolphins})`);
} else {
    console.log('Both teams draw');
} */


let scoreDolphins = ((97 + 112 + 101) / 3).toFixed(2);
let scoreKoalas = ((109 + 95 + 106) / 3).toFixed(2);


// BONUS 2 - return log
if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log(`Dolphins scored a higher average (${scoreDolphins}) than Koalas (${scoreKoalas})`);
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log(`Koalas scored a higher average (${scoreKoalas}) than Dolphins (${scoreDolphins})`);
} else if (scoreKoalas === scoreDolphins && scoreKoalas >= 100 && scoreDolphins >= 100) {
    console.log(`Both teams win the trophy (${scoreDolphins} = ${scoreKoalas})`);
} else {
    console.log(`Neither team wins the trophy`);
}