'use strict';

//const person = {
//    name: 'Jonas',
//    greet: function() {
 //       console.log(`Hello, I am ${this.name}`);
  //  }
//};

//person.greet(); 

//const anotherPerson = {
//    name: 'Sarah'
//};

//anotherPerson.greet = person.greet;
//anotherPerson.greet();

// detached function
//const greetFunction = person.greet;
//greetFunction(); // 'Hello I am undefined' or error in strict mode

///const obj = {
 //   name: 'Object',
 //   regularMethod: function() {
//        console.log('Regular:', this.name);
 //   },

 //   arrowMethod: () => {
  //      console.log('Arrow:', this.name);
 //   },
//};

//obj.regularMethod();
//obj.arrowMethod(); // 'Regular: Object'

//const quiz = {
 // name: 'Quiz Object',
 // regularMethod() {
 //   console.log('Regular:', this.name);
 // },
 // arrowMethod: () => {
  //  console.log('Arrow:', this.name);
 // },
//};

//quiz.regularMethod(); // Predict: ?
//quiz.arrowMethod(); // Predict: ?

//const timer = {
 //   name: 'Timer',
    // using the old ways
 //   start: function() {
//        console.log(`${this.name} starting...`);

 //       const self = this;

 //       setTimeout(function() {
 //           console.log(`${self.name} finished!`);
  //      }, 1000);
 //    },
     //using arrow function
 //    startModern: function() {
 //           console.log(`${this.name} starting modern...`)

 //           setTimeout(() => {
//                console.log(`${this.name} finished modern!`);
 //           });
 //    },
//};

//timer.start();
//timer.startModern();

//const user = {
 // name: 'Alice',
  //hobbies: ['reading', 'coding', 'gaming'],

  // BROKEN: arrow function loses `this`
 // printHobbiesBad: () => {
 //   this.hobbies.forEach(hobby => {
 //     console.log(`${this.name} likes ${hobby}`); // this.name is undefined!
 //   });
 // },

  // FIXED: regular function preserves `this`
//  printHobbiesGood() {
//    this.hobbies.forEach(hobby => {
 //     console.log(`${this.name} likes ${hobby}`); // this.name works!
 //   });
 // },
//};

// user.printHobbiesBad(); 
//user.printHobbiesGood(); 

//const functionTypes = {
 //   regularFunction: function() {
 //       console.log('Arguments length:', arguments.length);
  //      console.log('First argument:', arguments[0]);
 //   },
 //   arrowFunction: () => {
//            console.log(arguments);
//            console.log('Arguments function called');
//    },

 //   modernFunction: (...args) => {
//        console.log('Args length:', args.length);
//        console.log('First arg:', args[0]);
//    },
//};

//functionTypes.regularFunction('hello', 'world');
//functionTypes.arrowFunction('test');
//functionTypes.modernFunction('modern', 'approach');

//Primitive
// let age = 30;

// // we copy the primitive value making independent copy
// let oldAge = age;
// age = 31;
// console.log(age); // 31
// console.log(oldAge); // 30

// //Object Heap
// //objects are stored in heap memory and variables hold references to these objects
// const me = { name: 'Jonas', age: 30};

// const friend = me; 

// friend.age = 27;

// console.log('Me', me); // {name: 'Jonas', age: 27}
// console.log('Friend', friend); // {name: 'Jonas', age: 27}

function changeAge(person, newAge) {
    person.age = newAge;
    return person;
}

const originalPerson = { name: 'Sarah', age: 25};
const updatedPerson = changeAge(originalPerson, 30);

console.log('Same object:', originalPerson === updatedPerson);
 // true

//Solution to make a copy
const original = {
  name: 'Alice',
  age: 28,
  hobbies: ['reading', 'coding'],
};

// Spread operator shallow copy
const shallowCopy = { ...original };

shallowCopy.name = 'Bob';

console.log('Original name:', original.name); // Alice
console.log('Shallow copy name:', shallowCopy.name); // Bob

shallowCopy.hobbies.push('gaming');

console.log('Original hobbies:', original.hobbies);
console.log('Shallow copy hobbies:', shallowCopy.hobbies);

//Deep copy
const deepOriginal = {
    name: 'Charlie',
    age: 32,
    address: { city: 'Paris', country: 'France' },
    hobbies: ['traveling', 'photography'],
};

const deepCopy = structuredClone(deepOriginal);

deepCopy.address.city = 'London';
deepCopy.hobbies.push('cooking');
deepCopy.name = 'Olive';

console.log('original address:', deepOriginal.address); // { city: 'Paris', country: 'France' }
console.log('copy address:', deepCopy.address);
 // { city: 'London', country: 'France' }
console.log('original hobbies:', deepOriginal.hobbies); // ['travel', 'photography']
console.log('copy hobbies:', deepCopy.hobbies);

console.log('original name:', deepOriginal.name); // Charlie
console.log('copy name:', deepCopy.name); // Olive