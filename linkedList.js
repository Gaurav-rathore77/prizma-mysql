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