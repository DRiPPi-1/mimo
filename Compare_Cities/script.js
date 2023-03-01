var cityRent1 = 1200;
var cityRent2 = 940;

var isMoreExpensive = cityRent1 > cityRent2;
var comparisonLabel = "Paris is more expensive: " + isMoreExpensive;
console.log(comparisonLabel);

var difference = cityRent1 - cityRent2;
var differenceLabel = "Rent difference: " + difference + " Euros";
console.log(differenceLabel);

document.getElementById("city1").innerText = "Paris Rent: 1200 Euros";
document.getElementById("city2").innerText = "Barcelona Rent: 940 Euros";
document.getElementById("comparison").innerText = comparisonLabel;
document.getElementById("difference").innerText = differenceLabel;


