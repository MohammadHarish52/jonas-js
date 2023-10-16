'use strict';

//Scoping in practise

// function calcAge(birthYear) {
//   const y = new Date();
//   const currentY = y.getUTCFullYear();
//   const age = currentY - birthYear;
//   const firstName = `Ridhimaa`;
//   function printAge() {
//     const output = `You are ${age} ,born in ${birthYear}`;
//     console.log(output);

//     // block scope
//     if (birthYear >= 1981 && birthYear <= 2003) {
//       const str = `Oh , and you're a milleneal , ${firstName}`;
//       console.log(str);
//       var hi = `hello aaaahahahahah`;

//       function add(a, b) {
//         return a + b;
//       }
//       output = `NEw output`;
//     }
//     console.log(hi);
//     // is accesble since var is accesible
//     // add(2,3); refrence error since functions are also block scoped

//     //console.log(str); // reference error since let and const are block scope
//   }
//   printAge();

//   // printage is lexically scoped with calcAge which is lexically scoped with global scope

//   return age;
//   // calcage will have access to global scope variables
//   // since the outer scope variables are accesible
//   // variable lookup
// inner function  have access to all the variables declared in the outer scope this is called variable lookup
// outer scope have not access to inner scope variables
// }

// const firstName = 'Harish';
// calcAge(2002);

//hoisting with variables

// console.log(me); // undefined
// console.log(he); // ref error before initialisation he is in TDZ
// console.log(she);

// var me = 5;
// let he = 'Harish';
// const she = 'Rids';

// hoisting with functions
// sayHi(); //'Hello bitch' only this type of function can be used before declaration

// console.log(addArrow(2, 3)); // addarrow is not a function

// console.log(addExp); // ref error before initialistaion

// console.log(addArrow); //undefined

// function sayHi() {
//   console.log('hello bitch');
// }

// const addExp = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

//example pitfal
// avoid using var most of the time

// if (!numproduct) console.log(deleteShoppingCart());

// var numproduct = 10;

// function deleteShoppingCart() {
//   console.log('Dalit');
// }

// var x = 1; // gets into global object
// let y = 2; //  gets to tdz
// const z = 3; // gets to tdzf

//  this keyword
// this keyword always points to the method calling the object
// regular function call returns undefined for this keywords
// console.log(this); // returns the window object

// const kalaAge = function (birth) {
//   const age = 2023 - birth;
//   console.log(this);
// };

// function add(a, b) {
//   console.log(this);
//   return a + b;
// } // return undefined in the object for this

// const sub = (a, b) => {
//   console.log(this);
//   return a - b;
// }; // arrow function gives the parent object to which it is lexically attached

// const harish = {
//   name: 'Harish',
//   calcAge: function () {
//     console.log(this); // returns this object since harish is the object containing the method
//   },
// };

// kalaAge(2002);
// add(3, 4);
// sub(4, 3);
// harish.calcAge();

// ///////////////////////////////////////
// // Regular Functions vs. Arrow Functions
// // var firstName = 'Matilda';

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//     // Solution 1
//     // const self = this; // self or that
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };

//     // Solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// jonas.greet();
// jonas.calcAge();

// // arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);

////////////
// primitive data types
let lastNAme = 'williams';
let oldNAme = lastNAme;
lastNAme = 'Harish';
console.log(lastNAme, oldNAme);

//Reference types
const Ridhimaa = {
  firstName: 'Ridhimaa',
  lastName: 'Saxena',
  age: 20,
};
console.log(Ridhimaa);

const fatherRids = Ridhimaa;
fatherRids['firstName'] = 'Sunil';
// the original object will be mutated
//since its address of the heap is stored in the execution context
console.log(fatherRids);

//copying the objects
// without changing the original

const harish = {
  name: 'Harish',
  age: 21,
  friend: ['adeem', 'Amaan'],
};

const harishCopy = Object.assign({}, harish);
harishCopy.name = 'PD';
console.log(harish);
console.log(harishCopy);

harishCopy.friend.push('ridhi');

// the whole array will be mutated

console.log(harishCopy);
console.log(harish);
