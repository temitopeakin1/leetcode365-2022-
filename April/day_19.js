// 99. Recover Binary Search Tree
// Medium
// You are given the root of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.

// Example 1:
// Input: root = [1,3,null,null,2]
// Output: [3,1,null,null,2]
// Explanation: 3 cannot be a left child of 1 because 3 > 1. Swapping 1 and 3 makes the BST valid.
// Example 2:


// Input: root = [3,1,4,null,null,2]
// Output: [2,1,4,null,null,3]
// Explanation: 2 cannot be in the right subtree of 3 because 2 < 3. Swapping 2 and 3 makes the BST valid.
 

// Constraints:

// The number of nodes in the tree is in the range [2, 1000].
// -231 <= Node.val <= 231 - 1
 

// Follow up: A solution using O(n) space is pretty straight-forward. Could you devise a constant O(1) space solution?

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var recoverTree = function(root) {
    let prev = null, 
        big = null,
        small = null;
    let dfs = function(root) {
        if (!root)
            return;
        dfs(root.left);
        if (prev != null && prev.val > root.val) {
            small = root; 
            if (!big) big = prev; 
            else return;
        }
        prev = root;
        dfs(root.right);
    }
    
    dfs(root);
    [big.val, small.val] = [small.val, big.val];
};
