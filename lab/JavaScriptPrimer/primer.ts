console.log("Hello");
console.log("Apples");
console.log("This is a statement");
console.log("This is also a statement");

let myFunc = function(){
    console.log("This is a statement");
};
myFunc();

function myFunc2(){
    console.log("This is a statement");
}
myFunc2();

let myFunc3 = function (name, weather="raining", ...extraArgs){
    console.log("Hello " + name +".");
    console.log("It is " + weather +" today.");
    for(let i = 0; i < extraArgs.length; i++){
        console.log("Extra Arg: " + extraArgs[i]);
    }
};
myFunc3("Adam","sunny");
myFunc3("Adam");
myFunc3("Adam", "cloudy", "one","two","three");

let myFunc4 = function(name){
    return ("Hello " + name + ".");
};
console.log(myFunc4("Adam"));

let myFunc5 = function(nameFunction){
    return ("Hello " + nameFunction() + ".");
};
console.log(myFunc5(function(){
    return "Adam";
}));

let myFunc6 = function(nameFunction){
    return ("Hello " + nameFunction() + ".");
};

let printName = function(nameFunction, printFunction) {
    printFunction(myFunc6(nameFunction));
}
printName(function(){return "Adam6"}, console.log);

//let myFunc7 = (nameFunction) => ("Hello " + nameFunction() +".");
let myFunc7 = (nameFunction) => ("Hello " + nameFunction() +".");
let printName7 = (nameFunction, printFunction)=>printFunction(myFunc7(nameFunction));
printName7(function(){return "Adam7"},console.log);

console.log("-----------------");
let message = "Hello, Mo";
let messageFunction = function(name, weather){
    let message = "Hello, Adam";
    if(weather == "sunny"){
        let message = "It is a nice day";
    } else {
        let message = "It is " + weather + " today";
        console.log(message);
    }
    console.log(message);
}
messageFunction("Adam","raining");
console.log(message);

console.log("-----------------");
var message8 = "Hello, Mo";
let messageFunction8 = function(name, weather){
    var message8 = "Hello, Adam";
    if(weather == "sunny"){
        var message8 = "It is a nice day";
    } else {
        var message8 = "It is " + weather + " today";
        console.log(message8);
    }
    console.log(message8);
}
messageFunction8("Adam","raining");
console.log(message8);

console.log("-----------------");
let myGlobalVar = "apples";
let myFunc9 = function(name){
    let myLocalVar = "Sunny";
    let innerFunction = function(){
        return("Hello " + name + ". Today is " + myLocalVar+".");
    };
    return innerFunction();
};
console.log(myFunc9("Adam"));

console.log("-----------------");
let myString = "Maple";
console.log("Length of the word '" + myString + "': " + myString.length);
console.log("Character at poistion 1 in the word '" + myString + "': " + myString.charAt(1));
console.log("Concat 'Leaf' to '" + myString + "': " + myString.concat(" Leaf"));
console.log("Position of letter 'a' in the word '" + myString + "': " + myString.indexOf("a",0));
console.log("Position of letter 'b' in the word '" + myString + "': " + myString.indexOf("b",0));
console.log("Replace 'a' with 'x' in the word '" + myString + "': " + myString.replace("a","x"));
console.log("Characters between position 1 and 3 in the word '" + myString + "': " + myString.slice(1,3));
let x = ("Hello how are you?").split(" ");
console.log(x[0]);
console.log("Hello".toLowerCase());
console.log("Hello".toUpperCase());
console.log("   Hello      ".trim());

let weather = "raining";
console.log(`It is ${weather} today.`); //` - backtick character
console.log(1==1 ? true : false);

