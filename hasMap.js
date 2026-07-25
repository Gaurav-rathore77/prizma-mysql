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
let sum = 0;

// first window
for (let i = 0; i < k; i++) {
    sum += arr[i];
}

let max = sum;

for (let i = k; i < arr.length; i++) {
    sum += arr[i];
    sum -= arr[i - k];

    max = Math.max(max, sum);
}

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

console.log(containsDuplicate([1,2,3,1]));
// console.log(duplicateChar("aabbcddee"));?
// console.log(twoSum([2,7,11,15], 9));