/* Challenge #35: Create a Simple Person Class
Difficulty: 🟢 Easy
Points: 15

Task: Write a Person class with a constructor that takes name and age as arguments
and sets them as properties. Include a method called introduce that returns a string
introducing the person by their name and age.

Requirements:

Define a Person class.
Include a constructor that accepts name (string) and age (number).
Define a method introduce that returns a string in the format: "Hi, my name is [name] and I am [age] years old." */

class Person1 {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        (this.name = name), (this.age = age);
    }
    introduce() {
        return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const person1 = new Person1(`mauricio`, 32);
console.log(person1.introduce());
