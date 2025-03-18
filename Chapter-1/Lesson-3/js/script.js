// object ({})
//key/value pair or property/value pair
var person = {
  // property/key: value
  firstName: "alina",
  age: 20,
  salary: 20000,
  city: "Banglore",
  contact: {
    email: "admin@gmail.com",
  },
};

var car = {
  brand_name: "vokswagon",
  price: 200000,
  engine: "",
  color: "green",
  type: "diesel",
  model: "38e990",
  milege: "",
  average: "",
};

console.log(person);
console.log(typeof person); //object

// accesing object properties
console.log(person.firstName); //dot operator
console.log(person.contact.email);

// arrays ([])
//index/position starts from 0
var color = ["pink", "orange", "red", "green", "violet"];
var ages = [2, 3, 1, 23, 2, 23, 23, 2];
var mix = ["hello", 9, true, null, undefined, {}, []];

console.log(color, ages, mix);

// accesing array values
console.log(color[1]); //orange
console.log(ages[2]);

// Operators
// Arithmetic operator (Number)
var num = 100;
var numTwo = 20;

// operand -> num, numTwo
console.log(num + numTwo); //addition
console.log(num - numTwo); //subtraction
console.log(num / numTwo); //divide (quotient)
console.log(num % numTwo); //modulus (remainder)
console.log(num * 2); //multiplication
console.log(numTwo ** 2); //power

//increment & decrement
num = num + 1; //num++;
numTwo = numTwo - 1; //numTwo--

//Assignment Operator (=)
var val = 20;

val = val + 5; //val += 5
val = val - 5; //val -= 5
val = val * 5; //val *= 5
val = val / 5; //val /= 5

// comparison operator (return boolean)
var a = 9; //number
var b = "9"; //string

console.log(a == b); //compare only value
console.log(a === b); //compare value + datatype (strict checking)
console.log(9 != 9); //compare only value
console.log(9 !== "9"); //compare value + datatype
console.log(a > 9); //false
console.log(a >= 9); //true
console.log(a <= 9); //true
console.log(a < 9); //false

// Logical Operator (return boolean): (&& (and), ||(or), !(not))
console.log(a == b && a === b); //return true if all statement are true, otherwise false
console.log(a == b || a === b); //return true if either of statement are true, otherwise false
console.log(!(a == b));

// String Operator (+)
var str = "hello";
var strTwo = "world";

// whenever, you see a string and +, concantenate the strings
console.log(str + strTwo); //concantenate
console.log(str + " " + strTwo); //"hello world"
console.log(str + 10); //"hello10"
console.log(100 + strTwo); //"100world"

console.log("20" + 20); //2020
console.log(20 * 20 + "world"); //400world
console.log(20 + 20 + "world"); //40world
console.log(20 + str + 20); //20hello20
console.log("world" + 20 + 20); //world2020

console.log(20 - 20); //0
console.log(10 / "10"); //1
console.log(20 - "jodejkodke"); //NaN
console.log("20" - "20"); //0
console.log(" " + 10); //
console.log(" " / 10); //

// type conversion
// implicit (automatic type conversion)

// Rules
// 1. check for operator precedence
// 2. check the datatype of the operands
//    a. all are numeric: calculate the value
//    b. if either is string and + is present, concatenate
//       otherwise if either are numeric string and opeartor is not + then change the datatype otherwise NaN

// "8798080" : numeric string
// "yhio" : alpha string

// Operator Precedence (Priority of operator)
var result = 10 + (70 / 10) * 20 + 45 - 20;
console.log(result);

//bracket
// * /
// + -
// L -> R

// NaN -> not a Number

// explicit (datatype conversion forcefully)
//string to number
console.log(Number("89980")); //89980
console.log(Number("hheiji")); //NaN
console.log(Number("jcdiu9io")); //NaN
console.log(parseInt("79.23")); //79
console.log(parseFloat("79.239"));
console.log(parseInt("78.72980uwshij")); //78

//number to string
console.log(String(8989090)); //"8989090"
console.log(num.toString()); //"101"
console.log(num.toFixed(2)); //fixed decimal places

// boolean to number
console.log(Number(true)); //1
console.log(Number(false)); //0

//boolean string
console.log(String(true)); //"true"
console.log(String(false)); //"false"

console.log(true > false); //1 > 0 (true)
