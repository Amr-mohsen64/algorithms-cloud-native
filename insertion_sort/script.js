/*
1 -loop over array to and start from index 1 
2- loop back from index of current element to descending order - 1
3- preserve temp variable for lowest element to use it back when swapping
3- if the element before current element > key preserved
4- swap the   arr[j + 1] = arr[j]; else
5- else break the loop
6- swap the [j + 1] with preserved key
7- return array
*/

function insertionSort(arr) {
  let key = 0;
  for (let i = 1; i < arr.length; i++) {
    key = arr[i];
    for (var j = i - 1; j >= 0; j--) {
      if (arr[j] > key) {
        arr[j + 1] = arr[j];
      } else break;
    }
    arr[j + 1] = key;
  }
  return arr;
}

console.log(insertionSort([9, 5, 1, 4, 2]));
