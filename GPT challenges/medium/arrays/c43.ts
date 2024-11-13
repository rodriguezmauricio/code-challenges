/* Challenge #43: Filter by Keyword
Difficulty: 🟠 Medium
Points: 20

Task: Write a function that takes an array of strings and a keyword,
and returns a new array containing only the strings that include the keyword (case-insensitive).

Requirements:

Define a function called filterByKeyword.
It should take an array of strings and a keyword string as arguments.
Use the filter method to return a new array with only strings that contain the keyword, ignoring case. */

function filterByKeyword(arr: string[], keyword: string): string[] {
    return arr.filter((item) => {
        return item.toLowerCase().includes(keyword.toLowerCase());
    });
}

console.log(filterByKeyword(["apple pie", "Apple cider", "banana split", "grape juice"], "apple"));
console.log(filterByKeyword(["hello", "world", "Hello there"], "hello"));
console.log(filterByKeyword(["abc", "def", "ghi"], "xyz"));
console.log(filterByKeyword([], "test"));
