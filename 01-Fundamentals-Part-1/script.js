// let js = "Amazing"; 
// console.log(40 + 8 + 20 - 10); 

// console.log("matheus");
// console.log("23");

// let firstName = "Matheus";
// console.log(firstName);

// // exercise 1
// let country = "Brazil";
// let continent = "South America";
// let population =  210_000_000;
// console.log(country, continent, population);

// //Data types class

// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Matheus");

// javascriptIsFun = "YES!";
// console.log(typeof javascriptIsFun);

// let year; 
// console.log(year);
// console.log(typeof year);

// year = 1996;
// console.log(typeof year);

// console.log(typeof null);

// //exercise 2

// let isIsland = false;
// let language;
// console.log(isIsland, population, country, language)

// // Let, COnst, Var class

// // let variable can be changed
// let age = 26;
// age = 27;

// //const does not change
// const birthYear = 1996;
// // birthYear = 1997; // Throws an error
// // cannot declare empty const variables

// //var is the old way
// var job = "programmer";
// job = "hobo";

// //exercise 3
// // language = "Portuguese";
// // const language = "Portuguese"; //Throws an error


// Basic operators Class

// const now = 2022;
// const ageMatheus = now - 1996;
// const ageClaudia = now - 1980; 
// console.log(ageMatheus, ageClaudia);

// console.log(ageMatheus * 2, ageMatheus / 2, ageMatheus ** 3);

// const firstName = "Matheus";
// const lastName = "Bellucio";

// console.log(firstName + " " + lastName);

// let x = 10 + 5; // '=' assignment operator
// console.log(x);
// x += 10; // increment operator
// console.log(x);
// x -= 10; 
// console.log(x); 
// x *= 10;
// console.log(x);
// x++;
// console.log(x); 
// x--;
// x--; 
// console.log(x)

// // comparison operators
// console.log(ageMatheus > ageClaudia); 

// // Coding Challenge

// const heightMatheus = 1.8;
// const massMatheus = 120;

// const bmiMatheus = massMatheus / (heightMatheus)**2;

// console.log(bmiMatheus);


// Strings and template literals


// const firstName = "Matheus";
// const job = "Community Manager"; 
// const birthYear = 1996;
// const age = 2022 - birthYear;

// const matheus = "I'm " + firstName + ", a " +  age + " years old " + job;
// console.log(matheus); 

// //template literal
// const matheusLiteral = `I'm ${firstName}, a ${age} years old ${job}`;
// console.log(matheusLiteral);

// //breaking line
// console.log("testing \n\
// multiple\n\
// lines"
// ); // conventional

// console.log(`testing
// multiple
// lines`
// );


// // if/else statements

// const age = 14;
// const legalDrivingAge = 18;
// if(age >= legalDrivingAge) {
//     console.log("You are able to take you driving license.🎈")
// } else {
//     const yearsLeft = legalDrivingAge - age;
//     console.log(`You are underage to drive, you may 
// request your license in ${yearsLeft} years. 😢`)
// };

// const birthYear = 1996;
// let century;

// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21; 
// }; 
// console.log(century)

// ================coding challenge=========================

// const bmiMatheus = massMatheus / (heightMatheus)**2;

// const heightMatheus = 1.8;
// const massMatheus = 120;
// const heightBrandon = 1.7;
// const massBrandon = 110;

// const BMIMatheus = massMatheus / heightMatheus ** 2;
// const BMIBrandon = massBrandon / heightBrandon ** 2;

// if (BMIMatheus > BMIBrandon) {
//     console.log(`Matheu's BMI [${BMIMatheus}] is higher than Brandon's BMI [${BMIBrandon}]`)
// } else {
//     console.log(`Brandon's BMI [${BMIBrandon}] is higher than Matheu's BMI [${BMIMatheus}]`)
// };

// ====================TYPE CONVERSION AND TYPE COERCION=====================

// // type conversion
// const input = '1991';
// console.log(Number(input) + 20);

// console.log(Number('claiton'));
// console.log(String(1996));

// const numberInput = Number(input)
// console.log(numberInput)

