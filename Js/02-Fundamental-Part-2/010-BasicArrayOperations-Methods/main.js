'use strict';

const friends = ['Micheal', 'Steven', 'Peter'];

// add elements
const newLength = friends.push('Jay');
console.log(newLength);
console.log(friends);

friends.unshift('John');
console.log(friends);

// remove element
// #1 remove last element
const popped = friends.pop();
console.log(popped);
console.log(friends);

// #2 remove first element
const shifted = friends.shift();
console.log(shifted);
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob')); // output is -1 which means not found

// output is true or false and it use strict equality
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

friends.push(23);
console.log(friends.includes('23'));
console.log(friends.includes(23));

if (friends.includes('Peter')) {
  console.log('You have a friend name Peter');
}
