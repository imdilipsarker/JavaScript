function countNumbersDivisibleByTwo(number) {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
      count++;
    }
  }
  return count;
}
let result = countNumbersDivisibleByTwo(15);
console.log(result);
