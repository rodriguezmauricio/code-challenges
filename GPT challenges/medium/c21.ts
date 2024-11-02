/* Challenge #21: Group Words by Length
Difficulty: 🟠 Medium
Points: 20

Task: Write a function that takes an array of strings and
returns a Map where each key is a word length, and the
corresponding value is an array of words with that length.

Requirements:

Define a function called groupWordsByLength.
It should take an array of strings as an argument.
Return a Map where each key is a number representing word length,
and each value is an array of words of that length. */

function groupWordsByLength(strArr: string[]): Map<number, string[]> {
    const wordsMap = new Map();

    strArr.forEach((element) => {
        if (wordsMap.has(element.length)) {
            wordsMap.get(element.length).push(element);
        } else {
            wordsMap.set(element.length, [element]);
        }
    });

    return wordsMap;
}

console.log(groupWordsByLength(["apple", "bat", "cat", "me", "dog", "apple"]));
