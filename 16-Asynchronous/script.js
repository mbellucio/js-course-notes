'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

/* synchronous

const p = document.querySelector('p'); 
p.textContent = 'My name is Matheus'; 
alert('Text Sent!');
p.style.color = 'red'; 

code is executed line by line in order

*/

// ==================== Our First AJAX call: XMLHttpRequest ==================== //
console.log('');
console.log('=============================================');
console.log('==== Our First AJAX call: XMLHttpRequest ====');
console.log('=============================================');

const endpointName = 'https://restcountries.com/v3.1/name/';
const endpointCode = 'https://restcountries.com/v3.1/alpha/';

const renderCountry = function (data, classname = '') {
  const currency = Object.keys(data.currencies)[0];
  const lang = Object.keys(data.languages)[0];
  const html = `
      <article class="country ${classname}">
        <img class="country__img" src=${data.flags.png} />
        <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)}m</p>
          <p class="country__row"><span>🗣️</span>${data.languages[lang]}</p>
          <p class="country__row"><span>💰</span>${
            data.currencies[currency].name
          } ${data.currencies[currency].symbol}</p>
        </div>
      </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `${endpoint}${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     // console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     renderCountry(data);
//   });
// };

const getCountryAndNeighbour = function (country) {
  // ajax call
  const request = new XMLHttpRequest();
  request.open('GET', `${endpointName}${country}`);
  request.send();

  request.addEventListener('load', function () {
    // console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // render country 1
    renderCountry(data);

    // Get neighbour
    const [neighbour] = data.borders;
    console.log(neighbour);

    if (!neighbour) return;

    // Ajax Call 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `${endpointCode}${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryAndNeighbour('Brazil');

// ==================== Promises and Fetch API ==================== //
console.log('');
console.log('================================');
console.log('==== Promises and Fetch API ====');
console.log('================================');

// const request = new XMLHttpRequest();
// request.open('GET', `${endpointName}${country}`);
// request.send();

// const request = fetch(`${endpointName}${'portugal'}`);
// console.log(request);

// A PROMISE is a Container for a future VALUE.

/*
Promise lifle cycle:
  1 - Pending
  2 - settled -> Fullfill || Rejected
  3 - Consume Promise
*/

// ==================== Consuming Promises ==================== //
console.log('');
console.log('============================');
console.log('==== Consuming Promises ====');
console.log('============================');

countriesContainer.style.opacity = 1;

const renderError = function (msg) {
  countriesContainer.insertAdjacentHTML('beforeend', msg);
};

// const getCountryData = function (country) {
//   // country 1
//   fetch(`${endpointName}${country}`)
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not Found! ${response.status}`);
//       return response.json();
//     })
//     .then(([data]) => {
//       renderCountry(data);
//       const [neighbour] = data.borders;

//       if (!neighbour) return;

//       // country 2
//       return fetch(`${endpointCode}${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(([data]) => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 😥`);
//       renderError(`Something went Wrong! 😥😥: ${err.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

const getJson = function (url, country, errMessage = 'Something Went Wrong') {
  return fetch(`${url}${country}`).then(response => {
    if (!response.ok) throw new Error(`${errMessage} ${response.status}`);
    return response.json();
  });
};

const getCountryData = function (country) {
  // country 1
  getJson(endpointName, country, 'Country not Found!')
    .then(([data]) => {
      renderCountry(data);

      if (!data.borders) throw new Error('No neighbour found!');
      const neighbour = data.borders[0];
      // const neighbour = 'usadjdhuohsad';

      // country 2
      return getJson(endpointCode, neighbour, 'Border Country not found!');
    })
    .then(([data]) => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 😥`);
      renderError(`Something went Wrong! 😥😥: ${err.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// btn.addEventListener('click', function () {
//   getCountryData('Germany');
// });

// ==================== Coding Challenge ==================== //
console.log('');
console.log('==========================');
console.log('==== Coding Challenge ====');
console.log('==========================');

const APIKey = '?geoit=json&auth=469771627497647426743x46110';
const GeoEndpoint = 'https://geocode.xyz/';

const whereAmI = function (lat, long) {
  fetch(`${GeoEndpoint}${lat},${long}${APIKey}`)
    .then(response => {
      if (!response.ok)
        throw new Error('Something Went wrong with the request!');
      return response.json();
    })
    .then(data => {
      if (!data.city || !data.country)
        throw new Error('Could not find Any country with this name!');
      console.log(`You are in ${data.city}, ${data.country}`);
      getCountryData(data.country);
    })
    .catch(err => console.error(`${err} 😥`));
};

// const position = navigator.geolocation.getCurrentPosition(function (pos) {
//   const coords = pos.coords;
//   whereAmI(coords.latitude, coords.longitude);
// });

// ==================== Asynchronous Behind the Scenes: the event loop ==================== //
console.log('');
console.log('========================================================');
console.log('==== Asynchronous Behind the Scenes: the event loop ====');
console.log('========================================================');

// console.log('test start');
// setTimeout(() => console.log('0 seconds timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));

// Promise.resolve('Resolved Promise 2').then(res => {
//   for (let i = 0; i < 100000000; i++) {}
//   console.log(res);
// });
// console.log('test end');

/*
Order of execution

1 - global context
2 - Microtask queue - Promises
3 - Callback queue
*/

// ==================== Building a simple promise ==================== //
console.log('');
console.log('===================================');
console.log('==== Building a simple promise ====');
console.log('===================================');

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('You bought your lottery ticket');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You Win!');
//     } else {
//       reject(new Error('You loose!'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

// // promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log('i waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('waited 1 more second'));

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem')).catch(x => console.error(x));

// ==================== Promisifying Geolocation API ==================== //
console.log('');
console.log('=======================================');
console.log('==== Promisifying Geolocation API  ====');
console.log('=======================================');

// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.error(err)
// );

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(pos => console.log(pos));

console.log('the geolocation API is Async!');

const whereAmI2 = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: long } = pos.coords;
      return fetch(`${GeoEndpoint}${lat},${long}${APIKey}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error('Something Went wrong with the request!');
      return response.json();
    })
    .then(data => {
      if (!data.city || !data.country)
        throw new Error('Could not find Any country with this name!');
      console.log(`You are in ${data.city}, ${data.country}`);
      getCountryData(data.country);
    });

  btn.style.opacity = 0;
};

btn.addEventListener('click', whereAmI2);

// ==================== Coding Challenge ==================== //
console.log('');
console.log('===========================');
console.log('==== Coding Challenge  ====');
console.log('===========================');

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const imgContainer = document.querySelector('.images');

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;
//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error('Image not found!'));
//     });
//   });
// };

// let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log(img);
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg')
//   })
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(`${err} 😥`));

// ==================== Consuming Promises with Async/Await ==================== //
console.log('');
console.log('=============================================');
console.log('==== Consuming Promises with Async/Await ====');
console.log('=============================================');

const getPosition2 = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI3 = async function () {
  try {
    const pos = await getPosition2();

    // reverse Geocoding
    const { latitude: lat, longitude: long } = pos.coords;
    const resGeo = await fetch(`${GeoEndpoint}${lat},${long}${APIKey}`);
    if (!resGeo.ok) throw new Error('Problem Getting Location!');
    const dataGeo = await resGeo.json();

    // country data
    const res = await fetch(`${endpointName}${dataGeo.country}`);
    if (!res.ok) throw new Error('Problem Getting Country Data!');
    const [data] = await res.json();
    console.log(data);
    renderCountry(data);
  } catch (err) {
    console.log(err);
    renderError(`${err.message}`);
  }
};

// whereAmI3();
// console.log('test async');

// try {
//   let y = 1;
//   const x = 2;
//   y = 3;
// } catch(err) {
//   alert(err.message);
// }

// ==================== Returning Values from Async Functions ==================== //
console.log('');
console.log('===============================================');
console.log('==== Returning Values from Async Functions ====');
console.log('===============================================');

const whereAmI4 = async function () {
  try {
    const pos = await getPosition2();

    // reverse Geocoding
    const { latitude: lat, longitude: long } = pos.coords;
    const resGeo = await fetch(`${GeoEndpoint}${lat},${long}${APIKey}`);
    if (!resGeo.ok) throw new Error('Problem Getting Location!');
    const dataGeo = await resGeo.json();

    // country data
    const res = await fetch(`${endpointName}${dataGeo.country}`);
    if (!res.ok) throw new Error('Problem Getting Country Data!');
    const [data] = await res.json();
    renderCountry(data);
    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.log(err);
    renderError(`${err.message}`);

    // reject promise returned from async function
    throw err;
  }
};

// console.log('1: you will get Location');

// whereAmI4()
//   .then(city => console.log(`2: ${city}`),)
//   .catch(err => console.error(err))
//   .finally(() => console.log('3: Finished Getting Location'));

// using only async await to no mix it with promise then and catch

// (async function () {
//   try {
//     console.log('1: you will get Location');
//     const city = await whereAmI4();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.log(err);
//   }
//   console.log('3: Finished Getting Location');
// })();

// ==================== Running Promises in Parallel ==================== //
console.log('');
console.log('======================================');
console.log('==== Running Promises in Parallel ====');
console.log('======================================');

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJson(endpointName, c1);
    // const [data2] = await getJson(endpointName, c2);
    // const [data3] = await getJson(endpointName, c3);

    const data = await Promise.all([
      getJson(endpointName, c1),
      getJson(endpointName, c2),
      getJson(endpointName, c3),
    ]);

    console.log(data.map(cap => cap[0].capital[0]));

    // console.log(data1.capital, data2.capital, data3.capital);
  } catch (err) {
    console.log(err);
  }
};

// get3Countries('brazil', 'serbia', 'albania');

// ==================== Other Promises Combinators: Race, allSettled and any ==================== //
console.log('');
console.log('==============================================================');
console.log('==== Other Promises Combinators: Race, allSettled and any ====');
console.log('==============================================================');

// promise.race
// the fastest promise to fulfill will be the returned promise, rejected or resolved

// (async function () {
//   const res = await Promise.race([
//     getJson(endpointName, 'italy'),
//     getJson(endpointName, 'russia'),
//     getJson(endpointName, 'vietnam'),
//   ]);
//   console.log(res[0].name.common);
// })();

// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('Request took too long'));
//     }, sec * 1000);
//   });
// };

// Promise.race([getJson(endpointName, 'Brazil'), timeout(1)])
//   .then(res => console.log(res[0].name.common))
//   .catch(err => console.error(err));

// promise.allSettled
// return an array of all settled promises, rejected or resolved

Promise.allSettled([Promise.resolve('Sucess'), Promise.reject('Failure')]).then(
  res => console.log(res)
);

// Promise.Any
// Return the first fullfilled one

Promise.any([Promise.resolve('Sucess'), Promise.reject('Failure')]).then(res =>
  console.log(res)
);

// ==================== Coding Challenge ==================== //
console.log('');
console.log('===========================');
console.log('==== Coding Challenge  ====');
console.log('===========================');

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found!'));
    });
  });
};

const loadNPause = async function () {
  try {
    let img = await createImage('img/img-1.jpg');
    await wait(2);
    img.style.display = 'none';
    img = await createImage('img/img-2.jpg');
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.error(err);
  }
};

// loadNPause();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    const imgsEl = await Promise.all(imgs);
    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;
//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error('Image not found!'));
//     });
//   });
// };

// let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log(img);
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg')
//   })
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(`${err} 😥`));
