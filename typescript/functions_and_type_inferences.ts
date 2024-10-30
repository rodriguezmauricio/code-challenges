// 2. Functions and Type Inference

// Concepts:
// Understand TypeScript's ability to infer types.
// Learn how to define functions with type annotations.

// Exercises:
// Write a function without a return type annotation and let TypeScript infer the type.
const retAnot = () => {
    return "string return";
};

// Declare a function that accepts two numbers and returns their sum.
const sumFunc = (num1: number, num2: number) => {
    return num1 + num2;
};

// Write a function that has optional parameters.
const optionalParamsFunc = (name?: string) => {
    name ? name : "no name";
};

// Create a function that has default parameters.
const defaultParamsFunc = (name: string = "user") => {
    return name;
};

// Write a function with rest parameters that accept multiple numbers.
const resParamFunc = ([...nums]: number[]) => {
    return;
};

// Write a higher-order function that accepts a callback function as an argument.
const higherOrderFunc = (func: (num: number) => number) => {
    return func(2) * 2;
};

// Create a function that returns another function.
const funcReturnFunc = (name: string): (() => void) => {
    return () => {};
};

// Write a function with an overload for two different types of arguments.
function getLength(input: string): number {
    return input.length;
}

// Declare a function that returns an object containing name and age.
function returnObj(name: string, age: number): { username: string; userAge: number } {
    return { username: name, userAge: age };
}

// Write a function that infers the type of its return value.
function inferReturnFunc(name: string) {
    return `Your fuckin name is ${name}`;
}

// Create a function with a destructured object as a parameter.
function destructuredObjectFunc({ ...args }) {
    return args;
}

// Write a function that returns a promise.
async function asyncFunction() {
    const fetchData = await fetch("url/");
}

// Declare a function that accepts an array of strings and returns a new array.
function arrStringFunc([...args]: string[]): string[] {
    return [...args];
}

// Write a function that accepts a callback and returns a boolean.
// Create a function with no parameters that returns an inferred number.
// Write a recursive function in TypeScript.
// Declare a function with a union return type.
// Write a function that returns a tuple.
// Create a curried function (a function that returns another function).
// Write a function that handles different types of errors (try-catch block)./*  */
