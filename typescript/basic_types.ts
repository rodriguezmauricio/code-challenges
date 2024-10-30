/* 
Concepts:

Learn how to use primitive types (string, number, boolean, etc.).
Understand arrays and tuples.
*/

//Exercises:
// Declare a variable of type number and assign a value.
const number: number = 10;

// Create a variable of type boolean.
const bool: boolean = true;

// Declare a function that accepts a string parameter and returns a string.
const func = (string: string, number: number): string => {
    return `${string} ${number}`;
};

// Create an array of numbers and a tuple of a string and number.
const arr: number[] = [1, 2, 3, 4, 5];
const tup: [string, number] = ["Hello", 10];

// Declare a variable that can accept both string and number types.
const strNum: string | number = "number 2";

// Write a function that accepts two parameters: a number and a boolean.
const funNumBool = (number: number, bool: boolean) => {
    return `${number} is ${bool}`;
};

// Create a variable of type null and undefined.
const nullDefined: null | undefined = null; // CHECK:

// Declare a variable with type unknown and assign different types to it.
let unKnown: unknown = 2;
unKnown = "safe";
unKnown = () => {};

// Define a constant that holds an object with name: string and age: number.
const obj: { name: string; age: number } = { name: "Reid", age: 25 };

// Write a function that accepts an array of strings and returns the length.
const otherFunc = (arr: string[]): number => {
    return arr.length;
};

// Define a tuple that contains a boolean, string, and number.
const tripleTup: [boolean, string, number] = [true, "wasup", 5];

// Create a function that takes a string and returns a boolean.
const anotherFunc = (str: string): boolean => {
    if (str.length > 0) return true;
    return false;
};

// Write a function that returns a tuple containing two numbers.
const tupFunc = (): [number, number] => {
    return [2, 4];
};

// Declare a union type that allows a value to be a string or boolean.
const uni: string | boolean = "false";

// Write a function that accepts an array of number or string types.
const strNumArr: string[] | number[] = [""];

// Define an alias for string | number.
type strNumAlias = number | string;

// Write a function that accepts null or undefined.
const nullDefinedFunc = (input: null | undefined) => {
    return input;
};

// Create a function that returns void.
const voidFunction = (): void => {};

// Write a function that never returns (never type).
const neverFunc = (message: string): never => {
    while (true) {}
};

// Create a variable that holds a function with parameters of type number and string.
const paramsFunc = func("1", 2);
