/*****************************
 * CODING CHALLENGE 4
 */

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
GOOD LUCK 😀
*/

const john = {
  fullName: 'John Doe',
  height: 72,
  weight: 190,
  constant: 703,
  BMI: function() {
    this.bmi = (this.weight / this.height / this.height) * this.constant;
    return this.bmi.toFixed(2);
  }
};

console.log(john.BMI());

const mike = {
  fullName: 'Mike Doe',
  height: 68,
  weight: 182,
  constant: 703,
  BMI: function() {
    this.bmi = (this.weight / this.height / this.height) * this.constant;
    return this.bmi.toFixed(2);
  }
};

console.log(mike.BMI());

if (john.BMI() > mike.BMI()) {
  console.log(
    `${john.fullName} of ${john.bmi} is greater than ${mike.fullName} BMI of ${
      mike.bmi
    }`
  );
} else if (mike.bmi > john.bmi) {
  console.log(
    `${mike.fullName} of ${mike.bmi} is greater than ${john.fullName} BMI of ${
      john.bmi
    }`
  );
} else {
  console.log(
    `${mike.fullName} of ${mike.BMI} is equal to ${john.fullName} BMI of ${
      john.bmi
    }`
  );
}
