/* Challenge #14: Find the Intersection of Two Arrays
Difficulty: 🟠 Medium
Points: 20

Task: Write a function that takes two arrays and returns a new array
containing only the elements found in both arrays (without duplicates).

Requirements:

Define a function called findIntersection.
It should take two arrays as arguments.
Return an array containing the elements that appear in both arrays, with no duplicates. */

// function findIntersection(arr1: any[], arr2: any[]): any[] {
//     const result: any[] = [];

//     arr1.filter((element) => {
//         if (arr2.includes(element)) result.push(element);
//     });

//     return result;
// }

function findIntersection(arr1: any[], arr2: any[]): any[] {
    const result = arr1.filter((element) => arr2.includes(element));
    return Array.from(new Set(result));
}

/* 
findIntersection([1, 2, 3, 4], [3, 4, 5, 6]); // [3, 4]
findIntersection(["apple", "banana"], ["banana", "cherry", "apple"]); // ["banana", "apple"]
 */

console.log(findIntersection([1, 2, 3, 4], [3, 4, 5, 6]));
console.log(findIntersection(["apple", "banana"], ["banana", "cherry", "apple"]));
