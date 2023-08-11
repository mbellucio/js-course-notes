'use strict';

// ========================= Default Parameters =========================
// console.log(' ');
// console.log('=================== Default Parameters ===================');

// const bookings = [];

// const createBooking = function (
//   flighNum,
//   passengersNum = 2,
//   price = 200 * passengersNum
// ) {
//   // using short-circuiting to set default values [ES5]
//   // passengersNum = passengersNum || 1;
//   // price = price || 1000;

//   const booking = {
//     flighNum,
//     passengersNum,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);

// // ========================= Passing argumets: Value vs Reference =========================
// console.log(' ');
// console.log(
//   '=================== Passing argumets: Value vs Reference ==================='
// );

// const flight = 'LH234';
// const matheus = {
//   name: 'Matheus',
//   passport: 235547896,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr.' + passenger.name;

//   if (passenger.passport === 235547896) {
//     alert('Check In');
//   } else {
//     alert('Wrong Passport');
//   }
// };

// checkIn(flight, matheus);
// console.log(flight);
// console.log(matheus);

// // when you pass a primitive value into a function it copies it
// // when you pass an object into a function it points to the pbject in memory.

// const newPassport = function (person) {
//   person.passport = 556872254;
// };

// newPassport(matheus);
// checkIn(flight, matheus);

// // ========================= First Class and Higher order Functions =========================
// console.log(' ');
// console.log(
//   '=================== First Class and Higher order Functions ==================='
// );

// // First class functions
// // * JS treats as first-class citzens
// // * Functions are simply values
// // * Functions are just another 'type' of object

// // => store functions in variables or properties
// // => Pass functions as arguments for other functions
// // => return functions from other functions
// // => call methods on functions

// // higher order functions
// // * a function that receives another function as an argument
// // that returns a new function, or both
// // * this is only possible because of first-class functions

// // ========================= Functions accepting callback functions =========================
// console.log(' ');
// console.log(
//   '=================== Functions accepting callback functions  ==================='
// );

// const oneWord = function (word) {
//   return word.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (word) {
//   const [firstWord, ...otherWords] = word.split(' ');
//   return [firstWord.toUpperCase(), ...otherWords].join(' ');
// };

// const transformer = function (word, fn) {
//   console.log(`Original String: ${word}`);
//   console.log(`Transformed String: ${fn(word)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('dj periclaiton rasta', upperFirstWord);
// console.log(' ');
// transformer('dj periclaiton rasta', oneWord);

// // --------------------------------------------
// // callbacks all the time!
// const high5 = function () {
//   console.log('High 5!');
// };

// document.body.addEventListener('click', high5);

// ['Claiton', 'Rogerio', 'Anderson'].forEach(high5);

