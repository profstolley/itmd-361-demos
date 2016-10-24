function timesTwo(x) {
  return x * 2;
}
function timesThree(x) {
  return x * 3;
}

function multiplier(factor) {
  return function(num) {
    return num * factor;
  }
}

var twice = multiplier(2);
var thrice = multiplier(3);

twice(7); // 14
thrice(3); // 9




