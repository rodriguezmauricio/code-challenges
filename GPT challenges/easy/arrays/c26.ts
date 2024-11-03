/* Challenge #26: Find the Longest Word in an Array
Difficulty: 🟢 Easy
Points: 15

Task: Write a function that takes an array of words
and returns the longest word. If there are multiple
words with the same length, return the first one.

Requirements:

Define a function called findLongestWord.
It should take an array of strings as an argument.
Return the longest word in the array. */

function findLongestWord(arr: string[]): string {
    let longestWord = "";

    arr.forEach((word) => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });

    return longestWord;
}

console.log(findLongestWord(["apple", "banana", "cherry", "date", "salads"]));
