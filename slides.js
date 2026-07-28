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

function countDistinct(arr, k) {
    let map = new Map();
    let ans = [];

    // First window
    for (let i = 0; i < k; i++) {
        map.set(arr[i], (map.get(arr[i]) || 0) + 1);
    }

    ans.push(map.size);

    // Remaining windows
    for (let i = k; i < arr.length; i++) {

        // Remove outgoing element
        let out = arr[i - k];
        map.set(out, map.get(out) - 1);

        if (map.get(out) === 0) {
            map.delete(out);
        }

        // Add incoming element
        let inEle = arr[i];
        map.set(inEle, (map.get(inEle) || 0) + 1);

        ans.push(map.size);
    }

    return ans;
}

console.log(countDistinct([1,2,1,3,4,2,3],4));
// Output: [3,4,4,3]

console.log(firstNegativeInteger([-8, 2, 3, -6, 10], 2));
// Output: [-8, 0, -6, -6]