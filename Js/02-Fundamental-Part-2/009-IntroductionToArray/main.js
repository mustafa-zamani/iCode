'use strict';

const friend1 = 'Micheal';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Micheal', 'Steven', 'Peter'];
console.log(friends);

const diffYears = new Array(1991, 1984, 2008, 2020);
console.log(diffYears);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
// using expression instead of a fixed value
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// is not working
// friends = ['Bob', 'Alice'];

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtman', 2037 - 1991, friends];
console.log(jonas);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const birthYear = [1991, 1976, 2022, 2010, 2018];

const age1 = calcAge(birthYear[0]);
const age2 = calcAge(birthYear[1]);
const age3 = calcAge(birthYear[birthYear.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(birthYear[0]),
  calcAge(birthYear[1]),
  calcAge(birthYear[birthYear.length - 1]),
];
console.log(ages);
