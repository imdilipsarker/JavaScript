function getFactorial(number) {
  let factorial = 1;
  for (let i = number; i >= 1; i--) {
    factorial *= i;
  }
  return factorial;
}
console.log(getFactorial(5));
