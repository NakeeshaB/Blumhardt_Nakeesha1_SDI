/*
 Nakeesha Blumhardt
 SDI Section #2
 GoTo Training Week# 2
 09-10-15
 */
//alert("Test to see if connected.");

//create an age calculator

//Ask at the user for their name
var name = prompt("Let's figure out how old you are! \nPlease type in your name.");
// use the variable and say hello
alert("Welcome "+name+"!");

//Ask the user what year they were born
var yearBorn = prompt("What year were you born?");

//console.log the answer to check it
console.log(yearBorn);

//Calculate their age

//We need to know the current year
//Hardcoded- means type ina specific value.
var currentYear = 2015;

//figure out age
var age = currentYear - yearBorn-1;

//alert the user with their age
alert(name+ " you are " +age+  "  years old.");