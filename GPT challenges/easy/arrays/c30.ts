/* Challenge #30: Sum of Even Numbers
Difficulty: 🟢 Easy
Points: 15

Task: Write a function that takes an array of numbers
and returns the sum of all even numbers in the array.

Requirements:

Define a function called sumEvenNumbers.
It should take an array of numbers as an argument.
Return the sum of all even numbers in the array. */

function sumEvenNumbers(arr: number[]): number {
    let sum: number = 0;

    arr.forEach((num) => {
        if (num % 2 === 0) {
            sum += num;
        }
    });

    return sum;
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));
