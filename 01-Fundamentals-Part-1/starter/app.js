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
// // cannot write 3years while naming variables , numbers should be used but not at starting
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

// // best usecase for keeping the value that needs not to be changed further
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

// // + is used for concactation and addition both but  -  is used only for subtraction

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

// const firstName = "harish";
// const subject = "javascript";
// const birthyear = 2002;

// const Jonas  = "I'm " + firstName + "a" + birthyear + "born";
// console.log(Jonas);
// // template literals
// const ridhias = `i m ${firstName} a ${birthyear} born and i am currently learning javascript`;
// console.log(ridhias);
// // multiple string after es6 just use another line before es6 /n/ was used
// console.log(`hi
// there this is harish and i love to learn ${subject}
// in javascipt`);


// lec 5 
// contril structure
// if else control structure
// const age = 15;
// const isOldEnough = age>= 18;
// if(isOldEnough){
//     console.log('you can get driving licence');
// } else {
// const yearLeft = 18-age;

//     console.log(`you cannot get driving licence ,you have to wait ${yearLeft} years`);
// }

// if else if ladder

// const birthYear = prompt("enter birthyear")
// if(birthYear >= 2000){
//     console.log("you are from 21st century")
// } else if (birthYear > 1900 && birthYear <=1999)
// {
//     console.log("you are from 20th century")
// }
// else {
//     console.log("you are from prehistoric period")
// }

//challenge 1 & 2 summed up 

// const markWeight = prompt("enter mark weight");
// const joWeight = prompt("enter jo weight");
// const markheight = prompt("enter mark weight");
// const joheight = prompt("enter mark weight");

// let markBmi = ((markWeight)/(markheight**2));
// console.log(markBmi);
// let joBmi = ((joWeight)/(joheight**2));
// console.log(joBmi);

// if(markBmi > joBmi){
//     console.log(`mark has a higher bmi of ${markBmi} than that of jo ${joBmi}`)
// }else{
//     console.log(`jo has a higher bmi of ${joBmi} than that of mark ${markBmi}`)
// }

// type coersion(js automatic conversion bw data types) and type conversion(manuel conversion by a user)
// type conversion
// const inputYear = '2002';
// console.log((Number(inputYear))); // returns the string in a number;
// console.log((Number(inputYear))+ 4); //  returns 2006 

// const name = "PD";
// console.log((Number(name))); // NaN

// console.log((String(23)), 23);

// // type coersion
// console.log(" hi i am Harish and i am" + 21 +" years old"); // + converts the number to string
// console.log("23" - "10" - 7); //  - operator does only subtraction and hence converts string to numbers
// console.log("12" * "3"); // 36

// // booleans
// // 5 falsy values null ,0 ,'', undefined , NaN

// console.log((Boolean(0)));
// console.log((Boolean(undefined)));
// console.log((Boolean('harish')));
// console.log((Boolean({})));

// let paisa  =  0 ; // will return false since it lies in 5 falsy values
// paisa = 9; 
// if(paisa){
//     console.log("i have some money")
// }else{
//     console.log("i dont have any money")
// }
// let height;
// if(height){
//     console.log("height is defined");
// }
// else{
//     console.log("height is undefined");
// }

// equality operators

// === strict equality operator does not perform type coersion

// let age = 18;
// if(age === "18") console.log("adult bn gye!");

// // == checks for loose equality and does type coersion , try to avoid loose equality

// if(age == "18") console.log("arey ye data type to check hi nhi krrha");
//  // type of prompt function is always a string
//  // for converting a propmpt we can use type conversion in js
//  const getTheNumber  = Number(prompt("Enter the number"));
//  console.log(typeof getTheNumber);
// // !== is a difference operator

// boolean logic && || ! 
// && means AND 1001 sb true hoga tbhi tru
// || means OR 1110 ek bhi tru hoga tbhi tru
// ! means NOT inverts (has precedence first befor and or)
 // logical operators

//  const hasdrivrLicence = true;
//  const hasGoodVision =  true;

//  console.log(hasdrivrLicence && hasGoodVision); // true
//  console.log(hasdrivrLicence || hasGoodVision);// true
//  console.log(hasdrivrLicence && !hasGoodVision);// false

// const harishCanDrive = hasdrivrLicence && hasGoodVision;

