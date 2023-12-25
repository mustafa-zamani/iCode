'use strict';

// function declaration
// function declaration can be used even before they initialized but does not work the same with expression
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// function expression
// You can define functions without a name and assign them to variables. These are often used for one-time use or as callback functions.
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age2);
