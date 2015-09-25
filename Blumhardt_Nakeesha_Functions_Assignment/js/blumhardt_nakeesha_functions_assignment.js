/**
 Nakeesha Blumhardt
 Functions Assignment
 Section #2
 9/24/15
 */

//alert ("Test to see if connected");
var name = prompt("Hi my name is Sally and I'm a girl scout.  Can you help me figure out how many boxes of cookies I can ship in a truck?\nWhat is your name?");

alert(" Nice to meet you " +name+" .\n I have 500 boxes of cookies that I need to ship and three pick up trucks to ship them with." );

console.log(name);

alert("There are 3 different boxes of cookies. Boxes A, B, and C.");

alert("There are 75 A boxes, 235 B boxes and 190 C boxes.");

alert ("Let's figure out the area of 1 box of 'A' cookies that has a lenght of 7 inches and a width of 4 inches ");



//function box 1
var box1 = boxA(4,7);
 function boxA(w,l){
        var area = w * l;
        return area;
}

console.log(" The area of Cookie A is  " +box1+ " .");

var box2 = boxB(5, 8.5);
function boxB(w,l){
    var area = w * l ;
    return area;
}


console.log(" The area of Cookie B is  "+ box2+ " .");

// alert for user to enter the formula to find the area

alert(" "  +name+ " ,you will need to use a formula that will help you find the area of a rectangle, such as Width * length.  ");


var box1Width = prompt(" Please enter the width first of box A");

//3rd prompt
var box1Lenght = prompt("Please enter the length of box A");

alert("Now multiply the two numbers together.");
var resultA = prompt("Please enter in your results.");

var resultA =box1Width*box1Lenght;

alert("The area should be  " + resultA+ " inches squared .");

console.log(resultA);

alert ( " Now let's calculate the area of Box B using the same formula.  The width is 5 inches and the length is  8.5.");
var box2Width = prompt("Enter the width for the B Box.");
var box2length = prompt("Enter the length for the B Box");

var box2Result = prompt("Please enter in your results.");

var box2Result = box2Width * box2length;

console.log(" The area of Cookie B is " +box2Result+ " inches squared.");

alert(" The area for Cookie B should be " +box2Result+ " inches squared.");

alert(" Now lets calculate the area for Cookie C.");
alert ("Cookie C's box has a width of 3 inches and a length of 7 inches.  Calculate the area.");
var box3Width = prompt("Enter the width of Cookie c");
var box3Length = prompt("Enter the length of Cookie c");

var box3Results = prompt("Enter the total area of Cookie C");

var box3Results = box3Width * box3Length;
console.log(" The area of Cookie B is "+ box3Results+ " .");
alert(" The area of Cookie B is "+box3Results+ " inches squared.");

//var box1 = boxA(4,7);

//function boxA(w,l){
    //var area = w * l;
   // return area;
//}

//console.log(" The area of Cookie A is  " +box1+ " .");

//var box2 = boxB(5,8.5);
    // function boxB(w,l){

        // console.log("The area of Cookie B is " +box2+ " .");
// regular function // regular functions can be called before or after they are defined.
//var total = calArea(4,7);

//function calArea(w ,h){
    //var area = w * h;
    //return area;
//}

//console.log(total);


// anonymous function

//var calArea = function(20,30){
// var area = w * l;
//return area;
//}

//var a = calArea(20,30); // anonymous functions are called after they are defined.
//console.log(a);


//function calArea(){
  //  var width = 4;
    //var length = 7;
    //var area = width * length;
    //console.log(area);

//}
//calArea();
//var area = areaboxA(4*7);
//function areaboxA (w,l){
   // var area = w*l;
    //return area;
//}
//console.log("area");