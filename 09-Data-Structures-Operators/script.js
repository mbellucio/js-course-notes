'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// // const restaurant = {
// //   name: 'Classico Italiano',
// //   location: 'Via Angelo Tavanti 23, Firenze, Italy',
// //   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
// //   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
// //   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

// //   order: function (startIndex, mainIndex) {
// //     return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
// //   },

// //   openingHours: {
// //     thu: {
// //       open: 12,
// //       close: 22,
// //     },
// //     fri: {
// //       open: 11,
// //       close: 23,
// //     },
// //     sat: {
// //       open: 0, // Open 24 hours
// //       close: 24,
// //     },
// //   },
// // };

// // // standard aproach
// // const arr = [1, 2, 3];
// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];

// // // better aproach
// // const [x, y, z] = arr;
// // console.log(x, y, z);
// // console.log(arr);

// // // working with the object
// // const [first, second] = restaurant.categories;
// // console.log(first, second);

// // // taking the 1st and 3rd element of the array object
// // const [one, , three] = restaurant.categories;
// // console.log(one, three);

// // let [main, , secondary] = restaurant.categories;

// // // standard way of switching order
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// // // optmized way, switching variables, called destruct
// // [main, secondary] = [secondary, main];
// // console.log(main, secondary);

// // // calling the order method
// // // receive 2 return values from a function and save into separate variables
// // const [opener, mainDish] = restaurant.order(2, 0);
// // console.log(opener, mainDish);

// // const nested = [2, 4, [5, 6]];
// // const [claiton, ,rasta] = nested;
// // console.log(claiton);
// // console.log(rasta);

// // // nested destructuring
// // const [i, ,[j, k]] = nested;
// // console.log(i, j, k);

// // // default values for arrays destructuring
// // const [p=1, q=1, r=1] = [8, 9];
// // console.log(p, q, r);

// // ========================== Destructuring Objects ============================

// const restaurant = {
//   Rname: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (startIndex, mainIndex) {
//     return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({
//     startIndex = 1,
//     mainIndex = 0,
//     time = '18:00',
//     adress,
//   }) {
//     console.log(
//       `Order Received! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}.`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here it is your pasta with ${ing1}, ${ing2} and ${ing3}.`);
//   },

//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

// // default values
// const { Rname, openingHours, categories } = restaurant;
// console.log(Rname, openingHours, categories);

// console.log('=================================');

// const {
//   Rname: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// console.log('=================================');

// const { Mmenu = [], starterMenu: starters = [] } = restaurant;
// console.log(Mmenu, starters);

// console.log('=================================');

// // mutating variables within an object

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// console.log('=================================');

// // nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// // nesting inside parameters and using default values
// restaurant.orderDelivery({
//   startIndex: 2,
//   mainIndex: 2,
//   adress: 'Rua Araxá, 38',
//   time: '19:00',
// });

// restaurant.orderDelivery({
//   adress: 'Rua Barão do Bom Retiro',
// });

// // ==================== Spread Operator ======================

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

// const goodNewArr = [1, 2, ...arr];

// console.log(badNewArr);
// console.log(goodNewArr);

// const newMenu = [...restaurant.mainMenu, 'Lasagna', 'Gnocci'];
// console.log(newMenu);

// // copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // join 2 or more arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // itarables: strings, arrays, maps, sets... not OBJECTS
// const str = 'matheus';
// const letters = [...str, '', 'S.'];
// console.log(letters);
// console.log(...str);

// // spread only works on passing to a function or an array
// // this WILL NOT work => console.log(`${...str} Soares.`);

// // const ingredients = [prompt('Ingredient 1: '), prompt('Ingredient 2: '), prompt('Ingredient 3: ')];
// // restaurant.orderPasta(...ingredients);

// // objects
// const newRestaurant = {
//   foundedIn: '2023',
//   ...restaurant,
//   founder: 'Matheus Bellucio',
// };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.Rname = 'Piatto Vecchio';
// console.log(restaurantCopy.Rname);
// console.log(restaurant.Rname);

// // ================================ REST PATTERN ===============================//
// const arr2 = [1, 2, ...[3, 4]]; // spread operator, right side of equal assignment operator

// // 1) Destructuring

// // rest left side of equal assignment operator
// const [felem, selem, ...others] = [1, 2, 3, 4, 5];
// console.log(others);

// console.log('=================================');

// // colects the rest of the elements unused in the destructuring assignment
// const [pizza, , Risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza);
// console.log(Risotto);
// console.log(otherFood);

// // rest element must be the last element

// // using rest on objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2) Functions
// console.log('=================================');

// const add = function (...nums) {
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//   }
//   console.log(sum);
// };

// add(1, 2, 3);
// add(1, 2, 3, 4, 5, 6, 7);
// add(1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13);

