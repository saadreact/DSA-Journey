// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

export function selectionSort(array) {
  //Code Here
  for (let i = 0; i < array.length; i++) {
    let smallest = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[smallest]) {
        smallest = j;
      }
    }
    let temp = array[i];
    array[i] = array[smallest];
    array[smallest] = temp;
  }
  return array;
}
// selectionSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]);

// console.log(selectionSort(numbers));
