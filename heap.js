class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);

            if (this.heap[parent] <= this.heap[index]) {
                break;
            }

            [this.heap[parent], this.heap[index]] =
            [this.heap[index], this.heap[parent]];

            index = parent;
        }
    }

    remove() {
        if (this.heap.length === 0) return null;

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const min = this.heap[0];

        this.heap[0] = this.heap.pop();

        this.bubbleDown();

        return min;
    }

    bubbleDown() {
        let index = 0;
        const n = this.heap.length;

        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;

            let smallest = index;

            if (
                left < n &&
                this.heap[left] < this.heap[smallest]
            ) {
                smallest = left;
            }

            if (
                right < n &&
                this.heap[right] < this.heap[smallest]
            ) {
                smallest = right;
            }

            if (smallest === index) {
                break;
            }

            [this.heap[index], this.heap[smallest]] =
            [this.heap[smallest], this.heap[index]];

            index = smallest;
        }
    }
}

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);

            if (this.heap[parent] >= this.heap[index]) {
                break;
            }

            [this.heap[parent], this.heap[index]] =
            [this.heap[index], this.heap[parent]];

            index = parent;
        }
    }

    remove() {
        if (this.heap.length === 0) return null;

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const max = this.heap[0];

        this.heap[0] = this.heap.pop();

        this.bubbleDown();

        return max;
    }

    bubbleDown() {
        let index = 0;
        const n = this.heap.length;

        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;

            let largest = index;

            if (
                left < n &&
                this.heap[left] > this.heap[largest]
            ) {
                largest = left;
            }

            if (
                right < n &&
                this.heap[right] > this.heap[largest]
            ) {
                largest = right;
            }

            if (largest === index) {
                break;
            }

            [this.heap[index], this.heap[largest]] =
            [this.heap[largest], this.heap[index]];

            index = largest;
        }
    }
}

function maxHeapify(arr, i, n) {
    while (true) {
        let largest = i;

        const left = 2 * i + 1;
        const right = 2 * i + 2;

        if (
            left < n &&
            arr[left] > arr[largest]
        ) {
            largest = left;
        }

        if (
            right < n &&
            arr[right] > arr[largest]
        ) {
            largest = right;
        }

        // Already satisfies heap property
        if (largest === i) {
            break;
        }

        [arr[i], arr[largest]] =
        [arr[largest], arr[i]];

        i = largest;
    }
}function maxHeapify(arr, i, n) {
    while (true) {
        let largest = i;

        const left = 2 * i + 1;
        const right = 2 * i + 2;

        if (
            left < n &&
            arr[left] > arr[largest]
        ) {
            largest = left;
        }

        if (
            right < n &&
            arr[right] > arr[largest]
        ) {
            largest = right;
        }

        // Already satisfies heap property
        if (largest === i) {
            break;
        }

        [arr[i], arr[largest]] =
        [arr[largest], arr[i]];

        i = largest;
    }
}

function maxHeapify(arr, i, n) {
    while (true) {
        let largest = i;

        const left = 2 * i + 1;
        const right = 2 * i + 2;

        if (
            left < n &&
            arr[left] > arr[largest]
        ) {
            largest = left;
        }

        if (
            right < n &&
            arr[right] > arr[largest]
        ) {
            largest = right;
        }

        if (largest === i) {
            break;
        }

        [arr[i], arr[largest]] =
        [arr[largest], arr[i]];

        i = largest;
    }
}


function heapSort(arr) {
    const n = arr.length;

    // Step 1: Build Max Heap
    for (
        let i = Math.floor(n / 2) - 1;
        i >= 0;
        i--
    ) {
        maxHeapify(arr, i, n);
    }

    // Step 2: Move max to end
    for (
        let end = n - 1;
        end > 0;
        end--
    ) {
        // Swap max with last
        [arr[0], arr[end]] =
        [arr[end], arr[0]];

        // Restore heap
        maxHeapify(arr, 0, end);
    }

    return arr;
}

function findKthLargest(nums, k) {
    const target = nums.length - k;

    function quickSelect(left, right) {
        const pivot = nums[right];
        let p = left;

        // Partition: elements smaller than pivot go left
        for (let i = left; i < right; i++) {
            if (nums[i] <= pivot) {
                [nums[i], nums[p]] = [nums[p], nums[i]];
                p++;
            }
        }

        [nums[p], nums[right]] = [nums[right], nums[p]];

        if (p === target) {
            return nums[p];
        }

        if (p < target) {
            return quickSelect(p + 1, right);
        }

        return quickSelect(left, p - 1);
    }

    return quickSelect(0, nums.length - 1);
}

function findKthSmallest(nums, k) {
    const target = k - 1;

    function quickSelect(left, right) {
        const pivot = nums[right];
        let p = left;

        // Put smaller elements before pivot
        for (let i = left; i < right; i++) {
            if (nums[i] <= pivot) {
                [nums[i], nums[p]] = [nums[p], nums[i]];
                p++;
            }
        }

        // Put pivot in its correct position
        [nums[p], nums[right]] = [nums[right], nums[p]];

        if (p === target) {
            return nums[p];
        }

        if (p < target) {
            return quickSelect(p + 1, right);
        }

        return quickSelect(left, p - 1);
    }

    return quickSelect(0, nums.length - 1);
}

console.log(findKthSmallest([7, 10, 4, 3, 20, 15], 3));
// 7

function topKFrequent(nums, k) {
    const freq = new Map();

    // 1. Count frequencies
    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    // 2. Bucket: index = frequency
    const buckets = Array.from(
        { length: nums.length + 1 },
        () => []
    );

    for (const [num, count] of freq) {
        buckets[count].push(num);
    }

    // 3. Traverse from highest frequency
    const result = [];

    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        for (const num of buckets[i]) {
            result.push(num);

            if (result.length === k) {
                return result;
            }
        }
    }

    return result;
}

