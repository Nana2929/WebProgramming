var today = new Date();
var time = today.getHours().toLocaleString(
    undefined, // leave undefined to use the visitor's browser
               // locale or a string like 'en-US' to override it.
    { minimumIntegerDigits: 2 }
  );
var min = today.getMinutes().toLocaleString(
    undefined,
    { minimumIntegerDigits: 2 }
  );
var greeting;
if (time>18){
    greeting = "Good Evening";
}
else if (time > 12){
    greeting = "Good Afternoon";
}
else if (time > 6){
    greeting = "Good Evening";
}
// display
document.write('<h3>'+greeting+"</h3>")
var time_display = time+':'+min;
document.write('<h3> It\'s '+ time_display +' now. </h3>')

var setText = function(){
    var setstring = "set the name here";
    var goodstring = "國立臺灣大學 外國語文學系";
    elem = document.getElementById("set_text_section");
    console.log(elem);
    if (elem != goodstring) elem.innerHTML = goodstring;
    else elem.innerHTML = setstring;
}
