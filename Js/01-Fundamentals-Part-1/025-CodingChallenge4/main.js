const bill = 275;

const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill value is ${bill},
the tip is ${tip},
the total value is ${tip + bill}`
);
