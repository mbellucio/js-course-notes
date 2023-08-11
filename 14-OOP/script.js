'use strict';

// 4 principles

// Abstraction => ignoring or hiding details that DONT MATTER!

// Encapsulation => Keep some properties and methods PRIVATE inside a class

// Inheritance => Extending properties and methods from a parent class to avoid duplicating code

// Polymorphism => A child class can overwrite a method inherited from a parent class

// ======================= OOP in Javascript =======================
console.log('');
console.log('=============================');
console.log('===== OOP in Javascript =====');
console.log('=============================');

// 3 eays of creating a prototype, aka "class"
// => Constructor Functions
// => ES6 Classes
// => Object.create()

// ======================= Constructor Functions and the new Operator =======================
console.log('');
console.log('======================================================');
console.log('===== Constructor Functions and the new Operator =====');
console.log('======================================================');

// array functions dont work due to not having a this keyword
const Person = function (firstName, birthYear) {
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // never do this
  // this.calcAge = function () {
  //   console.log(2023 - this.birthYear);
  // };
};

const matheus = new Person('Matheus', 1996);
console.log(matheus);
// what happens behind the scenes
// 1 => new {} is created
// 2 => function is called, this = {}
// 3 => {} linked to prototype
// 4 => function automatically return {}

const claiton = new Person('Claiton', 1970);
console.log(claiton);

console.log(matheus instanceof Person); // returns true

// ======================= Prototypes =======================
console.log('');
console.log('======================');
console.log('===== Prototypes =====');
console.log('======================');

// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

matheus.calcAge();
claiton.calcAge();
console.log(matheus.__proto__);
console.log(matheus.__proto__ === Person.prototype); // true
console.log(Person.prototype.isPrototypeOf(matheus)); // true

// prototype = prototypeOfLinkedObjects (should be like this)

Person.prototype.species = 'Homo Sapiens';
console.log(matheus, claiton);
// property will be available at the prototype
console.log(matheus.species, claiton.species);

console.log(matheus.hasOwnProperty('firstName')); // true
console.log(matheus.hasOwnProperty('species')); // false, is from the Person prototype

// ======================= Prototypal Inheritance on Built in Objects =======================
console.log('');
console.log('======================================================');
console.log('===== Prototypal Inheritance on Built in Objects =====');
console.log('======================================================');

// person.prototype
console.log(matheus.__proto__);
// object.prototype (top of the prototype chain)
console.log(matheus.__proto__.__proto__);
console.log(matheus.__proto__.__proto__.__proto__);

const arr = [3, 3, 7, 8, 15, 8, 9, 10];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // true
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');

console.dir(x => x + 1);

