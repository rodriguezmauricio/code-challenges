/* Challenge #52: Merge Two Sorted Arrays
Difficulty: 🟠 Medium
Points: 20

Task: Write a function that takes two sorted arrays and returns
a new array containing all elements from both arrays in sorted order.

Requirements
Define a function called mergeSortedArrays.
It should take two arrays of numbers as arguments.
Return a new array with all elements from both arrays in sorted order. */

// function mergeSortedArrays(arr1: any[], arr2: any[]): any[] {
//     return [...arr1, ...arr2].sort((a, b) => a - b);
// }

/* Alternative Solution: Without Sorting Entire Array
If the input arrays are guaranteed to be sorted, you can merge them without using .sort,
 which can be more efficient (O(n + m) time complexity instead of O((n + m) * log(n + m)) for sorting).
 */

function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
    const result: number[] = [];
    let i = 0,
        j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    return result.concat(arr1.slice(i)).concat(arr2.slice(j));
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));
// Output: [1, 2, 3, 4, 5, 6]

console.log(mergeSortedArrays([1, 2], [3, 4]));
// Output: [1, 2, 3, 4]

console.log(mergeSortedArrays([], [1, 2, 3]));
// Output: [1, 2, 3]

console.log(mergeSortedArrays([5, 10], []));
// Output: [5, 10]

console.log(mergeSortedArrays([], []));
// Output: []
