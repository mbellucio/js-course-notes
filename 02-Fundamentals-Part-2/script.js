// ===================== activating strict mode =====================

'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true; 
// if (hasDriversLicense) console.log("You can drive");


// ==================== Functions ==========================

// function logger() {
//     console.log("my name is matheus");
// }

// logger();
// logger(); 

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 3);
// console.log(appleOrangeJuice);


// ==================== Function declaration vs expressions ===================

// // function declaration
// function calcAge1(birthYear) {
//     return 2023 - birthYear;
// }

// const age1 = calcAge1(1996);
// console.log(age1); 

// // function expression, also called anonimous function
// const calcAge2 = function (birthYear) {
//     return 2023 - birthYear;
// }
// const age2 = calcAge2(1996);
// console.log(age2);


// ======================== Arrow Functions ===========================

// // Arrow Function
// const calcAge3 = birthYear => 2023 - birthYear; 
// const age3 = calcAge3(1995);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2023 - birthYear;
//     const retirement = 65 - age; 
//     return `${firstName} will be able to retire in ${retirement} years.`;
// }

// console.log(yearsUntilRetirement(1996, "Matheus"));
// console.log(yearsUntilRetirement(1980, "Priscila"));


// ====================== Functions Calling Other functions ===================

// function cutFruitPieces(fruit) {
//     return fruit * 4; 
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
    
//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice; 
// }

// console.log(fruitProcessor(4, 10));

// ===================== Reviewing Functions ============================

// const calcAge = function(birthYear) {
//     return 2023 - birthYear; 
// }

// const yearsUntilRetirement = function(birthYear, firstName) {
//         const age = calcAge(birthYear);
//         const retirement = 65 - age; 

//         if(retirement > 0) {
//             return `${firstName} will be able to retire in ${retirement} years.`;
//         } else {
//             return `${firstName} is already retired.`;
//         }
//     }
// console.log(yearsUntilRetirement(1996, 'Matheus'));
// console.log(yearsUntilRetirement(1973, 'Marcelo'));
// console.log(yearsUntilRetirement(1950, 'Marlene'));

// ====================== Coding Challenge ============================

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// function checkWinner(koalasAVG, dolphinsAVG) {
//     if (koalasAVG >= (dolphinsAVG * 2)) {
//         console.log(`Koalas have won ${koalasAVG} x ${dolphinsAVG} against the Dolphins.`);
//     } else if (dolphinsAVG >= (koalasAVG * 2)){
//         console.log(`Dolphins have won ${dolphinsAVG} x ${koalasAVG} against the Koalas.`);
//     } else {
//         console.log("No one has won, it is a draw!");
//     }
// }

// const koalasAverage = calcAverage(23, 34, 27);
// const dolphinsAverage = calcAverage(85, 54, 41);

// checkWinner(koalasAverage, dolphinsAverage);

// ============================= Introduction to arrays ====================

// const friend1 = 'Michael'; 
// const friend2 = 'Steven';
// const friend3 = 'Charles'; 

// const friends = ['Michael', 'Steven', 'Charles']; 

// console.log(friends); 

// const years = new Array(1991, 1994, 1996); 

// console.log(friends[0]); 
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Claiton';
// console.log(friends);

// const matheus = ['Matheus', 'Soares', 2022 - 1996, friends];

// console.log(matheus);

// // exercise

// const birthYears = [1996, 1995, 1994]; 

// const calcAge = function(birthYear) {
//     return 2022 - birthYear;
// }

// const age1 = calcAge(birthYears[0]);
// const age2 = calcAge(birthYears[1]);
// const age3 = calcAge(birthYears[2]);

// const ages = [calcAge(birthYears[0]), calcAge(birthYears[1]), calcAge(birthYears[2])];
// console.log(ages);

// ================================== Basic Array Operators ======================

// const friends = ['Michael', 'Steven', 'Charles'];

// //add elements

// friends.push('Rogério'); 
// const newLenght = friends.push('Claiton'); // push function returns the new lenght of the array

// console.log(friends); 
// console.log(newLenght);

// friends.unshift('Brandon');
// console.log(friends);

// // remove elements

// friends.pop(); // remove last argument of the array, also function returns the deleted element

// console.log(friends);

// friends.shift(); //removes the first element from an array, also return the element that was deleted
// console.log(friends); 

// // getting the index

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob')); // wil get -1 cause element not present in the array

// console.log(friends.includes('Steven')); // will return true if the element is present in the array, false otherwise
// console.log(friends.includes('Bob'));

// if (friends.includes('Steven')) {
//     console.log('You have a friend called Steven'); 
// }


// ================================== Coding Challenge =============================

// function calcTip(bill) {
//     let tip; 
//     if (bill >= 50 && bill <= 300) {
//         tip = bill * 0.15;
//     } else {
//         tip = bill * 0.2;
//     }
//     tips.push(tip);
//     const total = bill + tip; 
//     finalBills.push(total);
//     return 
// }


// const bills = [125, 555, 44];
// const tips = [];
// const finalBills = []; 

// calcTip(bills[0]); 
// calcTip(bills[1]);
// calcTip(bills[2]);
// console.log(bills); 
// console.log(tips); 
// console.log(finalBills); 

// =================================== Introduction to Objects =========================

// const matheus = {
//     firstName: "Matheus",
//     lastName: "Bellucio", 
//     age: 26,
//     job: 'Manager', 
//     friends: ['Brandon', 'Pietro', 'Krau']
// };

// console.log(matheus.firstName);

// ================================ Dot vs Bracket Notation ============================

// const matheus = {
//     firstName: "Matheus",
//     lastName: "Bellucio", 
//     age: 26,
//     job: 'Manager', 
//     friends: ['Brandon', 'Pietro', 'Krau']
// };

