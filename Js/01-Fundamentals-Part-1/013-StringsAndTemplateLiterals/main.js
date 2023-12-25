const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const currentYear = 2023; // you can also use: new Date().getFullYear();

const jonas =
  "i'm " +
  firstName +
  ', a ' +
  (currentYear - birthYear) +
  ' years old ' +
  job +
  '!';

console.log(jonas);

// or for simplifying the space and more readable we can do as follow with back trace it is an ES6 feature it also work for normal strings

const jonasNew = `I'm ${firstName} , a ${
  currentYear - birthYear
} year old ${job}!`;
console.log(jonasNew);

console.log(
  'string with \n\
multiple \n\
line'
);

// but it is easier and more readable to do it as follow with back trace quotation
console.log(`string with
multiple
Line
`);
