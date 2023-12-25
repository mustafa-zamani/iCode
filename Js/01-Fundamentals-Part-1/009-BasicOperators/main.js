// math operator
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log('age Jonas: ' + ageJonas, 'age Sarah ' + ageSarah);

console.log(ageJonas * 2, ageSarah / 10, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);
//or
console.log(`${firstName} ${lastName}`);

// assignment operator
let x = 10 + 5;
console.log(x);
//or
x += 10;
console.log(x);

x *= 4;
console.log(x); //100

x++;
console.log(x); //101

let y = x++; //x == 102 y = 101
console.log(y); //101
console.log(x); //102

x--;
console.log(x);

//comparison operator
// <, =<, ==, >, =>, ===
// if the result of the comparison is required later on the code it is a good practice to store it in a variable
console.log(ageJonas > ageSarah);
console.log(ageJonas < ageSarah);
console.log(ageJonas == ageSarah);

console.log(now - 1991 > now - 2018);
