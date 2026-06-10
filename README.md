git # Daily Problem - JavaScript Solutions

A collection of JavaScript solutions for common coding interview problems and algorithm challenges.

## Project Structure

```
dailyProblem/
├── array.js      # Array-based problem solutions
├── hasMap.js     # HashMap/Map-based problem solutions
└── README.md     # This file
```

## Files Overview

### array.js

Contains solutions to array manipulation problems:

| Function | Description | Time Complexity |
|----------|-------------|-----------------|
| `twoSum(nums, target)` | Finds two indices that add up to the target value | O(n²) |
| `maxSum(nums)` | Finds the maximum sum of a contiguous subarray (Kadane's Algorithm) | O(n) |
| `moveZeroes(nums)` | Moves all zeros to the end of the array while maintaining relative order | O(n) |
| `findDuplicate(nums)` | Finds the duplicate number in an array using cyclic sort approach | O(n) |
| `merzeArray(nums1, nums2)` | Merges two sorted arrays into one sorted array | O(n+m) |

### hasMap.js

Contains solutions using HashMap/Map data structure:

| Function | Description | Time Complexity |
|----------|-------------|-----------------|
| `duplicateChar(str)` | Finds the first non-repeating character in a string | O(n) |
| `twoSum(arr, target)` | Optimized two sum using HashMap | O(n) |
| `containsDuplicate(nums)` | Checks if an array contains any duplicate values | O(n) |

## Usage

Run the files using Node.js:

```bash
# Run array problems
node array.js

# Run HashMap problems
node hasMap.js
```

## Running Tests

Each file contains example test cases at the bottom. Uncomment the `console.log` statements to run specific test cases.

### Example

```javascript
// In array.js
console.log(moveZeroes([0,1,0,3,12]));  // Output: [1, 3, 12, 0, 0]
console.log(findDuplicate([1,3,4,2,2])); // Output: 2

// In hasMap.js
console.log(containsDuplicate([1,2,3,1])); // Output: true
```

## Requirements

- Node.js (any recent version)

## License

MIT