// ======================= Coding Challenge =======================
console.log('');
console.log('============================');
console.log('===== Coding Challenge =====');
console.log('============================');

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`Current ${this.make} speed is: ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`Current ${this.make} speed is: ${this.speed}`);
};

const fiat = new Car('Fiat', 60);
const toyota = new Car('Toyota', 80);

fiat.accelerate();
fiat.accelerate();
fiat.brake();

toyota.brake();
toyota.brake();
toyota.brake();
toyota.accelerate();
toyota.accelerate();
toyota.accelerate();
toyota.accelerate();
toyota.accelerate();

// ======================= ES6 Classes =======================
console.log('');
console.log('=======================');
console.log('===== ES6 Classes =====');
console.log('=======================');

// class expression
// const PersonCc = class {};

// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // will be on the prototype of the objects!
  calcAge() {
    console.log(`${this.firstName} is ${2023 - this.birthYear} years old`);
  }
}

const brendon = new PersonCl('Brendon', 1999);
console.log(brendon);
brendon.calcAge();

console.log(brendon.__proto__ === PersonCl.prototype);

PersonCl.prototype.greetPerson = function () {
  console.log(`Hello ${this.firstName}!`);
};

brendon.greetPerson();

// 1. Classes are not hoisted => cant use them before they are declared
// 2. Classes are first class citzens => can pass to functions and return from functions
// 3. Classes are executed in strict mode

// ======================= Setters and Getters =======================
console.log('');
console.log('===============================');
console.log('===== Setters and Getters =====');
console.log('===============================');

const account = {
  owner: 'Matheus',
  movements: [20, 352, 456],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 56;
console.log(account.movements);

class PersonSG {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // will be on the prototype of the objects!
  calcAge() {
    console.log(`${this.fullName} is ${2023 - this.birthYear} years old`);
  }

  get age() {
    return 2023 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const claudio = new PersonSG('Vitor Cláudio', 1997);
console.log(claudio);
console.log(claudio.age);
console.log(claudio._fullName);
console.log(claudio.fullName);

// ======================= Static Methods =======================
console.log('');
console.log('==========================');
console.log('===== Static Methods =====');
console.log('==========================');

Array.from(document.querySelectorAll('h1')); // returns an array
// this method is only available to the constructor

class Player {
  constructor(playerName, team) {
    this.playerName = playerName;
    this.team = team;
  }

  // instace methods
  presentPlayer() {
    console.log(`${this.playerName} plays for ${this.team}`);
  }

  // static methods
  static helloThere() {
    console.log('Hello There!');
  }
}

Player.hey = function () {
  console.log('Hey there');
};

const messi = new Player('Messi', 'Barcelona');

Player.hey();
// messi.hey(); // throws an error!

Player.helloThere();
// messi.helloThere(); // throws an error!

// ======================= Object.Create =======================
console.log('');
console.log('=========================');
console.log('===== Object.Create =====');
console.log('=========================');

const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },

  init(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 1998;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1985);
sarah.calcAge();

// ======================= Coding Challenge =======================
console.log('');
console.log('============================');
console.log('===== Coding Challenge =====');
console.log('============================');

class Car2 {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }

  accelerate() {
    this.speed += 10;
    console.log(`the vehicle is going at ${this.speed}Km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`the vehicle is going at ${this.speed}Km/h`);
  }
}

const ferrari = new Car2('Ferrari', 120);
console.log(ferrari.speedUS);
console.log(ferrari);
ferrari.accelerate();
ferrari.accelerate();
ferrari.accelerate();
ferrari.brake();
ferrari.brake();
ferrari.brake();
console.log(ferrari.speedUS);
console.log(ferrari);

// ======================= Inheritance Between Classes =======================
console.log('');
console.log('=======================================');
console.log('===== Inheritance Between Classes =====');
console.log('=======================================');

const PersonIH = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

PersonIH.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  PersonIH.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(PersonIH.prototype);
Student.prototype.constructor = Student;

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and i am studying ${this.course}`);
};

const rogerio = new Student('Rogerio', 1998, 'Computer Science');
console.log(rogerio);
rogerio.introduce();
rogerio.calcAge();

console.log(rogerio.__proto__);
console.log(rogerio.__proto__.__proto__);

// ======================= Coding Challenge =======================
console.log('');
console.log('============================');
console.log('===== Coding Challenge =====');
console.log('============================');

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} accelerates to ${this.speed}KM/h, and has the battery at ${this.charge}%`
  );
};

const tesla = new EV('tesla', 120, 60);
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(95);
tesla.accelerate();
console.log(tesla);

// ======================= Inheritance between "Classes" - ES6 Classes =======================
console.log('');
console.log('=======================================================');
console.log('===== Inheritance between "Classes" - ES6 Classes =====');
console.log('=======================================================');

class Person2 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // will be on the prototype of the objects!
  calcAge() {
    console.log(`${this.fullName} is ${2023 - this.birthYear} years old`);
  }

  greet() {
    console.log(`Hey ${this.fullName}!`);
  }

  get age() {
    return 2023 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

class Student2 extends Person2 {
  constructor(fullName, birthYear, course) {
    // always need to happen first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and i am studying ${this.course}`);
  }

  calcAge() {
    console.log(`I'm ${2023 - this.birthYear} years old rogério`);
  }
}

const sanderson = new Student2('Sanderson Magno', 2002, 'IT');
console.log(sanderson);
sanderson.introduce();
sanderson.greet();
sanderson.calcAge();

// ======================= Inheritance between "Classes" - Object.Create =======================
console.log('');
console.log('=========================================================');
console.log('===== Inheritance between "Classes" - Object.Create =====');
console.log('=========================================================');

const PersonProto2 = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },

  init(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  },
};

