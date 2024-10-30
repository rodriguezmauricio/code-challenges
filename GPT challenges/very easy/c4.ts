/* Challenge #4: Calculate the Length of an Array
Difficulty: 🟢 Very Easy
Points: 10

Task: Write a function that takes an array and returns its length.

Requirements:

Define a function called getArrayLength.
It should take an array of any type (any[]) as an argument.
Return the length of the array. */

const getArrayLength = (arr: any[]): number => {
    return arr.length;
};

console.log(getArrayLength([1, 2, 3])); //
console.log(getArrayLength([])); //