function kClosest(points, k) {
    const heap = [];

    function distance(point) {
        return point[0] ** 2 + point[1] ** 2;
    }

    function push(point) {
        heap.push(point);

        let i = heap.length - 1;

        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);

            if (distance(heap[parent]) >= distance(heap[i])) {
                break;
            }

            [heap[parent], heap[i]] = [heap[i], heap[parent]];
            i = parent;
        }
    }

    function pop() {
        const top = heap[0];
        const last = heap.pop();

        if (heap.length > 0) {
            heap[0] = last;

            let i = 0;

            while (true) {
                let largest = i;
                const left = 2 * i + 1;
                const right = 2 * i + 2;

                if (
                    left < heap.length &&
                    distance(heap[left]) > distance(heap[largest])
                ) {
                    largest = left;
                }

                if (
                    right < heap.length &&
                    distance(heap[right]) > distance(heap[largest])
                ) {
                    largest = right;
                }

                if (largest === i) break;

                [heap[i], heap[largest]] =
                    [heap[largest], heap[i]];

                i = largest;
            }
        }

        return top;
    }

    for (const point of points) {
        push(point);

        // Keep only K closest points
        if (heap.length > k) {
            pop();
        }
    }

    return heap;
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(node) {
    this.heap.push(node);
    this.bubbleUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);

    return min;
  }

  bubbleUp(i) {
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);

      if (this.heap[parent].val <= this.heap[i].val) break;

      [this.heap[parent], this.heap[i]] =
        [this.heap[i], this.heap[parent]];

      i = parent;
    }
  }

  bubbleDown(i) {
    const n = this.heap.length;

    while (true) {
      let smallest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;

      if (
        left < n &&
        this.heap[left].val < this.heap[smallest].val
      ) {
        smallest = left;
      }

      if (
        right < n &&
        this.heap[right].val < this.heap[smallest].val
      ) {
        smallest = right;
      }

      if (smallest === i) break;

      [this.heap[i], this.heap[smallest]] =
        [this.heap[smallest], this.heap[i]];

      i = smallest;
    }
  }



  isEmpty() {
    return this.heap.length === 0;
  }

  
}

function mergeKLists(lists) {
  const heap = new MinHeap();

  // Put first node of every list into heap
  for (const node of lists) {
    if (node !== null) {
      heap.push(node);
    }
  }

  const dummy = new ListNode(0);
  let tail = dummy;

  while (!heap.isEmpty()) {
    const node = heap.pop();

    tail.next = node;
    tail = tail.next;

    if (node.next !== null) {
      heap.push(node.next);
    }
  }

  return dummy.next;
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();

    this.bubbleDown(0);

    return min;
  }

  peek() {
    return this.heap[0];
  }

  bubbleUp(i) {
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);

      if (this.heap[parent] <= this.heap[i]) break;

      [this.heap[parent], this.heap[i]] =
        [this.heap[i], this.heap[parent]];

      i = parent;
    }
  }

  bubbleDown(i) {
    const n = this.heap.length;

    while (true) {
      let smallest = i;

      const left = 2 * i + 1;
      const right = 2 * i + 2;

      if (
        left < n &&
        this.heap[left] < this.heap[smallest]
      ) {
        smallest = left;
      }

      if (
        right < n &&
        this.heap[right] < this.heap[smallest]
      ) {
        smallest = right;
      }

      if (smallest === i) break;

      [this.heap[i], this.heap[smallest]] =
        [this.heap[smallest], this.heap[i]];

      i = smallest;
    }
  }
}

class KthLargest {
  constructor(k, nums) {
    this.k = k;
    this.heap = new MinHeap();

    for (const num of nums) {
      this.add(num);
    }
  }

  add(val) {
    this.heap.push(val);

    // Keep only k largest elements
    if (this.heap.heap.length > this.k) {
      this.heap.pop();
    }

    return this.heap.peek();
  }
}


var reorganizeString = function(s) {
    const freq = new Map();

    // Count frequencies
    for (const ch of s) {
        freq.set(ch, (freq.get(ch) || 0) + 1);
    }

    // Max heap: [character, frequency]
    const heap = [];

    const push = (item) => {
        heap.push(item);

        let i = heap.length - 1;

        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);

            if (heap[parent][1] >= heap[i][1]) break;

            [heap[parent], heap[i]] = [heap[i], heap[parent]];
            i = parent;
        }
    };

    const pop = () => {
        const top = heap[0];
        const last = heap.pop();

        if (heap.length > 0) {
            heap[0] = last;

            let i = 0;

            while (true) {
                let left = 2 * i + 1;
                let right = 2 * i + 2;
                let largest = i;

                if (
                    left < heap.length &&
                    heap[left][1] > heap[largest][1]
                ) {
                    largest = left;
                }

                if (
                    right < heap.length &&
                    heap[right][1] > heap[largest][1]
                ) {
                    largest = right;
                }

                if (largest === i) break;

                [heap[i], heap[largest]] = [heap[largest], heap[i]];
                i = largest;
            }
        }

        return top;
    };

    for (const [ch, count] of freq) {
        push([ch, count]);
    }

    let result = "";
    let prev = null;

    while (heap.length > 0) {
        let [ch, count] = pop();

        // Can't use the same character consecutively
        if (ch === prev) {
            if (heap.length === 0) return "";

            let [ch2, count2] = pop();

            result += ch2;
            prev = ch2;

            count2--;

            if (count2 > 0) {
                push([ch2, count2]);
            }

            push([ch, count]);
        } else {
            result += ch;
            prev = ch;

            count--;

            if (count > 0) {
                push([ch, count]);
            }
        }
    }

    return result;
};
