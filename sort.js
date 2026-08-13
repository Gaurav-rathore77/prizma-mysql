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


function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {

        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }

    return arr;
}


function mergeSort(arr) {
  // Base case
  if (arr.length <= 1) {
    return arr;
  }

  // Divide
  const mid = Math.floor(arr.length / 2);

  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Conquer + Merge
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];

  let i = 0;
  let j = 0;

  // Compare elements from both arrays
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Add remaining elements
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}


function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];

  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
function countingSort(arr) {
  if (arr.length === 0) return arr;

  const max = Math.max(...arr);
  const min = Math.min(...arr);

  const count = new Array(max - min + 1).fill(0);

  // Count frequency
  for (const num of arr) {
    count[num - min]++;
  }

  // Rebuild sorted array
  const result = [];

  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      result.push(i + min);
      count[i]--;
    }
  }

  return result;
}
function radixSort(arr) {
    let max = Math.max(...arr);

    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        countingSort(arr, exp);
    }

    return arr;
}

function countingSort(arr, exp) {
    let output = new Array(arr.length).fill(0);
    let count = new Array(10).fill(0);

    // Count digits
    for (let i = 0; i < arr.length; i++) {
        let digit = Math.floor(arr[i] / exp) % 10;
        count[digit]++;
    }

    // Prefix sum
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // Build output
    for (let i = arr.length - 1; i >= 0; i--) {
        let digit = Math.floor(arr[i] / exp) % 10;

        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }

    // Copy back
    for (let i = 0; i < arr.length; i++) {
        arr[i] = output[i];
    }
}


function heapSort(arr) {

    // Build Max Heap
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
        heapify(arr, arr.length, i);
    }

    // Extract elements
    for (let i = arr.length - 1; i > 0; i--) {

        // Move maximum to the end
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // Heapify remaining heap
        heapify(arr, i, 0);
    }

    return arr;
}

function heapify(arr, n, i) {

    let largest = i;

    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {

        [arr[i], arr[largest]] =
        [arr[largest], arr[i]];

        heapify(arr, n, largest);
    }
}


function sort012(arr) {
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;

    while (mid <= high) {

        if (arr[mid] === 0) {
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        }

        else if (arr[mid] === 1) {
            mid++;
        }

        else {
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }

    return arr;
}


function mergeIntervals(intervals) {

    intervals.sort((a, b) => a[0] - b[0]);

    const result = [];

    for (let interval of intervals) {

        if (
            result.length === 0 ||
            interval[0] > result[result.length - 1][1]
        ) {
            // No overlap
            result.push(interval);
        } 
        else {
            // Overlap
            result[result.length - 1][1] =
                Math.max(
                    result[result.length - 1][1],
                    interval[1]
                );
        }
    }

    return result;
}


function kthLargest(arr, k) {
  const target = arr.length - k;

  function quickSelect(left, right) {
    const pivot = arr[right];

    let p = left;

    for (let i = left; i < right; i++) {
      if (arr[i] <= pivot) {
        [arr[i], arr[p]] = [arr[p], arr[i]];
        p++;
      }
    }

    [arr[p], arr[right]] = [arr[right], arr[p]];

    if (p === target) {
      return arr[p];
    }

    if (p < target) {
      return quickSelect(p + 1, right);
    }

    return quickSelect(left, p - 1);
  }

  return quickSelect(0, arr.length - 1);
}

console.log(kthLargest([3, 2, 1, 5, 6, 4], 2));
// 5
console.log(
    mergeIntervals([
        [1, 3],
        [2, 6],
        [8, 10],
        [9, 12]
    ])
);
console.log(sort012([2, 0, 2, 1, 1, 0]));
console.log(heapSort([4, 10, 3, 5, 1]));
console.log(radixSort([170, 45, 75, 90, 802, 24, 2, 66]));
console.log(countingSort([4, 2, 2, 8, 3, 3, 1]));
// [1, 2, 2, 3, 3, 4, 8]
console.log(quickSort([5, 3, 8, 4, 2, 7, 1, 6]));
// [1, 2, 3, 4, 5, 6, 7, 8]
console.log(mergeSort([5, 3, 8, 4, 2, 7, 1, 6]));
// [1, 2, 3, 4, 5, 6, 7, 8]
console.log(insertionSort([5, 3, 8, 1, 2]));
console.log(selectionSort([5, 3, 8, 1, 2]));
console.log(bubbleSort([5, 3, 8, 4, 2]));
// [2, 3, 4, 5, 8]