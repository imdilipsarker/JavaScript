function countNumbersDivisibleByTwo() {
  let count = 0;
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      count++;
    }
  }
  return count;
}
let result = countNumbersDivisibleByTwo();
console.log(result);
