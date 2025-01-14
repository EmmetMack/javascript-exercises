const ftoc = function(temp) {
  return round((5/9) * (temp - 32), 1);
};

const ctof = function(temp) {
  return round((32) +  ((9/5) * temp), 1);
};

//sauce: https://stackoverflow.com/questions/7342957/how-do-you-round-to-1-decimal-place-in-javascript
function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
