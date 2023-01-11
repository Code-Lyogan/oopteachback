# Object-Oriented Programming TeachBack
### Logan Trout / 01-10-23 / C11

### OOP Terms & why we use them

In TypeScript, the terms "static", "protected", and "private" are used to indicate the accessibility of class members.

A "static" member is a member of a class that can be accessed without the need of creating an instance of the class. These members are often used to create utility functions, or to access shared state across all instances of a class. For example, you can use a static member to define a method that calculates the average of an array of numbers. Because the method does not require an instance of the class to work, it can be called directly from the class itself.

"Protected" members can only be accessed within the class where it is defined and any class that inherit from it. "Protected" access level allows access to the member only from the class itself and its derived classes, but not from any other external code. This is often used to restrict access to certain members that should only be used by a subclass. This is a more restrictive way to limit access to certain class members, while providing more flexibility than private.

A "private" member can only be accessed within the class where it is defined.This feature is useful when you want to encapsulate implementation details, hide some complexity or data, and expose only what is necessary to the outside.

By using these access modifiers, we can limit the scope of where members of a class can be accessed, make the code more maintainable, and robust. It also allows for a higher level of control over the way objects interact and share data, which is particularly important when working with large and complex projects.