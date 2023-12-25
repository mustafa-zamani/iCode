'use strict';

const mark = {
  name: 'Mark',
  weight: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.weight / (this.height * this.height);
    return this.BMI;
  },
};
mark.calcBMI();

const john = {
  name: 'John',
  weight: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.weight / (this.height * this.height);
    return this.BMI;
  },
};
john.calcBMI();

if (john.BMI > mark.BMI) {
  console.log(
    `${john.name}'s BMI (${Math.round(john.BMI)}) is higher than ${
      mark.name
    }'s (${Math.round(mark.BMI)})`
  );
} else if (john.BMI < mark.BMI) {
  console.log(
    `${john.name}'s BMI (${Math.round(john.BMI)}) is smaller than ${
      mark.name
    }'s (${Math.round(mark.BMI)})`
  );
} else {
  console.log('Both have the same BMI');
}
