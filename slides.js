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
function characterReplacement(s, k) {
    let map = new Map();

    let left = 0;
    let maxFreq = 0;
    let ans = 0;

    for (let right = 0; right < s.length; right++) {

        let ch = s[right];

        // Frequency increase
        if (map.has(ch)) {
            map.set(ch, map.get(ch) + 1);
        } else {
            map.set(ch, 1);
        }

        // Maximum frequency update
        if (map.get(ch) > maxFreq) {
            maxFreq = map.get(ch);
        }

        // Replacement required
        let windowSize = right - left + 1;

        if (windowSize - maxFreq > k) {

            let leftChar = s[left];

            map.set(leftChar, map.get(leftChar) - 1);

            left++;
        }

        // Maximum window size
        windowSize = right - left + 1;

        if (windowSize > ans) {
            ans = windowSize;
        }
    }

    return ans;
}
function longestSubstring(s) {
    let map = new Map();

    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {

        let ch = s[right];

        // Agar character pehle se current window me hai
        if (map.has(ch) && map.get(ch) >= left) {
            left = map.get(ch) + 1;
        }

        // Character ka last index store karo
        map.set(ch, right);

        // Window length
        let length = right - left + 1;

        if (length > maxLength) {
            maxLength = length;
        }
    }

    return maxLength;
}

console.log(longestSubstring("abcabcbb"));
// Output: 3v


console.log(characterReplacement("AABABBA", 1));
// Output: 4v

console.log(countDistinct([1,2,1,3,4,2,3],4));
// Output: [3,4,4,3]

console.log(firstNegativeInteger([-8, 2, 3, -6, 10], 2));
// Output: [-8, 0, -6, -6]