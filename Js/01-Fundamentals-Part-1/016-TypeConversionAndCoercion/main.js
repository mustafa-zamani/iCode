// type conversion & type coercion

// Type conversion refers to the process of explicitly changing the type of a value, whereas coercion refers to the implicit type conversion that happens when JavaScript tries to perform an operation with values of different types.

// output a concatenated together
const inputYear = '1991';
console.log(inputYear + 18);

console.log(Number(inputYear) + 18);

// output is NaN
console.log(Number('Jonas'));

//output is number because it is a number which is not valid
console.log(typeof NaN);

// first parameter is String and 2nd is number
console.log(String(23), 23);

// here type coercion works with number 23
console.log('I am a ' + 23 + 'years old');

// here string converted to number but not other way around
console.log('23' - '10' - 3);
//but this doesn't works
console.log('23' + '10' + 3);

// output is 46
console.log('23' * 2);

let n = '1' + 1; // '11'
n = n - 1; // 11 - 1
console.log(n); // 10
