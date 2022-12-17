function countNumbersDivisibleByThree(number) {
  let numbers = [];
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0) {
      numbers.push(i);
    }
  }
  return numbers;
}
let result = countNumbersDivisibleByThree(30);
console.log(result);
