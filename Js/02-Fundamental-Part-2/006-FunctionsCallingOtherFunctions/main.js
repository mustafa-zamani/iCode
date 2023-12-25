'use strict';

// function calling other function
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(appels, oranges) {
  const applePieces = cutFruitPieces(appels);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of appel and ${orangePieces}  pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
