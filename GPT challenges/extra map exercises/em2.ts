/* Map Extra Exercise #2: Track Character Occurrences
Difficulty: 🟢 Easy
Points: 10

Task: Write a function that takes a single string and
returns a Map where each key is a character from the string,
and the value is the number of times it appears.

Requirements:

Define a function called trackCharacterOccurrences.
It should take a single string as an argument.
Return a Map where each key is a character, and the value is its frequency in the string. */

function trackCharacterOccurrences(str: string): Map<string, number> {
    const occurrencesMap = new Map<string, number>();

    str.split("").forEach((letter) => {
        if (occurrencesMap.has(letter)) {
            occurrencesMap.set(letter, occurrencesMap.get(letter)! + 1);
        } else {
            occurrencesMap.set(letter, 1);
        }
    });

    return occurrencesMap;
}

console.log(trackCharacterOccurrences("hello"));
