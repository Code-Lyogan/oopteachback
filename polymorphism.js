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
// abstract class 'Shape1' defining a single method 'draw()'
// that must be implemented by any concrete class that extends 'Shape1'
var Shape1 = /** @class */ (function () {
    function Shape1(name) {
        this.name = name;
    }
    return Shape1;
}());
// three classes 'Circle1', 'Square', 'Triangle' that extends Shape1
//  and implements 'draw()' method in their own way.
var Circle1 = /** @class */ (function (_super) {
    __extends(Circle1, _super);
    function Circle1(name) {
        return _super.call(this, name) || this;
    }
    Circle1.prototype.draw = function () {
        console.log("Drawing a Circle with name ".concat(this.name));
    };
    return Circle1;
}(Shape1));
// three classes 'Circle1', 'Square', 'Triangle' that extends Shape1
//  and implements 'draw()' method in their own way.
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(name) {
        return _super.call(this, name) || this;
    }
    Square.prototype.draw = function () {
        console.log("Drawing a Square with name ".concat(this.name));
    };
    return Square;
}(Shape1));
// three classes 'Circle1', 'Square', 'Triangle' that extends Shape1
//  and implements 'draw()' method in their own way.
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(name) {
        return _super.call(this, name) || this;
    }
    Triangle.prototype.draw = function () {
        console.log("Drawing a Triangle with name ".concat(this.name));
    };
    return Triangle;
}(Shape1));
// 'drawShapes()' function takes array of 'Shape1' as input
//  and calls the 'draw()' method on each of the shapes.
function drawShapes(shapes) {
    for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
        var shape = shapes_1[_i];
        shape.draw();
    }
}
// 'Circle1', 'Square', 'Triangle' are polymorphic with 'Shape1' class, so it can 
// use any of those classes & implementation of 'draw()' method
var circ = new Circle1("Circle 1");
var square = new Square("Square 1");
var triangle = new Triangle("Triangle 1");
drawShapes([circ, square, triangle]);
// This is polymorphism in action. Objects of different types can be treated
// as objects of a common base type, as long as they are using the same methods.
// prints:
// "Drawing a Circle with name Circle 1"
// "Drawing a Square with name Square 1"
// "Drawing a Triangle with name Triangle 1"
