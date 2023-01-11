var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// In this example we have an abstract class of Shape, which is the 'abstraction' of all possible shapes.
var Shape = /** @class */ (function () {
    // class defines properties and methods that any shape should have,
    //  such as a 'name' and our methods 'getArea()' and 'getPerimeter()'. 
    function Shape(name) {
        this.name = name;
    }
    return Shape;
}());
// two concrete classes 'Rectangle' and 'Circle', which are specific implementations of the 'Shape' abstract class
// and need to implement the abstract methods defined in 'Shape'
// These classes are representing the 'abstraction' from 'Shape' in concrete form.
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(name, width, height) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    // method returns the muliplication value of width & height of shape's Area
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    // method returns width + height of shape & multiples it by 2
    Rectangle.prototype.getPerimeter = function () {
        return 2 * (this.width + this.height);
    };
    return Rectangle;
}(Shape));
// two concrete classes 'Rectangle' and 'Circle', which are specific implementations of the 'Shape' abstract class
// and need to implement the abstract methods defined in 'Shape'
// These classes are representing the 'abstraction' from 'Shape' in concrete form.
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(name, radius) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.radius = radius;
        return _this;
    }
    // method returns the value of Circle's Area
    Circle.prototype.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    // method returns the value of Circle's Perimeter
    Circle.prototype.getPerimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    return Circle;
}(Shape));
var rect = new Rectangle("Rectangle", 5, 10);
console.log("Area of ".concat(rect.name, " is ").concat(rect.getArea())); // prints "Area of Rectangle is 50"
console.log("Perimeter of ".concat(rect.name, " is ").concat(rect.getPerimeter())); // prints "Perimeter of Rectangle is 30"
var circle = new Circle("Circle", 5);
console.log("Area of ".concat(circle.name, " is ").concat(circle.getArea())); // prints "Area of Circle is 78.53981633974483"
console.log("Perimeter of ".concat(circle.name, " is ").concat(circle.getPerimeter())); // prints "Perimeter of Circle is 31.41592653589793"
// This is an example of how 'abstraction' allows you to focus on essential features
// of an object, while hiding away unnecessary details, and promoting code 
// reusability, flexibility and maintainability.
