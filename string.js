const kok = [1,2,3,4,5,3,6,7,8,9,10];
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

// function removeDup(arr){
//     const result = []

//     for(const num of arr){
//         if(!result.includes(num)){
//             result.push(num)
//         }
//     }

//     return result
// }

// function removeDuplicates(arr) {
//     if (arr.length === 0) return [];

//     let i = 0;

//     for (let j = 1; j < arr.length; j++) {
//         if (arr[i] !== arr[j]) {
//             i++;
//             arr[i] = arr[j];
//         }
//     }

//     return arr.slice(0, i + 1);
// }
// const kok = [1, 1, 2, 2, 3, 4, 4, 5];

function removeDuplicates(arr) {
    if (arr.length === 0) return [];

    let i = 0;

    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }

    return arr.slice(0, i + 1);
}

console.log(removeDuplicates(kok));

// console.log(removeDuplicates([1, 1, 2, 2, 3, 4, 4, 5]));
// console.log(removeDuplicates(arr))
// console.log(reverseArray(arr))