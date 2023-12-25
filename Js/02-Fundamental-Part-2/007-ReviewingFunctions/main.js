'use strict';

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    return `${firstName} retire in ${retirement} years`;
  } else {
    return `${
      firstName.charAt(0).toUpperCase() + firstName.slice(1)
    } has already retired`;
  }
};

console.log(yearUntilRetirement(1991, 'Jonas'));
console.log(yearUntilRetirement(1970, 'mike'));
