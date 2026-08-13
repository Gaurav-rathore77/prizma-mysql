function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    // Last i elements are already sorted
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    // No swap = array is already sorted
    if (!swapped) break;
  }

  return arr;
}


function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {

        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }

    return arr;
}

console.log(selectionSort([5, 3, 8, 1, 2]));
console.log(bubbleSort([5, 3, 8, 4, 2]));
// [2, 3, 4, 5, 8]