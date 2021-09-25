"use strict";
function greet(name, age) {
    console.log(name, age);
}
greet("RK", 20);
//When one of the parameters is optional & unknown is default param
function opGreeet(name, age) {
    if (name === void 0) { name = "Unknown"; }
    console.log(name, age);
}
opGreeet("DK");
//# sourceMappingURL=function.js.map