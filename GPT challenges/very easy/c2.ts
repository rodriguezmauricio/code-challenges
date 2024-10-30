/* Challenge #2: Checking if a String is Empty
Difficulty: 🟢 Very Easy
Points: 10

Task: Write a TypeScript function that takes a string and returns true if it is empty or contains only whitespace, otherwise false. Make sure your code is as concise as possible!

Requirements:

Define a function called isEmptyString.
It should take a single string argument.
Return true for empty or whitespace-only strings, and false otherwise. */

// function isEmptyString(str: string): Boolean {
//     if (str === "") return true;

//     return false;
// }

// function isEmptyString(str: string): Boolean {
//     if (str.trim() === "") return true;

//     return false;
// }

function isEmptyString(str: string): Boolean {
    return str.trim() === "";
}

console.log(isEmptyString("")); //
console.log(isEmptyString(" ")); //
console.log(isEmptyString("Hello World")); //
