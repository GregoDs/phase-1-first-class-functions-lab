// Code your solution in this file

//Declare the variable returnFirstTwoDrivers with const and assign an anonymous function to it. The assigned function should accept an array of drivers as an argument and return the first two drivers in the array.
 const returnFirstTwoDrivers = function (drivers){
    
    return drivers.slice(0,2);

 }
 const driversArray = ['Antonia','Nuru','Amari','Mo'];
 const result = returnFirstTwoDrivers(driversArray);


 const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
    
 }
const result2 = returnLastTwoDrivers(driversArray);

//selectingDrivers — This is an array containing two elements: the two functions that we previously defined (returnFirstTwoDrivers() and returnLastTwoDrivers()).
 
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

//createFareMultiplier() — This is a higher-order function that takes in one argument, an integer, and returns a function that will multiply a fare for a ride accordingly. For example, if 
//createFareMultiplier() receives an argument of 4, it will return a function that takes in a fare as an argument and quadruples the fare.

function createFareMultiplier(x){
      
    return function(fare){
        return fare * x ;

    };
    }
    const fareMultiplier = createFareMultiplier(2);
  
    const fareQuintupler = createFareMultiplier(5);

//fareDoubler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as its lone argument and doubles it.

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

//selectDifferentDrivers() — This function takes two arguments, an array of drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers.

function selectDifferentDrivers(driversArray,selectionFunction){
    
    return selectionFunction(driversArray);

}
const firstDrivers = returnFirstTwoDrivers(selectionFunction);
const lastDrivers = returnLastTwoDrivers(selectionFunction);