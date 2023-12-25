const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins team win the trophy');
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
  console.log('Koalas team wins the trophy');
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log('Both team wins the trophy');
} else {
  console.log('no team wins the trophy');
}
