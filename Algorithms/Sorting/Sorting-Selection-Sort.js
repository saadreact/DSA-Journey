export function SelectionSort(array){
  const length = array.length;
  for(let i = 0;  i < length; i++){
      let smallest = i;
      for(let j = i+1;  j < length; j++){
          if(array[j] < array[smallest]){
              smallest = j;
          }
      } 
      if(smallest !== i) {
          let temp = array[i]; 
          array[i] = array[smallest]; 
          array[smallest] = temp;
      }
  }
  return array;
}
