// In this example, the class MyClass has a private property named _myProperty, 
// which is only accessible within the class.
var MyClass1 = /** @class */ (function () {
    function MyClass1(initialValue) {
        this._myProperty = initialValue;
    }
    Object.defineProperty(MyClass1.prototype, "myProperty", {
        // To make the property accessible from outside the class, we should 
        // create a getter and a setter for it, which we will call myProperty
        // these methods are both public and can be accessed outside of the class
        get: function () {
            return this._myProperty;
        },
        set: function (newValue) {
            this._myProperty = newValue;
        },
        enumerable: false,
        configurable: true
    });
    // The class also has a constructor method which takes an initial value for the property,
    //  and a method named doSomething() that prints the current value of the property.
    MyClass1.prototype.doSomething = function () {
        console.log("The value of myProperty is ".concat(this._myProperty));
    };
    return MyClass1;
}());
// 'private' keyword before variable '_myProperty' means the variable cannot be
// accessed outside the class, only inside. This is the encapsulation in action.
var myObj = new MyClass1("initial value");
console.log(myObj.myProperty); // prints "initial value"
myObj.myProperty = "new value";
console.log(myObj.myProperty); // prints "new value"
myObj.doSomething(); // prints "The value of myProperty is new value"
