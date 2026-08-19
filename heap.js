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