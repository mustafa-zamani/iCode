// result false
console.log(Boolean(0));
// result false
console.log(Boolean(undefined));
// result false
console.log(Boolean(''));

// result true
console.log(Boolean('Jonas'));
// result true
console.log(Boolean({}));

const money = 0;

if (money > 0) {
  console.log("Don't spend all of it");
} else {
  console.log('You should get a job');
}

let height;
// it is the same for
// height = 0;
// which could be a bug but can be solved in logical operator;
if (height) {
  console.log('Yay! height is defined');
} else {
  console.log('height is undefined');
}
