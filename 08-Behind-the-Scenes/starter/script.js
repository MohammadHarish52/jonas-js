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
console.log(this); // returns the window object

const kalaAge = function (birth) {
  const age = 2023 - birth;
  console.log(this);
};

function add(a, b) {
  console.log(this);
  return a + b;
} // return undefined in the object for this

const sub = (a, b) => {
  console.log(this);
  return a - b;
}; // arrow function gives the parent object to which it is lexically attached

const harish = {
  name: 'Harish',
  calcAge: function () {
    console.log(this); // returns this object since harish is the object containing the method
  },
};

kalaAge(2002);
add(3, 4);
sub(4, 3);
harish.calcAge();
