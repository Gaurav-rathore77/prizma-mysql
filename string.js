const arr = [1,2,3,4,5,6,7,8,9,10];
function reverseArray(arr){
    let start = 0
    let end = arr.length - 1
    while(start < end){
        swip(arr , start , end)
        start++
        end--
    }
    return arr
}

function swip(arr , start ,end){
    const dump = arr[start]
    arr[start] = arr[end]
    arr[end] = dump

}

console.log(reverseArray(arr))