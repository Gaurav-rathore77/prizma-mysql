function reverseList(head) {
    let prev = null;
    let curr = head;

    while (curr !== null) {
        let next = curr.next; // save next node
        curr.next = prev;     // reverse pointer
        prev = curr;          // move prev forward
        curr = next;          // move curr forward
    }

    return prev;
}

function reverseList(head) {
    if (head === null || head.next === null) {
        return head;
    }

    const newHead = reverseList(head.next);

    head.next.next = head;
    head.next = null;

    return newHead;
}

function middleNode(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

function hasCycle(head) {
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

function mergeTwoLists(list1, list2) {
    const dummy = new ListNode(0);
    let curr = dummy;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            curr.next = list1;
            list1 = list1.next;
        } else {
            curr.next = list2;
            list2 = list2.next;
        }

        curr = curr.next;
    }

    // Attach remaining nodes
    curr.next = list1 || list2;

    return dummy.next;
}

function removeNthFromEnd(head, n) {
    const dummy = new ListNode(0);
    dummy.next = head;

    let slow = dummy;
    let fast = dummy;

    // Move fast n steps ahead
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    // Move both until fast reaches the last node
    while (fast.next !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    // Remove slow.next
    slow.next = slow.next.next;

    return dummy.next;
}function removeNthFromEnd(head, n) {
    const dummy = new ListNode(0);
    dummy.next = head;

    let slow = dummy;
    let fast = dummy;

    // Move fast n steps ahead
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    // Move both until fast reaches the last node
    while (fast.next !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    // Remove slow.next
    slow.next = slow.next.next;

    return dummy.next;
}

function isPalindrome(head) {
    if (!head || !head.next) return true;

    // 1. Find the middle
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // 2. Reverse the second half
    let prev = null;

    while (slow) {
        const next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }

    // 3. Compare first half and reversed second half
    let left = head;
    let right = prev;

    while (right) {
        if (left.val !== right.val) {
            return false;
        }

        left = left.next;
        right = right.next;
    }

    return true;
}

function getIntersectionNode(headA, headB) {
    let a = headA;
    let b = headB;

    while (a !== b) {
        a = a === null ? headB : a.next;
        b = b === null ? headA : b.next;
    }

    return a;
}

function addTwoNumbers(l1, l2) {
    const dummy = new ListNode(0);
    let curr = dummy;
    let carry = 0;

    while (l1 || l2 || carry) {
        const x = l1 ? l1.val : 0;
        const y = l2 ? l2.val : 0;

        const sum = x + y + carry;

        carry = Math.floor(sum / 10);

        curr.next = new ListNode(sum % 10);
        curr = curr.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummy.next;
}
function reverseBetween(head, left, right) {
    const dummy = new ListNode(0);
    dummy.next = head;

    // Move prev to the node before `left`
    let prev = dummy;

    for (let i = 1; i < left; i++) {
        prev = prev.next;
    }

    // Reverse the sublist
    let curr = prev.next;

    for (let i = 0; i < right - left; i++) {
        const next = curr.next;

        curr.next = next.next;
        next.next = prev.next;
        prev.next = next;
    }

    return dummy.next;
}

function reorderList(head) {
    if (!head || !head.next) return;

    // 1. Find the middle
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // 2. Reverse the second half
    let prev = null;
    let curr = slow.next;

    slow.next = null; // split the list

    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    // 3. Merge the two halves alternately
    let first = head;
    let second = prev;

    while (second) {
        const firstNext = first.next;
        const secondNext = second.next;

        first.next = second;
        second.next = firstNext;

        first = firstNext;
        second = secondNext;
    }
}