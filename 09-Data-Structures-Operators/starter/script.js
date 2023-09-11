'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (statrterIndex, mainIndex) {
    return [this.starterMenu[statrterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelievery: function ({ staterterIndex, mainIndex, time, address }) {
    console.log(
      `order recieved ${this.starterMenu[staterterIndex]}
       and ${this.mainMenu[mainIndex]} will be delievers to
        ${address} and ${time}`
    );
  },
};

restaurant.orderDelievery({
  time: '22:30',
  address: 'Gadhbanaeli , Bihar',
  mainIndex: 2,
  staterterIndex: 2,
});

//Destructuring objetcs

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// for names other thn the original
let { name: myName, openingHours: myOpeningHours } = restaurant;
console.log(myName, myOpeningHours);

//Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);

//nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// Destructuring arrays
/*
const ar = [1, 2, 3];
const [a, b, c] = ar;
console.log(a, b, c);

const [first, , second] = restaurant.categories;
// , will skip the current elements
console.log(first, second);

//swapping with destructuring
let x = 5;
let y = 6;
[x, y] = [y, x];
console.log(`Swapped values are ${x} ${y}`); //  6 5

//Destructing values return by a function

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Destructuring nested arrays
const nested = [1, 2, [3, 4]];
const [i, , [j, k]] = nested;
console.log(i, j, k); // 1 3 4

//default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8 9 1
*/

///destructuring object
