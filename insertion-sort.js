const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let item = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > item) {
      console.log(array[i], array[j], array[j + 1]);
      array[j + 1] = array[j];
      j--;
      console.log(array[j]);
    }
    array[j + 1] = item;
  }
  return array;
};
const result = insertionSort([5, 4, 7, 3, 2, 1, 8, 9, 10]);
console.log(result);
