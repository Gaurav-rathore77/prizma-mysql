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
function containsDuplicate (arr){
    const map = new Map()
    for(let i=0; i<arr.length;i++){
        if(map.has(arr[i])){
            return true
        }
        return map.set(arr[i],i)
    }
    return false
}

function validAnagram (str1,str2){
    if(str1.length ==0 || str2.length ==0 || str1.length !== str2.length){
        return false
    }
    const map = new Map()

    for(let ch of str1){
        map.set(ch,map.get(ch||0)+1)
    }
    for(let ch of str2){
        if(!map.has(ch) || map.get(ch)===0){
            return false
        }
        map.set(ch,map.get(ch-1))
    }
    return true
}
function firstUniqChar (str){
    const map = new Map()
    for(let ch of str){
        map.set(ch,map.get(ch||0)+1)
    }
    for(let ch of str){
        if(map.get(ch)===1){
            return ch
        }
    }
    return false
    
}

function interSectionOfTwoAr(arr1, arr2) {
    const map = new Map();
    const nums = [];

    // Count elements of arr1
    for (let a of arr1) {
        map.set(a, (map.get(a) || 0) + 1);
    }

    // Check elements of arr2
    for (let a of arr2) {
        if (map.has(a) && map.get(a) > 0) {
            nums.push(a);
            map.set(a, map.get(a) - 1);
        }
    }

    return nums;
}

function interSectionOfTwoAr2(arr1, arr2) {
    const set = new Set(arr1)
    const result = new Set()

    // Count elements of arr1
    for (let a of arr2) {
        if(set.has(a)){
            result.add(a)
        }
    }

    // Check elements of arr2
    

    return [...result]
}


// console.log(interSectionOfTwoAr([1, 2, 2, 1], [2, 2]));
// Output: [2, 2]
// const arr = [2, 7, 11, 15];
// const target = 9;

// console.log(twoSum(arr, target)); // [0, 1]
// console.log(twoSum(arr))