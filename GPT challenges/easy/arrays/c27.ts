/* Challenge #27: Filter Unique Values in an Array
Difficulty: 🟢 Easy
Points: 15

Task: Write a function that takes an array of numbers
and returns a new array with only unique values (no duplicates).

Requirements:

Define a function called filterUniqueValues.
It should take an array of numbers as an argument.
Return a new array containing only the unique values. */

function filterUniqueValues(numsArr: number[]): number[] {
    return Array.from(new Set(numsArr));
}

console.log(filterUniqueValues([1, 2, 2, 3, 4, 4, 5]));
