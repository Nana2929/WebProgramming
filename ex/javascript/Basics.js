


console.log("Hello World");
var const5 = 5;
/* datatypes: undefined, null, boolean, string, number, symbol, object */
/* var keyword defines globally
or locally to an entire function regardless of block scope. */
let out_ = 100;  /* let defines limited in the block*/
const pi = 3.14159;
const5 *= 100;
console.log(const5);

/* Strings */
var MyNameString = "Nana";
var Alan = "Alan";
var Turing = "Turing";
var rand_sent = "A random sentence with \"\"."
var link_string = "<a href = \"images/avo.png\">"
/* or...*/
var link_string = '<a href = "images/avo.png">'
var test_string = "First\n\t\\Second\nThird"
console.log(test_string);
/*get length*/
console.log(test_string.length);
/*string's immutability*/
/* test_string[0] = A throws error */
/* CODE OUTPUT
\' single quote
\" double quote
\\ backslash
\n newline
\t tab
\r carriage return
\b backspace
\f form feed
*/
var Array = [["wow", 50],[40, "This is the best"]];
var ArrayFirst = Array[0];
Array[0][0] = "no wow";
Array.push(["probably the last element"]);
console.log(Array);
Array.pop(); /* removes the last element, no arg accepted*/
console.log(Array);
Array.unshift("OK I'm the first element now."); /* shift this element into the first (0) element*/
console.log(Array);

/* functions */
function mulfunc(a,b){
    console.log("The result is:", a*b);
}
var num1 = 1;
var num2 = 100;
mulfunc(1,3);
mulfunc(num1, num2);


/*if-else statement*/
if (typeof num1 != "undefined")
    {console.log("num1 " + num1 + " is global.")};

var random = 12339.3428;
var out;
if (random > 100){
    out = "Big";
}
else if (random > 400){
    out = "Large";
}
else if (random > 1000){
    out = "Huge";
}
else{
    out = "Small";
}
console.log(out);
/*switch case statement*/
random = 3;
switch(random){
    case 1:
        out = "ok";
        break;
    case 2:
        out = "nice";
        break;
    case 3:
        out = "nicer!";
        break;
    default:
        out = "no comment";
        break;
}
console.log(out);
/* Math library */
/* no need to import */

const mathpi = Math.PI;
console.log(mathpi);
/* pre- OOP stuffs*/
var mydevices = {
    "Phone": "Google pixel 6",
    "PC": "MacBook Pro 2020 intel",
    "Pad": "ipad air 4"
}
console.log(mydevices["Phone"]);
/* revise: mydevices["Pad"] = "Samsung pad"; */
/* mydevices.Pad = ... works as well; dot-notation and bracket notation work the same*/
function checkProp(prop_to_check){
    if (mydevices.hasOwnProperty(prop_to_check)){
        return mydevices[prop_to_check];
    }
    else{
        return "Not found.";
    }
}
console.log(checkProp("PC"));
console.log(checkProp("Smart Watch"));











