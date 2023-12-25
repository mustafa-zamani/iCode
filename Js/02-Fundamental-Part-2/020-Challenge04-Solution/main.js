'use strict';

const calcTip = function (bill) {
  return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i <= bills.length - 1; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}

console.log(`Bill: \t ${bills},
Tip:\t ${tips},
Total:\t ${totals}`);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  return sum / arr.length;
};

console.log(calcAverage([2, 3, 7]));

const x = 23;

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (data1, data2) {
  const forecastData = data1.concat(data2);
  const forecastDataLength = forecastData.length;

  for (let counter = 0; counter === forecastDataLength; counter++) {

  }

}