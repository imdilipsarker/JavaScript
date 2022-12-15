function countNumbersDivisibleByThree() {
  let numbers = [];
  for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
      numbers.push(i);
    }
  }
  return numbers;
}
let result = countNumbersDivisibleByThree();
console.log(result);
