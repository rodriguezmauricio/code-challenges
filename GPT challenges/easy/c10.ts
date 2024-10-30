/* Challenge #10: Capitalize the First Letter of Each Word in a String
Difficulty: 🟡 Easy
Points: 15

Task: Write a function that takes a string and capitalizes the first letter of each word.

Requirements:

Define a function called capitalizeWords.
It should take one string argument.
Return the string with the first letter of each word capitalized. */

function capitalizeWords(str: string): string {
    return str
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

console.log(capitalizeWords("hello world")); //
console.log(capitalizeWords("typescript is fun")); //
