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

     const result = []

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

function twoSum(arr,target){
    
    const map = new Map();
    for(let i = 0 ; i<arr.length;i++){
        const diff = target-arr[i];
        
        
        if(map.has(diff)){
            return [map.get(diff),i]
        }
        
        map.set(arr[i],i)
    }
     return [];
   
    
}
function mergeSort (arr){
    if(arr.length<=1) return arr;
     const mid = Math.floor(arr.length / 2);
const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
       
    return merge(left,right)
}
function merge(left,right){
    result = []
    let i = 0
    let j = 0
     while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    
    return result
        .concat(left.slice(i))
        .concat(right.slice(j));
}

function twoSum(arr, target) {
    let freq = {};

    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];

        if (freq[complement] !== undefined) {
            return [freq[complement], i];
        }

        freq[arr[i]] = i;
    }

    return [];
}

function bestTimeForStock(arr){
    let minPrise = arr[0]
    let  maxProfit = 0
    for(let i = 0; i<arr.length ; i++){
      let profit = arr[i]-minPrise
      maxProfit = Math.max(maxProfit,profit)
      minPrise = Math.min(minPrise, arr[i]);
    }
    return maxProfit
}
function firstVowel(str){
    const vowel = new Set(['a','i','o','u','e'])
    // count = 0
    // let result = ""

    for(let i = 0 ; i<str.length;i++){
        if(vowel.has(str[i].toLowerCase())){
            return i
        }
    }
    // for(const ch of str){
    //     if(!vowel.has(ch)){
    //      result+=ch
       
    //     }
    // }
    return -1
}

function longestSubWithoutVowel(str) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    let longest = "";
    let current = "";

    for (const ch of str.toLowerCase()) {
        if (vowels.has(ch)) {
            if (current.length > longest.length) {
                longest = current;
            }
            current = "";
        } else {
            current += ch;
        }
    }

    // Check the last substring
    if (current.length > longest.length) {
        longest = current;
    }

    return longest;
}
function reverseString(str) {
    let string = "";

    for (let i = str.length - 1; i >= 0; i--) {
        string += str[i];
    }

    return string;
}

function palindrome(str) {
    let first = 0;
    let second = str.length - 1;

    while (first < second) {
        if (str[first] !== str[second]) {
            return "No";
        }
        first++;
        second--;
    }

    return "Yes";
}

// linkedList
function reverseList(head){
    const prev = null
    const current = head
    while(current!==null){
        const next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
}

// linkedList
class Node{
     constructor(val){
        this.val = val
        this.next = null
    }
}
function inserFirst(head,val){
   
    
    const node = new Node(val)
    node.next = head
    return node
    
}
function insertLast(head,val){
     const node = new Node(val)
     const current = head 
     if(head==nul){
         return node
     }
     while(current!==null){
         current = current.next
     }
     current.next = node
     
     return head
  
    
}
function findMiddle(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}
function findCycle(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
}
function removeDuplicateFromSortLink(head) {
    let current = head;

    while (current && current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return head;
}

console.log(productExceptSelf([2,4,5,6,7]))
// console.log(palindrome("madam")); // Yes
// console.log(palindrome("hello")); // No
// console.log(palindrome("racecar")); // Yes


// console.log(reverseString("hello")); // "olleh"
// console.log(pallindrome("jiluytulij"))
// console.log(reverseString("ajshdfjiashgfj"))
// console.log(longestSubWithoutVowel("hjihikhdia"));
// console.log(bestTimeForStock([7, 1, 5, 3, 6, 4])); // 5
// console.log(twoSum([2, 7, 11, 15], 9))
// console.log(mergeSort([5, 2, 4, 1]));
// console.log(removeDuplicates(kok));
// console.log(reverseArray(arr))
// console.log(removeDuplicates([1, 1, 2, 2, 3, 4, 4, 5]));
// console.log(removeDuplicates(arr))
