/* Challenge #34: Find All Pairs with a Given Sum
Difficulty: 🟠 Medium
Points: 20

Task: Write a function that takes an array of numbers and a target sum,
and returns an array of all unique pairs that add up to the target sum.
Each pair should be returned as a two-element array, and the order of pairs doesn’t matter.

Requirements:

Define a function called findPairsWithSum.
It should take an array of numbers and a target sum as arguments.
Return an array of unique pairs, where each pair is a two-element array that adds up to the target sum. */

function findPairsWithSum(arr: number[], targetSum: number): number[][] {
    const seenNumbers = new Set<number>();
    const uniquePairs = new Set<string>(); // Use a Set to keep unique pairs as strings
    const result: number[][] = [];

    arr.forEach((num) => {
        const complement = targetSum - num;

        if (seenNumbers.has(complement)) {
            // Sort the pair to keep uniqueness
            const pair = [Math.min(num, complement), Math.max(num, complement)];
            const pairString = pair.toString();

            if (!uniquePairs.has(pairString)) {
                uniquePairs.add(pairString);
                result.push(pair);
            }
        }

        seenNumbers.add(num);
    });

    return result;
}

console.log(findPairsWithSum([1, 2, 3, 4, 5], 6)); // [[2, 4]]
console.log(findPairsWithSum([1, 1, 1, 1], 2)); // [[1, 1]]
console.log(findPairsWithSum([5, 3, 1, 7], 10)); // []
console.log(findPairsWithSum([], 5)); // []
console.log(findPairsWithSum([1, 2, 3, 4, 5], 6)); // [[1, 5], [2, 4]]
