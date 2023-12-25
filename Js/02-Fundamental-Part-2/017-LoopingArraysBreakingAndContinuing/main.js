'use strict';

const jonasObject = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Micheal', 'peter', 'steven'],
  true,
];

const types = [];

for (let i = 0; i < jonasObject.length; i++) {
  console.log(jonasObject[i]);

  // filling types array
  // types[i] = typeof jonasObject[i];
  types.push(typeof jonasObject[i]);
}

// read types
console.log(types);

const years = [1991, 2007, 1967, 2020];
let ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

console.log('----not a string do not fill----');
ages = [];
for (let i = 0; i < years.length; i++) {
  if (typeof years[i] !== 'string') continue;
  ages.push(2037 - years[i]);
}
console.log(ages);

console.log('----Break with number----');
ages = [];
for (let i = 0; i < years.length; i++) {
  if (typeof years[i] === 'number') break;
  ages.push(2037 - years[i]);
}

console.log(ages);
