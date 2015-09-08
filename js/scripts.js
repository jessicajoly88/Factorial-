var factorial = function(number) {
  var total = 1;
  if (0) {
    return total;
  }  else {
    for (var index = 1; index <= number; index += 1) {
      total = index * total;
    }
    return total;
  }
};
