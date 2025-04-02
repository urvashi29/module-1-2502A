// function
// object method, this keyword
// variable scoping
// var vs let vs const (next lecture)
multiply();

var temp = 2; //global scope

// function declaration
function multiply() {
  var a = 10;
  var b = 20;
  console.log(a * b * temp);
}

// function calling
multiply();
console.log("hello");

multiply();
console.log("world");

multiply();

// function addToCart() {
//     //logic to add product to cart
// }

//parameterized function
//parameters - x, y
function addNumbers(x, y) {
  //local scope
  var result = x + y;
  //   console.log(result); //

  //   return keyword
  return result;
}

// console.log(result);//error
// function is passed as a value
var funResult = addNumbers(10, 20); //argument
console.log(funResult);

var resultFun = addNumbers(40, 30);
console.log(resultFun);

console.log(typeof addNumbers); //function

// self invoking: no name, they called itself
(function (a) {
  console.log(100 * a);
})(2);

// object method
var person = {
  firstName: "alina",
  lastName: "joe",
  age: 20,
  city: "pune",
  details: function () {
    // this is referring to person
    console.log(
      "Hi " + this.firstName + " " + this.lastName + ", living in " + this.city
    );
  },
};

console.log(person.firstName);
person.details();

// hoisting (only possible with var): declaration is hoisted
first = "alex"; //initialization / assiging a value
console.log(first); //using the variable
var first; //declaration

//initialization is never hoisted
var last; //declaration
console.log(last); //undefined
last = "joe"; //initialization / assiging a value

// var vs let vs const
//block scope
// {
// }
// for() {}
// if() {}

// var x = 20;//global scope

// {
//   var x = 30;
//   console.log(x); //30
// }

// console.log(x); //30

// Task
// create parametrized method/function to multiply 3 numbers
// create parametrized method to divide 2 numbers
// write function to convert negative number to positive number (Math object)

console.log(Math.PI);
