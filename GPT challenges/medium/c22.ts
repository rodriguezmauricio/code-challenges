/* Challenge #22: Character Frequency in Each Word
Difficulty: 🟠 Medium
Points: 20

Task: Write a function that takes an array of strings
and returns a Map where each key is a word from the array,
and its value is another Map that contains the frequency of
each character in that word.

Requirements:

Define a function called characterFrequency.
It should take an array of strings as an argument.
Return a Map where each key is a string (a word),
and each value is a Map that stores the character frequencies for that word. */

function characterFrequency(words: string[]): Map<string, Map<string, number>> {
    const wordMap = new Map<string, Map<string, number>>();

    words.forEach((word) => {
        const charMap = new Map<string, number>();

        for (const char of word) {
            if (charMap.has(char)) {
                charMap.set(char, charMap.get(char)! + 1);
            } else {
                charMap.set(char, 1);
            }
        }

        wordMap.set(word, charMap);
    });

    return wordMap;
}

console.log(characterFrequency(["apple", "banana"]));
