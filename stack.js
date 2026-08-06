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

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // Returns -3
minStack.pop();
console.log(minStack.top());    // Returns 0
console.log(minStack.getMin()); // Returns -2

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

console.log(isValid("()"));

function nextGreaterElement(nums1, nums2) {
    const stack = [];
    const map = new Map();

    for (let i = nums2.length - 1; i >= 0; i--) {

        while (stack.length && stack[stack.length - 1] <= nums2[i]) {
            stack.pop();
        }

        map.set(
            nums2[i],
            stack.length ? stack[stack.length - 1] : -1
        );

        stack.push(nums2[i]);
    }

    return nums1.map(num => map.get(num));
} 

function dailyTemperatures(temperatures) {
    const n = temperatures.length;
    const ans = new Array(n).fill(0);
    const stack = [];

    for (let i = n - 1; i >= 0; i--) {

        while (
            stack.length &&
            temperatures[stack[stack.length - 1]] <= temperatures[i]
        ) {
            stack.pop();
        }

        if (stack.length) {
            ans[i] = stack[stack.length - 1] - i;
        }

        stack.push(i);
    }

    return ans;
}

function asteroidCollision(asteroids) {
    const stack = [];

    for (let asteroid of asteroids) {

        let alive = true;

        while (
            alive &&
            asteroid < 0 &&
            stack.length &&
            stack[stack.length - 1] > 0
        ) {

            let top = stack[stack.length - 1];

            if (top < -asteroid) {
                stack.pop();
            } else if (top === -asteroid) {
                stack.pop();
                alive = false;
            } else {
                alive = false;
            }
        }

        if (alive) {
            stack.push(asteroid);
        }
    }

    return stack;
}

function removeKdigits(num, k) {
    const stack = [];

    for (let digit of num) {

        while (
            k > 0 &&
            stack.length &&
            stack[stack.length - 1] > digit
        ) {
            stack.pop();
            k--;
        }

        stack.push(digit);
    }

    while (k > 0) {
        stack.pop();
        k--;
    }

    while (stack.length && stack[0] === '0') {
        stack.shift();
    }

    return stack.length ? stack.join('') : "0";
}

function largestRectangleArea(heights) {
    const stack = [];
    let maxArea = 0;

    for (let i = 0; i <= heights.length; i++) {

        let currentHeight = (i === heights.length) ? 0 : heights[i];

        while (
            stack.length &&
            heights[stack[stack.length - 1]] > currentHeight
        ) {

            let height = heights[stack.pop()];

            let width;

            if (stack.length === 0) {
                width = i;
            } else {
                width = i - stack[stack.length - 1] - 1;
            }

            maxArea = Math.max(maxArea, height * width);
        }

        stack.push(i);
    }

    return maxArea;
}
console.log(nextGreaterElement([4,1,2], [1,3,4,2]));
