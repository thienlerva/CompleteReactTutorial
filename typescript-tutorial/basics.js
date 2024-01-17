// Primitives
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var age = 12;
var userName;
userName = "Max";
var isInstructor;
isInstructor = true;
// Arrays & Objects
var hobbies;
hobbies = ["Sport", "Cooking"];
var person;
person = {
    name: "Max",
    age: 32,
};
var people;
// Type inference
var course = "React Complete guide";
// course = 13434;
// Type union
var courseName = "React Complete guide";
courseName = 13434;
var aKid;
aKid = {
    name: "An",
    age: 7,
};
var children;
// Functions & type
function add(a, b) {
    return a + b;
}
function printOutput(value) {
    console.log(value);
}
// Generics
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
function insertGeneric(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var uupdatedArray = insertGeneric(demoArray, -1); // [-1, 1, 2, 3]
