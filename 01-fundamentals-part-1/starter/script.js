// JavaScript Fundamentals - Hour 1
// My first JavaScript code!

let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("=== VARIABLES ===");

let firstName = "Jonas";
console.log(firstName);

let age = 30;
age = 31; // We can change let variables
console.log(age);

const birthYear = 1991;
console.log(birthYear);

// birthYear = 1990; // This would cause an error!

const PI = 3.1415;
console.log(PI);

var job = "programmer";
job = "teacher";
console.log(job);

console.log("=== DATA TYPES ===");

// Number (integers and decimals)
let age2 = 23;
console.log(age2);
console.log(typeof age2); // "number"

// String (text in quotes)
let firstName2 = "Jonas";
console.log(firstName2);
console.log(typeof firstName2); // "string"

// Boolean (true or false)
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun); // "boolean"

// Undefined (no value assigned yet)
let year;
console.log(year); // undefined
console.log(typeof year); // "undefined"

// Start as a number
let dynamicVariable = 23;
console.log(dynamicVariable, typeof dynamicVariable); // 23, "number"

// Change to a string
dynamicVariable = "Now I'm a string!";
console.log(dynamicVariable, typeof dynamicVariable); // "Now I'm a string!", "string"

// Change to a boolean
dynamicVariable = true;
console.log(dynamicVariable, typeof dynamicVariable); // true, "boolean"

console.log("=== PRACTICE  EXERCISES ===");
//Exercise 1: Personal Info Variables
const firstName3 = "Olive";
let age3 = 20;
const favoriteNumber = 14;
let likesJavaScript = true;

console.log(firstName3, typeof firstName3);
console.log(age3, typeof age3);
console.log(favoriteNumber, typeof favoriteNumber);
console.log(likesJavaScript, typeof likesJavaScript);

//Exercise 2: Variable Reassignment

let score = 100;
console.log(score);
score = 150;
console.log(score);

const finalScore = 100;
console.log(finalScore);
// finalScore = 150; // This would cause an error!
//let can be reassigned, but const cannot

///Exercise 3: Data Type Detective
// Use typeof to check the data type of these values:
console.log(typeof 42);        // number
console.log(typeof "Hello");   // string
console.log(typeof true);      // boolean
console.log(typeof undefined); // undefined


