// 018 Equality Operators == vs. ===

const age = 18;

if (age === 18) console.log('You just become an adult');

// result true
let isTrue = age == 18;
console.log(isTrue);

// result true due to type coercion or loosely comparison
isTrue = age == '18';
console.log(isTrue);

// result false due to strict type
isTrue = age === '18';
console.log(isTrue);

// result false
isTrue = age === 19;
console.log(isTrue);

// note try to compare as strict as possible

let favNumber = prompt('what is your fav number');
console.log(typeof favNumber, favNumber);

if (favNumber == 23) {
  // '23' == 23
  console.log('your favorite number is amazing');
}

let favNumber1 = Number(prompt('what is your fav number'));
console.log(typeof favNumber1, favNumber1);

if (favNumber1 === 23) {
  // 23 == 23
  console.log('your favorite number is amazing');
} else {
  console.log('Number is not ' + favNumber1);
}
