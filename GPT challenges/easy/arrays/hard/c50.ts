/* Challenge #50: Generate All Permutations of an Array
Difficulty: 🔴 Hard
Points: 30

Task: Write a function that takes an array of unique elements and returns all possible permutations of the array.
 A permutation is any possible arrangement of the elements.

Requirements
Define a function called generatePermutations.
It should take a single array as an argument.
Return an array containing all permutations of the input array. */

function generatePermutations(arr: any[]): any[][] {
    //base cases
    if (arr.length === 0) return [[]];

    const result: any[][] = [];

    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];

        const remaining = arr.slice(0, i).concat(arr.slice(i + 1));

        const remainingPermutations = generatePermutations(remaining);

        for (const permutation of remainingPermutations) {
            result.push([current, ...permutation]);
        }
    }

    return result;
}

console.log(generatePermutations([1, 2]));
console.log(generatePermutations([1, 2, 3]));
console.log(generatePermutations(["a"]));
console.log(generatePermutations([]));
