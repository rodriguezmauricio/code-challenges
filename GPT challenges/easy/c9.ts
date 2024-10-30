/* Challenge #9: Reverse a String
Difficulty: 🟡 Easy
Points: 15

Task: Write a function that takes a string and returns it reversed.

Requirements:

Define a function called reverseString.
It should take one string argument.
Return the reversed string. */

function reverseString(str: string): string {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello")); //
console.log(reverseString("TypeScript"));
