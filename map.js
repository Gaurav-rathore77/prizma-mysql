const arr = [1,2,3,4,5]

function twoSum(arr, target) {
    const map = new Map();

    for (let i = 0; i < arr.length; i++) {
        const diff = target - arr[i];

        if (map.has(diff)) {
            return [map.get(diff), i]; // return indices
        }

        map.set(arr[i], i);
    }

    return [];
}

const arr = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(arr, target)); // [0, 1]
// console.log(twoSum(arr))