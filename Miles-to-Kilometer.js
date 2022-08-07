// Problem-2: Miles to Kilometer

function milesToKilometer(miles) {
    var convertMileToKilometers = miles * 1.609344;
    return convertMileToKilometers;
}

var myMile = 12;
var finalReult = milesToKilometer(myMile);
console.log(finalReult);