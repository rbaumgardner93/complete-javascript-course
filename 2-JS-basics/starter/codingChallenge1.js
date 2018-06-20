/* Coding Challenge 1 */

/* 1. Store Mark's and John's mass and height in variables. */
const markHeight = 72;
const markWeight = 180;
const johnHeight = 66;
const johnWeight = 176;
/* 2. Calculate both their BMIs */
const BMI = (height, weight) => {
  const constant = 703;
  return (weight / height / height) * constant;
};

const markBMI = BMI(markHeight, markWeight).toFixed(2);
console.log(`Mark: ${markBMI}`);
const johnBMI = BMI(johnHeight, johnWeight).toFixed(2);
console.log(`John: ${johnBMI}`);
/* 3. Create a boolean variable containing information about whether Mark has a higher BMI than John. */
const highBMI = (markBMI, johnBMI) => {
  if (markBMI > johnBMI) {
    console.log(
      `Mark has a BMI of ${markBMI}, which is higher than John's BMI of ${johnBMI}`
    );
  } else if (markBMI < johnBMI) {
    console.log(
      `Mark has a BMI of ${markBMI}, which is lower than John's BMI of ${johnBMI}`
    );
  } else {
    console.log(
      `Mark has a BMI of ${markBMI}, which is equal to johns BMI of ${johnBMI}`
    );
  }
};
/* 4. Print a string to the console containing the variable from step 3. (Something like Mark's BMI is higher than John's? true) */
highBMI(markBMI, johnBMI);
