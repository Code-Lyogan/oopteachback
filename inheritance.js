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
// In this example, we have a base class 'Animal' which is inherited by two classes 'Snake' and 'Horse'.
var Animal = /** @class */ (function () {
    // 'Animal' class has a single constructor that takes a name parameter and sets it to the class variable.
    function Animal(name) {
        this.name = name;
    }
    // method 'move()' will take in distance in meters, used to print out how much distance the animal has moved.
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("".concat(this.name, " moved ").concat(distanceInMeters, "m."));
    };
    return Animal;
}());
// The 'Snake' and 'Horse' classes are inherited from the 'Animal' class using the 'extends' keyword.
// these classes are derived classes, having all properties and methods of the base class.
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
// The 'Snake' and 'Horse' classes are inherited from the 'Animal' class using the 'extends' keyword.
// these classes are derived classes, having all properties and methods of the base class.
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal));
// 'Snake' and 'Horse' classes override the 'move()' method of the base class.
//  In this example, the Snake class overrides it by printing
// "Slithering..." and Horse class overrides it by printing "Galloping..." 
// before calling the 'move()' method of the base class. 
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
// Inheritance in TypeScript allows our derived class to inherit all properties and methods
// of the base class, and can then override the inherited methods to provide its own specific behavior.