// console.log(matheus.lastName);
// console.log(matheus['lastName']); 

// const nameKey = 'Name'; 
// console.log(matheus['first' + nameKey]); 
// console.log(matheus['last' + nameKey]);

// const choice = prompt('What do you want to know about Matheus? choose from [firstName, lastName, age, job, friends] => ');

// if (matheus[choice]) {
//     console.log(matheus[choice]);
// } else {
//     console.log('You entered an invalid value.');
// }

// matheus.location = 'Brazil'; 
// matheus['Instagram'] = '@matheusbelluicio'; 

// console.log(matheus); 

// // challenge 

// // 'Matheus has 3 friends, and his best friend is called brandon' -- do this without hardcoding. 

// console.log(`${matheus.firstName} has ${matheus['friends'].length} friends, and his best friend is called ${matheus['friends'][0]}.`)

// =============================== Object Methods =================================

// const matheus = {
//     firstName: "Matheus",
//     lastName: "Bellucio", 
//     birthyear: 1996,
//     job: 'Manager', 
//     friends: ['Brandon', 'Pietro', 'Krau'],
//     hasDriversLicense: false,

//     calcAge: function(birthYear) {
//         return 2023 - birthYear;
//     },

//     calcAge2: function() {
//         return 2023 - this.birthyear;
//     },

//     calcAge3: function() {
//         this.age = 2023 - this.birthyear;
//         return this.age;
//     },

//     summary: function() {
//         return `${this.firstName} is a ${this.calcAge2()} 
//         years old ${this.job} and 
//         ${this.hasDriversLicense ? "have": "don't have"} a driver's license.`;
//     }
// };

// console.log(matheus.calcAge(matheus.birthyear)); 
// console.log(matheus['calcAge'](matheus.birthyear));
// console.log(matheus.calcAge2()); 
// console.log(matheus.calcAge3());
 

// // challenge 

// // matheus is a 27 years old manager and he has no drivers license. 

// console.log(matheus.summary());

// ==================================== Coding Challenge ============================

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 60,
//     height: 1.69,

//     calcBMI: function() {
//         this.BMI = this.mass / (this.height ** 2);
//         return this.BMI;  
//     }
// }

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function() {
//         this.BMI = this.mass / (this.height ** 2);
//         return this.BMI;  
//     }
// }

// mark.calcBMI();
// john.calcBMI();

// if(mark.BMI > john.BMI) {
//     console.log(`Mark's BMI ${mark.BMI} is higher than John's BMI ${john.BMI}.`);
// } else {
//     console.log(`John's BMI ${john.BMI} is higher than Mark's BMI ${mark.BMI}.`);
// }

// ========================= The for Loop ============================

// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting Weight repetition ${rep} 🏋️‍♂️`);
// }  

// ====================== Looping arrays, Breaking and continuing ===============

// const matheus = [
//     'Matheus',
//     'Bellucio',
//     2022 - 1996,
//     'manager',
//     ['Brandon', 'Pietro', 'Kraudio'],
// ];

// const types = [];

// for(let i = 0; i < matheus.length; i++) {
//     console.log(matheus[i]);
//     types.push(typeof matheus[i]);
// }

// console.log(types);

// // next

// const years = [1973, 1980, 1996, 2008]; 
// const ages = [];

// for(let i = 0; i < years.length ; i++) {
//     ages.push(2023 - years[i]); 
// }

// console.log(ages);

// // continue and break statement

// console.log('---------- CONTINUE ----------')
// for(let i = 0; i < matheus.length; i++) {
//     if(typeof matheus[i] !== 'string') continue;
//     console.log(matheus[i]);
// }

// console.log('---------- BREAK ----------')
// for(let i = 0; i < matheus.length; i++) {
//     console.log(matheus[i]);
//     if(typeof matheus[i] === 'number') break;
// }


// ==================== Loop in backwards and loops in loops ====================

// const matheus = [
//     'Matheus',
//     'Bellucio',
//     2022 - 1996,
//     'manager',
//     ['Brandon', 'Pietro', 'Kraudio'],
// ];

// for(let i = matheus.length -1; i >= 0; i--) {
//     console.log(matheus[i], typeof matheus[i]);
//     if(typeof matheus[i] === 'object') {
//         for(let j = 0; j < matheus[i].length; j++) {
//             console.log(matheus[i][j]);
//         }
//     }
// }

// for(let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`=========Starting Exercise ${exercise}==========`);

//     for(let repetition = 1; repetition <= 5; repetition++) {
//         console.log(`Doing repetition ${repetition}...`);
//     }
// }

// ======================= The while loop =========================

// let rep = 1;
// while(rep <= 10) {
//     console.log(`Doing rep number ${rep}`);
//     rep++;
// }


// let dice = Math.trunc(Math.random() * 6) + 1;

// while(dice !== 6) {
//     console.log(`You rolled a ${dice}.`)
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if(dice === 6) {
//         console.log('Loop is ending...');
//     }
// } 

// ====================== Coding Challenge =======================

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = []; 

// function calcTip(bill) {
//     const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//     const total = bill + tip;
//     tips.push(tip);
//     totals.push(total);
// }

// for(let i = 0; i < bills.length; i++) {
//     calcTip(bills[i]);
// }

// console.log(bills);
// console.log(tips);
// console.log(totals); 

// function calcAverage(arr) {
//     let arrAverage = 0;
//     for(let i = 0; i < arr.length; i++) {
//         arrAverage += arr[i];
//     }  
//     return arrAverage / arr.length;
// }

// console.log(calcAverage(bills), calcAverage(tips), calcAverage(totals));

3