const steven2 = Object.create(PersonProto2);
// student inherits from Person
const StudentProto = Object.create(PersonProto2);

StudentProto.init = function (fullName, birthYear, course) {
  PersonProto2.init.call(this, fullName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.fullName} and i am studying ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 1973, 'Motion Graphics');
console.log(jay);
jay.introduce();
jay.calcAge();

// ======================= Another Class Example =======================
console.log('');
console.log('=================================');
console.log('===== Another Class Example =====');
console.log('=================================');

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;
    console.log(`thanks for opening an account, ${this.owner}!`);
  }

  deposit(value) {
    this.movements.push(value);
  }

  withdraw(value) {
    this.deposit(-value);
  }
}

const acc1 = new Account('Matheus', 'BRL', 1996);
console.log(acc1);
acc1.deposit(300);
acc1.withdraw(120);
console.log(acc1);

// ======================= Encapsulation: Protected Properties and Methods =======================
console.log('');
console.log('===========================================================');
console.log('===== Encapsulation: Protected Properties and Methods =====');
console.log('===========================================================');

class Account2 {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    // protected property
    this._movements = [];
    this.locale = navigator.language;
    console.log(`thanks for opening an account, ${this.owner}!`);
  }

  getMovement() {
    return this._movements;
  }

  deposit(value) {
    this._movements.push(value);
  }

  withdraw(value) {
    this.deposit(-value);
  }

  // protected method
  _approveLoan(value) {
    return true;
  }

  requestLoan(value) {
    if (this._approveLoan(value)) {
      this.deposit(value);
      console.log('Loan approved');
    }
  }
}

const brendon2 = new Account2('Brendon', 'BRL', '666');
brendon2.deposit(300);
brendon2.withdraw(120);
console.log(brendon2.getMovement());

// ======================= Encapsulation: Private class fields and methods =======================
console.log('');
console.log('===========================================================');
console.log('===== Encapsulation: Private class fields and methods =====');
console.log('===========================================================');

// Public fields
// Private fields
// Public Methods
// Private Methods
// Static

class Bankist {
  // public fields (instances)
  locale = navigator.language;

  // private Fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // protected property
    // this._movements = [];
    // this.locale = navigator.language;
    console.log(`thanks for opening an account, ${this.owner}!`);
  }

  // Public Methods

  getMovement() {
    return this.#movements;
  }

  deposit(value) {
    this.#movements.push(value);
  }

  withdraw(value) {
    this.deposit(-value);
  }

  requestLoan(value) {
    if (this.#approveLoan(value)) {
      this.deposit(value);
      console.log('Loan approved');
    }
  }

  // private methods
  #approveLoan(value) {
    return true;
  }

  static helper() {
    console.log('Claiton');
  }
}

const brendon3 = new Bankist('Brendon', 'BRL', '666');
brendon3.deposit(300);
brendon3.withdraw(120);
console.log(brendon3.getMovement());
console.log(brendon3);
console.log(brendon3.movements); // undefined
brendon3.requestLoan(500);
console.log(brendon3.getMovement());
Bankist.helper();

// ======================= Chaining Methods =======================
console.log('');
console.log('============================');
console.log('===== Chaining Methods =====');
console.log('============================');

class Bankist2 {
  // public fields (instances)
  locale = navigator.language;

  // private Fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // protected property
    // this._movements = [];
    // this.locale = navigator.language;
    console.log(`thanks for opening an account, ${this.owner}!`);
  }

  // Public Methods

  getMovement() {
    return this.#movements;
  }

  deposit(value) {
    this.#movements.push(value);
    return this; 
  }

  withdraw(value) {
    this.deposit(-value);
    return this; 
  }

  requestLoan(value) {
    if (this.#approveLoan(value)) {
      this.deposit(value);
      console.log('Loan approved');
    }
    return this;
  }

  // private methods
  #approveLoan(value) {
    return true;
  }

  static helper() {
    console.log('Claiton');
  }
}

const priscijuja = new Bankist2('Priscijuja', 'BRL', 1980);

// chaining == just put (return this) inside methods
priscijuja
  .deposit(300)
  .deposit(300)
  .withdraw(200)
  .requestLoan(50)
  .withdraw(200);

console.log(priscijuja.getMovement());


