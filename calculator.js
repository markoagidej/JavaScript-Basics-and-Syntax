// Task 1: Declare variables to store two numeric values for performing arithmetic operations.
let num1;
let num2;

// Task 2: Assign sample numeric values to the variables declared in Task 1.
num1 = 7;
num2 = 13;

// Task 3: Perform arithmetic operations on your numeric values using various operators and display the results.
console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);

// Task 4: Explore assignment operators and update the values of variables.
num1 = 9
num2 = num1 * 2
console.log("Updated num1:", num1);
console.log("Updated num2:", num2);

// Task 5: Use comparison operators to compare the values of variables.
console.log("Is num1 equal to num2?", num1 == num2);
console.log("Is num1 greater than num2?", num1 > num2);
console.log("Is num1 not equal to num2?", num1 != num2);

// Task 6: Apply logical operators to combine conditions and display the results.
let isPositive = num1 > 0 && num2 > 0;
let isEven = num1 % 2 == 0 || num2 % 2 == 0;
console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);