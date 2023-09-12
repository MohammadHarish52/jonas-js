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

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

restaurant.orderDelievery({
  time: '22:30',
  address: 'Gadhbanaeli , Bihar',
  mainIndex: 2,
  staterterIndex: 2,
});

// spread operator
// const arr = [7, 8, 9];

// const newArr = [1, 2, ...arr];

// // 1  2  7  8  9

// console.log(newArr);

// // copy array
// const newMenu = [...restaurant.mainMenu];

// //joining two arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// // iterables : arrays, strings , maps , sets . Not objects
// const str = 'Harish';
// const letters = [...str, ' ', 'D'];

// console.log(letters);

// const ingredients = [
//   prompt('lets make ?'),
//   prompt('lets make ?'),
//   prompt('lets make ?'),
// ];

// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// restaurant.orderPasta(...ingredients);

// rest operator
// const [a, b, ...other] = [1, 2, 3, 4, 5];
// console.log(other); // takes the left over values of the arrays

// const [pizza, , risotto, ...otherfood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// //Rest element must be the last element

// console.log(otherfood);

// // rest with objects

// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(weekDays);

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(9, 8, 97, 6, 5, 6);

// const x = [23, 5, 7];
// add(...x); // 35

// restaurant.orderPizza(
//   'mushroom',
//   'spice',
//   'sppinach',
//   'mayo',
//   'cheese ',
//   'oregano'
// ); // main ingrdient will take mushroom and the rest will be taken by other ingredient

// short circuiting using OR
// console.log('------OR------');
// console.log(3 || 'jonas'); // 3 will be returned since first value is  a truthly value
// console.log('' || 'harish'); // harish
// console.log(true || 0); // true
// console.log(undefined || null); // null

// restaurant.numGuests = 25;
// const guests1 = restaurant.numGuests || 'Does not exist'; // 25

// // the OR short circuiting works till it find a true value and then returns the same true value

// //short circuiting in AND

// console.log('------AND-------');
// console.log(0 && 'jonas'); // 0;
// console.log(7 && 'jonas'); // "jonas"

// console.log('hello' && 23 && null && 'jonas'); // null will return the statement after the first true value is found

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// // nullish : null and undefined (Not 0 or '')

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect); // 25

////////////////////////////
// logical assigment operators
// Or assigment operator

// const rest1 = {
//   name: 'capri',
//   numOfguests: 20,
// };

// const rest2 = {
//   name: 'pizzeria',
//   owner: 'Zeff',
// };

// // rest1.numOfguests ||= 10;
// // rest2.numOfguests ||= 10;

// //Nullish assigment operator
// rest1.numOfguests ??= 10;
// rest2.numOfguests ??= 10;

// console.log(rest1);
// console.log(rest2);

// //logical AND assignment operator

// rest2.owner &&= 'anonymus';

// console.log(rest2);

//////////////////

//Destructuring objetcs

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// // for names other thn the original
// let { name: myName, openingHours: myOpeningHours } = restaurant;
// console.log(myName, myOpeningHours);

// //Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);

// //nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

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

// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [player1, player2] = game.players;

console.log(player1);
console.log(player2);

//2
const [gk, ...fieldPlayers] = player1;
console.log(gk);
console.log(fieldPlayers);

//3
const allplayers = [...player1, ...player2];
console.log(allplayers);

//4
const player1Final = ['Thiago', 'Coutinho', 'Perisic', , ...player1];
console.log(player1Final);

//5
const {
  odds: { team1, x: draw, team2 },
} = game;

//6
function printGoals(...players) {
  console.log(`${players.length} goals were scored `);
}
printGoals(...game.scored);

//7
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
