/* Challenge #46: Filter Objects by Nested Property
Difficulty: 🟠 Medium
Points: 20

Task: Write a function that takes an array of objects and a property path (e.g., "details.age") 
and filters the objects where the nested property value matches a given target value.

Requirements:

Define a function called filterByNestedProperty.
It should take three arguments:
An array of objects.
A property path as a string (e.g., "details.age").
A target value to match.
Use the filter method to return a new array containing only the objects where the nested property matches the target value. */

type People = { name: string; details: { city: string; age: number } };

// function filterByNestedProperty(
//     arr: People[],
//     propertyPath: string,
//     target: string | number
// ): People[] {
//     return arr.filter((person) => {
//         const propSplit = propertyPath.split(".");

//         if (!person[propertyPath]) return [];

//         return person[propertyPath] === target;
//     });
// }

function filterByNestedProperty(
    arr: { [key: string]: any }[],
    propertyPath: string,
    target: string | number
): { [key: string]: any }[] {
    return arr.filter((item) => {
        // Split the property path into keys
        const keys = propertyPath.split(".");

        // Navigate the nested properties
        const value = keys.reduce<unknown>(
            (obj, key) => (obj && typeof obj === "object" ? obj[key] : undefined),
            item
        );

        // Ensure value matches the target
        return value === target;
    });
}

const people = [
    { name: "Alice", details: { age: 30, city: "New York" } },
    { name: "Bob", details: { age: 25, city: "San Francisco" } },
    { name: "Charlie", details: { age: 30, city: "Boston" } },
];

console.log(filterByNestedProperty(people, "details.age", 30));
console.log(filterByNestedProperty(people, "details.city", "Boston"));
console.log(filterByNestedProperty([], "details.age", 30));
console.log(filterByNestedProperty(people, "details.country", "USA"));