// //type coercion
// console.log("i am " + 23 + " years old");
// console.log('23' - 10 - '3'); // gives us a number type, if using + then will concatenate

// let n = '1' + 1;
// n = n - 1;
// console.log(n); // result will be 10, 11 in the first line, then subtract 1 from eleven making it 10



// ========================= Trhuthy and Falsy Values =========================

//5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(''));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean('Matheus'));
// console.log(Boolean({}));


// const money = 1;

// if(money) {
//     console.log('dont spend it all');
// } else {
//     console.log('you should get a job');
// };

// let height;

// if(height) {
//     console.log("urahhh!!");
// } else {
//     console.log("nerushimi");
// }

// ========================== Equality Operators =========================

// const age = 18;
// if (age === 18) console.log("You became an adult");

// // == does type coercion
// if (age == "18") console.log("You became an adult");
//  // avoid ==, creates a lot of bugs

// const favouriteNumber = Number(prompt("Whats your favourite number?"));
// console.log(favouriteNumber);
// console.log(typeof favouriteNumber);

// if (favouriteNumber === 23) {
//     console.log("amazing, 23 is pica");
// } else if(favouriteNumber === 7) {
//     console.log("7 is pica also");
// } else {
//     console.log("this number is otario");
// }

// not equal operator

// if (favouriteNumber !== 23) console.log("why beach?");

//=========================== Boolean Logic ===============================

// const hasDriversLicense = true;
// const hasGoodVision = true; 

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log("You can Drive!");
// } else {
//     console.log("you cannot drive");
// }

// const isTired = true; 
// console.log(hasDriversLicense && hasGoodVision && !isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log("You can Drive!");
// } else {
//     console.log("you cannot drive");
// }

//================================= Coding Challenge ==========================

// const dolphinsScore1 = 97;
// const dolphinsScore2 = 92;
// const dolphinsScore3 = 101;
// const dolphinsAverage = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;

// const koalasScore1 = 99; 
// const koalasScore2 = 95;
// const koalasScore3 = 96; 
// const koalaAverage = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

// if (koalaAverage === dolphinsAverage && koalaAverage >= 100 && dolphinsAverage >= 100) {
//     console.log("Its a Draw!");
// } else if (koalaAverage > dolphinsAverage && koalaAverage >= 100) {
//     console.log("Koala Wins!");
// } else if (dolphinsAverage > koalaAverage && dolphinsAverage >= 100){
//     console.log("Dolphins Wins!");
// } else {
//     console.log("No one wins, lacking minimum points even for a draw");
// }

// ================================= Switch Statement ============================

// const day = 'sunday'; 

// switch(day) {
//     case 'monday':
//         console.log("plan course structure");
//         break;
//     case 'tuesday':
//         console.log("Bia training");
//         break;
//     case 'wednesday':
//         console.log("Study");
//         break;
//     case 'thursday':
//         console.log("Bia Operation");
//         break;
//     case 'friday':
//         console.log("Study More");
//         break;
//     case 'saturday':
//         console.log("Study even harder");
//         break;
//     case 'sunday':
//         console.log("Bia ww2 Operation");
//         break; 
//     default:
//         console.log("do you know the way?");
// }


// ============================= Statements and expressions =============================

// 3 + 4 //expression 
// 1991 // expression
// true && false && !false // expression

// if (23 > 10) { // expression
//     const str = '23 is bigger'; 
// }


// console.log(`i'm ${23 - 7}`) // this expects an expression, not an statement


// ============================ the conditional (ternary) operator ======================

// const age = 17; 

// age >= 18 ? console.log('i like to drink wine') :
// console.log('i prefer beer')

// const drink = age >= 18 ? 'wine' : 'beer'; 
// console.log(drink);

// let drink2;
// if (age >= 18) {
//     drink2 = 'wine';
// } else {
//     drink2 = 'beer';
// }

// // ? can be used in template literal

// console.log(`i like to drink ${age >= 18 ? 'wine' : 'beer'}`);

// ========================== Coding Challenge ========================

// const bill = 430;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; 

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total bill was ${tip + bill}`);

// =========================== javascript versions =====================


