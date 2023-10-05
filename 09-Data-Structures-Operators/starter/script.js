'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// Data needed for first part of the section

const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // pre es6 this type of methods were use order:fxn...
  //but now
  order(statrterIndex, mainIndex) {
    return [this.starterMenu[statrterIndex], this.mainMenu[mainIndex]];
  },

  orderDelievery({ staterterIndex, mainIndex, time, address }) {
    console.log(
      `order recieved ${this.starterMenu[staterterIndex]}
       and ${this.mainMenu[mainIndex]} will be delievers to
        ${address} and ${time}`
    );
  },
  // ES6 advanced object literals
  openingHours,

  orderPizza(mainIngredient, ...otherIngredient) {
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

console.log(restaurant);

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
// console.log(undefined || 0 || '' || "Hello" || 23 || null) // Hello

// restaurant.numGuests = 25;
// const guests1 = restaurant.numGuests || 'Does not exist'; // 25

//  the OR short circuiting works till it find a true value and then returns the same true value

// short circuiting in AND
// hence the OR short circuiting returns the first truthy value while AND short circuiting returns the first False value

// console.log('------AND-------');
// on truthy values the evaluation continues and after finding a false value it returns the same
// console.log(0 && 'jonas'); // 0;
// console.log(7 && 'jonas'); // "jonas"

// console.log('hello' && 23 && null && 'jonas'); // null will return the statement after the first true value is found

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// nullish : null and undefined (Not 0 or '')

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

// rest1.numOfguests ||= 10; // if numofguests exist then return numofguest else give its value of 10
// rest2.numOfguests ||= 10;

//Nullish assigment operator
// rest1.numOfguests ??= 10;
// rest2.numOfguests ??= 10;

// console.log(rest1);
// console.log(rest2);

//logical AND assignment operator

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

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [player1, player2] = game.players;

// console.log(player1);
// console.log(player2);

// //2
// const [gk, ...fieldPlayers] = player1;
// console.log(gk);
// console.log(fieldPlayers);

// //3
// const allplayers = [...player1, ...player2];
// console.log(allplayers);

// //4
// const player1Final = ['Thiago', 'Coutinho', 'Perisic', , ...player1];
// console.log(player1Final);

// //5
// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// //6
// function printGoals(...players) {
//   console.log(`${players.length} goals were scored `);
// }
// printGoals(...game.scored);

// //7
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// // For of is used to give you the current element

// for (const item of menu) console.log(item);

// // for getting the index we use entries

// for (const [i, el] of menu.entries()) console.log(`${i + 1} : ${el}`);

// optional chaining

// console.log(restaurant.openingHours?.mon?.open);

// if the first property doesnt exist immediately undefined will be returned and hence this will help in avoiding errors in the code

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   console.log(day);
//  const open =  restaurant.openingHours[day]?.open ?? 'Close'
//  console.log(`on ${day} we open at ${open}`);
// }

// Methods
// console.log(restaurant.order?.(0,1) ?? "Method does not exist")

// Arrays
// const users = [{name:"harish" , email: "hellobablu@.io"}];

// console.log(users[0]?.name ?? "User array empty");

// revising everything since i got sick from 23-9-23  to  1-9-23

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// property value
const values = Object.values(openingHours);
console.log(values);

//entire object
const entries = Object.entries(openingHours);

for (const [key, { open, close }] of entries) {
  console.log(` on ${key} we open at ${open} and close at ${close}`);
}
///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrussia Dortmund',
//     players: [
//       [
//         'Neuer',
//         'Pavard',
//         'Martinez',
//         'Alaba',
//         'Davies',
//         'Kimmich',
//         'Goretzka',
//         'Coman',
//         'Muller',
//         'Gnarby',
//         'Lewandowski',
//       ],
//       [
//         'Burki',
//         'Schulz',
//         'Hummels',
//         'Akanji',
//         'Hakimi',
//         'Weigl',
//         'Witsel',
//         'Hazard',
//         'Brandt',
//         'Sancho',
//         'Gotze',
//       ],
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//       team1: 1.33,
//       x: 3.25,
//       team2: 6.5,
//     },
//   };

//   // 1
//   for(const [i,player] in game.scored.entries()){
//     console.log(`Goal ${i + 1}: ${player}`)
//   }

//   // 2
//   const odds = Object.values(game.odds);
//   let average = 0;
//   for (const odd of odds){
//     average += odd;
//     average /= odds.length;
//     console.log(average);
//   }

//   // 3
//   for (const [team,odd] of Object.entries(game.odds)){

//     console.log(`${team}'s Odds are ${odd}`);
//   }

// sets in javascript
// contains unique pair of values
/*
const orderSet = new Set([
  "pizza",
  "pasta",
  "noodles",
  "pasta",
  "noodles"
]);

console.log(orderSet);
console.log(orderSet.size);
console.log(orderSet.has("hajmola"));

// adding

orderSet.add("manchurian");

// deleting

orderSet.delete('noodles');

// deleting everything
// orderSet.clear();

console.log(orderSet);

// retreiving values out of set
for(const item of orderSet){
  console.log(item);
}

// sets are generally used with arrays to remove the duplicate values
// example
const staff = ["waiter" , "chef" , "waiter" , "manager" , "chef", "waiter"];
const uniqueStaff =[...new Set(staff)];

*/
// maps keys can be of any types
// const rest = new Map();
// //to fill up set is used
// rest.set('name', 'KIng kong gun');
// rest.set('1', 'pistol');
// rest.set('2', 'Red Hawk');

// console.log(rest);

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23);

// console.log(rest.get('name'));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// // checking
// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest.size);
// // removing everything we use clear

// const arr = [1, 2];

// rest.set(arr, 'Test');
// console.log(rest.get(arr)); // will throw an error

// // another methd of adding items
// const question = new Map([
//   ['question', 'What is your name?'],
//   ['1', 'Mugiwara'],
//   ['2', 'zoro'],
//   ['3', 'Sanjidono'],
//   ['correct', 1],
//   [true, 'correct'],
//   [false, 'incorrect'],
// ]);

// //objects to map
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(question.get('question'));

// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(` Answer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your Answer'));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// //convert map tp array
// console.log([...question]);
// // question.entries
// console.log([...question.keys()]);

// strings

const airline = 'Tap Air Portugal';
const plane = 'A320';

console.log(plane[0]); // A
console.log(plane[1]); // 3

console.log(airline.length); // 16

console.log(airline.indexOf('r'));

console.log(airline.slice(4)); // 4 k baad kaatdega
console.log(airline.slice(4, 7)); // 4 se 7-1 tk kaat dega
console.log(airline.slice(0, airline.indexOf(' ')));

console.log(airline.slice(-2)); // peeche se kaat dega

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'C') {
    console.log('its a middle seat');
  }
};
checkMiddleSeat('11C');
checkMiddleSeat('12A');

// string  being a primitive allows
// method t be used since back of the scene the string gets converted to object
