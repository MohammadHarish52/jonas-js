// first lec(basic naming convention in js for variables)
// let js = "amazing";
// console.log(4+5-1);


// let fname = "PD";
// let country = "India";
// let continent = "Asia";
// let population  = "1.4billion";
// console.log(country);
// console.log(continent);
// console.log(population);

// //Variable name conventions
// //camel case 
// //firstNamePerson
// //first_name
// // cannot write harish&ridhhhi
// // first letter has to be a alphabet
// // $ _ are only two symbols allowed besides letter and numbers eg$lastName = "something"
// // cannot use a reserve js keyword eg new , delete etc...
// // It should also be avoided to use first letter as capital in js while namig a variable
// // capital variables are reserved for constant eg  const PI = 3.14
// // cannot write 3years while naming variables
// // try to write a cleaner code always try using naming convention that are easily understandable to users like myFirstJob = "sweeper"

// console.log(fname);
//js is executed top to bottom or line by line

// second lec(data types in js)

// let javaScriptIs = true ;
// console.log(javaScriptIs);

// console.log( typeof true);
// console.log( typeof 7);
// console.log(typeof "harish");

// //Dynamic typing helps to change data type of any variable at any time in program 
// javaScriptIs = "hi";
// console.log( typeof javaScriptIs);
// // undefined is declaring a variable without a value
// let ho;
// console.log(ho);
// ho = "hello";
// console.log(ho);

// // a bug in typof null as an object

// console.log(typeof null);

//third lec(let var const in js)
// best usecase for mutating values later
// let is block scope

// let age = 40;
// age = 21 ; 

// // best usecase for keeping the value that needs not to be changed
// const maxMarks = 49;

// // cannot declare a const without a value it have to have atleast one value

// // var should  be used least since it is the old way to decalare variables
// // var is function scoped

// var firstName = 'Harish';
// firstName = "Ridhimaa";

// never write a variable without really declaring it

// lec 4(operators in js)

// const now  = new Date();
// const year = now.getFullYear();

// const ageHarish = year-2002;
// const ageRidhimaa = year-2003;

// console.log(ageHarish,ageRidhimaa);

// // + is used for concactation and addition both - i used only for subtraction

// const myName = "Harish";
// const herName = "Ridhimaa";

// console.log(myName + herName);

// // assingnement operator

// let x = 5;
// x+=10;
// console.log(x);
// x*=3;
// console.log(x);
// x/=2;
// console.log(x);
// x++;
// console.log(x);
// x--;
// console.log(x);

// // comparision operator
// // >,< <=,>=

// if(ageHarish > ageRidhimaa) console.log("fuck u");

// //precedence of operators
// // math operators are executed first before compariosn opertaors
// // () or grouping has the highest precednece

// let z,y;
// z=y=25-10-5; // z=y=10; // assignment operator is executed from r to l and since the precendence of  -  comes before = hence 10 will be calculated first
// console.log(z,y);

// console.log((ageHarish+ageRidhimaa)/2);

//string and template literals

const firstName = "harish";
const subject = "javascript";
const birthyear = 2002;

const Jonas  = "I'm " + firstName + "a" + birthyear + "born";
console.log(Jonas);
// template literals
const ridhias = `i m ${firstName} a ${birthyear} born and i am currently learning javascript`;
console.log(ridhias);


