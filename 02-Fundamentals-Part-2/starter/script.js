'use strict';
// create visible errors and creats a program which is more secure

// let hasdriversLicense = false;
// const pastTest = true;

// if(pastTest) hasdriversLicense  = true;
// if(hasdriversLicense) console.log("hiii");

// // const interface = "Auto";
// // const private = 343; reserve word error as given by strict mode


// //function declaration

// function logger(){
//     console.log("hi i am Harish");
// }

// // calling // running // invoking

// logger();
// logger();

// //passing parameters in the given functions

// function fruitProcessor(apples,oranges){
//     console.log(`you have ${apples + oranges } apples and ${oranges}`);
// }

// fruitProcessor(105,26);

// // function value stored as a variable 

// function vegetableProduce(potato,tomato){
//     console.log(potato,tomato);
//     const kaadha = `you have ${potato} and ${tomato}`;
//     return kaadha;
// }

// const storesTheReturnValue = vegetableProduce(9,8);
// console.log(storesTheReturnValue);

//ways of writing function

//declaration

// function calcAge(birthyear){
//     return 2023-birthyear;
// }

// //and function expressipnn

// const calacAge = function (birthyear){
//     return 2023-birthyear;
// }

// //arrorw function
// //arrow function do not get a this keyword

// // const deathYear = deaTh => //something ;

// const birthYear = ()=>{
//     return new Date().getFullYear()-2002 ;
// }

// const yearsUntilRetirement = (birthYear,FirstName)=>{
//     const age  = 2023 - birthYear;
//     const retirement = 65-age;

//     return `${FirstName} retires in ${retirement} years `;

// }
// console.log(yearsUntilRetirement(2002, "Harish"))

//calling is same for both arrow and simple

// const cutFruits =  (fruit) => {
//     return (fruit) * 4
// };

// //calling a function inside a function

// function vegetableProduce(potato,tomato){

//     cutFruits(potato);
   

//     console.log(potato,tomato);
//     const kaadha = `you have ${cutFruits(potato)} and ${tomato}`;
//     return kaadha;
// }

// vegetableProduce(10,5);
// console.log(vegetableProduce(10,5));

//challenge 5

// const calcAverage = (a,b,c) => (a+b+c)/3;

// const scoreDolphins = calcAverage(85,54,41);
// const scoreKoala = calcAverage(23,34,27);

// console.log(scoreDolphins,scoreKoala);

// const checkWinner = (avgDolphins,avgKoalas) =>{

//     if(avgDolphins >= 2*avgKoalas){
//         console.log(`Dolphins wins (${avgDolphins} vs ${avgKoalas})`);

//     }
//     else if(avgKoalas >= 2*avgDolphins){
//         console.log (`koalas win(${avgKoalas} vs ${avgDolphins})`)
//     }else{
//         console.log("no win")
//     }
// }
// checkWinner(scoreDolphins,scoreKoala);

//Arrays(ds)
// const friends = ["shushmit" , "Ridhimaa" , "Nainish"];
// //second way
// const years = new Array(1991 , 1678 , 1974, 1995);
// //acccesing values of a given array
// console.log(friends[0]);
// //length of array
// console.log(friends.length);
// // last is length -1;
// //mutating the array
// friends[2] = "Petar par kar bhai";
// // only primitive values in const are immutable
// // we cannot change the whole array
// // we can put different kind of values in a single array
// const harish = [ "harish" , 21 , friends];
// console.log(harish);

// const calcAge = (birthyear)=>{
//     return 2023 - birthyear;
// }
// const y = [2001,2003,1998,2000];

// for(let i = 0 ; i <y.length ;i++){
//     let age = (calcAge(y[i]));
//     console.log(age);
// }

// const friends = ["shushmit" , "Ridhimaa" , "Nainish"];
// // add elements at the end of the array
// friends.push("kamran");
// // add elements at the start of the array
//  friends.unshift('Harish');

//  //Remove elements from the array
//  //removing last element from the array
//  friends.pop();
//  //removing from start
//  friends.shift();
//  console.log(friends);
//  //["shushmit", "Ridhimaa" , "Nainish"]  
//  //get the position of a given element
//  console.log(friends.indexOf("nainish"));
//  //es6 include boolean 
//  if(friends.includes("Ridhimaa")){
//     console.log ("yes it includes Ridhimaa");
//  }

//coding 2 challenge


// const tipCalc = (bill)=>{
//     let tip = (bill>5 && bill<=300) ? (15/100)*bill : (20/100)*bill;
//     let totalbill = bill+tip;
//     return totalbill;
// }
// const bills = [tipCalc(125),tipCalc(555),tipCalc(44)];
// console.log(`Total tips: ${bills}`);

//objects
// const person = {
//     name:"Harish",
//     birthYear :2002,
//     passion:"Web Developement",
//     friend: "Ridhimaa",
//     hasDriverLicence:false,
//     // calcAge:function(){
//     //     return 2023 - this.birthYear;// this is used to access the values of the same object function attached to a object is called a method
//     // }
//     calcAge: function()  {
//         this.age = 2023 - this.birthYear;
//         return  this.age;
//         // this is used to access the values of the same object function attached to a object is called a method
//     },
//     calcGetsummary:function() {
//         this.summary = `name is ${person.name} age is ${this.age} friend is ${this.friend} and have a passion of ${this.passion}`;
//         return this.summary;
//     }

// }

// //each key is called a property of the given object in the given object

// //in objects the order doesnt care the about accesing all it cares about the priperties and how we are acccesing them

// // we use array for more ordered data and objects for more structureed data in which we need to specify the given properties for better understanding
// console.log(`${person['name']},${person['passion']} is my favourite`);
// //acccesing objects values
// // two ways to retrieve data from an object
// //dot notation
// console.log(person.name);
// //bracket notation
// console.log(person["name"]);

// //adding new proprties to an object
// person.city="Kanpur";
// //bracket notation addition
// person["country"]= 'India';

// //objects methods'
// console.log(person.calcGetsummary());
// console.log(person.age);
// console.log(person);

//chaleenge 3
// const Mark = {
//     fullName : "Mark Miller",
//     mass:78,
//     height:1.69,
//     markBmi:function(){
//         return (this.mass/(Math.pow((this.height/100),2))).toFixed(2) ;
//     }
// }
// const john ={
//     fullName:'John Smith',
//     mass:92,
//     height:1.95,
//     johnBmi:function(){
//         return ((this.mass)/(Math.pow(((this.height)/100),2))).toFixed(2);
       
//     }
// }
// if(john.johnBmi()>Mark.markBmi()){
//         console.log(`john has higher BMI than ${Mark.fullName}`);

//     }
//     else if(
//         john.johnBmi()===Mark.markBmi()){
//             console.log("both have same bmi");
//         }
//         else{
//             console.log('mark has higer BMIs');
//         }


// iteration in javscript

for (let i = 0; i < 10; i++) {
    console.log(`lifting weigths repetition ${i}`);
    
}











   













