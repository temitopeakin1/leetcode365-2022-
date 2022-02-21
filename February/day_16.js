// 24. Swap Nodes in Pairs
// Medium

// 6355

// 281

// Add to List

// Share
// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

 

// Example 1:


// Input: head = [1,2,3,4]
// Output: [2,1,4,3]
// Example 2:

// Input: head = []
// Output: []
// Example 3:

// Input: head = [1]
// Output: [1]
 

// Constraints:

// The number of nodes in the list is in the range [0, 100].
// 0 <= Node.val <= 100

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 const swapPairs = head => {   
    const swap = (node) => {
        if (node.next) {
            const { val } = node;
            node.val = node.next.val;
            node.next.val = val;
        }
    } 
    let node = head;
    while(node) {
        swap(node);
        node = node.next ? node.next.next : undefined;
    }
    
    return head
};