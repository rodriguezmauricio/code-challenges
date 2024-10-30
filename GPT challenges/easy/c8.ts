/* Challenge #8: Remove Duplicates from an Array
Difficulty: 🟡 Easy
Points: 15

Task: Write a function that takes an array and returns a new array with all duplicate values removed.

Requirements:

Define a function called removeDuplicates.
It should take an array of any type as an argument.
Return a new array with unique values only. */

function removeDuplicates(arr: any[]): any[] {
    const newSet = new Set(arr);
    return Array.from(newSet);
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); //
console.log(removeDuplicates(["a", "b", "a"])); //
