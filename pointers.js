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

console.log(zeroL([1,1,0,1,0,1,1]))