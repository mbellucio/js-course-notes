'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2023-06-01T17:01:17.194Z',
    '2023-06-04T23:36:17.929Z',
    '2023-06-05T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions
const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, '0');
  // const month = `${date.getMonth() + 1}`.padStart(2, '0');
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;

  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  const balance = formatCur(acc.balance, acc.locale, acc.currency);
  labelBalance.textContent = `${balance}`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogoutTimer = function () {
  // setting the timer to 5 minutes
  let timer = 120;
  //Call the times every second
  const tick = function () {
    // convert seconds to minutes:seconds
    const min = String(Math.trunc(timer / 60)).padStart(2, '0');
    const sec = String(timer % 60).padStart(2, '0');
    // in each call print the remaining time
    labelTimer.textContent = `${min}:${sec}`;
    // when 0 stop timer and logout
    if (timer === 0) {
      clearInterval(counter);
      labelWelcome.textContent = 'Login to Get Started!';
      containerApp.style.opacity = 0;
    }
    // decrease 1 second
    timer--;
  };
  tick();
  const counter = setInterval(tick, 1000); 
  return counter; 
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // create current date and time
    const nowApp = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    };
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(nowApp);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    if (timer) clearInterval(timer); 
    timer = startLogoutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // add date
    currentAccount.movementsDates.push(new Date());
    receiverAcc.movementsDates.push(new Date());

    // Update UI
    updateUI(currentAccount);

    // reset the timer
    clearInterval(timer); 
    timer = startLogoutTimer(); 
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      // reset timer
      clearInterval(timer);
      timer = startLogoutTimer(); 
    }, 2500);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// ========================= Converting and Checking Numbers =========================
console.log(' ');
console.log(
  '=================== Converting and Checking Numbers ==================='
);

// convert string to number
console.log(Number('23'));
console.log(+'23'); // convert to number also

// Parsing
console.log(Number.parseInt('30px', 10)); // string needs to start with a number

console.log(Number.parseFloat('2.5REM')); // parsing floating numbers

// only use to check if value is not a number
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20x')); // true
console.log(Number.isNaN(23 / 0)); // false

// Checking if a value is a number - BEST METHOD!
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20x')); // false
console.log(Number.isFinite(23 / 0)); // false

// check if its integer
console.log(Number.isInteger(23)); // True
console.log(Number.isInteger(2.5)); // false

// ========================= Math and Rounding =========================
console.log(' ');
console.log('=================== Math and Rounding  ===================');

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2)); // same result as above
console.log(8 ** (1 / 3)); // cubic root

console.log(Math.max(5, 18, 25, '32', 5, 4)); // get the maximum value
console.log(Math.min(5, 18, 25, '32', 5, 4)); // get the minimum value

// calculate circunference
console.log(Math.PI * Number.parseFloat('10px') ** 2);

//random
console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;

console.log(randomInt(20, 40));

// rouding
// get rid of any decimal places
console.log(Math.trunc(23.3));

// will round to the nearest integer
console.log(Math.round(23.3));
console.log(Math.round(23.9));

// round up
console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

// round down
console.log(Math.floor(23.3));
console.log(Math.floor(23.9));

// rouding floating point numbers
console.log(+(2.7).toFixed(0));
console.log(+(23.57).toFixed(1));

// ========================= Remainder Operator =========================
console.log(' ');
console.log('=================== Remainder Operator  ===================');

console.log(5 % 2); // == 1
console.log(8 % 3); // == 2

// even or odd
let counter = 1;
while (counter < 10) {
  const evenOdd =
    counter % 2 === 0
      ? console.log(`${counter}: even`)
      : console.log(`${counter}: odd`);
  counter++;
}

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (
    row,
    idx
  ) {
    if (idx % 2 === 0) {
      row.style.backgroundColor = 'orangered';
    }
  });
});

// ========================= Numeric Separators =========================
console.log(' ');
console.log('=================== Numeric Separators ===================');

