// In this example we have an abstract class of Shape, which is the 'abstraction' of all possible shapes.
abstract class Shape {

    // class defines properties and methods that any shape should have,
    //  such as a 'name' and our methods 'getArea()' and 'getPerimeter()'. 
    constructor(public name: string) {}
  
    // methods are declared as 'abstract', so they don't have any
    // implementation and must be implemented by any class that extends 'Shape'.
    abstract getArea(): number;
    abstract getPerimeter(): number;
  }
  
  // two concrete classes 'Rectangle' and 'Circle', which are specific implementations of the 'Shape' abstract class
  // and need to implement the abstract methods defined in 'Shape'
  // These classes are representing the 'abstraction' from 'Shape' in concrete form.
  class Rectangle extends Shape {
    constructor(public name: string, public width: number, public height: number) {
      super(name);
    }
  // method returns the muliplication value of width & height of shape's Area
    getArea(): number {
      return this.width * this.height;
    }
  // method returns width + height of shape & multiples it by 2
    getPerimeter(): number {
      return 2 * (this.width + this.height);
    }
  }
  // two concrete classes 'Rectangle' and 'Circle', which are specific implementations of the 'Shape' abstract class
  // and need to implement the abstract methods defined in 'Shape'
  // These classes are representing the 'abstraction' from 'Shape' in concrete form.
  class Circle extends Shape {
    constructor(public name: string, public radius: number) {
      super(name);
    }
  // method returns the value of Circle's Area
    getArea(): number {
      return Math.PI * this.radius ** 2;
    }
  // method returns the value of Circle's Perimeter
    getPerimeter(): number {
      return 2 * Math.PI * this.radius;
    }
  }
  
  const rect = new Rectangle("Rectangle", 5, 10);
  console.log(`Area of ${rect.name} is ${rect.getArea()}`); // prints "Area of Rectangle is 50"
  console.log(`Perimeter of ${rect.name} is ${rect.getPerimeter()}`); // prints "Perimeter of Rectangle is 30"
  
  const circle = new Circle("Circle", 5);
  console.log(`Area of ${circle.name} is ${circle.getArea()}`); // prints "Area of Circle is 78.53981633974483"
  console.log(`Perimeter of ${circle.name} is ${circle.getPerimeter()}`); // prints "Perimeter of Circle is 31.41592653589793"

  // This is an example of how 'abstraction' allows you to focus on essential features
  // of an object, while hiding away unnecessary details, and promoting code 
  // reusability, flexibility and maintainability.