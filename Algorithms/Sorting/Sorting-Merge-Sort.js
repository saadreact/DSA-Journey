export function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

// [9,8,4,3]
// [9,8],[4,3]
// [9][8][4][3] mergesort ends here
// start merging
// [8,9],[3,4]
// [3,4,8,9]

// merge([9,8],[4,3])
    // mergeSort([9,8])
        // [9], [8]
        // mergeSort([9]) => [9]
        // mergeSort([8]) => [8]
        // merge([9],[8])
        // [8].concat([9]).concat([])
    // [8,9]
    // mergeSort([4,3])
        // [4], [3]
        // mergeSort([4]) => [4]
        // mergeSort([3]) => [3]
        // merge([4],[3])
        // [3].concat([4]).concat([])
    // [3,4]
// merge([8,9],[3,4])

function merge(left,right){
    const result = [];
    let i = 0;
    let j = 0;
    while(i < left.length && j < right.length) {
        if(left[i] < right[j]){
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}
