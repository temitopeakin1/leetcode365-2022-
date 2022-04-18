// Problem: 148: Sort List(Easy)
// Given the head of a linked list, return the list after sorting it in ascending order.

// Example 1:
// Input: head = [4,2,1,3]
// Output: [1,2,3,4]

// Example 2:
// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]
// Example 3:

// Input: head = []
// Output: []
 

// Constraints:

// The number of nodes in the list is in the range [0, 5 * 104].
// -105 <= Node.val <= 105
 

// Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
 var sortList = function(head) {
    if(!head || !head.next) return head
    
    let slow = head;
    let fast = head;
    let splitList = {};
    while(fast && fast.next){
      splitList = slow;
      slow = slow.next;
      fast = fast.next.next
    }
    
    splitList.next = null
    return merge(sortList(head), sortList(slow))
  };
  
  function merge(a, b){
    let curr = {}
    const head = curr
    while(a && b){
      if(a.val < b.val){
         curr.next = a
         a = a.next
      }else{
        curr.next = b
        b = b.next
      }
      curr = curr.next
    }
    
    while(a){
      curr.next = a
      a = a.next
      curr = curr.next
    }
    
    while(b){
      curr.next = b
      b = b.next
      curr = curr.next
    }
    
    return head.next
  }