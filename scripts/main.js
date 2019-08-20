console.log("Hello JS!")


// #region Typy proste

// numbers
var number = 1000; // or 12.3

var x = 0.2;
var y = 0.1;

var z = x+y === 0.3;

// bool
var boolean = true; // or false

// string
var string = "string";

// undefined
var undefined_variable = undefined;

// #region es6

// symbol
var symbol1 = Symbol("symbol");
var symbol2 = Symbol("symbol");

console.log(symbol1 == symbol2); //false

// bigint
var bigint = 100n;
// #endregion

// #endregion

// #region Typy referencyjne

var object = {};

console.log(object === {});

object = {
    property: "property"
}

var newObject = object;

object.newProperty = "new property"

console.log(object.newProperty, newObject.newProperty, object["newProperty"]);

var array = ["item1", 2, false];
console.log(array.length);

var add = function (arg1, arg2) {
    return arg1 + arg2;
};


console.log(add);
console.log(add(1, 2));
console.log(add("Hello", " functions!"));
console.log(add("Hello", 1));

object.sayMyName = function () {
    console.log(`My name is ${this.name}`);
};
object.name = "Pat";

object.sayMyName();

var objectFromObject = Object.create(object);
objectFromObject.name = "Not Pat";

object.sayMyName();
objectFromObject.sayMyName();

// #endregion