// 287,460,000,000
const diameter = 287460000000;

const diameterGood = 287_460_000_000;
console.log(diameterGood);

const priceCents = 345_99;
console.log(priceCents);

// ========================= Working with BigInt =========================
console.log(' ');
console.log('=================== Working with BigInt ===================');

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
const biggestNumber = 9_007_199_254_740_991;

// since es2020 bigInt was added;
console.log(456465554642123198779845132198498465132132);
// adding the 'n' to the end
console.log(456465554642123198779845132198498465132132n);
// using the bigInt function
console.log(BigInt(456465554642123198779845132198498465132132));

// operations
console.log(10000n + 10000n);
console.log(36548494321651651654654651651n * 200000n);

// not possible to mix bigInts with regular numbers in mathematical operations!!
// but you can still use logical operators!
console.log(16514651465n > 654654);

// however comparison will not work, due to types being different
console.log(20n === 20);

// but using the == it will work cause then JS do the type conversion
console.log(20n == 20);

//divisions work but only returns the closest integer
console.log(10n / 3n);
console.log(10 / 3);

// ========================= Creating Dates =========================
console.log(' ');
console.log('=================== Creating Dates ===================');

// create a date - 4 ways
const now = new Date();
console.log(now);

console.log(new Date('Jun 05 2023 13:36:49'));
console.log(new Date('December 24, 2015'));

console.log(new Date(account1.movementsDates[0]));

// months are 0 based => "0 to 11";
console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 33));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// working with dates
const future = new Date(2023, 6, 12, 13, 30);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime()); // gets the timeStamp since 1970

console.log(new Date(1689179400000)); // using that time stamp to gen a date

console.log(Date.now()); // get the current time stamp

future.setFullYear(2024);
console.log(future);

// ========================= Addind Dates to Bankist App =========================
console.log(' ');
console.log(
  '=================== Addind Dates to Bankist App  ==================='
);
// create current date and time
// const nowApp = new Date();
// const day = `${nowApp.getDate()}`.padStart(2, '0');
// const month = `${nowApp.getMonth() + 1}`.padStart(2, '0');
// const year = nowApp.getFullYear();
// const hour = nowApp.getHours();
// const minute = nowApp.getMinutes();
// labelDate.textContent = `${day}/${month}/${year}, ${hour}:${minute}`;

// ========================= Operations with dates =========================
console.log(' ');
console.log('=================== Operations with dates ===================');

const futureDate = new Date(2037, 10, 19, 15, 23);
console.log(Number(futureDate));
console.log(+futureDate);

const daysPassed = (date1, date2) =>
  Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

const days1 = daysPassed(new Date(2037, 10, 19), new Date(2037, 5, 14, 10, 8));
console.log(days1);

// ========================= internationalizing dates =========================
console.log(' ');
console.log('=================== Operations with dates ===================');

// ========================= internationalizing Numbers =========================
console.log(' ');
console.log('=================== Operations with Numbers ===================');

const num = 3884764.23;

const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'BRL',
  // useGrouping: 'false',
};

console.log('US: ', new Intl.NumberFormat('en-US', options).format(num));
console.log('Syria: ', new Intl.NumberFormat('ar-SY', options).format(num));
console.log('Brazil: ', new Intl.NumberFormat('pt-BR', options).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language).format(num)
);

// ========================= Timers =========================
console.log(' ');
console.log('=================== Timers ===================');

// setTimeout
const ingredients = ['burrata', 'basilico'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`heres your pizza with ${ing1} and ${ing2}.`),
  3000,
  ...ingredients
);
console.log('Waiting...');
if (ingredients.includes('burrata')) {
  clearTimeout(pizzaTimer);
}

// setInterval
setInterval(function () {
  const now = new Date();
  console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
}, 1000);

// ========================= Implementing a Countdown Timer =========================
console.log(' ');
console.log(
  '=================== Implementing a Countdown Timer ==================='
);
