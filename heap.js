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

