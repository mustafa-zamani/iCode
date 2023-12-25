'use strict';

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Micheal', 'peter', 'steven'],
  hasDriverLicense: true,

  // #1
  // calcAge: function (birthYear) {
  //     return 2037 - birthYear;
  // }

  // #2
  // calcAge: function () {
  //     return 2037 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-old ${
      this.job
    } and he has ${this.hasDriverLicense ? 'a' : 'not'} driving license`;
  },
};

// #1
// console.log(jonas.calcAge(jonas.birthYear));
// #2
// console.log(jonas.calcAge());
// #3

console.log(jonas.calcAge());
console.log(jonas.age);

console.log(`${jonas.getSummary()}`);
