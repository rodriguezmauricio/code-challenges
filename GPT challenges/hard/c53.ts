/* Challenge #53: Flatten a Nested Object
Difficulty: 🔴 Hard
Points: 30

Task: Write a function that takes a deeply nested object and "flattens" it.
The keys of the flattened object should represent the nested structure using
dot notation.

Requirements
Define a function called flattenObject.
It should take an object as an argument.
Return a new object where:
Keys represent the path to the value in dot notation.
Values remain the same as in the original object. */

function flattenObject(
    obj: { [key: string]: any },
    parentKey = "",
    result: { [key: string]: any } = {}
): { [key: string]: any } {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = parentKey ? `${parentKey}.${key}` : key; // Build the key path

            if (typeof obj[key] === "object" && obj[key] !== null) {
                // Recursively flatten the nested object
                flattenObject(obj[key], newKey, result);
            } else {
                // Add the leaf node value to the result
                result[newKey] = obj[key];
            }
        }
    }
    return result;
}

const nestedObj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
        },
    },
};

console.log(flattenObject(nestedObj));
// Output: { "a": 1, "b.c": 2, "b.d.e": 3 }

const simpleObj = { x: 10, y: 20 };
console.log(flattenObject(simpleObj));
// Output: { "x": 10, "y": 20 }

console.log(flattenObject({}));
// Output: {} (empty object)
