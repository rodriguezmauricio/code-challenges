/* Challenge #47: Partition an Array
Difficulty: 🟠 Medium
Points: 20

Task: Write a function that partitions an array into two arrays based on a condition.
The first array should contain all elements that satisfy the condition,
and the second array should contain the rest.

Requirements
Define a function called partitionArray.
It should take an array and a callback function as arguments:
The callback function determines whether each element satisfies the condition.
Return an array containing two subarrays:
The first subarray contains elements that satisfy the condition.
The second subarray contains the rest. */

// function partitionArray(arr: any[], callback: (cb: any) => any) {
//     const containArr = arr.filter((item) => {
//         return callback(item);
//     });

//     const restArr = arr.filter((item) => {
//         return !callback(item);
//     });

//     return [containArr, restArr];
// }

function partitionArray(arr: any[], callback: (item: any) => boolean): [any[], any[]] {
    const containArr: any[] = [];
    const restArr: any[] = [];

    arr.forEach((item) => {
        if (callback(item)) {
            containArr.push(item);
        } else {
            restArr.push(item);
        }
    });

    return [containArr, restArr];
}

console.log(partitionArray([1, 2, 3, 4, 5, 6], (num) => num % 2 === 0));
console.log(partitionArray(["apple", "banana", "pear"], (word) => word.includes("a")));
console.log(partitionArray([], (num) => num > 0));
console.log(partitionArray([true, false, true], (bool) => bool));
