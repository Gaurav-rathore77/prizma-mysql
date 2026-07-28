function firstNegativeInteger(arr, k) {
    let queue = [];
    let front = 0;
    let ans = [];

    for (let i = 0; i < arr.length; i++) {
        // Store index of negative element
        if (arr[i] < 0) {
            queue.push(i);
        }

        // Remove expired indices by moving front pointer
        while (front < queue.length && queue[front] <= i - k) {
            front++;
        }

        // Window formed
        if (i >= k - 1) {
            if (front < queue.length) {
                ans.push(arr[queue[front]]);
            } else {
                ans.push(0);
            }
        }
    }

    return ans;
}

console.log(firstNegativeInteger([-8, 2, 3, -6, 10], 2));
// Output: [-8, 0, -6, -6]