// const x = [23, 7, 99];
// add(...x);

// console.log('=================================');

// restaurant.orderPizza(
//   'basilico',
//   'Salsa di Pomodoro',
//   'Mozzarella',
//   'Olive Oil'
// );

// restaurant.orderPizza('Salame');

// // ====================== SHORT CIRCUITING &&, || =========================
// console.log('=================================');

// // can use any data type, return any data type, so short circuiting
// // short circuiting -  [OR] if first value is truthy value it will return first value

// // OR operator

// console.log('========== OR ==========');

// console.log(3 || 'matheus');
// console.log('' || 'Matheus');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// // AND operator
// // short circuiting -  [AND] if first value is falsy value it will return first value
// console.log('========== AND ==========');
// console.log(0 && 'matheus');
// console.log(7 && 'matheus');

// console.log('Hello' && 23 && null && 'jonas');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('aglio', 'oleo');
// }

// restaurant.orderPizza && restaurant.orderPizza('mortadela', 'parmeggianno');

// // ========================== The Nulish Coalescing Operator ?? ======================
// console.log('===============================');

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // nulish values => null and undefined (not include 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// // ========================== Logical Assignment Operators ======================
// console.log('===============================');

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Benito Piazzi',
// };

// // ---------- or assignment operator -----------

// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// // or equal ||= assignment operator, same as writing x.property = x.property || true; => x.property ||= true;
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// // ---------- nullish assignment operator (null or undefined) -----------
// // same thing [??=] same as writing x.property = x.property ?? 10; => x.property ??= 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// console.log(rest1.numGuests);
// console.log(rest2.numGuests);

// // ---------- AND [||] assignment Operator -----------

// rest1.owner &&= '<Anonymous>';
// rest2.owner &&= '<Anonymous>';

// console.log(rest1);
// console.log(rest2);

// // ========================== CODING CHALLENGE ========================
// console.log('============== Coding Challenge ===============');

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goreztka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowsky',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);

// const [gk, ...fieldPlayers] = players1;
// console.log(gk);
// console.log(fieldPlayers);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(playersFinal);

// // const {team1, draw, team2} = game.odds;  // this is wrong
// // console.log(team1, draw, team2);

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored.`);
// };
// // printGoals('Davies', 'Lewandowsky', 'Muller', 'Kimmich');
// printGoals(...game.scored);

// team1 < team2 && console.log('Team 1 is more likely to win!');

// // ========================== Looping Arrays: The for-of Loop ========================
// console.log('                                             ');
// console.log('============== Looping Arrays ===============');

// const menuArr = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menuArr) {
//   console.log(item);
// }

// // getting the index also
// for(const [idx, dish] of menuArr.entries()) {
//   console.log(`${idx + 1}: ${dish}`);
// }

// ========================== Enhanced Object Literals ========================
// console.log('                                             ');
// console.log('============== Enhanced Object Literals ===============');

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   Rname: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   // es6 Enhanced Object Literals
//   openingHours,

//   order: function (startIndex, mainIndex) {
//     return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
//   },

//   // works exactly the same as above
//   orderBetter(startIndex, mainIndex) {
//     return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({
//     startIndex = 1,
//     mainIndex = 0,
//     time = '18:00',
//     adress,
//   }) {
//     console.log(
//       `Order Received! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}.`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here it is your pasta with ${ing1}, ${ing2} and ${ing3}.`);
//   },

//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

// // ========================== Optional Chaining (?.)========================
// console.log('                                             ');
// console.log('============== Optional Chaining (?.) ===============');

// if (restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }

// // same principle, now with optional chaining
// console.log(restaurant.openingHours?.mon?.open);
// console.log(restaurant.openingHours?.fri?.open);

// // example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'Closed';
//   console.log(`On ${day} we open at ${open}.`);
// }

// // methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// // Arrays
// const users = [{ name: 'Matheus', email: 'claitonrasta@gmail.com' }];

// console.log(users[0]?.name ?? 'User array empty');
// console.log(users[1]?.name ?? 'User array empty'); // array idx 1 does not exist

// // ========================== Looping Objects ========================
// console.log('                                             ');
// console.log('============== Looping Objects ===============');

// // property names

// const properties = Object.keys(openingHours);
// console.log(properties);

// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }

// // property values

// const values = Object.values(openingHours);
// console.log(values);

// for (const hour of Object.values(openingHours)) {
//   console.log(hour);
// }

// // names and values

// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [name, {open, close}] of Object.entries(openingHours)) {
//   console.log(
//     `On ${name} we open at ${open} and close at ${close}`
//   );
// }

// ========================== CODING CHALLENGE ========================
// console.log('============== Coding Challenge ===============');

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goreztka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowsky',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// console.log('========= Challenge 1 =========');

// for (const [idx, scorer] of game.scored.entries()) {
//   console.log(`Goal ${idx + 1}: ${scorer}`);
// }

