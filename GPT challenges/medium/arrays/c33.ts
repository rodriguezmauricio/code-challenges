/* Challenge #33: Rotate an Array
Difficulty: 🟠 Medium
Points: 20

Task: Write a function that takes an array and a number k,
and rotates the array k positions to the right.
If k is larger than the array length, wrap around as needed.
If the array is empty, return an empty array.

Requirements:

Define a function called rotateArray.
It should take an array of any type and a number k as arguments.
Return a new array rotated k positions to the right. */

function rotateArray(arr: any[], k: number): any[] {
    let rotatedArr: any[] = [];

    if (k === 0 || arr.length === 0) return arr;

    const effectiveRotation = k % arr.length;

    return [...arr.slice(-effectiveRotation), ...arr.slice(0, arr.length - effectiveRotation)];
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));
// [4, 5, 1, 2, 3]
console.log(rotateArray([1, 2, 3, 4, 5], 7));
// [4, 5, 1, 2, 3] (7 % 5 = 2, so it rotates 2 positions)
console.log(rotateArray([1, 2, 3], 0));
// [1, 2, 3] (no rotation)
console.log(rotateArray([], 3));
// [] (empty array)
