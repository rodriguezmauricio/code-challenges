/* Challenge #25: Count Occurrences by First Letter
Difficulty: 🟠 Medium
Points: 20

Task: Write a function that takes an array of words and
returns a Map where each key is the first letter of a word,
and each value is the number of words that start with that letter.

Requirements:

Define a function called countByFirstLetter.
It should take an array of strings as an argument.
Return a Map where each key is a letter, and the value is the count of words starting with that letter. */

function countByFirstLetter(arr: string[]): Map<string, number> {
    const lettersMap = new Map<string, number>();

    arr.forEach((word) => {
        if (lettersMap.has(word[0])) {
            lettersMap.set(word[0], lettersMap.get(word[0])! + 1);
        } else {
            lettersMap.set(word[0], 1);
        }
    });

    return lettersMap;
}

console.log(countByFirstLetter(["apple", "apricot", "banana", "blueberry", "cherry"]));