// if(harishCanDrive){
//     console.log("Harish Can Drive");
// }
// else{
//     console.log("Harish Cannot Drive");
// }

// const isTired = true ;
// console.log(hasdrivrLicence || hasGoodVision || isTired)

// if(harishCanDrive && !isTired){
//     console.log("Harish Cannot Drive Or Harish Is Tired");
// }else{
//     console.log("Harish Can Drive And Is Not Tired");
    
// }

//challenge 3
// let avgDolphins = 0;
// let avgKoalas = 0;

// for (let i=0;i<3;i++){
//     const dolphin = prompt("enter the data for dolphin");
//     avgDolphins = avgDolphins + Number(dolphin);
   
// }
// avgDolphins /= 3;

// for (let i=0;i<3;i++){
//     const koala = prompt("enter the data for koala");
//     avgKoalas = avgKoalas + Number(koala);

// }

// avgKoalas /= 3;

// if(avgDolphins > avgKoalas && avgDolphins > 100){
//     console.log(` bonus 1 dolphins wins ${avgKoalas} ${avgDolphins}`);

// }
// else if(avgKoalas > avgDolphins && avgKoalas > 100){

//     console.log(` bonus 1 koala win ${avgKoalas} ${avgDolphins} `);

// }
// else if(avgDolphins === avgKoalas && avgDolphins > 100 && avgKoalas > 100)
//   { 
//      console.log(` bonus 2 draw ${avgKoalas} ${avgDolphins}`);
//     }

//switch statements

// const day = prompt("enter the day");
// switch (day) {
//     case 'monday':
//         console.log("Go to College");
//         console.log("go teach from 5-7");
//         console.log("start coding from 8-10 and 11-1")
        
//         break;
//         case 'tuesday':
//         console.log("Go to College");
//         console.log("go teach from 5-7");
//         console.log("start coding from 8-10 and 11-1")
            
//         break;
//         case 'wednesday':
//         console.log("Go to College");
//         console.log("go teach from 5-7");
//         console.log("start coding from 8-10 and 11-1")
                
//         break;
//         case 'thursday':
//         console.log("Go to College");
//         console.log("go teach from 5-7");
//         console.log("start coding from 8-10 and 11-1")
                    
//         break;
//         case 'friday':
//         console.log("wake up at 9");
//         console.log("code 10-2");
//         console.log('teach 5 to 7')
//         console.log("start coding from 8-10 and 11-1")
                        
//         break;
//         case 'saturday':
//         console.log("wake up at 9");
//         console.log("code 10-2");
//         console.log('teach 5 to 7')
//         console.log("start coding from 8-10 and 11-1")
                            
//         break;
//         case 'sunday':
//         console.log("wake up at 9");
//         console.log("code 10-2");
//         console.log('teach 5 to 7')
//         console.log("start coding from 8-10 and 11-1")
                                
//         break;

//         default:
//         console.log("Invalid day, please try again.");
//         break;
// }

// // if we forgot to add breaks in between then code will continue executing
// // switch test for strict ===

// if(day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday"){
//     console.log("Go to College");
//     console.log("go teach from 5-7");
//     console.log("start coding from 8-10 and 11-1")
// }
// else if(day === "friday" || day === "saturday" || day === "sunday"){
//     console.log("wake up at 9");
//     console.log("code 10-2");
//     console.log('teach 5 to 7')
//     console.log("start coding from 8-10 and 11-1")
// }
// else{
//     console.log("invalid input");
// }

// switch statements and expressions
// expression is a piece of code that produces a value
// statements doesnt produce a value

//expression

// 3+4;
// 1991;

// //statements

// if (condition) {
//     const something = 9;
// }

//template literal is an expression
// cannot use statements in a tremplate literal but ternary operator


//ternary operator is an expression
// best usecase is quick decision

// const age = 23;

// console.log(`i like to drink ${age >= 18 ? console.log("daaru ab") : console.log("nikal laude")
// }`)

// challenge 4

// const bill = Number(prompt("enter the bill"));

// const tip  = bill>50 && bill <=300 ? (15/100)*bill : (20/100)*bill;

// const finalBill = bill + tip;

// console.log(`the total amount is ${finalBill} with a bill of ${bill} and  a tip of ${tip}`);



















