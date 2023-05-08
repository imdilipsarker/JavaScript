function isPositive(number) {
  if (isNaN(number)) {
    return "please insert number";
  }
  let result;
  if (number > 0) {
    result = "positive";
  } else {
    result = "negative";
  }
  return result;
}
console.log(isPositive("dilip"));
