/**
Nakeesha Blumhardt
Section #2
Expressions Assignment
09-10-15
*/

//alert("Test to see if connected.");
//Help buy a car.

// What is the person's name?    
var user = prompt("Hello friend would do you want to buy a car?\nPlease tell me your name. ");
alert("Thank you "+user+ ".");
console.log(user);

//ask the user what type of car do they want?

var carType = prompt(" "+user+", What type of car do you want to buy?");
console.log(carType);

alert("Sounds great. Let's figure out how much a "+carType+ " will cost.");

var monthlyPayment = prompt(" " +user+" , how much would you be willing to pay monthly for your car");
console.log(monthlyPayment);

var monthsFinance = prompt(" How many months would you like to finance your car for?");
alert("  "+user+ ", your car will cost you $"+monthlyPayment*Number(monthsFinance)+" after it is completely paid off");

var carPrice = monthlyPayment*monthsFinance
console.log(carPrice);