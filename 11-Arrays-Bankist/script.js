'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// ========================= Simple Array Methods =========================
// console.log(' ');
// console.log('=================== Simple Array Methods ===================');

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // slice method
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(1, -2));
// console.log(arr.slice()); // makes a shallow copy of the array
// console.log([...arr]); // makes a shallow copy of the array

// // splice
// // console.log(arr.splice(2)); // splice does mutate the original array
// console.log(arr.splice(-1));
// console.log(arr.splice(1, 2)); // first argument being from where it starts and seconds how many to remove after the start point
// console.log(arr);

// // reverse
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2); // does mutate the original array

// // concat method
// const letters = arr.concat(arr2); // join the 2 arrays
// console.log(letters);
// console.log([...arr, ...arr2]); // same result

// // join
// console.log(letters.join('-'));

// ========================= The new AT method =========================
// console.log(' ');
// console.log('=================== The new AT method ===================');

// const arr3 = [23, 11, 64];
// console.log(arr3[0]); // traditional way
// console.log(arr3.at(0)); // gets the exact same value

// // and if we want to get the last element from the array?

// console.log(arr3[arr3.length - 1]);
// console.log(arr3.slice(-1)[0]); // same result
// console.log(arr3.at(-1));

// // can use the at with strings also

// console.log('Matheus'.at(0));

// ========================= Looping Arrays => forEach =========================
// console.log(' ');
// console.log(
//   '=================== Looping Arrays => forEach ==================='
// );

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log(' ');

// movements.forEach(function (movement, index) {
//   if (movement > 0) {
//     console.log(`Transaction ${index + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Transaction ${index + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// });

// ========================= forEach with Maps and Sets =========================
// console.log(' ');
// console.log(
//   '=================== forEach with Maps and Sets ==================='
// );
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value} => ${[...map]}`);
// });

// // sets dont have keys or values, so the 2 first parameters are the same
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'BRL', 'EUR', 'BRL']);

// currenciesUnique.forEach(function (value, index, set) {
//   console.log(`${index}: ${value} => ${[...set]}`);
// });

// ========================= Project "Bankist" App =========================
console.log(' ');
console.log('=================== Project "Bankist" App ===================');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Matheus Bellucio',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 1996,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// ===================== Actual code writen by me ========================

// ========================= Computing Usernames =========================
console.log(' ');
console.log('=================== Computing Usernames ===================');

const createUsernames = function (accounts) {
  accounts.forEach(function (account) {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(str => str.at(0))
      .join('');
  });
};
createUsernames(accounts);
console.log(accounts);

// ================================================
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (movement, index) {
    const type = movement > 0 ? 'deposit' : 'withdrawal';

    const html = ` 
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
      <div class="movements__value">${movement}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// console.log(containerMovemzents.innerHTML);

// ================================================

const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${account.balance}€`;
};

// ================================================

const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => mov + acc, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => mov + acc, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interests = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(deposit => deposit >= 1)
    .reduce((acc, deposit) => acc + deposit, 0);
  labelSumInterest.textContent = `${interests}€`;
};

const updateUI = function (account) {
  // display movements
  displayMovements(account.movements);
  //display Balance
  calcDisplayBalance(account);
  // display summary
  calcDisplaySummary(account);
};

// ========================= Login =========================
console.log(' ');
console.log('=================== Login ===================');
// event handlers
let currentAccount;

btnLogin.addEventListener('click', function (event) {
  event.preventDefault(); // prevent form from submiting

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // display UI and message
    labelWelcome.textContent = `Welcome back ${currentAccount.owner
      .split(' ')
      .at(0)}`;
    containerApp.style.opacity = 100;
    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

// ========================= Close =========================
console.log(' ');
console.log('=================== close ===================');

btnClose.addEventListener('click', function (event) {
  event.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    console.log('working');
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
    inputCloseUsername.value = inputClosePin.value = '';
  }
});

// ========================= Implementing Transfers =========================
console.log(' ');
console.log('=================== Implementing Transfers ===================');

btnTransfer.addEventListener('click', function (event) {
  event.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const transferTo = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    transferTo &&
    currentAccount.balance >= amount &&
    transferTo?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    transferTo.movements.push(amount);
    updateUI(currentAccount);
    console.log('transferValid');
  }
});

// ========================= Request Loans =========================
console.log(' ');
console.log('=================== Request Loans ===================');

btnLoan.addEventListener(`click`, function (event) {
  event.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

// ========================= Sort Movements =========================
console.log(' ');
console.log('=================== Sort Movements ===================');

let sorted = false;

btnSort.addEventListener('click', function (event) {
  event.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// ========================= Coding Challenge =========================

// test data 1
// Julia => [3, 5, 2, 12, 7]
// kate => [4, 1, 15, 8, 3]

// const julia = [3, 5, 2, 12, 7];
// const kate = [4, 1, 15, 8, 3];
// const juliaFixed = julia.slice(1).slice(0, -2);

// const checkDogs = function (dogArr1, dogArr2) {
//   const allDogs = [...dogArr1, ...dogArr2];
//   allDogs.forEach(function (dog, index) {
//     const dogType = dog >= 3 ? 'an Adult' : 'a Puppy';
//     console.log(
//       `Dog number ${index + 1} is ${dogType}, and it's ${dog} years old.`
//     );
//   });
// };