// console.log('========= Challenge 2 =========');

// const odds = Object.values(game.odds);
// const average = odds.reduce((a, b) => a + b, 0) / odds.length;
// console.log(average.toFixed(2));

// console.log('========= Challenge 3 =========');

// for (const [key, value] of Object.entries(game.odds)) {
//   const team = key === 'x' ? 'Draw' : `Victory of ${game[key]}`;
//   console.log(`Odd of ${team}: ${value}`);
// }

// // ========================== Sets ========================
// console.log('                                             ');
// console.log('=================== Sets ====================');

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// console.log(ordersSet); // all the duplicates are gone
// console.log(new Set('Matheus')); // each letter will be an element of the set

// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread'); // still has 1 garlic bread on the set
// console.log(ordersSet);
// ordersSet.delete('Risotto');
// console.log(ordersSet);

// // cannot use indexes to access values in sets
// // values are unique
// // sets are iterables, can loop

// for (const order of ordersSet) {
//   console.log(order);
// }

// // Example

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// // if we want to know only the unique values we use set syntax
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// // we created an array with only the unique values using the spread operator and the Set syntax

// // if we want to know how many unique values there are
// console.log(` the numbers of positions: ${new Set(staff).size}`);

// // counting how many letters in a string
// console.log(`amount of letters in "Matheus": ${new Set('Matheus').size}`);

// // ========================== Maps ========================
// console.log('                                             ');
// console.log('=================== Maps ====================');

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');
// rest
//   .set('Categories', ['Italian', 'Pizzeria', 'Classic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');
// console.log(rest);

// console.log(rest.get('name'));
// console.log(rest.get('Categories'));
// console.log(true);

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('Categories'));
// rest.delete(2);

// console.log(rest.size);
// // rest.clear();

// const testArr = [1, 2];
// rest.set(testArr, 'Test'); // using an array as key
// console.log(rest.get(testArr));

// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);

// ========================== Maps: Iteration =========================
// console.log('                                             ');
// console.log('=================== Maps: Iteration ====================');

// // Convert Objects to Maps

// const restaurant = {
//   Rname: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (startIndex, mainIndex) {
//     return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({
//     startIndex = 1,
//     mainIndex = 0,
//     time = '18:00',
//     adress,
//   }) {
//     console.log(
//       `Order Received! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}.`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here it is your pasta with ${ing1}, ${ing2} and ${ing3}.`);
//   },

//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C++'],
//   [2, 'Python'],
//   [3, 'Javascript'],
//   ['Correct Answer', 3],
//   [true, 'Correct'],
//   [false, 'Incorrect'],
// ]);

// const hoursMap = new Map(Object.entries(restaurant.openingHours));
// console.log(hoursMap);

// // Iteration
// // quizz app
// console.log(question.get('question'));

// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(key, value);
//   }
// }

// // const answer = Number(prompt('Answer: '));
// const answer = 3;
// console.log(`Your answer was ${answer}: ${question.get(answer)}`);

// console.log(question.get(question.get('Correct Answer') === answer));

// // convert map to array
// console.log([...question]);
// console.log(question.entries());
// console.log(question.keys());
// console.log(question.values());

// ========================== Wich Data Structure to Use? =========================
// console.log('                                             ');
// console.log('=================== Wich Data Structure to Use? ====================');

//sources of data
// 1 - From the program itself => Data written directly in source code (e.g. status message)
// 2 - From the UI => Data input from the user or data written in DOM (e.g. tasks in todo app)
// 3 - From external sources => Data fetched for example from web API (e.g. recipe objects)

// Simple list => ARRAY
// Key/Value pair => OBJECT || MAP

// ========================== CODING CHALLENGE ========================
// console.log('                                             ');
// console.log('============== Coding Challenge ===============');

// const gameEvents = new Map([
//   [17, 'Goal'],
//   [36, 'Substitution'],
//   [47, 'Goal'],
//   [61, 'Substitution'],
//   [64, 'Yellow Card'],
//   [69, 'Red Card'],
//   [70, 'Substitution'],
//   [72, 'Substitution'],
//   [76, 'Goal'],
//   [80, 'Goal'],
//   [92, 'Yellow Card'],
// ]);
// // =======================================================
// console.log('                                             ');
// console.log('________ Challenge 1 _______');
// const events = [...new Set(gameEvents.values())];
// console.log(events);
// // =======================================================
// console.log('                                             ');
// console.log('________ Challenge 2 _______');
// gameEvents.delete(64);
// console.log(gameEvents);
// // =======================================================
// console.log('                                             ');
// console.log('________ Challenge 3 _______');
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );
// // =======================================================
// console.log('                                             ');
// console.log('________ Challenge 4 _______');
// for (const [minute, event] of gameEvents.entries()) {
//   const half = minute <= 45 ? '[First Half]' : '[Second Half]';
//   console.log(`${half} ${minute}: ${event}`);
// }

