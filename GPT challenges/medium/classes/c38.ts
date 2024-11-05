/* Challenge #38: Create a Square Class that Inherits from Rectangle
Difficulty: 🟠 Medium
Points: 20

Task: Write a Square class that inherits from the Rectangle class.
The Square class should only take a single side length as its argument
and use it for both the width and height. It should have the same methods,
getArea and getPerimeter, inherited from Rectangle.

Requirements:

Define a Square class that extends Rectangle.
Its constructor should take only one argument for the side length
and pass it as both width and height to the Rectangle constructor.
Use the inherited methods getArea and getPerimeter. */

class Square extends Rectangle {
    constructor(sideLength: number) {
        super(sideLength, sideLength);
    }
}
