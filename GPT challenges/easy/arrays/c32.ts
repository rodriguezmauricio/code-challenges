/* Challenge #32: Find the Difference Between Max and Min
Difficulty: 🟢 Easy
Points: 15

Task: Write a function that takes an array of numbers
and returns the difference between the largest and smallest numbers.
If the array is empty or contains only one number, return 0.

Requirements:

Define a function called findMaxMinDifference.
It should take an array of numbers as an argument.
Return the difference between the largest and smallest numbers,
or 0 if there are not enough elements. */

// function findMaxMinDifference(arr: number[]): number {
//     if (arr.length <= 1) return 0;

//     let max: number = -Infinity;
//     let min: number = Infinity;

//     arr.forEach((item) => {
//         if (item < Math.max(...arr)) {
//             min = item;
//         } else if (item > Math.min(...arr)) {
//             max = item;
//         } else {
//             max = 0;
//             min = 0;
//         }
//     });

//     return max - min;
// }

function findMaxMinDifference(arr: number[]): number {
    if (arr.length <= 1) return 0;

    let max: number = arr[0];
    let min: number = arr[0];

    arr.forEach((item) => {
        if (item > max) max = item;
        if (item < min) min = item;
    });

    return max - min;
}

console.log(findMaxMinDifference([3, 9, 1, 7, -2]));
console.log(findMaxMinDifference([0, 0, 0]));
console.log(findMaxMinDifference([5]));
console.log(findMaxMinDifference([]));
