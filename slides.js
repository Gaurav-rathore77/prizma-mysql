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
function minSubArrayLen(target, arr) {

    let left = 0;
    let sum = 0;
    let minLength = Infinity;

    for (let right = 0; right < arr.length; right++) {

        // Add current element
        sum += arr[right];

        // Shrink window
        while (sum >= target) {

            let length = right - left + 1;

            if (length < minLength) {
                minLength = length;
            }

            // Remove left element
            sum -= arr[left];
            left++;
        }
    }

    if (minLength === Infinity) {
        return 0;
    }

    return minLength;
}

function checkInclusion(s1, s2) {
    if (s1.length > s2.length) return false;

    const count1 = new Array(26).fill(0);
    const count2 = new Array(26).fill(0);

    const a = 'a'.charCodeAt(0);

    // Build frequency arrays
    for (let i = 0; i < s1.length; i++) {
        count1[s1.charCodeAt(i) - a]++;
        count2[s2.charCodeAt(i) - a]++;
    }

    // Compare first window
    if (isEqual(count1, count2)) return true;

    // Slide the window
    for (let i = s1.length; i < s2.length; i++) {

        // Add new character
        count2[s2.charCodeAt(i) - a]++;

        // Remove left character
        count2[s2.charCodeAt(i - s1.length) - a]--;

        if (isEqual(count1, count2))
            return true;
    }

    return false;
}

function isEqual(arr1, arr2) {
    for (let i = 0; i < 26; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

function findAnagrams(s, p) {
    if (p.length > s.length) return [];

    let result = [];
    let countP = new Array(26).fill(0);
    let countS = new Array(26).fill(0);
    let a = "a".charCodeAt(0);

    // Frequency arrays
    for (let i = 0; i < p.length; i++) {
        countP[p.charCodeAt(i) - a]++;
        countS[s.charCodeAt(i) - a]++;
    }

    // First window
    if (countP.toString() === countS.toString()) {
        result.push(0);
    }

    // Sliding Window
    for (let i = p.length; i < s.length; i++) {

        // New character add
        countS[s.charCodeAt(i) - a]++;

        // Old character remove
        countS[s.charCodeAt(i - p.length) - a]--;

        // Compare
        if (countP.toString() === countS.toString()) {
            result.push(i - p.length + 1);
        }
    }

    return result;
}



console.log(minSubArrayLen(7, [2,3,1,2,4,3]));
// Output: 2
console.log(longestSubstring("abcabcbb"));
// Output: 3v


console.log(characterReplacement("AABABBA", 1));
// Output: 4v

console.log(countDistinct([1,2,1,3,4,2,3],4));
// Output: [3,4,4,3]

console.log(firstNegativeInteger([-8, 2, 3, -6, 10], 2));
// Output: [-8, 0, -6, -6]