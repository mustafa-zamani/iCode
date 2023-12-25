const hasDrivingLicense = true;
const hasGoodVision = false;

console.log(hasDrivingLicense && hasGoodVision);
console.log(hasDrivingLicense || hasGoodVision);
console.log(!hasDrivingLicense);

const shouldDrive = hasDrivingLicense && hasGoodVision;

if (shouldDrive) {
  console.log('Sarah is able to drive');
} else {
  console.log('Someone else should drive');
}

const isTired = false;
console.log(hasDrivingLicense && !hasGoodVision && isTired);

if (hasDrivingLicense && !hasGoodVision && !isTired) {
  console.log('Sarah is able to drive');
} else {
  console.log('Someone else should drive');
}
