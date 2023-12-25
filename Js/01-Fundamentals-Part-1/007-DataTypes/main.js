// in JavaScript there is mainly two type primitive and object types which they are categorized as below:

// primitive Data Types
// 01 Number data type include float and integers
let age = 30;

// 02 String data type
let fName = "John";

// 03 Boolean data type
let isStudent = true;

// 04 Undefined data type
let job;

// 05 Null data type
let address = null;

// 06 Symbol data type (unique and immutable= cannot change)
// introduced on ES2015
let uniqueId = Symbol("id");

// 07 BigInt data type (for handling large integers)
let bigNumber = 1234567890123456789012345678901234567890n;

// object data types
// 01 Object data type (key-value pairs)
let person = {
  fName: "Alice",
  age: 25,
  isStudent: false,
};

// 02 Array data type (ordered list of values)
let fruits = ["apple", "banana", "orange"];

// 03 Function data type (executable code)
let greet = function () {
  console.log("Hello!");
};

// Common mistakes
let mistake1 = 5 + "5"; // Concatenation: "55" (string)
let mistake2 = "10" - 5; // Subtraction: 5 (number)
let mistake3 = null == undefined; // true (due to type coercion)

// Logging the values and types
console.log(typeof age); // "number"
console.log(typeof fName); // "string"
console.log(typeof isStudent); // "boolean"
console.log(typeof job); // "undefined"
console.log(typeof address); // "object" (Note: This is an odd behavior)
console.log(typeof person); // "object"
console.log(typeof fruits); // "object"
console.log(typeof greet); // "function"
console.log(typeof uniqueId); // "symbol"
console.log(typeof bigNumber); // "bigint"
console.log(typeof null); // return object type

// Output the mistakes
console.log(mistake1); // "55"
console.log(mistake2); // 5
console.log(mistake3); // true

// Dynamic Typing
let dynamicVar = 42;
console.log(typeof dynamicVar); // Outputs: "number"
dynamicVar = "Hello, JavaScript!";
console.log(typeof dynamicVar); // Outputs: "string"

// Mixing Data Types
let mixedVar = 42 + " is the answer";
console.log(mixedVar); // Outputs: "42 is the answer"

// Common Mistakes with Dynamic Typing
console.log(5 + "5"); // Outputs: "55" (string concatenation)
console.log(5 - "2"); // Outputs: 3 (implicit type conversion)
console.log(true + 1); // Outputs: 2 (true is converted to 1)
