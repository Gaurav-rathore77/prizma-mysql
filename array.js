function twoSum(nums , target){
    for(let i = 0 ; i <nums.length ; i ++){
        for(let j = i + 1 ; i <nums.length ; j ++){
            if(nums[i] + nums[j] === target){
                return [i , j]
            }
        }
    }

}

function maxSubAr(arr) {
    let currentS = arr[0];
    let maxS = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currentS = Math.max(arr[i], currentS + arr[i]);
        maxS = Math.max(maxS, currentS);
    }

    return maxS;
}

function maxSubAr2(arr) {
    let currentS = 0;
    let maxS = arr[0];

    for (let num of arr) {
        currentS+=num
        maxS = Math.max(maxS, currentS);
    }
    if(currentS<0){
        currentS = 0
    }

    return maxS;
}
function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {
        minPrice = Math.min(minPrice, price);

        let profit = price - minPrice;

        maxProfit = Math.max(maxProfit, profit);
    }

    return maxProfit;
}
function productExceptSelf(nums) {
    let n = nums.length;
    let result = new Array(n).fill(1);

    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        result[i] = leftProduct;
        leftProduct *= nums[i];
    }

   
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return result;
}
function maxSum(nums){
    let current  = nums[0]
    let max = nums[0]
    for(let i = 0 ; i <nums.length ; i ++){
        current = Math.max(nums[i],current + nums[i])
        max = Math.max(max,current)
    }
    return max;

}

function moveZeroes(nums){
    let j = 0 ; 
    for(let i = 0 ; i < nums.length ; i ++){
        if(nums[i] !== 0){
            [nums[i],nums[j]] = [nums[j],nums[i]]
            j ++
        }
    }
    return nums;

}

function findDuplicate(nums) {
    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;

        if (nums[index] < 0) {
            return Math.abs(nums[i]);
        }

        nums[index] = -nums[index];
    }
}

function merzeArray(nums1 , nums2){
   result = []
   let i = 0 ,j = 0;
   while(i <nums1.length &&j < nums2.length ){

    if(nums1[i]<nums2[j]){
        result.push(nums1[i])
        i++;
    }
    result.push(nums2[j])
    j++;
   }
   while(i < nums1.length){
    result.push(nums1[i])
    i++
   }

    while(j < nums2.length){
    result.push(nums2[j])
      j++
   }
   return result
}
    
function merge(intervals) {

    intervals.sort((a,b)=>a[0]-b[0]);

    let result=[];

    result.push(intervals[0]);

    for(let i=1;i<intervals.length;i++){

        let last=result[result.length-1];

        if(intervals[i][0]<=last[1]){

            last[1]=Math.max(last[1],intervals[i][1]);

        }else{

            result.push(intervals[i]);

        }

    }

    return result;

}

function trap(height) {
    let left = 0;
    let right = height.length - 1;

    let leftMax = 0;
    let rightMax = 0;

    let water = 0;

    while (left < right) {

        if (height[left] < height[right]) {

            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }

            left++;

        } else {

            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }

            right--;
        }
    }

    return water;
}

function setZeroes(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;

    let col0 = 1;

    // Mark rows and cols
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) col0 = 0;

        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // Fill from bottom-right
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 1; j--) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }

        if (col0 === 0) {
            matrix[i][0] = 0;
        }
    }
}

function spiralOrder(matrix) {
    let result = [];

    let top = 0;
    let bottom = matrix.length - 1;

    let left = 0;
    let right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {

        // Left -> Right
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        // Top -> Bottom
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;

        // Right -> Left
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }

        // Bottom -> Top
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }

    return result;
}

function nextPermutation(nums) {
    let i = nums.length - 2;

    // Step 1: Find pivot
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    // Step 2: Find next greater element and swap
    if (i >= 0) {
        let j = nums.length - 1;

        while (nums[j] <= nums[i]) {
            j--;
        }

        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // Step 3: Reverse the suffix
    reverse(nums, i + 1, nums.length - 1);
}

function reverse(nums, left, right) {
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
}

// Example
let nums = [1, 2, 3];
nextPermutation(nums);
console.log(nums); // [1, 3, 2]
function maxSlidingWindow(nums, k) {

    let deque = [];
    let result = [];

    for (let i = 0; i < nums.length; i++) {

        // Remove indices outside current window
        if (deque.length && deque[0] <= i - k) {
            deque.shift();
        }

        // Remove smaller elements from the back
        while (
            deque.length &&
            nums[deque[deque.length - 1]] < nums[i]
        ) {
            deque.pop();
        }

        // Add current index
        deque.push(i);

        // Window complete
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
}

function maxSlidingWindow(nums, k) {
    let deque = new Array(nums.length);
    let front = 0;
    let rear = -1;

    let result = [];

    for (let right = 0; right < nums.length; right++) {

        // Window se bahar wale indices remove karo
        while (front <= rear && deque[front] < right - k + 1) {
            front++;
        }

        // Current element se chhote elements remove karo
        while (front <= rear && nums[deque[rear]] <= nums[right]) {
            rear--;
        }
        
        // Current index add karo
        deque[++rear] = right;

        // Window complete hone par answer store karo
        if (right >= k - 1) {
            result.push(nums[deque[front]]);
        }
    }

    return result;
}

// recursion ///////////////

function printArray(arr, index) {

    if (index === arr.length) {
        return;
    }

    console.log(arr[index]);

    printArray(arr, index + 1);
}


function sum(arr, index) {

    if (index === arr.length) {
        return 0;
    }

    return arr[index] + sum(arr, index + 1);
}


function maxElement(arr, index) {

    if (index === arr.length - 1) {
        return arr[index];
    }

    return Math.max(
        arr[index],
        maxElement(arr, index + 1)
    );
}

function minElement(arr, index) {

    if (index === arr.length - 1) {
        return arr[index];
    }

    return Math.min(
        arr[index],
        minElement(arr, index + 1)
    );
}
function isSorted(arr, index = 0) {

    if (index >= arr.length - 1) {
        return true;
    }

    if (arr[index] > arr[index + 1]) {
        return false;
    }

    return isSorted(arr, index + 1);
}

function search(arr, index, target) {

    if (index === arr.length) {
        return -1;
    }

    if (arr[index] === target) {
        return index;
    }

    return search(arr, index + 1, target);
}
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));
// [3,3,5,5,6,7]

// console.log(twoSum([2,7,11,15],9))
// console.log(maxSum([1,2,3,-1,5]))
console.log(moveZeroes([0,1,0,3,12]))
console.log(findDuplicate([1,3,4,2,2]))