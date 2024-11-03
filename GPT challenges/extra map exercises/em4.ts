/* Map Extra Exercise #4: Count Word Occurrences
Difficulty: 🟢 Easy
Points: 10

Task: Write a function that takes an array of words and returns a Map 
where each key is a word, and the value is the number of times that word appears in the array.

Requirements:

Define a function called countWordOccurrences.
It should take an array of strings as an argument.
Return a Map where each key is a word, and the value is
the number of occurrences of that word in the array. */

function countWordOccurrences(arr: string[]): Map<string, number> {
    const occurrencesMap = new Map<string, number>();

    arr.forEach((word) => {
        if (occurrencesMap.has(word)) {
            occurrencesMap.set(word, occurrencesMap.get(word)! + 1);
        } else {
            occurrencesMap.set(word, 1);
        }
    });

    return occurrencesMap;
}

console.log(countWordOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"]));
