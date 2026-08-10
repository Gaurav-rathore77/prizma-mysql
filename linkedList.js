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