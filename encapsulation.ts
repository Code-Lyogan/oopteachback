// Encapsulation is the process of hiding the internal details 
// of an object or class and exposing only a public interface.

// Encapsulation can be achieved by using access modifiers such as 'public', 'private', and 'protected'.
// By default, members of a class are public. A member with private access modifier can only be accessed within the same class.
// A member with 'protected' access modifier can be accessed within the same class and its subclasses.

// In this example, the class MyClass has a private property named _myProperty, 
// which is only accessible within the class.
class MyClass1 {
    private _myProperty: string;
  
    constructor(initialValue: string) {
      this._myProperty = initialValue;
    }
  // To make the MyProperty accessible from outside the class, we should 
  // create a getter and a setter for it, which we will call myProperty
  // these methods are both public and can be accessed outside of the class

    // The getter and setter methods provide a public interface for accessing and
    // modifying the value of myProperty, while hiding the internal implementation details.
    get myProperty(): string {
      return this._myProperty;
    }
    set myProperty(newValue: string) {
      this._myProperty = newValue;
    }

    // The class also has a constructor method which takes an initial value for the property,
    //  and a method named doSomething() that prints our string concat'd with the current value of the property.
    doSomething(): void {
      console.log(`The value of myProperty is ${this._myProperty}`);
    }
  }

  // 'private' keyword before variable '_myProperty' means the variable cannot be
  // accessed outside the class, only inside. This is the encapsulation in action.
  const myObj = new MyClass1("initial value");
  console.log(myObj.myProperty); // prints "initial value"
  myObj.myProperty = "new value";
  console.log(myObj.myProperty); // prints "new value"
  myObj.doSomething(); // prints "The value of myProperty is new value"