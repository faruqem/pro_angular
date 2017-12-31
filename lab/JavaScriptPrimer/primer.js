"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
console.log("Hello");
console.log("Apples");
console.log("This is a statement");
console.log("This is also a statement");
var myFunc = function () {
    console.log("This is a statement");
};
myFunc();
function myFunc2() {
    console.log("This is a statement");
}
myFunc2();
var myFunc3 = function (name, weather) {
    if (weather === void 0) { weather = "raining"; }
    var extraArgs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extraArgs[_i - 2] = arguments[_i];
    }
    console.log("Hello " + name + ".");
    console.log("It is " + weather + " today.");
    for (var i = 0; i < extraArgs.length; i++) {
        console.log("Extra Arg: " + extraArgs[i]);
    }
};
myFunc3("Adam", "sunny");
myFunc3("Adam");
myFunc3("Adam", "cloudy", "one", "two", "three");
var myFunc4 = function (name) {
    return ("Hello " + name + ".");
};
console.log(myFunc4("Adam"));
var myFunc5 = function (nameFunction) {
    return ("Hello " + nameFunction() + ".");
};
console.log(myFunc5(function () {
    return "Adam";
}));
var myFunc6 = function (nameFunction) {
    return ("Hello " + nameFunction() + ".");
};
var printName = function (nameFunction, printFunction) {
    printFunction(myFunc6(nameFunction));
};
printName(function () { return "Adam6"; }, console.log);
//let myFunc7 = (nameFunction) => ("Hello " + nameFunction() +".");
var myFunc7 = function (nameFunction) { return ("Hello " + nameFunction() + "."); };
var printName7 = function (nameFunction, printFunction) { return printFunction(myFunc7(nameFunction)); };
printName7(function () { return "Adam7"; }, console.log);
console.log("-----------------");
var message = "Hello, Mo";
var messageFunction = function (name, weather) {
    var message = "Hello, Adam";
    if (weather == "sunny") {
        var message_1 = "It is a nice day";
    }
    else {
        var message_2 = "It is " + weather + " today";
        console.log(message_2);
    }
    console.log(message);
};
messageFunction("Adam", "raining");
console.log(message);
console.log("-----------------");
var message8 = "Hello, Mo";
var messageFunction8 = function (name, weather) {
    var message8 = "Hello, Adam";
    if (weather == "sunny") {
        var message8 = "It is a nice day";
    }
    else {
        var message8 = "It is " + weather + " today";
        console.log(message8);
    }
    console.log(message8);
};
messageFunction8("Adam", "raining");
console.log(message8);
console.log("-----------------");
var myGlobalVar = "apples";
var myFunc9 = function (name) {
    var myLocalVar = "Sunny";
    var innerFunction = function () {
        return ("Hello " + name + ". Today is " + myLocalVar + ".");
    };
    return innerFunction();
};
console.log(myFunc9("Adam"));
console.log("-----------------");
var myString = "Maple";
console.log("Length of the word '" + myString + "': " + myString.length);
console.log("Character at poistion 1 in the word '" + myString + "': " + myString.charAt(1));
console.log("Concat 'Leaf' to '" + myString + "': " + myString.concat(" Leaf"));
console.log("Position of letter 'a' in the word '" + myString + "': " + myString.indexOf("a", 0));
console.log("Position of letter 'b' in the word '" + myString + "': " + myString.indexOf("b", 0));
console.log("Replace 'a' with 'x' in the word '" + myString + "': " + myString.replace("a", "x"));
console.log("Characters between position 1 and 3 in the word '" + myString + "': " + myString.slice(1, 3));
var x = ("Hello how are you?").split(" ");
console.log(x[0]);
console.log("Hello".toLowerCase());
console.log("Hello".toUpperCase());
console.log("   Hello      ".trim());
var weather = "raining";
console.log("It is " + weather + " today."); //` - backtick character
console.log(1 == 1 ? true : false);
console.log("-----------------");
var name2 = "Adam";
switch (name2) {
    case "Adam":
        console.log("Name is Adam");
        break;
    case "Jacqui":
        console.log("Name is Jacqui");
        break;
    default:
        console.log("Name is neither Adam nor Jacqui");
        break;
}
//Equality opeartor (==) vs Identity operator(===)
var firstVal = 5;
var secondVal = "5";
if (firstVal == secondVal) {
    console.log("They are the same");
}
else {
    console.log("They are not the same.");
}
if (firstVal === secondVal) {
    console.log("They are the same");
}
else {
    console.log("They are not the same.");
}
console.log(5 + 5);
console.log(5 + "5"); //String concat operator (+) has a higher precedence than the addition operator (also +)
console.log((5).toString() + String(5));
console.log(Number("5") + parseInt("10.3") + 5);
console.log(Number("5") + parseFloat("10.3") + 5);
var myArray = new Array();
myArray[0] = 10;
myArray[1] = "Adam";
myArray[2] = true;
var myArray2 = [10, "Adam", true];
console.log(myArray2[1]);
myArray2[1] = 100;
console.log(myArray2[1]);
console.log("------------------");
for (var i = 0; i < myArray2.length; i++) {
    console.log('myArray[' + i + "]" + myArray2[i]);
}
console.log("------------------");
myArray.forEach(function (v, i) {
    console.log('myArray[' + i + "]" + v);
});
console.log("------------------");
myArray.forEach(function (v, i) { return console.log('myArray[' + i + "]" + v); });
var myArray3 = [1, 2, 3];
var myArray4 = [4, 5, 6];
var myArray5 = [7, 8, 9];
console.log("------------------");
var myArray6 = myArray3.concat(myArray4).concat(myArray5);
myArray6.forEach(function (v, i) { return console.log('myArray6[' + i + "]: " + v); });
var myArray7 = ["Hello", "how", "are", "you?"];
var myString7 = myArray7.join(" ");
console.log(myString7);
console.log(myArray4.pop()); //last item "6" will be returned and removed
myArray4.forEach(function (v, i) { return console.log('myArray6[' + i + "]: " + v); });
console.log(myArray5.shift()); //first item "7" will be returned and removed
myArray5.forEach(function (v, i) { return console.log('myArray6[' + i + "]: " + v); });
console.log("------------------");
var days = ["Mon", "Tue", "Wed", "Thu"];
days.forEach(function (v, i) { return console.log('days[' + i + "]: " + v); });
console.log("------------------");
days.push("Fri");
days.forEach(function (v, i) { return console.log('days[' + i + "]: " + v); });
console.log("------------------");
days.unshift("Sun");
days.forEach(function (v, i) { return console.log('days[' + i + "]: " + v); });
console.log("------------------");
days.reverse();
days.forEach(function (v, i) { return console.log('days[' + i + "]: " + v); });
console.log("------------------");
days.sort();
days.forEach(function (v, i) { return console.log('days[' + i + "]: " + v); });
console.log("------------------");
var days2 = days.slice(1, 3);
days2.forEach(function (v, i) { return console.log('days2[' + i + "]: " + v); });
console.log("------------------");
var daysRemoved = days.splice(1, 3);
daysRemoved.forEach(function (v, i) { return console.log('daysRemoved[' + i + "]: " + v); });
console.log("------------------");
var products = [
    { name: "Hat", price: 24.5, stock: 10 },
    { name: "Kayak", price: 289.99, stock: 1 },
    { name: "Soccer Ball", price: 10, stock: 0 },
    { name: "HRunning Shoes", price: 116.5, stock: 20 }
];
var totalValue = products
    .filter(function (item) { return item.stock > 0; })
    .reduce(function (prev, item) { return prev + (item.price * item.stock); }, 0);
