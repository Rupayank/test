"use strict";
function greeting(person) {
    return "Hello there again, " + person;
}
var user = "Mother";
console.log(greeting("RK"));
var check = true;
var arr = [1, 22, 13];
var arr2 = [33, 44, 55];
var salute = "Good Morning";
var anything = 4;
anything = "Something";
anything = [11, 22, 121];
//Return types
function again(name) {
    console.log(name);
}
again("Yo");
//Enum
var statusCode = 2;
var allCodes;
(function (allCodes) {
    allCodes[allCodes["up"] = 0] = "up";
    allCodes[allCodes["down"] = 1] = "down";
    allCodes[allCodes["left"] = 2] = "left";
    allCodes[allCodes["right"] = 3] = "right";
})(allCodes || (allCodes = {}));
;
if (statusCode === allCodes.left) {
    console.log("Go left");
}
else {
    console.log("change statusCode & check");
}
