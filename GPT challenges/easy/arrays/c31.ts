/* Challenge #31: Remove Falsy Values from an Array
Difficulty: 🟢 Easy
Points: 15

Task: Write a function that takes an array and removes all falsy values.
Falsy values in JavaScript are false, 0, "", null, undefined, and NaN.

Requirements:

Define a function called removeFalsyValues.
It should take an array of any type as an argument.
Return a new array containing only truthy values. */

function removeFalsyValues(arr: unknown[]): unknown[] {
    // return arr.filter((item) => {
    //     if (item !== true) {
    //         return item;
    //     }
    // });

    return arr.filter((item) => Boolean(item));
}

console.log(removeFalsyValues([0, "hello", false, "", 42, null, "world", true]));
