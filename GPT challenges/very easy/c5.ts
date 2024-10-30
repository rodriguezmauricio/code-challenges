/* Challenge #5: Check if a Number is Even
Difficulty: 🟢 Very Easy
Points: 10

Task: Write a function that takes a number and returns true if it’s even and false if it’s odd.

Requirements:

Define a function called isEven.
It should take one number as an argument.
Return true if the number is even and false if it’s odd. */

function isEven(num: number): Boolean {
    return num % 2 === 0 ? true : false;
}

console.log(isEven(4)); //
console.log(isEven(7)); //
