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

apartment=mortgage<500;
minMonthly=450;
condo= mortgage>=699;
house= mortgage>1400;
shareCondo= mortgage>599;
shareHouse= mortgage=900;

if(mortgage>=450){
  console.log("You can purchase an apartment!");
 }
 if(mortgage>=699){
  console.log("You may purchase a Condo!")
 }
if(mortgage>=1400){
 console.log("You may purchase a House");
}
else if(mortgage>=shareCondo){
 console.log("You can purchase a Condo with a roommate.");
}else{
 console.log("You do not earn enough to purchase a home yet.");
}
(mortgage>shareHouse) ? console.log("Purchase a House with a roommate."):console.log("You can not buy a house yet, but have other options.");
//if(condo<=700){
  //console.log("You can purchase a Condo!");
//}

//if(house<=1200){
 // console.log("You can afford to purchase a House!");
//}Test results :Sue
//2300
//460
//You can purchase an apartment!
//You may purchase a Condo!
//You can purchase a Condo with a roommate. 
//You can not buy a house yet, but have other options.