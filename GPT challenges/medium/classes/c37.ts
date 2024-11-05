/* Challenge #37: Create a Rectangle Class with Area and Perimeter Methods
Difficulty: 🟠 Medium
Points: 20

Task: Write a Rectangle class that takes width and height as arguments.
Include methods getArea and getPerimeter to calculate and return
the area and perimeter of the rectangle, respectively.

Requirements:

Define a Rectangle class.
Include a constructor that accepts width and height.
Define methods:
getArea: Returns the area of the rectangle.
getPerimeter: Returns the perimeter of the rectangle. */

class Rectangle {
    width: number;
    height: number;

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.height * this.width;
    }

    getPerimeter() {
        return this.height * 2 + this.width * 2;
    }
}

const rect1 = new Rectangle(4, 5);
console.log(rect1.getArea());
console.log(rect1.getPerimeter());

const rect2 = new Rectangle(0, 5);
console.log(rect2.getArea());
console.log(rect2.getPerimeter());
