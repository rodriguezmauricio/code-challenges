// 3. Interfaces and Types

// Concepts:
//     Learn the difference between interfaces and types.
//     Understand how to extend interfaces and types.

//     Exercises:
// Declare an interface Person with name and age properties.
interface Person{
    name: string;
    age: number;
}

//     Extend the Person interface to add an address property.
interface PersonWithNumber extends Person{
    address: string
}

//     Create an interface with a method that returns a string.
interface MethodWithString {
    returnString: () => string;
}

//     Define an interface for a function signature.
interface functionSignature {
    (a: number, b: number): number;
}

// Use an interface to define an object with optional properties.
interface ObjectWithOptionalParameters {
    name? : string;
}

//     Create a type alias for a union type of string and number.
type stringOrNumber = string | number

//     Write a function that accepts an argument matching a specific interface.
const functionWihInterface  = (person : Person) => {
    return `Hello ${person.name}! ${person.age} years is old as fuck!`;
}

// Use an interface to describe the structure of a class.
interface withClass {
    name: string;
    age: string;
    output(): string;
}

// Extend a type alias to add more properties.
type extendType = Person & {
    employed: boolean;
}

//     Define an index signature on an interface.
interface StringSignature {
    [key: string] : string | number;
}

const pornStars : StringSignature = {
    name: "Holly Hendrix",
    age: "25",
    awards: 5
}

// Create an interface for an array-like structure.
interface ArrayLikeStructure  {
    [index: number]: number;
}

const myNumbers: ArrayLikeStructure = {
    0: 1,
    1: 2,
    2: 3
}

//     Write a type alias for an object containing methods.
//     Create an interface that extends multiple other interfaces.
//     Define a type alias for a function type.
// Use the Readonly utility type to make an interface immutable.
// Create a type that uses conditional types.
//     Write a function that accepts parameters described by a type alias.
// Create an interface with a constructor signature.
//     Write a function that takes a generic interface.
// Use intersection types to combine multiple types into one.