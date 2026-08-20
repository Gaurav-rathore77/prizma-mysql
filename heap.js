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