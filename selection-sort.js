const selectionSort = (array) => {
  let minIdx;
  let temp;
  let len = array.length;

  for (let i = 0; i < len; i++) {
    minIdx = i;
    for (let j = i + 1; j < len; j++) {
      console.log(i, j);

      if (array[j] < array[minIdx]) {
        minIdx = j;
      }
    }
    if (i !== minIdx) {
      temp = array[i];
      array[i] = array[minIdx];
      array[minIdx] = temp;
    }
  }
  return array;
};
let result = selectionSort([-5, 16, 2, 12, 12]);
console.log(result);
