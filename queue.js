class MyQueue {
    constructor() {
        this.inStack = [];
        this.outStack = [];
    }

    enqueue(x) {
        this.inStack.push(x);
    }

    dequeue() {
        this.moveIfNeeded();

        if (this.outStack.length === 0) {
            return -1; // queue is empty
        }

        return this.outStack.pop();
    }

    peek() {
        this.moveIfNeeded();

        if (this.outStack.length === 0) {
            return -1;
        }

        return this.outStack[this.outStack.length - 1];
    }

    empty() {
        return this.inStack.length === 0 &&
               this.outStack.length === 0;
    }

    moveIfNeeded() {
        if (this.outStack.length === 0) {
            while (this.inStack.length > 0) {
                this.outStack.push(this.inStack.pop());
            }
        }
    }
}

class MyStack {
    constructor() {
        this.q = [];
    }

    push(x) {
        this.q.push(x);

        // Move all previous elements behind x
        const size = this.q.length - 1;

        for (let i = 0; i < size; i++) {
            this.q.push(this.q.shift());
        }
    }

    pop() {
        if (this.empty()) return -1;

        return this.q.shift();
    }

    top() {
        if (this.empty()) return -1;

        return this.q[0];
    }

    empty() {
        return this.q.length === 0;
    }
}

function maxSlidingWindow(nums, k) {
    const deque = [];
    const result = [];

    for (let i = 0; i < nums.length; i++) {

        // 1. Remove elements outside the window
        while (deque.length && deque[0] <= i - k) {
            deque.shift();
        }

        // 2. Remove smaller elements
        while (
            deque.length &&
            nums[deque[deque.length - 1]] <= nums[i]
        ) {
            deque.pop();
        }

        // 3. Add current index
        deque.push(i);

        // 4. Window is ready
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
}