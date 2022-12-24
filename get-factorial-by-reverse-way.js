function getFactorial(number) {
  let factorial = 1;
  let index = number;
  while (index >= 1) {
    factorial *= index;
    index--;
  }
  return factorial;
}
console.log(getFactorial(5));
