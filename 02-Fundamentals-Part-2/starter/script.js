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

const cutFruits = (fruit) => {
    return fruit * 4
};

//calling a function inside a function

function vegetableProduce(potato,tomato){

    cutFruits(potato);
   

    console.log(potato,tomato);
    const kaadha = `you have ${cutFruits(potato)} and ${tomato}`;
    return kaadha;
}

vegetableProduce(10,5);
console.log(vegetableProduce(10,5));












