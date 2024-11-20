/* Challenge #48: Find All Subarrays of an Array
Difficulty: 🟠 Medium
Points: 20

Task: Write a function that takes an array and returns all possible subarrays of the array.
A subarray is a contiguous segment of the array.

Requirements
Define a function called findAllSubarrays.
It should take a single array as an argument.
Return an array containing all subarrays of the input array. */

function findAllSubarrays(arr: any[]): any[][] {
    const subarrays: any[][] = [];

    for (let start = 0; start < arr.length; start++) {
        for (let end = start + 1; end <= arr.length; end++) {
            subarrays.push(arr.slice(start, end));
        }
    }

    return subarrays;
}
console.log(findAllSubarrays([1, 2, 3]));
// Output: [[1], [1, 2], [1, 2, 3], [2], [2, 3], [3]]

console.log(findAllSubarrays(["a", "b"]));
// Output: [["a"], ["a", "b"], ["b"]]

console.log(findAllSubarrays([5]));
// Output: [[5]]

console.log(findAllSubarrays([]));
// Output: []
