// logging on `console` (not screen)
console.log("Hello World");
var Name = "Nana";
Name = "AvoNana";
console.log(Name);

const interestRate = 0.5;
// interestRate = 0.8;
console.log(interestRate);
// Uncaught TypeError: Assignment to constant variable.
// at basics.js:8:14

// let and var
// let allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used. This is unlike the var keyword, which defines a variable globally, or locally to an entire function regardless of block scope.
let message =  "let allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used. This is unlike the var keyword, which defines a variable globally, or locally to an entire function regardless of block scope."
// console.log(message)

// primitive types
let name = "Nana";
let year = 1999;
let bool = true;
let ud = undefined;
let n = null;

// object
let person = {
   Name: "Duh",
   psychopass: 0
}
// dot or bracket selection are available
person['Name'] = "Makishima"
person['psychopass'] = 20

// object class
class Person{
    constructor(name, psychopass, lastname){
        this.name =name;
        this.psychopass = psychopass;
        this.lastname = lastname;
    }
}
const TsuneMori = new Person('', 20);
console.log(TsuneMori);
TsuneMori.name = "Akane";
TsuneMori.lastname = "TsuneMori";
TsuneMori.psychopass = 30;
console.log(TsuneMori);




// https://www.youtube.com/watch?v=xUI5Tsl2JpY
// function declaration
var Meme = new Person('Meguro', 20, 'Len');
greet(Meme)
function greet(PERSON){
    Name = PERSON['name'];
    LastName = PERSON['lastname']
    console.log("Welcome, "+ Name+ "," +LastName);
}


// function expression: storing a function inside
// this is also a regular function
const speak = function(name){
    console.log(`Welcome, ${name}!`);
}
speak(name);
speak(Name);
// difference between function decoration & expression
// function exp: speak() cannot work if it is called above line 59
// while function deco: greet() works

// regular function
const pi = 3.14159;
const CalcArea = function(radius){
    return radius ** 2 * pi;}

// arrow function
const ArrowCalcArea = (radius) => {
    return radius ** 2 * pi;}
let c = CalcArea(5);
let ac = ArrowCalcArea(5);



// write a for loop
function displaypic(suffix, picstart, picend){
    for(let i = picstart; i <= picend; i++){
        let res = suffix + i + '.png';
        console.log(res);
    }
}
displaypic('./showimages/thumb-chihiro0', 1, 5)


var f = function pp(){
    console.log("pp")};
var g = f; // deepcopy?
var f = function qq(){
    console.log("qq")};
var h = g;


// array
// different versions
let people = ['Meguro', 'Yuusei', 'Sugar']
people.forEach(function(element){
    console.log(element); // element/person gets the element inside the array
})
people.forEach((element) => {
    console.log(element); // element gets the element inside the array
})
people.forEach(element => console.log(element))
people.forEach(function(element, index){
    console.log(`Hi ${index+1}, ${element}.`)
})