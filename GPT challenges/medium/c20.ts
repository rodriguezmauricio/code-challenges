/* Challenge #20: Unique Characters in a String Using Set
Difficulty: 🟠 Medium
Points: 20

Task: Write a function that takes a string and returns true if
all characters in the string are unique, and false otherwise, using a Set.

Requirements:

Define a function called hasUniqueChars.
It should take a single string argument.
Return true if all characters in the string are unique, false otherwise. */

function hasUniqueChars(str: string): Boolean {
    const strSet = new Set(str.split(""));

    return strSet.size === str.length;
}

console.log(hasUniqueChars("hello"));
console.log(hasUniqueChars("world"));
