/* Challenge #49: Find the Intersection of Multiple Arrays
Difficulty: 🟠 Medium
Points: 20

Task: Write a function that takes multiple arrays and returns an array containing elements that are present in all of them.

Requirements
Define a function called findIntersection.
It should take a variable number of arrays as arguments.
Return an array containing only the elements present in all input arrays. */

function findIntersection(...arrays: any[][]): any[] {
    if (arrays.length === 0) return []; // No input arrays
    if (arrays.some((arr) => arr.length === 0)) return []; // Any array is empty

    const [firstArray, ...restArrays] = arrays;

    return firstArray.filter((item) => restArrays.every((array) => array.includes(item)));
}
console.log(findIntersection([1, 2, 3], [2, 3, 4], [3, 4, 5]));
console.log(findIntersection(["a", "b"], ["b", "c"], ["b", "d"]));
console.log(findIntersection([1, 2, 3], [4, 5, 6]));
console.log(findIntersection([]));
console.log(findIntersection([1, 2], [1, 2], [1, 2]));
