/* Challenge #16: Word Frequency Counter
Difficulty: 🟠 Medium
Points: 20

Task: Write a function that takes a string and returns a Map
where each key is a unique word in the string and its value
is the count of occurrences of that word.

Requirements:

Define a function called wordFrequency.
It should take a single string argument.
Return a Map where keys are unique words and values are counts.

Example:
wordFrequency("hello world hello everyone");
// Map { "hello" => 2, "world" => 1, "everyone" => 1 } */

function wordFrequency(str: string): Map<string, number> {
    const map = new Map();

    str.split(" ").forEach((word) => {
        if (map.has(word)) {
            map.set(word, map.get(word) + 1);
        } else {
            map.set(word, 1);
        }
    });

    return map;
}

console.log(wordFrequency("hello world hello everyone"));
