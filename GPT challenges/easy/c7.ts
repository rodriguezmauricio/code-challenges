/* Challenge #7: Count Occurrences of a Value in an Array
Difficulty: 🟡 Easy
Points: 15

Task: Write a function that takes an array and a value, and returns the number of times that value appears in the array.

Requirements:

Define a function called countOccurrences.
It should take an array of any type and a value to count.
Return the count of occurrences of that value in the array. */

// function countOccurrences(arr: any[], value: any) {
//     let valueToCount = 0;

//     arr.forEach((arrVal) => {
//         if (arrVal === value) valueToCount++;
//     });

//     return valueToCount;
// }

function countOccurrences(arr: any[], value: any): number {
    return arr.filter((arrVal) => arrVal === value).length;
}

console.log(countOccurrences([1, 2, 3, 2, 2], 2)); //
console.log(countOccurrences(["a", "b", "a"], "a")); //
