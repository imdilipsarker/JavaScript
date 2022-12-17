function checkNumbersDivisibleByFive() {
  let numbers = [];
  for (let i = 0; i <= 50; i++) {
    if (i % 5 === 0) {
      numbers.push(i);
    }
  }
  return numbers;
}
let result = checkNumbersDivisibleByFive();
console.log(result);
