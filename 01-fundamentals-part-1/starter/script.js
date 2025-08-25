// JavaScript Fundamentals - Hour 4
// Type Conversion and Coercion

// type conversion (manual)
const inputYear = "1991";
console.log(Number(inputYear), inputYear); // 1991, "1991"
console.log(Number(inputYear) + 18); // 2009

console.log(Number("Jonas")); // NaN (Not a Number)
console.log(typeof NaN); // "number" (weird but true!)

console.log(String(23), 23); // "23", 23
console.log(typeof String(23)); // "string"

// type coercion (automatic)
console.log("I am " + 23 + " years old"); // "I am 23 years old"
console.log("23" - "10" - 3); // 10 (strings become numbers)
console.log("23" / "2"); // 11.5 (division converts to numbers)
console.log("23" * "2"); // 46 (multiplication converts to numbers)

// Can you guess what these will output?
let n = "1" + 1; // What do you think?
n = n - 1; // What about now?
console.log(n);

console.log(2 + 3 + 4 + "5"); // Try to guess!
console.log("10" - "4" - "3" - 2 + "5"); // This one's tricky!

//Exercise 1: Conversion Detective
console.log("5" + 2); // "52" → because + with a string does concatenation
console.log("5" - 2); // 3   → string "5" becomes number 5
console.log("5" * 2); // 10  → string "5" becomes number 5
console.log("5" / 2); // 2.5 → string "5" becomes number 5

////////////////////////////////////
// Equality Operators: == vs. ===

// Let's see what happens:
console.log("18" === 18); // false - different types
console.log("18" == 18); // true - coercion happens
console.log(18 === 18); // true - same type and value

// Why == can be dangerous
console.log("0" == 0); // true (string converted)
console.log(0 == false); // true (boolean converted)
console.log("0" == false); // true (both converted!)
console.log(null == undefined); // true (special case)

// Weird cases that cause bugs
console.log("" == 0); // true
console.log("   " == 0); // true (spaces trimmed!)

//Exercise 1: Equality Detective
// Test these comparisons - predict first, then run:
console.log(5 === "5"); // Your guess: ?
console.log(5 == "5"); // Your guess: ?
console.log(true === 1); // Your guess: ?
console.log(true == 1); // Your guess: ?
console.log(false === 0); // Your guess: ?
console.log(false == 0); // Your guess: ?

////////////////////////////////////
// Logical Operators

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // AND: both must be true
console.log(hasDriversLicense || hasGoodVision); // OR: one must be true
console.log(!hasDriversLicense); // NOT: inverts the value

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && !isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

//Exercise 1: Club Entry System
// Create a club entry system with these rules:
// Entry allowed if: (age >= 21 AND hasID) OR isVIP

const age = 19; // Try different values
const hasID = true; // Try different values
const isVIP = false; // Try different values

// Your logic here:
if ((age >= 21 && hasID) || isVIP) {
  console.log('Welcome to the club!');
} else {
  console.log('Sorry, you cannot enter');
}

//Exercise 2: Weather Advisor
// Create a weather advisor:
const temperature = 25; // Celsius
const isRaining = false;
const isWindy = true;

// Advice rules:
// Perfect day: temp 20-30 AND not raining AND not windy
// Good day: temp 15-35 AND not raining
// Stay inside: anything else

if (temperature >= 20 && temperature <= 30 && !isRaining && !isWindy) {
  console.log("It's a perfect day!");
} else if (temperature >= 15 && temperature <= 35 && !isRaining) {
  console.log("It's a good day!");
} else {
  console.log("Better stay inside.");
}

//Exercise 1: Status Messages
// Convert these if/else to ternary operators:

// 1. Login status
const isLoggedIn = true;
let welcomeMessage;
if (isLoggedIn) {
  welcomeMessage = "Welcome back!";
} else {
  welcomeMessage = "Please sign in";
}
// Ternary version: ?

// 2. Price with discount
const isPremium = false;
let price;
if (isPremium) {
  price = 100 * 0.8; // 20% discount
} else {
  price = 100;
}
// Ternary version: ?

//Exercise 2: Smart Responses
// Create smart responses using ternary in template literals:
const score = 85;
const weather = "sunny";
const battery = 15; // percentage

// Messages
const scoreMsg = `Your score: ${score} (${score >= 60 ? "Passed" : "Failed"})`;
const weatherMsg = `Weather is ${weather} (${weather === "sunny" ? "Great for outdoor activities" : "Stay inside"})`;
const batteryMsg = `Battery: ${battery}% (${battery < 20 ? "Low battery warning" : "Battery OK"})`;

// Output
console.log(scoreMsg);
console.log(weatherMsg);
console.log(batteryMsg);

//Final Challenge: Tip Calculator
////////////////////////////////////
// Coding Challenge #4

const bill = 275; // Try 275, 40, 430

// Step 1: Create the tip calculation using ternary operator
// Rule: 15% if between 50-300, otherwise 20%
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

// Step 2: Create beautiful output with template literal
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

