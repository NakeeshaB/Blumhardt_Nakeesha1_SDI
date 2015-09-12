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
var totalcarCost = monthlyPayment*monthsFinance;
console.log(totalcarCost);
var carPrice = monthlyPayment*monthsFinance;
console.log(carPrice);

var additionalFunds = prompt(" " +user+ " if you could add additional money to your monthly payment, how much would you add?");
console.log(additionalFunds);

var newmonthlyPayment = Number(monthlyPayment) +Number(additionalFunds);
console.log(newmonthlyPayment);

var newpayoffTime= Number(newmonthlyPayment)/Number(monthsFinance);
console.log(newpayoffTime);
alert("Your car could be paid off in "+Number(totalcarCost)/Number(newmonthlyPayment)+ " months if you paid the extra amount.");

//ran test for Nissan Altima/first payment $350*72months=25200,added an additional $150 dollars to monthly payment. New payoff was = 50.4
