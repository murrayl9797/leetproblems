/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  // Edge cases
  if (!l1) {
      return l2;
  } else if (!l2) {
      return l1;
  }

  // Init pointers
  let result = new ListNode(-1);
  let curr = result;
  let p1 = l1;
  let p2 = l2;



  // Iterate
  while (p1 && p2) {
      if (p1.val < p2.val) {
          curr.next = p1;
          p1 = p1.next;
      } else {
          curr.next = p2;
          p2 = p2.next;
      }
      curr = curr.next;
  }
  // Finish rest of list
  if (!p2) {
      curr.next = p1;
  } else {
      curr.next = p2;
  }

  return result.next;
};