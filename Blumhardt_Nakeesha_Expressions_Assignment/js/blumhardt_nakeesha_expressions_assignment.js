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

// test# 1 for Nissan Altima/first payment $350*72months=25200,added an additional $150 dollars to monthly payment. New payoff was = 50.4
// test #2 for Honda Civic/ first payment $200.00*60months =12000, added no additional funds, total payoff still 60 months.
// test# 3 for Porsha/first payment $950.00*72months = 68400, added $300.00 additional funds, total payoff months 54.72
// test# 4 for Honda/first payment $450.00*60months = 27000, then subtracted - $50.00 from additional funds, payoff months 67.5.