/* Challenge #6: Find the Maximum Number in an Array
Difficulty: 🟡 Easy
Points: 15

Task: Write a function that takes an array of numbers and returns the largest number in the array. If the array is empty, return null.

Requirements:

Define a function called findMax.
It should take an array of numbers as an argument.
Return the maximum number in the array or null if the array is empty. */

// function findMax(numsArr: number[]): number | null {
//     if (numsArr.length <= 0) return null;

//     let maxNum = -Infinity;

//     numsArr.forEach((num) => {
//         if (num > maxNum) {
//             maxNum = num;
//         }
//     });

//     return maxNum;
// }

function findMax(numsArr: number[]): number | null {
    return numsArr.length > 0 ? Math.max(...numsArr) : null;
}

console.log(findMax([1, 3, 7, 2])); //
console.log(findMax([])); //
