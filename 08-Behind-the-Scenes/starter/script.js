'use strict';

//Scoping in practise

function calcAge(birthYear) {
  const y = new Date();
  const currentY = y.getUTCFullYear();
  const age = currentY - birthYear;
  const firstName = `Ridhimaa`;
  function printAge() {
    const output = `You are ${age} ,born in ${birthYear}`;
    console.log(output);

    // block scope
    if (birthYear >= 1981 && birthYear <= 2003) {
      const str = `Oh , and you're a milleneal , ${firstName}`;
      console.log(str);
      var hi = `hello aaaahahahahah`;

      function add(a, b) {
        return a + b;
      }
      output = `NEw output`;
    }
    console.log(hi);
    // is accesble since var is accesible
    // add(2,3); refrence error since functions are also block scoped

    //console.log(str); // reference error since let and const are block scope
  }
  printAge();

  // printage is lexically scoped with calcAge which is lexically scoped with global scope

  return age;
  // calcage will have access to global scope variables
  // since the outer scope variables are accesible
  // variable lookup
}

const firstName = 'Harish';
calcAge(2002);