// // ========================= Functions Returning Functions =========================
console.log(' ');
console.log(
  '=================== Functions Returning Functions ==================='
);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}`);
  };
};

const greeterHey = greet('hey');
greeterHey('Matheus');
greeterHey('Claiton');

// works due to 'CLosure'
greet('Hello There')('Obiwan');

const greet2 = greeting => name => console.log(`${greeting}, ${name}`);

greet2('Sup Mofo')('Claiton');

// ========================= The call and Apply Methods =========================
console.log(' ');
console.log(
  '=================== The call and Apply Methods ==================='
);

const airfrance = {
  airline: 'Airfrance',
  iataCode: 'AF',
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

airfrance.book(239, 'Matheus');
airfrance.book(3358, 'Claiton');
console.log(airfrance);

const book = airfrance.book;

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// does not work
// book(25464, 'Matheus');

// call method
book.call(eurowings, 2354, 'Matheus');
book.call(airfrance, 2256, 'Claiton');
console.log(eurowings);
console.log(airfrance);

//apply method
const flightData = [2256, 'Rogerio'];
book.apply(eurowings, flightData); // needs to be an array
book.call(airfrance, ...flightData);

// ========================= The Bind Method =========================
console.log(' ');
console.log('=================== The Bind Method ===================');

const bookEW = book.bind(eurowings);
bookEW(4456, 'Brendon Merdeiros');
console.log(eurowings);

const bookEW2354 = book.bind(eurowings, 2354);
bookEW2354('Joelington');

// with event listeners
airfrance.planes = 300;
airfrance.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document.querySelector('.buy').addEventListener('click', airfrance.buyPlane);

// the 'this' keyword is atached to the event listener function, therefore it does not work.
// the 'this' keyword will point to the button element

document
  .querySelector('.buy')
  .addEventListener('click', airfrance.buyPlane.bind(airfrance));

// using bind to point the object in question, now the 'this' keyword will point to the object

// partial aplication => preset parameters
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// the bind method:
// 1 => something.bind(1 => to the thing is poiting, object etc, ...2 => parameters)
const addFGTS = addTax.bind(null, 0.11);
console.log(addFGTS(1350));

const calcAnyTax = tax => value => value - value * tax;

const addFGTS2 = calcAnyTax(0.11);
console.log(addFGTS2(1250));

const addIR = calcAnyTax(0.27);
console.log(addIR(4500));

// ========================= Coding Challenge =========================
console.log(' ');
console.log('=================== Coding Challenge ===================');

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: SQF', '3: LUA'],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const answer = Number(
      prompt(
        `What is your favourite programming language? \n${this.options.join(
          '\n'
        )} \n [write option number]`
      )
    );
    if (typeof answer != 'number' || answer > 3 || isNaN(answer)) {
      alert('Please enter a valid Option!');
      this.registerNewAnswer();
    } else {
      this.answers[answer]++;
      this.displayResults(this.answers);
    }
  },

  displayResults() {
    console.log(`Poll results are ${this.answers.join(', ')}`);
  },
};

const pollBTN = document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] });

// ========================= Immediately Invoked Function Expression (IIFE) =========================
console.log(' ');
console.log(
  '=================== Immediately Invoked Function Expression (IIFE) ==================='
);

// this is false, you can call it later
const runOnce = function () {
  console.log('this can run again');
};
runOnce();

// right way, just wrapp it around parenthesis and another set of parenthesis to call it immediately
// (IIFE)
(function () {
  console.log('this will never run again');
})();

(() => console.log('this will also never run again!'))();

// ========================= Closures =========================
console.log(' ');
console.log('=================== Closures ===================');

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`The new passenger count is ${passengerCount}.`);
  };
};

// seucureBooking has finished its job, now the booker holds the returned function
const booker = secureBooking();
booker();
booker();

// the booker and its returned function are able to get hold of the passenger count variable due to closure
// A function has acess to the variable environment (VE) of the exection context in wich it was created
// a closure is the variable environment attached to the child function
// the scope chain is actually preserved trough the closure

// ===============================================================================//
// DEFINITIONS:

// => A closure is the closed-over VARIABLE ENVIRONMENT of the execution context in
// wich a function was created, even after that execution context is gone.

// => A closure gives a function acess to all the variables of ITS PARENT FUNCTION,
// even after that parent function returned. THe function keeps a reference to its
// outer scope, wich preserves the scope chain throughout time.

// => A closure makes sure that a function doesn't loose connection to VARIABLES
// THAT EXISTED AT THE FUNCTIONS "BIRTH PLACE".
// ===============================================================================//

console.dir(booker);

// ========================= More Closure Examples =========================
console.log(' ');
console.log('=================== More Closure Examples ===================');

// example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);
// reassign f by h
h();
f();
console.dir(f);

// example 2
const boardPassenger = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers.`);
  }, wait * 1000);

  console.log(`Will start boading in ${wait} seconds.`);
};

const perGroup = 1000; // wont make a diference cause closure has priority over the scope chain

boardPassenger(180, 3);

// ========================= Coding Challenge =========================
console.log(' ');
console.log('=================== Coding Challenge ===================');

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
