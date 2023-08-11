// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// for (let i = 0; i < 5; i++) {
//   console.log(i, "claiton");
// }

// console.log("Claiton Rogerio");

// Problem
// We work for a company building a smart home
// thermometer. Our most recent task is this:
// "given an array of temperatures of one day, calculate
// the temperature amplitude. keep in mind that sometimes
// there might be a sensor error."

// const temperatures1 = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// const temperature2 = ['error', 19, 5, 6, -4, 4, 15];

// function calcAmplitude(array1, array2) {
//   const tempARR = array1.concat(array2); 
//   let maxTemp = tempARR[0];
//   let minTemp = tempARR[0];
//   for (let i = 0; i < tempARR.length; i++) {
//     if (typeof tempARR[i] !== "number") {
//       continue;
//     }
//     if (tempARR[i] > maxTemp) maxTemp = tempARR[i];
//     if (tempARR[i] < minTemp) minTemp = tempARR[i];
//   }

//   const tempAmplitude = maxTemp - minTemp;
//   console.log(maxTemp, minTemp);

//   return tempAmplitude;
// }

// console.log(calcAmplitude(temperatures1, temperature2));


// ======================== Debugging ====================

// function measureKelvin() {
//   const celsius = Number(prompt("Type the celsius: "));
//   return `${celsius + 273} Kelvin`; 
// }

// console.log(measureKelvin()); 
 
// ======================== Coding Challenge ================

// Given an array of forecasted maximum temperatures,
// the thermometer displays a string with these temperatures.

// example: [17, 21, 23] will print "... 17c in 1 days, ... 21 in 2 days, ... 23 in 3 days"

// Create a function 'printForecast' wich takes in an array 'arr'
// and logs a string like the above to the console.

// use the problem-solving framework: understand the problem 
// and break it up into sub-problems!

// TEST DATA 1 = [17, 21, 23]
// TEST DATA 2 = [12, 5, -5, 0, 4]

// function printForecast(arr) {
//   let message = "";
//   for (let i = 0; i < arr.length; i++) {
//     message += `${arr[i]}c in ${i + 1} days ... `;
//   }
//   return message;
// }

// const testData1 = [17, 21, 23];
// const testData2 = [12, 5, -5, 0, 4];

// console.log(printForecast(testData1));
// console.log(printForecast(testData2));

