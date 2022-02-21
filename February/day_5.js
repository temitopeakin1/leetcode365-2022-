// 23. Merge k Sorted Lists
// Hard

// 11209

// 447

// Add to List

// Share
// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

 

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []
// Example 3:

// Input: lists = [[]]
// Output: []
 

// Constraints:

// k == lists.length
// 0 <= k <= 104
// 0 <= lists[i].length <= 500
// -104 <= lists[i][j] <= 104
// lists[i] is sorted in ascending order.
// The sum of lists[i].length will not exceed 104.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 const mergeKLists = (lists) => {    
    let arr = [];  
    function addNode(node){
        if(node != null){
            arr.push(node);
            addNode(node.next);
            node.next = null;//prevent leetcode Javascript heap out of memory
        }
    }
    lists.forEach(addNode);
    
    if(arr.length > 1){
        arr.sort((a,b) => a.val - b.val);        
        arr.reduce((a, b) => a.next = b);
    }   
    
    return arr.length != 0 ? arr[0] : null;
};