// checkDogs(kate, juliaFixed);

// ========================= Data Transformations: map, filter, reduce =========================
// console.log(' ');
// console.log(
//   '=================== Data Transformations: map, filter, reduce ==================='
// );

// map
// is similar to forEach, loops trough an array but makes a copy of the original one

// filter
// used to filter elements in an array, creates new array

// reduce
// reduce all array elements into a single value

// ========================= The Map Method =========================
// console.log(' ');
// console.log('=================== The Map Method ===================');

// const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;
// console.log(movements2);

// // using map for better redeability
// const movementsUSD = movements2.map(function (mov) {
//   return (mov * eurToUsd).toFixed(0);
// });
// console.log(movementsUSD);

// // same thing but less readable
// const movementsUSD2 = [];
// for (const mov of movements2) {
//   const result = (mov * eurToUsd).toFixed(0);
//   movementsUSD2.push(result);
// }
// console.log(movementsUSD2);

// // using arrow function as callback
// const movementsUSD3 = movements2.map(mov => (mov * eurToUsd).toFixed(0));
// console.log(movementsUSD3);

// // exploring map method further
// const movementsDescitption = movements2.map(function (movement, index) {
//   return `Transaction ${
//     index + 1
//   }: You ${movement > 0 ? 'deposited' : 'withdrew'} ${movement}`;
// });

// console.log(movementsDescitption);

// // ========================= the filter method =========================
// console.log(' ');
// console.log('=================== the filter method ===================');

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });

// console.log(movements);
// console.log(deposits);

// const withdraws = movements.filter(mov => mov < 0);
// console.log(withdraws);

// // ========================= the reduce method =========================
// console.log(' ');
// console.log('=================== the reduce method ===================');

// // first argument is always the acumulator, aka total, aka sum
// //
// const balance = movements.reduce(function (acc, element, index, array) {
//   console.log(`iteration ${index}: ${acc}`);
//   return acc + element;
// }, 0); // this number represents the value of the accumulator on the first iteration

// console.log(balance);

// // get the maximum value
// const maxValue = movements.reduce((acc, mov) => {
//   mov > acc ? (acc = mov) : (acc = acc);
//   return acc;
// }, movements.at(0));

// console.log(maxValue);

// // ========================= coding challenge =========================
// console.log(' ');
// console.log('=================== coding challenge ===================');

// const testData1 = [5, 2, 4, 1, 15, 8, 3];

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
//   console.log(humanAges);

//   const overAgeDogs = humanAges.filter(age => age >= 18);
//   console.log(overAgeDogs);

//   const averageAge =
//     overAgeDogs.reduce((acc, age) => age + acc, 0) / overAgeDogs.length;

//   console.log(`the average age is: ${averageAge}`);
// };

// calcAverageHumanAge(testData1);

// // ========================= Chaining Methods =========================
// console.log(' ');
// console.log('=================== Chaining Methods ===================');

// // pipeline
// const finalResult = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * 1.1)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(finalResult);

// // ========================= Coding Challenge =========================
// console.log(' ');
// console.log('=================== Coding Challenge ===================');

// const testData2 = [5, 2, 4, 1, 15, 8, 3];

// const calcAverageHumanAge2 = ages => {
//   const averageAge = ages
//     .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, idx, arr) => acc + age / arr.length, 0);

//   console.log(`the average age is: ${averageAge}`);
// };

// calcAverageHumanAge2(testData2);

// // ========================= The Find Method =========================
// console.log(' ');
// console.log('=================== The Find Method ===================');

// const firstWithdraw = movements.find(mov => mov < 0);
// console.log(firstWithdraw);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// ========================= Some and Every =========================
console.log(' ');
console.log('=================== Some and Every ===================');

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

//equality
console.log(movements.includes(-130));

// check if there are any positive deposits in the array

