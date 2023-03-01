var budget = 3200;
var savingPriotity = "high";

var rent = 1100;
var utilities = 370;
var newLaptop = 1200;

var totalCosts = rent + utilities;
var budgetLeft = budget - totalCosts;
var buyLaptop = budgetLeft >= newLaptop;

console.log("New Laptop Within Budget: ");
console.log(buyLaptop);
console.log("Postpone Purchase and Save Instead");
console.log(savingPriotity === "high");
