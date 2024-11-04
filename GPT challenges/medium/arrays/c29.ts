/* Challenge #29: Find Common Elements in Two Arrays
Difficulty: 🟠 Medium
Points: 20

Task: Write a function that takes two arrays of numbers
and returns a new array containing only the elements
that appear in both arrays (no duplicates).

Requirements:

Define a function called findCommonElements.
It should take two arrays of numbers as arguments.
Return a new array with the unique elements found in both arrays. */

function findCommonElements(arr1: number[], arr2: number[]): number[] {
    const commonElements = new Set<number>();

    arr1.forEach((num) => {
        if (arr2.includes(num)) {
            commonElements.add(num);
        }
    });

    return [...commonElements];
}

console.log(findCommonElements([1, 2, 3, 4], [3, 4, 5, 6]));
