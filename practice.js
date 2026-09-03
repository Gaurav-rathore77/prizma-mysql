
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
function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate first elements
        if (i > 0 && nums[i] === nums[i - 1]) continue;
 
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                // Skip duplicates
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}
