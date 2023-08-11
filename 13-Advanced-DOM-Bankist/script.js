'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const nav = document.querySelector('.nav');

// ========================= Select, create and delete elements =========================
console.log('');
console.log('==============================================');
console.log('===== Select, create and delete elements =====');
console.log('==============================================');

// ================ selecting elements ================
console.log(document.documentElement); // select all document
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button'); // returns an HTML collection, wich can be changed real time
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// ================ creating and inserting elements ================
// .insertAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies because we want';
message.innerHTML =
  'We use cookies because we want <button class="btn btn--close-cookie">Got It!</button>';

// header.prepend(message); // prepend adds as first child
header.append(message); // append adds as last child
// header.append(message.cloneNode(true)); // clone the element so it can be displayed in multiple places simultaneously

header.before(message); // will insert before header element - sibling
// header.after(message); // will insert after header element - sibling

// ================ Delete elements ================
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove(); // remove element
  });

// ========================= Styles, Attributes and Classes =========================
console.log('');
console.log('===============================================');
console.log('======= Styles, Attributes and Classes  =======');
console.log('===============================================');

// ================ Styles ================
// inline styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(getComputedStyle(message)); // get the style from everywhere

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered'); // changing CSS

// ================ Attributtes ================
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
logo.alt = 'Caiton rasta!';
// console.log(logo.designer); // this wont work cause is not a standard attributte
console.log(logo.getAttribute('designer')); // this will work! xd
logo.setAttribute('company', 'BIA'); // setting an attributte
logo.getAttribute('src'); // gets the relative path instead of absolute

const link = document.querySelector('.nav__link--btn');
console.log(link.href); // gets the absolute path
console.log(link.getAttribute('href')); // gets the relative path as written in HTML if they are diffent

// data attributtes (must start with 'data-[placeholder]')
console.log(logo.dataset.version);

// classes
logo.classList.add('ph', 'ph2');
logo.classList.remove('ph', 'ph2');
logo.classList.toggle('ph');
logo.classList.contains('ph');

// ========================= Implement Smoot Scrolling =========================
console.log('');
console.log('===========================================');
console.log('======= Implement Smoot Scrolling   =======');
console.log('===========================================');

const btnScroll = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScroll.addEventListener('click', function (event) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(event.target.getBoundingClientRect());

  // scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // old way
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  //simple way
  section1.scrollIntoView({ behavior: 'smooth' });
});

// ========================= Types of events and event handlers =========================
console.log('');
console.log('==================================================');
console.log('======= Types of events and event handlers =======');
console.log('==================================================');

// const h1 = document.querySelector('h1');

// // how to remove an event listerner if you want it to listen only once
// const alertH1 = function (event) {
//   alert('heading');
//   // h1.removeEventListener('mouseenter', alertH1);
// };

// h1.addEventListener('mouseenter', alertH1);

// //removing after 3 seconds
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// old way
// h1.onmouseenter = function (event) {
//   alert('heading');
// };

// ========================= Event Propagation in Practice =========================
console.log('');
console.log('=============================================');
console.log('======= Event Propagation in Practice =======');
console.log('=============================================');

// rgb(255, 255, 255)

// const randomInt = (min, max) =>
//   Math.trunc(Math.random() * (max - min) + 1) + min;

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);

//   // stop event propagation
//   // not a good idea
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
// });

// event.currenTarget === this

// ========================= Event Delegation: Implementing Page Navigation =========================
console.log('');
console.log('==============================================================');
console.log('======= Event Delegation: Implementing Page Navigation =======');
console.log('==============================================================');

// page navigation

///////////////////////////////////////////////////////////////
// not a efficient way cause createas a event for each element
///////////////////////////////////////////////////////////////
// document.querySelectorAll('.nav__link').forEach(function (element) {
//   element.addEventListener('click', function (event) {
//     event.preventDefault();
//     // element.scrollIntoView({behavior: 'smooth' });
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({behavior: 'smooth' });
//   });
// });

// 1. add event listener to a common parent element
// 2. determine what element generated the event