// ========================== Strings Part 1 ========================
// console.log('                                             ');
// console.log('============== Strings Part 1 ===============');

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(plane[3]);

// console.log(airline.length);
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   // b and e are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('You got the middle seat');
//   } else {
//     console.log('You got Lucky!');
//   }
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// // ========================== Strings Part 2 ========================
// console.log('                                             ');
// console.log('============== Strings Part 2 ===============');

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// // fix Capitalization in name
// const passenger = 'MatHeUS';
// const passengerLower = passenger.toLowerCase();
// const passengerFixed =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerFixed);

// // comparing emails
// const email = 'claiton@cvrl.com';
// const loginEmail = '   CLAIton@CVrl.CoM  \n';

// const fixedEmail = loginEmail.toLowerCase().trim();
// console.log(fixedEmail);
// console.log(email === fixedEmail);

// // replacing
// const priceBR = 'R$1250,45';
// const priceUS = priceBR.replace('R', '').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replace('door', 'gate')); //only changes first ocurrence!

// // using a regular expression
// console.log(announcement.replace(/door/g, 'gate')); // this way all ocurrences gonna be changed

// // booleans
// const plane2 = 'Airbus A320neo';
// console.log(plane2.includes('A320'));
// console.log(plane2.includes('Boing'));
// console.log(plane2.startsWith('Air'));
// console.log(plane2.endsWith('neo'));

// if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
//   console.log(`It is an Airbus!`);
// }

// // practice exercise
// // check if passenger bag is allowed to be checked in
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are not allowed on board!');
//   } else {
//     console.log('welcome aboard!');
//   }
// };

// checkBaggage('I have a laptop, some Food and a packet Knife.');
// checkBaggage('I have socks and a Camera');
// checkBaggage('Got some snacks and a Gun for protection.');

// ========================== Strings Part 3 ========================
// console.log('                                             ');
// console.log('============== Strings Part 3 ===============');

// console.log('a+very+nice+test+with+split+method'.split('+'));

// const [firstName, lastName] = 'Matheus Bellucio'.split(' ');
// console.log(firstName, lastName);

// const propperName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(propperName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const word of names) {
//     namesUpper.push(word.replace(word[0], word[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };

// const person = 'matheus soares bellucio tavares';
// capitalizeName(person);

// // padding a string
// const message = 'Go to gate 23!';
// console.log(
//   message.padStart(message.length + 10, '=').padEnd(message.length + 20, '=')
// );

// // real life example with credit card number

// const maskCreditCard = function (number) {
//   const str = String(number);
//   const lastDigits = str.slice(-4);
//   return lastDigits.padStart(str.length, '*');
// };

// console.log(maskCreditCard(2245567898732245));

// // repeat method
// const message2 = 'Bad weather. All departures delayed... ';
// console.log(message2.repeat(5));

// const planesInLine = function (nPlanes) {
//   console.log(`There are ${nPlanes} planes in line ${'✈'.repeat(nPlanes)}`);
// };

// planesInLine(5);

// // ========================== CODING CHALLENGE ========================
// console.log('                                             ');
// console.log('============== Coding Challenge ===============');

// // test data
// // underscore_case
// // first_name
// // Some_Variable
// // calculate_AGE
// // delayed_departure

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// const button = document.querySelector('button');

// function camelCase() {
//   const gettext = document.querySelector('textarea').value.split('\n');
//   let iconOutput = '✔';

//   for (const [idx, word] of gettext.entries()) {
//     const [fWord, sWord] = word.toLowerCase().split('_');
//     const output = fWord + sWord.replace(sWord[0], sWord[0].toUpperCase())
//     console.log(`${output.padEnd(20)} ${iconOutput.repeat(idx + 1)}`);
//   }
// }

// button.addEventListener('click', camelCase);

// // ========================== String Methods Practice ========================
console.log('                                             ');
console.log('============== String Methods Practice ===============');

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const statuses = flights.split('+');
console.log(statuses);

// [
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25',
//   '_Arrival;bru0943384722;fao93766109;11:45',
//   '_Delayed_Arrival;hel7439299980;fao93766109;12:05',
//   '_Departure;fao93766109;lis2323639855;12:30'
// ]

function organiseData(listing) {
  for (const item of listing) {
    const slicedInfo = item.split(';');
    const output = `${slicedInfo[0].split('_').join(' ')} from ${slicedInfo[1]
      .slice(0, 3)
      .toUpperCase()} to ${slicedInfo[2]
      .slice(0, 3)
      .toUpperCase()} (${slicedInfo[3].split(':').join('h')})`;
    console.log(output.padStart(42, '-'));
  }
}

organiseData(statuses);
