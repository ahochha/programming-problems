class ListNode {
    value: number;
    next: ListNode;

    constructor (x) {
        this.value = x;
    }
}

function addNumbers(first: ListNode, second: ListNode): ListNode{
    let a: ListNode = first;
    let b: ListNode = second;
    let c: number = 0;
    let ret: ListNode = null;
    let current: ListNode = null;

    while(a || b) {
        let val: number = a.value + b.value + c;
        c = Math.floor(val / 10);

        if (current == null) {
            ret = current = new ListNode(val % 10);
        }
        else {
            current.next = new ListNode(val % 10);
            current = current.next;
        }

        if (a.next != null || b.next != null) {
            if (a.next == null) {
                a.next = new ListNode(0);
            }
            if (b.next == null) {
                b.next = new ListNode(0);
            }
        }
        else if (c > 0) {
            current.next = new ListNode(c);
        }

        a = a.next;
        b = b.next;
    }

    return ret;
}