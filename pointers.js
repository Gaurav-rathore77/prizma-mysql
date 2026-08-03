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
function sortColors(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } 
        else if (nums[mid] === 1) {
            mid++;
        } 
        else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }

    return nums;
}

console.log(sortColors([2,0,2,1,1,0])); // [0,0,1,1,2,2]
// function trap(height) {
//     let left = 0;
//     let right = height.length - 1;

//     let leftMax = 0;
//     let rightMax = 0;
//     let water = 0;

//     while (left < right) {
//         if (height[left] < height[right]) {
//             if (height[left] >= leftMax) {
//                 leftMax = height[left];
//             } else {
//                 water += leftMax - height[left];
//             }
//             left++;
//         } else {
//             if (height[right] >= rightMax) {
//                 rightMax = height[right];
//             } else {
//                 water += rightMax - height[right];
//             }
//             right--;
//         }
//     }

//     return water;
// }

function zeroL(arr){
    let j = 0;
    for (let i = 0 ; i<arr.length; i++){
        if(arr[i] !==0 ){
            swap(arr,i,j)
            j++
        }
        
    }
    return arr
}
function swap(arr,start,second){
    let temp = arr[start]
    arr[start] = arr[second]
    arr[second] = temp
    
}

function closestPair(arr1, arr2, target) {
    let i = 0;
    let j = arr2.length - 1;

    let minDiff = Infinity;
    let ans = [];

    while (i < arr1.length && j >= 0) {
        let sum = arr1[i] + arr2[j];
        let diff = Math.abs(target - sum);

        if (diff < minDiff) {
            minDiff = diff;
            ans = [arr1[i], arr2[j]];
        }

        if (sum > target) {
            j--;
        } else {
            i++;
        }
    }

    return ans;
}

function fourSum(nums, target) {
    nums.sort((a, b) => a - b);

    let result = [];
    let n = nums.length;

    for (let i = 0; i < n - 3; i++) {

        // Skip duplicate first element
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        for (let j = i + 1; j < n - 2; j++) {

            // Skip duplicate second element
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;

            let left = j + 1;
            let right = n - 1;

            while (left < right) {

                let sum =
                    nums[i] +
                    nums[j] +
                    nums[left] +
                    nums[right];

                if (sum === target) {

                    result.push([
                        nums[i],
                        nums[j],
                        nums[left],
                        nums[right]
                    ]);

                    left++;
                    right--;

                    while (
                        left < right &&
                        nums[left] === nums[left - 1]
                    ) {
                        left++;
                    }

                    while (
                        left < right &&
                        nums[right] === nums[right + 1]
                    ) {
                        right--;
                    }

                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return result;
}

console.log(fourSum([1,0,-1,0,-2,2],0));

console.log(
    closestPair([1,4,5,7], [10,20,30,40], 32)
);

console.log(zeroL([1,1,0,1,0,1,1]))