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