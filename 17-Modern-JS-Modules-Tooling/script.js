'use strict';

// an overview of modern Javascript Development

/*
Development => building => Transpiling/Polyfilling (BABEL) => Javascript Bundle (Production)

Bundling => Webpack ot PARCEL
*/

// an overview of Modules in JavaScript

/*
Module => 
  Reusable Piece of code that encapsulates implementation details; 
  Usually Standalone file, but it doesn't have to be  
  
ES6 Modules => 
  Modules Stored in files, exactly one module per file. 

differences:

                      |      ES6 MODULE         |     SCRIPT  
                      |=========================|================
Top-level Variables   |      Scoped to module   |     Global
Default mode          |      Strict Mode        |     "Sloppy" mode
Top-level this        |      Undefined          |     window
Imports and exports   |      yes                |     no
HTML Linking          | <script type="module">  |     <script>
File Downloading      |      Asynchronous       |     Synchronous  
*/

// ==================== Exporting and importing in ES6 Modules ==================== //

// importing module
console.log('importing module');
// import { clone } from 'lodash';
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('feijão', 20);
// console.log(price, tq);

import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('ARROZ', 50);
console.log(ShoppingCart.totalPrice);

// default value exported from module
import add, { cart } from './shoppingCart.js';
add('pizza', 10);
add('Bread', 5);
add('calzone', 2);
console.log(cart);

//IMPORTS ARE NOT A COPY OF EXPORTS, THEY ARE A LIVE CONNECTION!!
// THEY POINT TO SAME PLACE IN MEMORY!!!

// ==================== Top-Level await (ES2022) ==================== //
console.log('');
console.log('==================================');
console.log('==== Top-Level await (ES2022) ====');
console.log('==================================');

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

// real world example
// async function will always return a promise
const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

// not clean solution
// const lastPost = getLastPost();
// lastPost.then(last => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// ==================== The Module Pattern ==================== //
console.log('');
console.log('=============================');
console.log('==== The Module Pattern  ====');
console.log('=============================');

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} Ordered from supplier.`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 2);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2.cart);

// ==================== A Brief Introduction to the Command Line ==================== //
console.log('');
console.log('===================================================');
console.log('==== A Brief Introduction to the Command Line  ====');
console.log('===================================================');

// cd => move
// dir => check directory
// mkdir [folderName] => create folder
// New-item item1, item2 ... => create item
// del => delete
// rmdir => delete directory

console.log(`
// cd => move 
// dir => check directory
// mkdir [folderName] => create folder
// New-item item1, item2 ... => create item
// del => delete
// rmdir => delete directory
`);

// ==================== Introduction to NPM ==================== //
console.log('');
console.log('=============================');
console.log('==== Introduction to NPM ====');
console.log('=============================');

/*
npm -v // check version
npm init // initializes npm on the project
npm install [package]
npm i // will use package.json and download all dependencies
*/
// import cloneDeep from '../../node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

// ==================== Bundling with Parcel and NPM ==================== //
console.log('');
console.log('======================================');
console.log('==== Bundling with Parcel and NPM ====');
console.log('======================================');

// npm i parcel
// npx parcel index.html

// changes will be injected without triggering a page reload
if (module.hot) module.hot.accept();

console.log('Matheus' ?? null);
console.log(cart.find(el => el.quantity >= 2));
console.log(cart.filter(el => el.quantity >= 2));

Promise.resolve('test').then(x => console.log(x));

import 'core-js/stable';

// polifilling async functions
import 'regenerator-runtime/runtime';

