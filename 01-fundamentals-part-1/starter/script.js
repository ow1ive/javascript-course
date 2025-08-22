////////////////////////////////////
// Basic Operators - Math operators
console.log("=== MATH OPERATORS ===");

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah); // 46, 19

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 = 8

console.log("Math operations:");
console.log("Addition:", 10 + 5); // 15
console.log("Subtraction:", 20 - 8); // 12
console.log("Multiplication:", 4 * 7); // 28
console.log("Division:", 15 / 3); // 5
console.log("Exponentiation:", 2 ** 3); // 8

// Math with strings!
const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName); // "Jonas Schmedtmann"

console.log("Hello " + "World" + "!"); // "HelloWorld!"
console.log("I am " + 25 + " years old"); // "I am 25 years old"

////////////////////////////////////
// Assignment operators
console.log("=== ASSIGNMENT OPERATORS ===");

let x = 10 + 5; // 15
console.log("x starts as:", x);

x += 10; // Same as: x = x + 10 = 25
console.log("After x += 10:", x);

x *= 4; // Same as: x = x * 4 = 100
console.log("After x *= 4:", x);

x /= 2; // Same as: x = x / 2 = 50
console.log("After x /= 2:", x);

x++; // Same as: x = x + 1
console.log("After x++:", x); // 51

x--; // Same as: x = x - 1
x--; // Again: x = x - 1
console.log("After x-- twice:", x); // 49

//Exercise: Score Calculator
var score = 100;
score += 50;
score *=2;
score -= 25;
score ++;
score ++;
console.log("Final score is:", score);

////////////////////////////////////
// Comparison operators
console.log("=== COMPARISON OPERATORS ===");

console.log("Age comparison:");
console.log(ageJonas > ageSarah); // true (46 > 19)
console.log(ageSarah >= 18); // true (19 >= 18)
console.log(ageJonas < 30); // false (46 < 30)

console.log("Number comparisons:");
console.log(25 > 20); // true
console.log(15 < 10); // false
console.log(18 >= 18); // true
console.log(16 <= 15); // false

const isFullAge = ageSarah >= 18;
console.log("Sarah is adult:", isFullAge); // true

const isJonasOlder = ageJonas > ageSarah;
console.log("Jonas is older:", isJonasOlder); // true

console.log("Complex comparison:");
console.log(now - 1991 > now - 2018); // Same as: ageJonas > ageSarah

// Exercise: Age check
const myAge = 20;

console.log("Am I at least 18?", myAge >= 18); // true

console.log("Is 100 greater than 99?", 100 > 99); // true

const isAdult = myAge >= 18;
console.log("Comparison Result:", isAdult); // true

////////////////////////////////////
// Coding Challenge #1 - BMI Calculator

// Test Data 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// Your code here:
// 1. Calculate BMIs
const bmiMark = massMark / (heightMark ** 2);
const bmiJohn = massJohn / (heightJohn ** 2);
// 2. Create markHigherBMI variable
const markHigherBMI = bmiMark > bmiJohn;
// 3. Log results to console
console.log("Mark's BMI:", bmiMark);
console.log("John's BMI:", bmiJohn);
console.log("Does Mark have a higher BMI than John?", markHigherBMI);