// img -> variable
// variable declaration
var img = "https://m.media-amazon.com/images/I/81f4TmZIMKL._SL1274_.jpg";

// ctrl + / (comment)

var a = "sugar";
var b = "salt";

// user name, contact, email, password, likes, dislikes, address, feedback message
var firstName = "alina";

var lastName; //declaration
lastName = "joe"; //assigning a value or initialiation

// declare in single statement
var person = "alex",
  age = 20,
  email = "admin@gmail.com";

//   display, use this
console.log(person, age, lastName);
console.log(email);

console.log("hello");

// var gst_electronic = 20;
// product_price + gst_electronic;

// var var = 20;//wrong

// Primitive
var first = "alex"; //string "" or ''
var contactNumber = 90909090; //number
var salary = 890990.98; //number
var isMarried = false; //boolean (true or false)

console.log(salary);

// re-declaration is allowed with var
var first = "hi";
console.log(first);

// re-assiging is allowed with var
salary = "98090";
console.log(salary);

// undefined (absent or unkwown value)
var num;
console.log(num);
console.log("Datatype of num:", typeof num); //undefined

// null ( no value or empty value)
const numTwo = null;
console.log(numTwo); //null
console.log(typeof numTwo); //object

// best practice ( declare + assign a value)
// var num = 20;

// proof for datatype (typeof)
console.log(typeof first); //string
console.log(typeof age); //number
console.log(typeof isMarried); //boolean

// task
// create a variable for a person registering for e-commerce (10 variable)
