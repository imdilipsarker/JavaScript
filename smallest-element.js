let numbers = [10, 12, 14, 18, 20, 9];
let length = numbers.length;
let smallest = numbers[0];
for (let i = 0; i < length; i++) {
  const number = numbers[i];
  if (number < smallest) {
    smallest = number;
  }
}
console.log(smallest);