document
  .querySelector('.nav__links')
  .addEventListener('click', function (event) {
    event.preventDefault();

    // matching strategy
    if (event.target.classList.contains('nav__link')) {
      const id = event.target.getAttribute('href');
      console.log(id);
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  });

// ========================= DOM Traversing =========================
console.log('');
console.log('==============================');
console.log('======= DOM Traversing =======');
console.log('==============================');

// const h1 = document.querySelector('h1');

// // going downwards: child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'blue';

// // going upwards
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// // will be the element itself
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// // going sideways, siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (element) {
//   if (element !== h1) {
//     element.style.transform = 'scale(0.5)';
//   }
// });

// ========================= Building a tabbed component =========================
console.log('');
console.log('===========================================');
console.log('======= Building a tabbed component =======');
console.log('===========================================');

// tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (event) {
  const clicked = event.target.closest('.operations__tab');

  // guard clause
  if (!clicked) return;

  // remove display classes
  tabsContent.forEach(cont =>
    cont.classList.remove('operations__content--active')
  );
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));

  // active tab
  clicked.classList.add('operations__tab--active');

  // activate content
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// ========================= Passing Arguments to Event Handlers =========================
console.log('');
console.log('===================================================');
console.log('======= Passing Arguments to Event Handlers =======');
console.log('===================================================');

// menu fade animation
const handleHover = function (event) {
  if (event.target.classList.contains('nav__link')) {
    const link = event.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(elem => {
      if (elem !== link) elem.style.opacity = this;
      logo.style.opacity = this;
    });
  }
};

// passing an argument into a handler function
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// ========================= Implementing Sticky Navigation: The Scroll Event =========================
console.log('');
console.log('================================================================');
console.log('======= Implementing Sticky Navigation: The Scroll Event =======');
console.log('================================================================');

const initialCoords = section1.getBoundingClientRect();

// stick navigation
// bad way
// window.addEventListener('scroll', function () {
//   if (this.window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

// ========================= Intersection Observer API =========================
console.log('');
console.log('=========================================');
console.log('======= Intersection Observer API =======');
console.log('=========================================');

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry)
//   })
// };

// const obsOptions = {
//   root: null,
//   threshhold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const headerEl = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries; // same as writing const entry = entries[0];

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(headerEl);

// ========================= Revealing Elements on Scroll =========================
console.log('');
console.log('============================================');
console.log('======= Revealing Elements on Scroll =======');
console.log('============================================');

// reveal sections
const allSection = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// ========================= Lazy Loading Images =========================
console.log('');
console.log('===================================');
console.log('======= Lazy Loading Images =======');
console.log('===================================');

// lazy loading Images
const imgTargets = document.querySelectorAll('img[data-src]'); // a way of selecting an element that contains a certain attributte

const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  // replace src attributte with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

// ========================= Building a Slider Component =========================
console.log('');
console.log('===========================================');
console.log('======= Building a Slider Component =======');
console.log('===========================================');

// slider
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

let currentSlide = 0;
const maxSlides = slides.length;

const activateDot = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};

const goToSlide = function (curSlide) {
  slides.forEach(
    (slide, index) =>
      (slide.style.transform = `translateX(${100 * (index - curSlide)}%)`)
  );
};

goToSlide(0);

// next slide
const nextSlide = function () {
  if (currentSlide === maxSlides - 1) currentSlide = 0;
  else currentSlide++;
  goToSlide(currentSlide);
  activateDot(currentSlide);
};

// prev Slide
const prevSlide = function () {
  if (currentSlide === 0) currentSlide = maxSlides - 1;
  else currentSlide--;
  goToSlide(currentSlide);
  activateDot(currentSlide);
};

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

// ========================= Building a Slider Component 2 =========================
console.log('');
console.log('=============================================');
console.log('======= Building a Slider Component 2 =======');
console.log('=============================================');

// binding arrows

document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowRight') nextSlide();
  if (event.key === 'ArrowLeft') prevSlide();
});

const dotContainer = document.querySelector('.dots');

const createDots = function () {
  slides.forEach((_, idx) => {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${idx}"></button>`
    );
  });
};

createDots();
activateDot(0);

dotContainer.addEventListener('click', function (event) {
  if (event.target.classList.contains('dots__dot')) {
    const slide = event.target.dataset.slide;
    goToSlide(slide);
    activateDot(slide);
  }
});

// ========================= Lifecycle DOM Event =========================
console.log('');
console.log('===================================');
console.log('======= Lifecycle DOM Event =======');
console.log('===================================');

document.addEventListener('DOMContentLoaded', function (event) {
  console.log('DOM Tree loaded', event);
});

window.addEventListener('load', function (event) {
  console.log('loaded', event);
});

// window.addEventListener('beforeunload', function (event) {
//   event.preventDefault();
//   console.log(event);
//   event.returnValue = '';
// });

// ========================= Efficient Script Loading: defer and Async =========================
console.log('');
console.log('==========================================================');
console.log('======= Efficient Script Loading: defer and Async  =======');
console.log('==========================================================');

// regular <script src="script.js">
// async <script async src="script.js"> // fetch script and executes immediatly, pauising the HTML parser
// defer <script defer src="script.js"> // fecth script, wait for HTML parse and then execute the code in order
