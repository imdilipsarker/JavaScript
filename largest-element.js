let array = [10, 8, 12, 7, 11, 15, 18, 9, 13, 20];
let length = array.length;
let largest = array[0];
for (let i = 0; i < length; i++) {
  const element = array[i];
  if (element > largest) {
    largest = element;
  }
}
console.log(largest);
