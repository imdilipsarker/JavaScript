const bubbleSort = (array) => {
  let isSwap;
  for (let i = 0; i < array.length; i++) {
    isSwap = false;
    for (let j = 0; j < array.length - i - 1; j++) {
      console.log("to check how it is working", array, array[j], array[j + 1]);
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        isSwap = true;
      }
    }
    if (!isSwap) break;
  }
  return array;
};
let result = bubbleSort([3, 8, -1, 5, 7, 4, 2, 1, 10]);
console.log(result);
