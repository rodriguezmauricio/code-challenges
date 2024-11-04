/* Challenge #28: Flatten a Nested Array
Difficulty: 🟠 Medium
Points: 20

Task: Write a function that takes a nested array of numbers
(an array containing subarrays) and returns a flattened array with all numbers.

Requirements:

Define a function called flattenArray.
It should take a nested array of numbers as an argument (e.g., number[][]).
Return a single array containing all the numbers from the nested structure. */

function flattenArray(nestedArr: any[]): number[] {
    let flatArray: number[] = [];

    // nestedArr.forEach((element) => {
    //     if (Array.isArray(element)) {
    //         flatArray = flatArray.concat(flattenArray(element));
    //     } else {
    //         flatArray.push(element);
    //     }
    // });

    nestedArr.forEach((element) => {
        if (element instanceof Array) {
            flatArray.push(...flattenArray(element));
        } else {
            flatArray.push(element);
        }
    });

    return flatArray;
}
console.log(
    flattenArray([
        [1, 2],
        [3, 4],
        [5, [6, 7]],
    ])
);
