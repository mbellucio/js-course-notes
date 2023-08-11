'use strict';

// const budget = Object.freeze([
//   { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
//   { value: -45, description: 'Groceries 🥑', user: 'jonas' },
//   { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
//   { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
//   { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
//   { value: -20, description: 'Candy 🍭', user: 'matilda' },
//   { value: -125, description: 'Toys 🚂', user: 'matilda' },
//   { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
// ]);

// const spendingLimits = Object.freeze({
//   jonas: 1500,
//   matilda: 100,
// });

// var add = function (value, description, user) {
//   if (!user) user = 'jonas';
//   user = user.toLowerCase();

//   var lim;
//   if (spendingLimits[user]) {
//     lim = spendingLimits[user];
//   } else {
//     lim = 0;
//   }

//   if (value <= lim) {
//     budget.push({ value: -value, description: description, user: user });
//   }
// };
// add(10, 'Pizza 🍕');
// add(100, 'Going to movies 🍿', 'Matilda');
// add(200, 'Stuff', 'Jay');
// console.log(budget);

// var check = function () {
//   for (var el of budget) {
//     var lim;
//     if (spendingLimits[el.user]) {
//       lim = spendingLimits[el.user];
//     } else {
//       lim = 0;
//     }

//     if (el.value < -lim) {
//       el.flag = 'limit';
//     }
//   }
// };
// check();

// console.log(budget);

// var bigExpenses = function (limit) {
//   var output = '';
//   for (var el of budget) {
//     if (el.value <= -limit) {
//       output += el.description.slice(-2) + ' / '; // Emojis are 2 chars
//     }
//   }
//   output = output.slice(0, -2); // Remove last '/ '
//   console.log(output);
// };

// ==================== Writing Clean and Modern JS ==================== //
console.log('');
console.log('=====================================');
console.log('==== Writing Clean and Modern JS ====');
console.log('=====================================');

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

// functions
const getUserLimit = (limits, user) => limits?.[user] ?? 0;

// pure function :)
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'Jonas'
) {
  const cleanUser = user.toLowerCase();

  if (value > getUserLimit(limits, cleanUser)) return state;
  return [...state, { value: -value, description, user: cleanUser }];
};

const checkExpenses = function (state, limits) {
  return state.map(entry => {
    return getUserLimit(limits, entry.user) - entry.value * -1 < 0
      ? { ...entry, flag: 'limit' }
      : entry;
  });
  // budget.forEach(mov => {
  //   if (getUserLimit(limits ,mov.user) - mov.value < 0) mov.flag = 'limit';
  // });
};

const logBigExpenses = function (state, limit) {
  return state
    .filter(mov => mov.value <= -limit)
    .reduce((acc, mov) => acc + `${mov.description.slice(-2)} / `, ''); // emojis count as 2 characters
};

// logs
const newBudget1 = addExpense(budget, spendingLimits, 100, 'creatine');
const expenseCheck = checkExpenses(newBudget1, spendingLimits);
const bigExpenses = logBigExpenses(expenseCheck , 90);
console.log(newBudget1);
console.log(expenseCheck);
console.log(bigExpenses)
// ==================== Declarative and Functional JS Principles ==================== //
console.log('');
console.log('==================================================');
console.log('==== Declarative and Functional JS Principles ====');
console.log('==================================================');

/*
======================================
====== Functional Programming ========
====================================== 
=> Delcarative programming paradigm

=> Based on the idea of writing software by combining many
  pure functions, avoiding side effects and mutating data

=> Side Effect: Modification (mutation) of any data outside
  of the function (mutating external variables, logging to console
  writing to dom, etc.)

=> Pure Function: Function without side effects. Does not depend 
  on external variables. Given the same inputs, always returns the
  same outputs.

=> Immutability: State (data) is never modified! instead, state is
  copied and the copy is mutated and returned.

**Functional Programming Techniques**

-> Try to avoid data mutations
-> use built-in methods that don't produce side effects
-> Do data transformations with methods such as:
    .map(), .filter() and .reduce()

-> Try to avoid side effects in functions: this is of course not always possible!

** Declarative syntax**
-> Use array and object destructuring
-> Use the spread operator(...)
-> Use the ternary (conditional) operator
-> Use template Literals
*/
