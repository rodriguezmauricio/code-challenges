/* Challenge #12: Group Elements by Frequency
Difficulty: 🟠 Medium
Points: 20

Task: Write a function that takes an array and returns an object where each key is an element from the array and its value is the count of occurrences of that element.

Requirements:

Define a function called groupByFrequency.
It should take an array of any type as an argument.
Return an object where keys are the unique elements, and values are their counts. */

function groupByFrequency(arr: any[]): any {
    const frequencyMap: Record<any, any> = {};

    arr.forEach((element) => {
        frequencyMap[element] = (frequencyMap[element] || 0) + 1;
    });

    return frequencyMap;
}

console.log(groupByFrequency([1, 2, 2, 3, 3, 3]));
console.log(groupByFrequency(["a", "b", "a", "c", "a", "b"]));
