/* Map Extra Exercise #5: Associate Users with Their Ages
Difficulty: 🟢 Easy
Points: 10

Task: Write a function that takes an array of user objects,
each with name and age properties, and returns a Map where
each key is a user’s name, and the value is their age.

Requirements:

Define a function called mapUserAges.
It should take an array of objects, each with name and age properties.
Return a Map where each key is a user’s name, and the value is their age. */

interface IuserObject {
    name: string;
    age: number;
}

function mapUserAges(userObjArr: IuserObject[]): Map<string, number> {
    const userAgeMap = new Map<string, number>();

    userObjArr.forEach((user) => {
        userAgeMap.set(user.name, user.age);
    });

    return userAgeMap;
}

console.log(
    mapUserAges([
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 35 },
    ])
);
