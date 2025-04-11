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
