"use strict";
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
//Abstract class cannot be instantiated but can be inherited
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.walk = function (dist) {
        console.log("It can walk " + dist + " meter.");
    };
    return Animal;
}());
// let ani=new Animal("Rob");
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(theName) {
        return _super.call(this, theName) || this;
    }
    Cat.prototype.walk = function (dist) {
        console.log(this.name + " can't walk much coz she is a cat");
    };
    return Cat;
}(Animal));
var cat = new Cat("ruby");
cat.walk(2);
//# sourceMappingURL=classes.js.map