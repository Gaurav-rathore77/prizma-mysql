const arr = [1,2,3,4,5]

function twoSum(arr,target){
    const map = new Map()
    for(let i = 0 ; i <arr.length-1; i++){
        let diff = target-arr[i]
        if(map.has(diff)){
            return [arr[i],i]
        }
    }
    return map.set(arr[i],i)
}
console.log(twoSum(arr))