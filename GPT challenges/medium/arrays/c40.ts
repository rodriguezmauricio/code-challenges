/* Challenge #40: Filter an Array of Numbers by a Range
Difficulty: 🟠 Medium
Points: 20

Task: Write a function that takes an array of numbers and a range (two numbers, min and max),
and returns a new array containing only the numbers within the specified range, inclusive.

Requirements:

Define a function called filterByRange.
It should take an array of numbers and two additional arguments, min and max.
Use the filter method to return a new array with only the numbers in the inclusive range [min, max]. */

function filterByRange(arr: number[], min: number, max: number): number[] {
    return arr.filter((item) => {
        return item >= min && item <= max;
    });
}

console.log(filterByRange([1, 5, 8, 10, 12, 15], 5, 10));
console.log(filterByRange([1, 3, 7, 9, 11], 2, 8));
console.log(filterByRange([2, 4, 6, 8], 10, 15));
console.log(filterByRange([], 1, 5));
