// JavaScript Fundamentals Part 2 - Hour 1

console.log("Part 2 is now working");

//Functions - Declarations and Expressions
console.log(" === Functions  === ");

function logger() {
  console.log("My name is Olive");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

console.log(fruitProcessor(5, 0));

const juice1 = fruitProcessor(5, 0);
const juice2 = fruitProcessor(2, 4);
const juice3 = fruitProcessor(3, 2);
console.log(juice1);;

//Functions Expressions
const calcAge = function (birthYear) {
    return 2025 - birthYear;
};

console.log(calcAge(2005));
console.log(calcAge(1991));

function introduce(firstName, lastName, age) {
    const introduction = `My name is ${firstName} ${lastName} and I am ${age} years old.`;
    return introduction;
}


console.log(introduce("Olive", "Musca", 20));

function yearsUntilRetirement(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years.`;
    } else {
        return `${firstName} has already retired.`;
    }   
}

console.log(yearsUntilRetirement(2005, "Olive"));

//global scope 
const globalVar = "I am global";

function testScope() {
    const localVar = ' I am local';
    console.log(localVar);
    console.log(globalVar);
}

// Coding Challenge #1

// Function to calculate average of 3 scores
function calcAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}

// Function to check winner
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
  } else {
    return `No team wins! Koalas: ${avgKoalas}, Dolphins: ${avgDolphins}`;
  }
}

// Test Data 1
let scoreDolphins = calcAverage(44, 90, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas));

// Test Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));
