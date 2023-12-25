/*
BMI = mass / height **  2

BMI = mass in kg / (height * height) in centimeter
*/

const marksMass = parseFloat(prompt('Enter Marks wight in Kg'));
const marksHeight = parseFloat(prompt('Enter Marks height in meter'));
const BMIMarks = marksMass / marksHeight ** 2;

const johnMass = parseFloat(prompt('Enter John wight in Kg'));
const johnHeight = parseFloat(prompt('Enter John height in meter'));
const BMIJohn = johnMass / (johnHeight * johnHeight);

if (BMIMarks > BMIJohn) {
  console.log(`Mark's BMI is higher than John's`);
  console.log(
    `Mark's BMI (${BMIMarks}) is higher than John's BMI (${BMIJohn})`
  );
} else {
  console.log(`John's BMI is higher than Mark's`);
  console.log(
    `John's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMarks})`
  );
}
