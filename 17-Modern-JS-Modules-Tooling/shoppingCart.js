// exporting module
console.log('');
console.log('================================================');
console.log('==== Exporting and importing in ES6 Modules ====');
console.log('================================================');

console.log('exporting module');

// blocking code
// console.log('Start fetching users ');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finish');

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

// default export

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