console.log("Total value: $" + totalValue.toFixed(2));
console.log("*************************************************");
console.log("***********  C h a p t e r  6 *******************");
console.log("*************************************************");
var myData = new Object();
myData.name = "Adam";
myData.weather = "sunny";
console.log("Hello " + myData.name + ".");
console.log("Today is " + myData.weather + ".");
console.log("------------------");
var myData2 = {
    name: "Adam",
    weather: "sunny"
};
console.log("Hello " + myData2.name + ".");
console.log("Today is " + myData2.weather + ".");
console.log("------------------");
var myData3 = {
    name: "Adam",
    weather: "sunny",
    printMessages: function () {
        console.log("Hello " + this.name + ".");
        console.log("Today is " + this.weather + ".");
    }
};
myData3.printMessages();
console.log("-------Class-----------");
var MyClass = (function () {
    function MyClass(name, weather) {
        this.name = name;
        this.weather = weather;
    }
    MyClass.prototype.printMessages = function () {
        console.log("Hello " + this.name + ".");
        console.log("Today is " + this.weather + ".");
    };
    return MyClass;
}());
var myData4 = new MyClass("Adam", "sunny");
myData4.printMessages();
console.log("-------Java Prototype-----------");
var MyClass2 = function MyClass2(name, weather) {
    this.name = name;
    this.weather = weather;
};
MyClass2.prototype.printMessages = function () {
    console.log("Hello " + this.name + ".");
    console.log("Today is " + this.weather + ".");
};
var myData5 = new MyClass2("Adam", "sunny");
myData5.printMessages();
console.log("-------Getter and Setter-----------");
var MyClass3 = (function () {
    function MyClass3(name, weather) {
        this.name = name;
        this._weather = weather;
    }
    Object.defineProperty(MyClass3.prototype, "weather", {
        get: function () {
            return "Today is " + this._weather;
        },
        set: function (value) {
            this._weather = value;
        },
        enumerable: true,
        configurable: true
    });
    MyClass3.prototype.printMessages = function () {
        console.log("Hello " + this.name + ".");
        console.log(this.weather);
    };
    return MyClass3;
}());
var myData6 = new MyClass2("Adam", "sunny");
myData6.printMessages();
console.log("-------Inheritance-----------");
var MySubClass = (function (_super) {
    __extends(MySubClass, _super);
    function MySubClass(name, weather, city) {
        _super.call(this, name, weather);
        this.city = city;
    }
    MySubClass.prototype.printMessages = function () {
        _super.prototype.printMessages.call(this);
        console.log("You are in " + this.city + ".");
    };
    return MySubClass;
}(MyClass3));
var myData7 = new MySubClass("Adam", "sunny", "Toronto");
myData7.printMessages();
console.log("-------Import Module-----------");
var NameAndWeather_1 = require("./modules/NameAndWeather");
var name = new NameAndWeather_1.Name("Mo", "Faruqe");
var loc = new NameAndWeather_1.WeatherLocation("Snowy", "Toronto");
console.log(name.nameMessage);
console.log(loc.weatherMessage);
console.log("-------Import Class with Same Name from a Different File-----------");
var DuplicateName_1 = require("./modules/DuplicateName");
var nameOther = new DuplicateName_1.Name();
console.log(nameOther.message);
console.log("-------Import using Wildcard *-----------");
var NameAndWeatherLocation = require("./modules/NameAndWeather");
var name8 = new NameAndWeatherLocation.Name("Mo", "Faruqe");
var loc8 = new NameAndWeatherLocation.WeatherLocation("Snowy", "Toronto");
console.log(name.nameMessage);
console.log(loc.weatherMessage);
console.log("-------Type Annotations-----------");
var tempConverter_1 = require("./tempConverter");
var cTemp = tempConverter_1.TempConverter.convertFToC(38);
console.log("The temprature is: " + cTemp + "C");
console.log("-------Tuples-----------");
//Tuples are fixed length array, where each item in the array 
//is of specified type
var tuple;
tuple = ["Jon", "London", 30];
console.log(tuple[0] + " of " + tuple[1] + " is " + tuple[2] + " years old.");
console.log("-------Indexable Types-----------");
//Indexable type associates a key with a value like map 
//Only number and string can be used as key
var cities = {};
cities["Toronto"] = ["Snowing", "-30C"];
cities["Paris"] = ["Sunny", "2C"];
cities["London"] = ["Foggy", "8c"];
for (var key in cities) {
    console.log(key + ": " + cities[key][0] + ", " + cities[key][1]);
}
console.log("-------Access Modifiers-----------");
//public: anywhere; private: only within a class, protected: class and its sub classes
var cTemp2 = tempConverter_1.TempConverter.convertFToC(38);
console.log("The temprature is: " + cTemp2 + "C");
