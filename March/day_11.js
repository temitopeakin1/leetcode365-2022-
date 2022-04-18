// 61. Rotate List (Medium)


// Given the head of a linked list, rotate the list to the right by k places.

 

// Example 1:


// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]
// Example 2:


// Input: head = [0,1,2], k = 4
// Output: [2,0,1]
 

// Constraints:

// The number of nodes in the list is in the range [0, 500].
// -100 <= Node.val <= 100
// 0 <= k <= 2 * 109

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

 const rotateRight = (head, k) => {
    
    if (k === 0 || !head) return head;
    const arr = [];
    let pointer = head;
    while(pointer) {
        arr.push(pointer);
        pointer = pointer.next;
    }
    
    k %= arr.length;
    if (k === 0) return head;
    
    return prependTail(arr)[0];
    
    function prependTail(arr) {
        const tail = arr.splice(-k);
        arr[arr.length-1].next = null;
        tail[tail.length-1].next = head;  
        return tail;
    }
};