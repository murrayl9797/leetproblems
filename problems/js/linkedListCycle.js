/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(headNode) {
  if (!headNode || !headNode.next) {
  return false;
}
let turtle = headNode;
let rabbit = headNode.next;
while (turtle && rabbit) {
  if (turtle.val === rabbit.val) {
    return true;
  }
  turtle = turtle.next;
  if (!rabbit.next) {
    return false;
  }
  rabbit = rabbit.next.next;
}
return false;
};