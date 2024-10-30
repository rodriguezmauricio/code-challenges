/* Challenge #1: Sum of Two Numbers
Difficulty: 🟢 Very Easy
Points: 10

Task: Write a function in TypeScript that takes two numbers as input and returns their sum. Your code should include type annotations, and make sure to handle unexpected inputs gracefully (like non-numeric inputs).

Requirements:

Define a function called addTwoNumbers.
Ensure it accepts only numbers and returns a number.
If either argument is not a number, return null. */

// function addTwoNumbers(num1: number, num2: number): number | null {
//     if (num1 !== Number(num1) || num2 !== Number(num2)) return null;

//     return num1 + num2;
// }

function addTwoNumbers(num1: number, num2: number): number | null {
    if (isNaN(num1) || isNaN(num2)) return null;

    return num1 + num2;
}

console.log(addTwoNumbers(5, 10)); //
console.log(addTwoNumbers(3, "test")); //