console.log("-----------------");
let name2 = "Adam";
switch(name2) {
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
let firstVal = 5;
let secondVal = "5";
if(firstVal == secondVal) {
    console.log("They are the same")
} else {
    console.log("They are not the same.")
}

if(firstVal === secondVal) {
    console.log("They are the same")
} else {
    console.log("They are not the same.")
}

console.log(5 + 5);
console.log(5 + "5"); //String concat operator (+) has a higher precedence than the addition operator (also +)

console.log((5).toString() + String(5));

console.log(Number("5") + parseInt("10.3") + 5);
console.log(Number("5") + parseFloat("10.3") + 5);

let myArray = new Array();
myArray[0] = 10;
myArray[1] = "Adam";
myArray[2] = true;

let myArray2 = [10, "Adam", true];
console.log(myArray2[1]);
myArray2[1] = 100;
console.log(myArray2[1]);

console.log("------------------");
for(let i = 0; i < myArray2.length; i++) {
    console.log('myArray['+ i + "]" +myArray2[i]);
}

console.log("------------------");
myArray.forEach(function(v,i) {
    console.log('myArray['+ i + "]" + v);
})

console.log("------------------");
myArray.forEach((v,i) => console.log('myArray['+ i + "]" + v));

let myArray3 = [1,2,3];
let myArray4 = [4,5,6];
let myArray5 = [7,8,9];

console.log("------------------");
let myArray6 = myArray3.concat(myArray4).concat(myArray5);
myArray6.forEach((v,i) => console.log('myArray6['+ i + "]: " + v));

let myArray7 = ["Hello","how","are","you?"];
let myString7 = myArray7.join(" ");
console.log(myString7);

console.log(myArray4.pop()); //last item "6" will be returned and removed
myArray4.forEach((v,i) => console.log('myArray6['+ i + "]: " + v));

console.log(myArray5.shift()); //first item "7" will be returned and removed
myArray5.forEach((v,i) => console.log('myArray6['+ i + "]: " + v));

console.log("------------------");
let days = ["Mon", "Tue", "Wed","Thu"];
days.forEach((v,i) => console.log('days['+ i + "]: " + v));
console.log("------------------");
days.push("Fri");
days.forEach((v,i) => console.log('days['+ i + "]: " + v));
console.log("------------------");
days.unshift("Sun");
days.forEach((v,i) => console.log('days['+ i + "]: " + v));
console.log("------------------");
days.reverse();
days.forEach((v,i) => console.log('days['+ i + "]: " + v));
console.log("------------------");
days.sort();
days.forEach((v,i) => console.log('days['+ i + "]: " + v));
console.log("------------------");
let days2 = days.slice(1,3);
days2.forEach((v,i) => console.log('days2['+ i + "]: " + v));
console.log("------------------");
let daysRemoved = days.splice(1,3);
daysRemoved.forEach((v,i) => console.log('daysRemoved['+ i + "]: " + v));
console.log("------------------");
let products = [
    { name: "Hat",price: 24.5,stock: 10 },
    { name: "Kayak",price: 289.99,stock: 1 },
    { name: "Soccer Ball",price: 10,stock: 0 },
    { name: "HRunning Shoes",price: 116.5,stock: 20 }
];

let totalValue = products
    .filter(item => item.stock > 0)
    .reduce((prev, item) => prev + (item.price * item.stock),0 );
console.log("Total value: $" + totalValue.toFixed(2));

console.log("*************************************************");
console.log("***********  C h a p t e r  6 *******************");
console.log("*************************************************");

let myData = new Object();
myData.name = "Adam";
myData.weather = "sunny";
console.log("Hello " + myData.name + ".");
console.log("Today is " + myData.weather + ".");
console.log("------------------");
let myData2 = {
    name: "Adam",
    weather: "sunny"
};
console.log("Hello " + myData2.name + ".");
console.log("Today is " + myData2.weather + ".");
console.log("------------------");
let myData3 = {
    name: "Adam",
    weather: "sunny",
    printMessages: function(){
        console.log("Hello " + this.name + ".");
        console.log("Today is " + this.weather + ".");
    }
};
myData3.printMessages();
console.log("-------Class-----------");
class MyClass {
    constructor(name, weather){
        this.name = name;
        this.weather = weather;
    }

    printMessages(){
        console.log("Hello " + this.name + ".");
        console.log("Today is " + this.weather + ".");
    }
}

let myData4 = new MyClass("Adam", "sunny");
myData4.printMessages();
console.log("-------Java Prototype-----------");
var MyClass2 = function MyClass2(name, weather){
    this.name = name;
    this.weather = weather;
};

MyClass2.prototype.printMessages = function() {
    console.log("Hello " + this.name + ".");
    console.log("Today is " + this.weather + ".");
};
var myData5 = new MyClass2("Adam", "sunny");
myData5.printMessages();
console.log("-------Getter and Setter-----------");
class MyClass3 {
    
    private name:string;
    private _weather: string;

    constructor(name:string,weather:string){
        this.name = name;
        this._weather = weather;
    }

    set weather(value:string){
        this._weather = value;
    }
    get weather():string{
        return `Today is ${this._weather}`;
    }

    printMessages():void{
        console.log("Hello " + this.name + ".");
        console.log(this.weather);
    }
}
let myData6 = new MyClass2("Adam", "sunny");
myData6.printMessages();
console.log("-------Inheritance-----------");

class MySubClass extends MyClass3{
    private city:string;
    constructor (name, weather,city) {
        super(name, weather);
        this.city = city;
    }
    printMessages():void{
        super.printMessages();
        console.log(`You are in ${this.city}.`);
    }
}
let myData7 = new MySubClass("Adam","sunny","Toronto");
myData7.printMessages();

console.log("-------Import Module-----------");
import {Name, WeatherLocation} from "./modules/NameAndWeather";
let name = new Name("Mo","Faruqe");
let loc = new WeatherLocation("Snowy","Toronto");
console.log(name.nameMessage);
console.log(loc.weatherMessage);

console.log("-------Import Class with Same Name from a Different File-----------");
import {Name as OtherName} from "./modules/DuplicateName";
let nameOther = new OtherName();
console.log(nameOther.message);

console.log("-------Import using Wildcard *-----------");
import * as NameAndWeatherLocation from "./modules/NameAndWeather";
let name8 = new NameAndWeatherLocation.Name("Mo", "Faruqe");
let loc8 = new NameAndWeatherLocation.WeatherLocation("Snowy","Toronto");
console.log(name.nameMessage);
console.log(loc.weatherMessage);

console.log("-------Type Annotations-----------");
import {TempConverter} from "./tempConverter";
let cTemp = TempConverter.convertFToC(38);
console.log(`The temprature is: ${cTemp}C`);

console.log("-------Tuples-----------");
//Tuples are fixed length array, where each item in the array 
//is of specified type
let tuple: [string, string, number];
tuple = ["Jon","London",30];
console.log(`${tuple[0]} of ${tuple[1]} is ${tuple[2]} years old.`);

console.log("-------Indexable Types-----------");
//Indexable type associates a key with a value like map 
//Only number and string can be used as key
let cities:{[index:string]:[string, string]} = {};
cities["Toronto"] = ["Snowing","-30C"];
cities["Paris"] = ["Sunny","2C"];
cities["London"] = ["Foggy","8c"];
for(let key in cities){
    console.log(`${key}: ${cities[key][0]}, ${cities[key][1]}`);
}

console.log("-------Access Modifiers-----------");
//public: anywhere; private: only within a class, protected: class and its sub classes
let cTemp2 = TempConverter.convertFToC(38);
console.log(`The temprature is: ${cTemp2}C`);
