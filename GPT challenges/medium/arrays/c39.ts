/* Challenge #39: Filter Array of Objects by Property Value
Difficulty: 🟠 Medium
Points: 20

Task: Write a function that takes an array of objects and a status string,
and returns a new array containing only the objects with a status property
that matches the specified status.

Requirements:

Define a function called filterByStatus.
It should take an array of objects (each with properties id and status) and a status string.
Use the filter method to return a new array with only objects where status matches the given status. */

type ObjectType = {
    id: number;
    status: string;
};

function filterByStatus(arr: ObjectType[], status: string): ObjectType[] {
    return arr.filter((item) => {
        return item.status === status;
    });
}

const tasks = [
    { id: 1, status: "completed" },
    { id: 2, status: "in-progress" },
    { id: 3, status: "completed" },
    { id: 4, status: "not-started" },
];

console.log(filterByStatus(tasks, "completed"));
console.log(filterByStatus(tasks, "in-progress"));
console.log(filterByStatus(tasks, "not-started"));
console.log(filterByStatus(tasks, "archived"));
