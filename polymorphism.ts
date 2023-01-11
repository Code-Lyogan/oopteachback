// abstract class 'Shape1' defining a single method 'draw()'
// that must be implemented by any concrete class that extends 'Shape1'
abstract class Shape1 {
    constructor(public name: string) {}
  
    abstract draw(): void;
  }
  // three classes 'Circle1', 'Square', 'Triangle' that extends Shape1
  //  and implements 'draw()' method in their own way.
  class Circle1 extends Shape1 {
    constructor(name: string) {
      super(name);
    }
  
    draw() {
      console.log(`Drawing a Circle with name ${this.name}`);
    }
  }
  // three classes 'Circle1', 'Square', 'Triangle' that extends Shape1
  //  and implements 'draw()' method in their own way.
  class Square extends Shape1 {
    constructor(name: string) {
      super(name);
    }
  
    draw() {
      console.log(`Drawing a Square with name ${this.name}`);
    }
  }
  // three classes 'Circle1', 'Square', 'Triangle' that extends Shape1
  //  and implements 'draw()' method in their own way.
  class Triangle extends Shape1 {
      constructor(name: string) {
          super(name);
      }
      draw() {
          console.log(`Drawing a Triangle with name ${this.name}`);
      }
  }
  // 'drawShapes()' function takes array of 'Shape1' as input
  //  and calls the 'draw()' method on each of the shapes.
  function drawShapes(shapes: Shape1[]) {
      for (const shape of shapes) {
          shape.draw();
      }
  }
  // 'Circle1', 'Square', 'Triangle' are polymorphic with 'Shape1' class, so it can 
  // use any of those classes & implementation of 'draw()' method
  const circ = new Circle1("Circle 1");
  const square = new Square("Square 1");
  const triangle = new Triangle("Triangle 1");
  
  drawShapes([circ, square, triangle]);
  // This is polymorphism in action. Objects of different types can be treated
  // as objects of a common base type, as long as they are using the same methods.
  
  // prints:
  // "Drawing a Circle with name Circle 1"
  // "Drawing a Square with name Square 1"
  // "Drawing a Triangle with name Triangle 1"