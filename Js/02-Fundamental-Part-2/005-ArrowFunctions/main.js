'use strict';

// arrow function declared in ES6
//Arrow functions are a concise way to define functions, especially when the function body consists of a single statement.
// the return happen implicitly
// great for a quick one-line function that has no this keyword.
const calcAge1 = birthYear => 2037 - birthYear;
const age1 = calcAge1(1991);
console.log(age1);

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retire in ${retirement} years`;
};
console.log(yearUntilRetirement(1991, 'Jonas'));
console.log(yearUntilRetirement(1980, 'Jonas'));
