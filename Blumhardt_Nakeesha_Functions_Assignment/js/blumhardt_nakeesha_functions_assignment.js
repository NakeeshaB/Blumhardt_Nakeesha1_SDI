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

alert("There are 3 different boxes of cookies. Boxes A(Lemon), B( Mint), and C(Smores).");

alert("There are 75 Lemon boxes, 235 Mint boxes and 190 Smore boxes.");

alert ("Let's figure out the area of 1 box of 'A' cookies that has a lenght of 7 inches and a width of 4 inches ");



//function box 1
var box1 = boxA(4,7);
 function boxA(w,l){
        var area = w * l;
        return area;
}

console.log(" The area of Cookie A is  " +box1+ " inches squared.");

var box2 = boxB(5, 8.5);
function boxB(w,l){
    var area = w * l ;
    return area;
}

console.log(" The area of Cookie B is  "+ box2+ " inches squared .");


var box3 = function()
{   var width = 3;
    var length = 7;
    var area = width * length;
    return area
}


var area = box3(3,7);
console.log(" The area of Cookie C is " +area+ " inches squared .");

//console.log(" The area for Cookie C is" + box3 + ".");
// alert for user to enter the formula to find the area

alert(" "  +name+ " ,you will need to use a formula that will help you find the area of a rectangle, such as Width * length.  ");


var box1Width = prompt(" Please enter the width first of box A");

//3rd prompt
var box1Lenght = prompt("Please enter the length of box A");

alert("Now multiply the two numbers together.");
var resultA = prompt("Please enter in your results.");

var resultA =box1Width*box1Lenght;

alert("The area should be  " + resultA+ " squared inches .");

console.log(resultA);

alert ( " Now let's calculate the area of Box B using the same formula.  The width is 5 inches and the length is  8.5.");
var box2Width = prompt("Enter the width for the B Box.");
var box2length = prompt("Enter the length for the B Box");

var box2Result = prompt("Please enter in your results.");

var box2Result = box2Width * box2length;

console.log(" The area of Cookie B is " +box2Result+ "  square inches .");

alert(" The area for Cookie B should be " +box2Result+ " square inches .");

alert(" Now lets calculate the area for Cookie C.");
alert ("Cookie C's box has a width of 3 inches and a length of 7 inches.  Calculate the area.");
var box3Width = prompt("Enter the width of Cookie c");
var box3Length = prompt("Enter the length of Cookie c");

var box3Results = prompt("Enter the total area of Cookie C");

var box3Results = box3Width * box3Length;
console.log(" The area of Cookie B is "+ box3Results+ " .");
alert(" The area of Cookie B is "+box3Results+ " square inches.");

alert (" Now that we have area for all of the boxes let's figure out what truck each type of cookie can fit into.");

alert (" Truck A can hold a maximum of 2300 square inches.  Truck B can hold a maxium of 5000 square inches and Truck C can hold 10,100 square inches. ");

alert("To figure out what cookies can go in each truck we need to multiply the the square inched by the number of boxes.");

var lemon= prompt(" Enter the square inch total for the lemon cookies.");
console.log(lemon);

var mint= prompt(" Enter the square inch total for the Mint cookies.");
Console.log(mint);

var smores= prompt("Enter the square inch total for the Smores cookie.");
console.log(smores);

lemon=2100;
mint=9987.5;
smores=3990;
var truckA = 2300;
var truckB = 5000;
var truckC = 10100;




//
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