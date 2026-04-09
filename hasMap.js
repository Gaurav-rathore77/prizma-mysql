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