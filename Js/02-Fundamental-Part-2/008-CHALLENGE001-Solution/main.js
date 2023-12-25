'use strict';

const calcAverage = (firstScore, secondScore, thirdScore) =>
  (firstScore + secondScore + thirdScore) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (scoreDolphins, scoreKoalas) {
  if (scoreDolphins > scoreKoalas * 2) {
    console.log(
      `Dolphin team win! Dolphin ${scoreDolphins} vs Koalas ${scoreKoalas}`
    );
  } else if (scoreKoalas > 2 * scoreDolphins) {
    console.log(
      `Koalas team win! Koalas ${scoreKoalas} vs Dolphin ${scoreDolphins}`
    );
  } else {
    console.log(`Dolphin average score: ${scoreDolphins}`);
    console.log(`Koalas average score: ${scoreKoalas}`);
    console.log('No team win!');
  }
};

checkWinner(scoreDolphins, scoreKoalas);

// test 2

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);
