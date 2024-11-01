/* Challenge #15: Merge Arrays of Objects by a Common Key
Difficulty: 🟠 Medium
Points: 20

Task: Write a function that takes two arrays of objects and merges them based on a common key. If an object in the first array shares a key with an object in the second array, they should be merged into a single object. Otherwise, they should remain separate.

Requirements:

Define a function called mergeByKey.
It should take two arrays of objects and a key string.
Return an array where objects with the same key value in both arrays are merged. 

example:
const arr1 = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];

const arr2 = [
    { id: 1, age: 25 },
    { id: 3, age: 30 }
];

mergeByKey(arr1, arr2, "id");
// [
//     { id: 1, name: "Alice", age: 25 },
//     { id: 2, name: "Bob" },
//     { id: 3, age: 30 }
// ]


*/

function mergeByKey(arr1: object[], arr2: object[], key: any): object[] {
    const map = new Map();

    arr1.forEach((obj) => {
        map.set(obj[key], { ...obj });
    });

    arr2.forEach((obj) => {
        if (map.has(obj[key])) {
            map.set(obj[key], { ...map.get(obj[key]), ...obj });
        } else {
            map.set(obj[key], { ...obj });
        }
    });

    return Array.from(map.values());
}

const arr1 = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
];

const arr2 = [
    { id: 1, age: 25 },
    { id: 3, age: 30 },
];

console.log(mergeByKey(arr1, arr2, "id"));
