// Example of a statement
function greet(name) {
  console.log('Hello, ' + name + '!');
}

// Variable declaration (also a statement)
var x = 5;

// Conditional statement (if statement)
if (x > 0) {
  console.log('x is positive');
}

// Example of an expression
2 + 4;
var sum = 3 + 2; // This is an expression that produces the value 5

// Function call is an expression too, and it returns a value
var result = greet('Alice'); // "Hello, Alice!" is printed, but greet() doesn't return a value

// Conditional expression (ternary operator)
var isEven = x % 2 === 0 ? true : false;