// SOME
//condition
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// EVERY
// only if every element passes the condition will return true
console.log(movements.every(mov => mov > 0));
console.log(accounts.at(3).movements.every(mov => mov > 0));

// ========================= Flat and FlatMap =========================
console.log(' ');
console.log('=================== Flat and FlatMap ===================');

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// flat
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

console.log(overallBalance);

// flatMap (better for performance)
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);

console.log(overallBalance);

// ========================= Sorting Arrays =========================
console.log(' ');
console.log('=================== Sorting Arrays ===================');

// strings
const owners = ['Jonas', 'Brendon', 'Matheus'];
console.log(owners.sort());

//numbers -> sort is based on string sorting
console.log(movements);
console.log(movements.sort());

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// ascending
movements.sort((a, b) => {
  if (a > b) {
    return 1;
  }
  if (b > a) {
    return -1;
  }
});
console.log(movements);

// descending
movements.sort((a, b) => {
  if (a > b) {
    return -1;
  }
  if (b > a) {
    return 1;
  }
});
console.log(movements);

movements.sort((a, b) => a - b);
console.log(movements);

movements.sort((a, b) => b - a);
console.log(movements);

// ========================= More ways of creating arrays =========================
console.log(' ');
console.log(
  '=================== More ways of creating arrays ==================='
);

// EMPTY ARRAYS + FILL METHOD
const x = new Array(7);
console.log(x);
console.log(x.map(() => 5)); // dont do anything
// x.fill(1); // mutates
x.fill(10, 1, 4); // value, start & end
console.log(x);

const testArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
testArr.fill(23, 2, 4);
console.log(testArr);

// array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, index) => index + 1); // use "_" to fill parameters that are not gonna be used
console.log(z);

// second argument of the "FROM" is a callback function
btnLogin.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    elem => Number(elem.textContent.replace('€', ''))
  );
  console.log(movementsUI);
});

// ========================= 23 array methods =========================
console.log(' ');
console.log('=================== 23 array methods ===================');

// => TO MUTATE ORIGINAL ARRAY
// add to original
//   * push
//   * unshift

// remove from original
//   * pop
//   * shift
//   * splice

// others
//   * reverse
//   * sort
//   * fill

// => NEW ARRAY
// Computed from original
//   * map

// Filtered using condition
//   * filter

// Portion of original
//   * slice

// Adding original to other
//   * concat

// Flattening the original
//   * flat
//   * flatMap

// => ARRAY INDEX
// Based on value
//   * indexOf

// Based on test condition
//   * findIndex

// => ARRAY ELEMENT
// Based on test condition
//   * find

// => ARRAY INCLUDES
// Based on value
//   * includes

// Based on test condition
//   * some
//   * every

// => NEW STRING
// Based on separator string
//   * join

// => TRANSFORM VALUE
//   * Reduce

// => LOOP ARRAY
//   * forEach

// ========================= ARRAY methods Practice =========================
console.log(' ');
console.log('=================== ARRAY methods Practice ===================');

// 1
const bankDepositsSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acu, mov) => acu + mov, 0);
console.log(bankDepositsSum);

// 2
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(acc => acc > 1000).length;
console.log(numDeposits1000);

const num2Deposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, mov) => (mov > 1000 ? ++count : count), 0);
console.log(num2Deposits1000);

//3
const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (acc, cur) => {
      // cur > 0 ? (acc.deposits += cur) : (acc.withdraws += cur);
      acc[cur > 0 ? 'deposits' : 'withdraws'] += cur;
      return acc;
    },
    { deposits: 0, withdraws: 0 }
  );
console.log(sums);

// ========================= Coding CHallenge =========================
console.log(' ');
console.log('=================== Coding CHallenge ===================');

// Test Data:

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1
console.log('=================== 1 ===================');
dogs.forEach(
  dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);
// console.log(dogs);

// 2
console.log('=================== 2 ===================');
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(sarahDog);
console.log(
  `Sarah dog is eating ${
    sarahDog.curFood > sarahDog.recommendedFood ? 'too much' : 'too little'
  }`
);

//3
console.log('=================== 3 ===================');
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

//4
console.log('=================== 4 ===================');
console.log(`${ownersEatTooMuch.join(' and ')} dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')} dogs eat too little!`);

//5
console.log('=================== 5 ===================');
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

//6
console.log('=================== 6 ===================');
const checkDiet = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;
console.log(dogs.some(checkDiet));

//7
console.log('=================== 7 ===================');
const dogsOKDiet = dogs.filter(checkDiet); 
console.log(dogsOKDiet); 

//8
console.log('=================== 8 ===================');
const sortedDogs = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood); 
console.log(sortedDogs); 