/*
 Nakeesha Blumhardt
 SDI Section #2
 Conditionals Assignment
 09-17-15
 */

//alert("test to see if connected");
// Prompt the user that we are going to buy a home and ask for their name.

var name = prompt("Let's buy a home.  Please tell me your name first\nthen we can figure out what type of home you can buy.");
alert("Okay " +name+ ", let's get started.");

console.log(name);

//figure out how much money the user makes a month.

var monthlyIncome = prompt("" +name+ ", how much money do you earn each month after taxes?");
console.log(monthlyIncome);

var yearlyIncome = Number(monthlyIncome)*Number(12);

var mortgage = Number(yearlyIncome)* Number(.20)/Number(12);
console.log(mortgage);

alert(""+name+" , you can afford to pay a monthly mortage amount of $"+mortgage+" a month." );

//figure out what type of home the user can buy based off of mortage amount

apartment= mortgage<400;
condo= mortgage >750;

a=500;

if(apartment>=500){
  console.log("You can purchase an apartment!");

}
if(condo <=700){
  console.log("You can purchase a Condo!");
}