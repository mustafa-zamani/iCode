// In JavaScript, there are three ways to declare variables: var, let, and const. Each has different characteristics and usage scenarios. Here's an explanation of the differences between them along with example code:

// var: This was the original way to declare variables in JavaScript, but it has some quirks that can lead to unexpected behavior. Variables declared with var are function-scoped or globally scoped, but not block-scoped.
function exampleVar() {
  if (true) {
    var x = 10; // x is accessible outside the if block
  }
  console.log(x); // Outputs 10
}

// let: Introduced in ES6 (ECMAScript 2015), let allows you to declare variables that are block-scoped. It provides more predictable behavior compared to var.
function exampleLet() {
  if (true) {
    let y = 20; // y is only accessible within the if block
  }
  // console.log(y); // This would result in an error
}

// const: Also introduced in ES6, const is used to declare variables whose values should not be re-assigned after their initial assignment. Like let, const is block-scoped.

function exampleConst() {
  const z = 30; // z cannot be reassigned later
  // z = 40; // This would result in an error
}

//   Differences and Use Cases:

// Use var if you need to support older browsers or if you're working on an older codebase. However, it's generally recommended to use let or const for better scoping.
// Use let when you need to reassign the variable's value.
// Use const for values that should not be changed after their initial assignment. This is especially useful for constants, configuration values, or when dealing with immutable data.
// Both let and const are block-scoped, which means they are confined to the nearest enclosing curly braces {} where they are defined. This can help prevent unintended variable pollution in the outer scope.
// In general, it's a good practice to use let and const over var because they provide more consistent and predictable scoping behavior. If you're not sure whether a variable's value will change, start with const, and if needed, switch to let.

//  it is possible  to create a variable without indicator but in Js it will create a global scope for that. we talk about it later.

// in  JavaScript undefined variable is allowed and the value for that would be undefined;
// in JavaScript null value for a variable is allowed and the value for that would be null.
// keep in mind that null is not equal to undefined.
