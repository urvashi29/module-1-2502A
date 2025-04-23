// bind
// pure function
// First-Class Objects
// Higher Order Function
// Immutability in JavaScript
// Declarative and Imperative code

// bind()
const person = {
  firstName: "alina",
  lastName: "joe",
  display: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

let displayFun = person.display.bind(person);
setTimeout(person.display, 2000);

// person.display();

//alternate
const employee = {
  fullName: function (city, c) {
    console.log(this.firstName + " " + this.lastName + " " + city + " " + c);
  },
};

const empOne = {
  firstName: "alina",
  lastName: "joe",
};

employee.fullName.bind(empOne);

// impure function
let counter = 0;

function inc() {
  counter++;
}

inc({});

// pure function
function addToCart(id) {
  let result = {};
  return result;
}

let r = addToCart(id); // First-Class Objects

// First-Class Objects
const a = function () {};

// Higher Order Function - add
// e.g. map, filter, reduce, forEach
function add() {
  return () => {};
}

add(function () {}); //HOF

// Declarative and Imperative code
