/* Challenge #13: Find Elements with Frequency Greater Than a Given Value
Difficulty: 🟠 Medium
Points: 20

Task: Write a function that takes an array and a number n, and returns an array of elements that appear more than n times in the input array.

Requirements:

Define a function called findFrequentElements.
It should take an array and a number n as arguments.
Return an array of elements that have a frequency greater than n. */

function findFrequentElements(arr: any[], n: number): any[] {
    const frequencyMap: Record<any, any> = {};

    const returnArr = [];

    arr.forEach((element) => {
        frequencyMap[element] = (frequencyMap[element] || 0) + 1;
    });

    for (let element in frequencyMap) {
        if (frequencyMap[element] > n) {
            returnArr.push(element);
        }
    }

    return returnArr;
}

/* 
findFrequentElements([1, 2, 2, 3, 3, 3, 4, 4, 4, 4], 2); // [3, 4]
findFrequentElements(["apple", "banana", "apple", "orange", "banana", "apple"], 1); // ["apple", "banana"]
 */

console.log(findFrequentElements([1, 2, 2, 3, 3, 3, 4, 4, 4, 4], 2));
console.log(findFrequentElements(["apple", "banana", "apple", "orange", "banana", "apple"], 1));
