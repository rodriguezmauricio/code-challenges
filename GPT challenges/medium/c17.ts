/* Challenge #17: Remove Duplicates Using Set
Difficulty: 🟠 Medium
Points: 20

Task: Write a function that takes an array and returns a new array with all duplicates removed, using a Set.

Requirements:

Define a function called removeDuplicates.
It should take an array of any type as an argument.
Return a new array with only unique values. */

function removeDuplicates(arr: any[]): any {
    return Array.from(new Set(arr));
}

console.log(removeDuplicates([1, 2, 3, 3, 4, 5, 5]));
