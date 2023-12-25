'use strict';

// built-in function
// user-defined function
// a function is a block of reusable code that performs a specific task or set of tasks. Functions are a fundamental concept in JavaScript and are used to organize and encapsulate code, making it more modular and maintainable. Functions can take input, called parameters or arguments, and return a result.

function logger() {
  console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();
logger();

//Function with No Parameters and No Return Value:
function greet() {
  console.log('Hello, world');
}

greet();

// Function with Parameters and No Return Value:
function add(a, b) {
  console.log(a + b);
}

add(5, 3); // Output: 8

// Function with Parameters and Return Value

// input for function is parameter and values for parameter is Arguments
function fruitProcessor(appels, oranges) {
  // console.log(appels, oranges);
  const juice = `Juice with ${appels} appels and ${oranges} oranges.`;
  return juice;
}

fruitProcessor(5, 0);

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// also
console.log(fruitProcessor(2, 4));

// follow the DRY (Do not repeat yourself)
