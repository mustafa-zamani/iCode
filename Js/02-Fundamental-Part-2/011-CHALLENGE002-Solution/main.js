'use strict';

const calcTip = function (bill) {
  return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
};

// also possible
// const calcTip = bill => bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

for (let i = 0; i <= bills.length - 1; i++) {
  const total = bills[i] + tips[i];
  console.log(`
    The bill value is ${bills[i]},
    The tip value is ${tips[i]},
    Total is ${total}`);
}
