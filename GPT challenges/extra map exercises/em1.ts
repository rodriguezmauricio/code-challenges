/* Map Extra Exercise #1: Count Word Lengths
Difficulty: 🟢 Easy
Points: 10

Task: Write a function that takes an array of words and
returns a Map where each key is a word, and the value is the length of that word.

Requirements:

Define a function called countWordLengths.
It should take an array of strings as an argument.
Return a Map where each key is a word, and the value is the length of that word. */

function countWordLengths(arr: string[]): Map<string, number> {
    const wordMap = new Map<string, number>();

    arr.forEach((word) => {
        wordMap.set(word, word.length);
    });

    return wordMap;
}

console.log(countWordLengths(["apple", "banana", "kiwi"]));
