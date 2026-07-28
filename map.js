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

function countPairs(s) {
    const stack = [];
    let count = 0;

    for (const ch of s) {
        if (ch === "(") {
            stack.push(ch);
        } else if (ch === ")") {
            if (stack.length > 0) {
                stack.pop();
                count++;
            }
        }
    }

    return count;
}
function isValid(s) {
    const stack = [];

    const map = {
        ")": "(",
        "]": "[",
        "}": "{"
    };

    for (let ch of s) {
        // Opening bracket
        if (ch === "(" || ch === "[" || ch === "{") {
            stack.push(ch);
        } else {
            // Stack empty ya top match nahi hua
            if (stack.length === 0 || stack.pop() !== map[ch]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
// console.log(countPairs(")(()")); // 1
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
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function reverseKGroup(head, k) {

    let count = 0;
    let curr = head;

    // Check if k nodes exist
    while (curr && count < k) {
        curr = curr.next;
        count++;
    }

    if (count < k) return head;

    // Reverse first k nodes
    curr = head;
    let prev = null;
    let next = null;
    count = 0;

    while (curr && count < k) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        count++;
    }

    // Connect remaining list
    head.next = reverseKGroup(curr, k);

    return prev;
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


class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function mergeTwoLists(list1, list2) {

    let dummy = new ListNode(-1);
    let tail = dummy;

    while (list1 && list2) {

        if (list1.val <= list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }

        tail = tail.next;
    }

    // Attach remaining nodes
    if (list1) {
        tail.next = list1;
    } else {
        tail.next = list2;
    }

    return dummy.next;
}

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function mergeTwoLists(list1, list2) {

    let dummy = new ListNode(-1);
    let tail = dummy;

    while (list1 && list2) {

        if (list1.val <= list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }

        tail = tail.next;
    }

    // Attach remaining nodes
    if (list1) {
        tail.next = list1;
    } else {
        tail.next = list2;
    }

    return dummy.next;
}

function firstNegativeInteger(arr, k) {
    let queue = [];
    let front = 0;
    let ans = [];

    for (let i = 0; i < arr.length; i++) {
        // Store index of negative element
        if (arr[i] < 0) {
            queue.push(i);
        }

        // Remove expired indices by moving front pointer
        while (front < queue.length && queue[front] <= i - k) {
            front++;
        }

        // Window formed
        if (i >= k - 1) {
            if (front < queue.length) {
                ans.push(arr[queue[front]]);
            } else {
                ans.push(0);
            }
        }
    }

    return ans;
}

function countDistinct(arr, k) {
    let map = new Map();
    let ans = [];

    // First window
    for (let i = 0; i < k; i++) {
        map.set(arr[i], (map.get(arr[i]) || 0) + 1);
    }

    ans.push(map.size);

    // Remaining windows
    for (let i = k; i < arr.length; i++) {

        // Remove outgoing element
        let out = arr[i - k];
        map.set(out, map.get(out) - 1);

        if (map.get(out) === 0) {
            map.delete(out);
        }

        // Add incoming element
        let inEle = arr[i];
        map.set(inEle, (map.get(inEle) || 0) + 1);

        ans.push(map.size);
    }

    return ans;
}

console.log(countDistinct([1,2,1,3,4,2,3],4));
// Output: [3,4,4,3]

console.log(firstNegativeInteger([-8, 2, 3, -6, 10], 2));
// Output: [-8, 0, -6, -6]
// console.log(interSectionOfTwoAr([1, 2, 2, 1], [2, 2]));
// Output: [2, 2]
// const arr = [2, 7, 11, 15];
// const target = 9;

// console.log(twoSum(arr, target)); // [0, 1]
// console.log(twoSum(arr))