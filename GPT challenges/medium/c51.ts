/* Challenge #51: Create a Deep Copy of an Object
Difficulty: 🟠 Medium
Points: 20

Task: Write a function that takes an object and returns a deep copy of it.
A deep copy means that nested objects and arrays should also be fully duplicated, not just referenced.

Requirements
Define a function called deepCopyObject.
It should take a single object as an argument.
Return a new object that is a deep copy of the input object. */

// function deepCopyObject(obj: {}): any {
//     return { ...obj };
// }

function deepCopyObject(obj: any): any {
    // Check if the value is null or not an object/array, return it as is
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    // Handle arrays
    if (Array.isArray(obj)) {
        return obj.map((item) => deepCopyObject(item));
    }

    // Handle objects
    const copy: { [key: string]: any } = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopyObject(obj[key]);
        }
    }

    return copy;
}

const original = {
    name: "Alice",
    details: {
        age: 30,
        hobbies: ["reading", "cycling"],
    },
};

const copy = deepCopyObject(original);

console.log(copy);
// Output: { name: "Alice", details: { age: 30, hobbies: ["reading", "cycling"] } }

console.log(copy === original);
// Output: false (copy is a new object)

console.log(copy.details === original.details);
// Output: false (nested object is also a new copy)

console.log(copy.details.hobbies === original.details.hobbies);
// Output: false (nested array is also a new copy)
