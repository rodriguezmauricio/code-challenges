/* Challenge #41: Filter Out Non-Unique Values
Difficulty: 🟠 Medium
Points: 20

Task: Write a function that takes an array of numbers and returns a new array
containing only the values that appear exactly once in the original array (i.e., filter out any duplicate values).

Requirements:

Define a function called filterUniqueValues.
It should take an array of numbers as an argument.
Use the filter method to return a new array with only values that appear once. */

function filterUniqueValues(arr: number[]): number[] {
    return arr.filter((num) => {
        return arr.indexOf(num) === arr.lastIndexOf(num);
    });
}

console.log(filterUniqueValues([1, 2, 2, 3, 4, 4, 5]));
console.log(filterUniqueValues([1, 1, 1, 1]));
console.log(filterUniqueValues([1, 2, 3, 4, 5]));
console.log(filterUniqueValues([]));
