// JavaScript Fundamentals - Hour 3
////////////////////////////////////
// Strings and Template Literals
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

// The modern way - ES6 Template Literals
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

// Any expression works inside ${}
console.log(`I'm ${2037 - 1991} years old`);
console.log(`Math works: ${2 + 3} equals five`);
console.log(`Comparisons too: ${5 > 3}`); // true

// You can use backticks for any string
console.log(`Just a regular string...`);

// Old way - painful
console.log(
  "String with \n\
multiple \n\
lines"
);

// New way - natural
console.log(`String
multiple
lines`);

//Exercise 1: Personal Introduction
const myName = "Olive"; // Your name
const myAge = 20; // Your age
const myJob = "student"; // Your job/student status
const currentYear = 2025;
console.log(`Hi, I'm ${myName}, a ${myAge} year old ${myJob}!`);

//Exercise 2: Math in Templates
const myAge2 = 20;
const currentYear2 = 2025;

console.log(`Born in ${currentYear - myAge}, 10 * 5 = ${10 * 5}, Adult: ${myAge >= 18}`);

////////////////////////////////////
// Taking Decisions: if / else Statements
const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const score = 85;

if (score >= 60) {
  console.log(`You passed with ${score} points! 🎉`);
  console.log("Congratulations!");
} else {
  const pointsNeeded = 60 - score;
  console.log(`You failed. Need ${pointsNeeded} more points.`);
}

//Exercise 1: Grade Calculator
// Create a grade calculator:
const testScore = 78; // Change this to test different scores

// Use if/else to determine grade
if (testScore >= 90) {
  console.log("Excellent! Grade A");
} else if (testScore >= 80 ) {
  console.log("Good job! Grade B");
} else if (testScore >= 70) {
  console.log("Not bad! Grade C");
} else if (testScore >= 60) {
  console.log("You passed! Grade D");
} else {
  console.log("You failed! Study harder");
}

// Create an age verification system:
const userAge = 20; // Change this to test

if (userAge >= 18) {
  console.log("Welcome! You can access all content");
} else if (userAge >= 13) {
  console.log("Welcome! Restricted content only");
} else {
  console.log("Sorry, you're too young");
}

////////////////////////////////////
// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Jonas")); // true
console.log(Boolean({})); // true (empty object)
console.log(Boolean("")); // false (empty string)

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

// Test these values with Boolean() and if statements:
const values = [0, 1, "", "hello", undefined, null, NaN, {}, []];

values.forEach(value => {
  console.log("Value:", value);
  console.log("Boolean:", Boolean(value));
  
  if (value) {
    console.log("Truthy!");
  } else {
    console.log("Falsy!");
  }
  
  console.log("------");
});

//Coding Challenge #2: BMI Comparison

// Reuse your BMI calculation from Challenge #1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log("Mark's BMI:", BMIMark, "John's BMI:", BMIJohn);

// Compare BMIs and create intelligent messages
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark.toFixed(2)}) is higher than John's (${BMIJohn.toFixed(2)})!`);
} else if (BMIJohn > BMIMark) {
  console.log(`John's BMI (${BMIJohn.toFixed(2)}) is higher than Mark's (${BMIMark.toFixed(2)})!`);
} else {
  console.log(`Wow! Both Mark and John have the same BMI (${BMIMark.toFixed(2)})`);
}

