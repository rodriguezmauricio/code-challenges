/* Challenge #42: Filter Strings by Length
Difficulty: 🟢 Easy
Points: 15

Task: Write a function that takes an array of strings and a maximum length n,
and returns a new array containing only the strings that are less than or equal to n characters in length.

Requirements:

Define a function called filterByLength.
It should take an array of strings and a number n as arguments.
Use the filter method to return a new array with only the strings of length n or less. */

function filterByLength(arr: string[], leng: number): string[] {
    return arr.filter((num) => {
        return num.length <= leng;
    });
}

console.log(filterByLength(["apple", "kiwi", "banana", "pear"], 4));
console.log(filterByLength(["a", "ab", "abc", "abcd"], 2));
console.log(filterByLength([], 3));
console.log(filterByLength(["short", "tiny", "big"], 10));
