
/* tutorial: https://www.youtube.com/watch?v=PkZNo7MFNFg&t=252s 2:04:29 */
var collection = {
    "1":{
        "album": "Taylor Swift",
        "artist": "Taylor Swift",
        "release year": 2006,
        "songs": ["Teardrops on my guitar", "Picture to burn"]
    },
    "2": {
        "album": "Fearless",
        "artist" : "Taylor Swift",
        "release year": 2008,
        "songs": ["Fearless", "Forever and always", "15"]
    },
    "3":{
        "album": "Speak Now",
        "artist": "Taylor Swift",
        "release year": 2010,
        "songs": ["Sparks fly", "Haunted"]
    }
}

var colcopy = JSON.parse(JSON.stringify(collection)); /* just a cool way to copy it*/
/* == in JavaScript is used for comparing two variables,
but ignores the datatype of variable.
=== also checks datatype and compares two values.
Checks the equality of two operands without considering their type. */

function addSong(id, new_song){
    /* formatting string*/
    new_song = new_song[0].toUpperCase() + new_song.substring(2).toLowerCase();
    collection[id]["songs"].push(new_song);
    console.log(collection[id]["songs"]);
}

for(var key in collection) {
    collection[key]["notes"] = "";
 }

addSong("3", "Never Grow Up");
console.log(typeof collection); /* object*/
console.log(collection["2"]);   /* "notes" property is added; note that "release year" can
only be accessed with bracket notation*/
console.log(collection["8"]);   /* undefined */

/* Prevent Object mutation */
var MATH_CONSTANTS={
    "pi": 3.14,
}
Object.freeze(MATH_CONSTANTS);
"use strict"; /* dunno why the exception is still not thrown under strict mode*/
try {
    MATH_CONSTANTS.pi = 219;
    }
catch(ex) {
    console.log(ex.message);}
console.log(MATH_CONSTANTS);

/* Arrow function */
/* original*/
var ConcatFunc = function(a1, a2){
    return a1.concat(a1);
}
/* Arrow version */
var ArrConcatFunc = (a1,a2) => a1.concat(a2);
console.log(ArrConcatFunc([1,2], [3,4]));


