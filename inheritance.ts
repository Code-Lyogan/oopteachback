// In this example, we have a base class 'Animal' which is inherited by two classes 'Snake' and 'Horse'.
class Animal {
    // 'Animal' class has a single constructor that takes a name parameter and sets it to the class variable.
    constructor(public name: string) {}

    // method 'move()' will take in distance in meters, used to print out how much distance the animal has moved.
    move(distanceInMeters: number = 0) {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
  }
  // The 'Snake' and 'Horse' classes are inherited from the 'Animal' class using the 'extends' keyword.
  // these classes are derived classes, having all properties and methods of the base class.
  class Snake extends Animal {
    constructor(name: string) { super(name); }
  
    move(distanceInMeters = 5) {
      console.log("Slithering...");
      super.move(distanceInMeters);
    }
  }
  // The 'Snake' and 'Horse' classes are inherited from the 'Animal' class using the 'extends' keyword.
  // these classes are derived classes, having all properties and methods of the base class.
  class Horse extends Animal {
    constructor(name: string) { super(name); }
  
    move(distanceInMeters = 45) {
      console.log("Galloping...");
      super.move(distanceInMeters);
    }
  }
  // 'Snake' and 'Horse' classes override the 'move()' method of the base class.

  //  In this example, the Snake class overrides it by printing
  // "Slithering..." and Horse class overrides it by printing "Galloping..." 
  // before calling the 'move()' method of the base class. 
  const sam = new Snake("Sammy the Python");
  const tom: Animal = new Horse("Tommy the Palomino");
  
  sam.move();
  tom.move(34);

  // Inheritance in TypeScript allows our derived class to inherit all properties and methods
  // of the base class, and can then override the inherited methods to provide its own specific behavior.