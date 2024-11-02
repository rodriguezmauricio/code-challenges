/* Challenge #19: Find Common Elements Using Sets
Difficulty: 🟠 Medium
Points: 20

Task: Write a function that takes two arrays and returns
a new array containing only the elements that appear
in both arrays, using a Set.

Requirements:

Define a function called findCommonElements.
It should take two arrays as arguments.
Return an array containing only the elements that are present in both arrays. */

function findCommonElements(arr1: any[], arr2: any[]): any[] {
    const arrSet = new Set(arr1);
    const commonElementsArr = arr2.filter((element) => arrSet.has(element));

    return commonElementsArr;
}

console.log(findCommonElements([1, 2, 3], [2, 3, 4]));
