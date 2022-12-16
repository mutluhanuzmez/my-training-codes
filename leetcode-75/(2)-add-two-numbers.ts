//   Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const result = new ListNode();
  let temp = result;
  let remainder = 0;
  let step = 0;
  let stepRes = 0;

  while (l1 !== null || l2 !== null || remainder != 0) {
    if (l1 != null && l2 != null) {
      step = l1!.val + l2!.val + remainder;
    } else if (l1 != null) {
      step = l1!.val + remainder;
    } else if (l2 != null) {
      step = l2!.val + remainder;
    } else {
      step = remainder;
      remainder = 0;
    }

    remainder = step >= 10 ? 1 : 0;
    stepRes = remainder == 1 ? step - 10 : step;

    temp.val = stepRes;
    if (l1 != null) {
      if (l1!.next != null) {
        l1 = l1!.next;
      } else {
        l1 = null;
      }
    }

    if (l2 != null) {
      if (l2!.next != null) {
        l2 = l2!.next;
      } else {
        l2 = null;
      }
    }

    if (l1 !== null || l2 !== null || remainder != 0) {
      temp.next = new ListNode();
      temp = temp.next;
    }
  }

  return result;
}
