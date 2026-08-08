function  duplicateChar(str){
    const map  =  new Map();
    for(let s  of str){
        map.set(s,(map.get(s) || 0) +1)
    }

    for(let s of str){
        if(map.get(s) ===1){
          return s
        }
    }
    return null

}

function longestOnes(nums, k) {

    let left = 0;
    let zeros = 0;
    let maxLength = 0;

    for (let right = 0; right < nums.length; right++) {

        if (nums[right] === 0) {
            zeros++;
        }

        while (zeros > k) {

            if (nums[left] === 0) {
                zeros--;
            }

            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2));

function maxSum(arr, k) {
  let max = -Infinity;

  for (let i = 0; i <= arr.length - k; i++) {
    let sum = 0;

    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }

    max = Math.max(max, sum);
  }

  return max;
}

function maxSumSubarray(arr, k) {

    let windowSum = 0;

    // First window
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }

    let maxSum = windowSum;

    // Slide the window
    for (let i = k; i < arr.length; i++) {

        windowSum += arr[i];       // Add new element
        windowSum -= arr[i - k];   // Remove old element

        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}


function lengthOfLongestSubstring(s) {

    let set = new Set();

    let left = 0;

    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {

        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }

        set.add(s[right]);

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}
function minSubArrayLen(target, nums) {

    let left = 0;
    let sum = 0;
    let minLength = Infinity;

    for (let right = 0; right < nums.length; right++) {

        sum += nums[right];

        while (sum >= target) {

            minLength = Math.min(minLength, right - left + 1);

            sum -= nums[left];
            left++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}

console.log(minSubArrayLen(7, [2,3,1,2,4,3]));
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(maxSumSubarray([2,1,5,1,3,2],3)); // 9



console.log(maxSum([2,1,5,1,3,2],3));

function twoSum(arr, target){
    const map  = new Map();
    for(let i = 0 ; i < arr.length-1 ; i ++){
        let compliment = target-arr[i];
        if(map.has(compliment)){
            return [map.get(compliment),i]
        }
        map.set(arr[i], i);
    }
}

function containsDuplicate(nums){
    let map = new Map();

    for(let num of nums){
        if(map.has(num)){
            return true;
        }
        map.set(num, true);
    }

    return false;
}

function atMost(nums, goal) {

    if (goal < 0) return 0;

    let left = 0;
    let sum = 0;
    let count = 0;

    for (let right = 0; right < nums.length; right++) {

        sum += nums[right];

        while (sum > goal) {
            sum -= nums[left];
            left++;
        }

        count += right - left + 1;
    }

    return count;
}

function numSubarraysWithSum(nums, goal) {

    return atMost(nums, goal) - atMost(nums, goal - 1);
}

function countDistinct(arr, k) {

    let map = new Map();
    let result = [];

    // First window
    for (let i = 0; i < k; i++) {
        map.set(arr[i], (map.get(arr[i]) || 0) + 1);
    }

    result.push(map.size);

    // Slide the window
    for (let i = k; i < arr.length; i++) {

        // Remove outgoing element
        map.set(arr[i - k], map.get(arr[i - k]) - 1);

        if (map.get(arr[i - k]) === 0) {
            map.delete(arr[i - k]);
        }

        // Add incoming element
        map.set(arr[i], (map.get(arr[i]) || 0) + 1);

        result.push(map.size);
    }

    return result;
}
function firstNegative(arr, k) {

    const queue = []; // stores indices of negative numbers
    const result = [];

    // Process first window
    for (let i = 0; i < k; i++) {
        if (arr[i] < 0) {
            queue.push(i);
        }
    }

    result.push(queue.length ? arr[queue[0]] : 0);

    // Slide the window
    for (let i = k; i < arr.length; i++) {

        // Remove expired index
        while (queue.length && queue[0] <= i - k) {
            queue.shift();
        }

        // Add current negative index
        if (arr[i] < 0) {
            queue.push(i);
        }

        result.push(queue.length ? arr[queue[0]] : 0);
    }

    return result;
}

console.log(firstNegative(
    [12,-1,-7,8,-15,30,16,28],
    3
));
function lengthOfLongestSubstring(s) {

    let left = 0;
    let maxLength = 0;

    const set = new Set();

    for (let right = 0; right < s.length; right++) {

        while (set.has(s[right])) {

            set.delete(s[left]);
            left++;
        }

        set.add(s[right]);

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(countDistinct([1,2,1,3,4,2,3],4));
console.log(numSubarraysWithSum([1,0,1,0,1], 2));

console.log(containsDuplicate([1,2,3,1]));
// console.log(duplicateChar("aabbcddee"));?
// console.log(twoSum([2,7,11,15], 9));