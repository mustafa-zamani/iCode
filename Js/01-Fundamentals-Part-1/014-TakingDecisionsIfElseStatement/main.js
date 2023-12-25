const currentAge = 19;

// it is a good practice if the result of condition store in a variable if we need it to use other places of the code
if (currentAge >= 18) {
  console.log(`Sarah can start driving license🚗`);
} else {
  const yearsLeft = 18 - currentAge;
  console.log(`Sarah is too young, wait another ${yearsLeft} years :)!`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
