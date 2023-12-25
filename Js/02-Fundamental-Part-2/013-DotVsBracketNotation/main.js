'use strict';

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Micheal', 'peter', 'steven'],
};

console.log(jonas);

console.log(jonas.lastName);

let lName = 'Name';
console.log(jonas['first' + lName]);
console.log(jonas['last' + lName]);

const interestedIn = prompt(
  'what do you want to know about Jonas? choose between firstName, lastName, age, job, and friends'
);

console.log(jonas[interestedIn]);

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}`
);
