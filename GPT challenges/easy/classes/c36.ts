/* Challenge #36: Add a Static Method to Person
Difficulty: 🟢 Easy
Points: 15

Task: Extend the Person class by adding a static method called compareAge
that takes two Person instances as arguments.
The method should return a string stating which person is older
or if they are the same age.

Requirements:

Add a static method called compareAge to the Person class.
compareAge should take two Person instances and return one of the following strings:
If the first person is older: "[name1] is older than [name2]".
If the second person is older: "[name2] is older than [name1]".
If they are the same age: "[name1] and [name2] are the same age". */

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        `Hi, my name is ${this.name} and I am ${this.age} years old`;
    }
    static compareAge(person1, person2) {
        if (person1.age > person2.age) return `${person1.name} is older than ${person2.name}`;
        if (person2.age > person1.age) return `${person2.name} is older than ${person1.name}`;
        if (person1.age === person2.age)
            return `${person1.name} and ${person2.name} has the same age`;
    }
}

const person01 = new Person("mauricio", 33);
const person02 = new Person("fran", 33);

console.log(Person.compareAge(person01, person02));
