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
var addTwoNumbers = function(l1, l2) {
    var sum = l1.val + l2.val;
    var result = new ListNode(sum > 9 ? sum % 10 : sum);
    var carry = sum > 9 ? 1 : 0;
    var curr1 = l1, curr2 = l2, r = result;

    while (curr1.next || curr2.next || carry) {
        curr1 = curr1.next || new ListNode(0);
        curr2 = curr2.next || new ListNode(0);

        sum = carry + curr1.val + curr2.val;

        r.next = new ListNode(sum > 9 ? sum % 10 : sum);
        carry = sum > 9 ? 1 : 0;

        r = r.next;
    }

    return result;
};