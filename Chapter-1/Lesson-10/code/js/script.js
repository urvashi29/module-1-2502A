// OOPS
// JavaScript Prototype & Prototype Chain, inheritance
// class & objects
// this keyword
// bind, call, apply

// template for js objects
// class only have properties & methods
class University {
  count = 0;
  // it is used to initialize value
  constructor(firstName, a, c, id) {
    // this is referring to University
    this.name = firstName;
    this.age = a;
    this.city = c;
    this.id = id;
  }

  details() {}
}

// studentOne is instance of class university/object
let studentOne = new University("alina", 19, "pune", 1);
console.log(typeof studentOne);

let studentTwo = new University("alaya", 20, "chandigarh", 2);
console.log(studentTwo);

// run in browser
console.log(studentOne.constructor);

// Prototype
// object function constructor
function UniversityFun(firstName, a, c, id) {
  this.name = firstName;
  this.age = a;
  this.city = c;
  this.id = id;
}

console.log(UniversityFun);

let studentThree = new UniversityFun("alina", 19, "pune", 1);
console.log(studentThree);

// run in browser
console.log(studentThree.constructor);

//pre-defined object function constructor
// String(), Array(), Number()
// let str = new String("hello"); //string
// let num = new Number(10); //number
// let arr = new Array([29, 3, 3, 3]); //array

// Inheritance
// parent/base class
class Employee {
  constructor(name, salary, id, exp) {
    this.salary = salary;
    this.name = name;
    this.experience = exp;
    this.id = id;
  }
}

// child/derived  class
class Programmer extends Employee {
  constructor(name, salary, exp, id, language) {
    super(name, salary, id, exp); //call the parent constructor
    this.language = language;
  }
}

const ProgrammerOne = new Programmer("alina", 20000, 1, "E1", "javaScript");
console.log(ProgrammerOne);
console.log(ProgrammerOne.constructor); //

// Inheritance in ES5
function University(id) {
  this.stdId = id;
}

function Academic(id, grade) {
  University.call(this, id); //replacement of super in class
  this.grade = grade;
}

// Inherit the proptotype
Academic.prototype = Object.create(University.prototype);

// reset the constructor
Academic.prototype.constructor = Academic;

const a = new Academic(1, 70);
console.log(a);

// To add property to object function constructor
Academic.prototype.name = "alina";
console.log(a);

console.log(Object.getPrototypeOf(Object.create(University.prototype)));

// this keyword: refers to object depending which env it is in
//alone in the file
console.log(this); //window object (global)

function add() {
  // window
  console.log(this); //refers to the owner object of the function
}

let person = {
  details: function () {
    console.log(this); //person //refers to the owner object of the function
  },
  detail: () => {
    console.log(this); //window
  },
};

person.details();
person.detail();

// call(), apply(), bind()

// call()
const employee = {
  fullName: function (city, c) {
    console.log(this.firstName + " " + this.lastName + " " + city + " " + c);
  },
};

const empOne = {
  firstName: "alina",
  lastName: "joe",
};

employee.fullName.call(empOne, "pune", "banglore");

// apply()
const student = {
  fullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

const stdOne = {
  firstName: "alina",
  lastName: "joe",
};

employee.fullName.apply(empOne, ["pune", "banglore"]);

// application of apply
// console.log(Math.max(2, 3, 1, 3, 3, 10, 2));

let arr = [2, 3, 1, 3, 3, 10, 2];
console.log(Math.max.apply(null, arr));

// Task
// 1. Create a class Car: city(), specialFeature()
// name, brand, color, manufactureYear

// 2. Create a class Book: type_of_book()
// no. of pages, type of pages, author

// 3. Create a class Animal: walk(), eat(), climb()
// gender, name, disease

// Inheritance:
// 1.  Create parent class: Electronics (methods & properties: name, version, company
// name)
// and child class(laptop, ipad, mobile, tablet):
// create methods” configuration, price()

// Find minimum value in an array using apply()

// Explore Object() methods
