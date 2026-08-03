function isValid(s) {
    const stack = [];

    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.pop() !== map[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        this.stack.push(val);

        if (this.minStack.length === 0) {
            this.minStack.push(val);
        } else {
            const min = Math.min(val, this.minStack[this.minStack.length - 1]);
            this.minStack.push(min);
        }
    }

    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

class MyStack {
    constructor() {
        this.queue = [];
    }

    push(x) {
        this.queue.push(x);

        let size = this.queue.length;

        while (size > 1) {
            this.queue.push(this.queue.shift());
            size--;
        }
    }

    pop() {
        return this.queue.shift();
    }

    top() {
        return this.queue[0];
    }

    empty() {
        return this.queue.length === 0;
    }
}