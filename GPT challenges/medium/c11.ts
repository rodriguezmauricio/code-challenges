/* Challenge #11: Find the Most Frequent Element in an Array
Difficulty: 🟠 Medium
Points: 20

Task: Write a function that takes an array of values and returns the most frequent element. If there’s a tie, return any one of the most frequent elements.

Requirements:

Define a function called mostFrequent.
It should take an array of any type as an argument.
Return the most frequent element or any one of them if there’s a tie. */

function mostFrequent(arr: any[]): any {
    const frequencyMap: Record<any, number> = {};

    arr.forEach((element) => {
        frequencyMap[element] = (frequencyMap[element] || 0) + 1;
    });

    let maxCount = 0;
    let mostFrequentElement: any = null;

    for (let element in frequencyMap) {
        if (frequencyMap[element] > maxCount) {
            maxCount = frequencyMap[element];
            mostFrequentElement = element;
        }
    }

    return mostFrequentElement;
}

console.log(mostFrequent([1, 3, 2, 3, 4, 3, 2, 2, 2])); //
console.log(mostFrequent(["a", "b", "a", "c", "a", "b", "b"])); //
